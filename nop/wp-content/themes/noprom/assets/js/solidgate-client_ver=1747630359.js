const DONATE_EMAIL = "donateEmail";
const DONATE_AMOUNT = "donateAmount";
const DONATE_CURRENCY = "donate-currency";
const DONATE_AGREE_GDPR = "donate-agreep-gdpr";
const DONATE_INVALID_AMOUNT = -1;
const DONATE_CURRENCY_UAH = 'UAH';

class SolidgateClient {

  constructor(parentSelector) {
    this.parentSelector = parentSelector;
    this.donateOneTime = false;
    this.formIsDestroyed = true;

    this.activateDonateFormListeners = [];

    let titleText = document.getElementById('solidgate-labels-titleText')?.textContent;
    if (!titleText) {
      titleText = 'або оплатіть карткою';
    }
    this.titleText = titleText;

    let submitButtonText = document.getElementById('solidgate-labels-submitButtonText')?.textContent;
    if (!submitButtonText) {
      submitButtonText = 'Підтримати';
    }
    this.submitButtonText = submitButtonText;

    let inputFieldStyles = {
      input: {
        padding: '10px',
        background: '#fff',
        border: '1px solid #babfc8',
        'border-radius': '4px',
        'font-family': 'Helvetica Neue,sans-serif'
      }
    };
    this.formConfig = {
      iframeParams: {
        containerId: 'payment-form',
        width: '100%'
      },
      formParams: {
        titleText: this.titleText,
        submitButtonText: this.submitButtonText,
        autoFocus: false
      },
      styles: {
        submit_button: { 'background-color': '#5b7742' },
        header: {
          display: 'flex',
          color: '#f3f3f3',
          'border-top': '1px solid #babfc8',
          'font-size': 0,
          margin: '0 auto',
          position: 'absolute',
          top: '15px',
          left: 0,
          right: 0,
          bottom: 0,
          width: '95%',
          'z-index': '-1'
        },
        form_title: {
          display: 'flex',
          'justify-content': 'center',
          margin: '0 37%',
          'background-color': '#f3f3f3',
          color: '#666c7b'
        },
        card_number: inputFieldStyles,
        expiry_date: inputFieldStyles,
        card_cvv: inputFieldStyles
      }
    }
  }

  getFormConfig() {
    return this.formConfig;
  }

  extendFormConfig(configObject) {
    this.formConfig = {
      ...this.formConfig,
      ...configObject
    }
    return this;
  }

  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-TZ': jstz.determine().name()
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }

  setDonateOneTime(value) {
    this.donateOneTime = value;
  }

  isDonateSubscription() {
    return !this.donateOneTime;
  }

  isDonateOneTime() {
    return this.donateOneTime;
  }

  regenerateForm() {
    this.activateDonateForm();
  }

  destroyForm() {
    if (this.form) {
      this.form.destroy();
      this.formIsDestroyed = true;
    }
  }

  getProductId() {
    let productId = 0;

    if (this.isDonateSubscription()) {
      productId = document.querySelector(this.parentSelector + ' input[name="bundleSelect"]:checked').value
    }

    return productId;
  }

  getRawAmount() {
    return document.querySelector(`${this.parentSelector} #${DONATE_AMOUNT}`).value;
  }

  getAgreeGdpr() {
    return document.querySelector(`${this.parentSelector} #${DONATE_AGREE_GDPR}`)?.checked;
  }

  getAmountInCents() {
    let amount = this.getRawAmount();

    let invalidAmount = DONATE_INVALID_AMOUNT;
    let centsDelimiter = false;

    if (amount.indexOf('.') !== -1) {
      centsDelimiter = '.';
    }
    if (amount.indexOf(',') !== -1) {
      centsDelimiter = ',';
    }

    if (amount.slice(-1) === centsDelimiter) {
      return invalidAmount;
    }

    if (centsDelimiter) {
      //ціну вказано з копійками
      if (amount.split(centsDelimiter)[1].length < 2) {
        amount += "0";
      }
      amount = amount.replace(/[,]/g, '').replace(/[.]/g, '');
    } else {
      amount = 100 * amount;
    }

    return amount;
  }

  getCustomerEmail() {
    return document.querySelector(`${this.parentSelector} #${DONATE_EMAIL}`).value;
  }

  getProjectId() {
    return document.querySelector('#solidgate-data-projects_id')?.textContent;
  }

  getProjectName() {
    return document.querySelector('#donate-modal-label')?.textContent || document.querySelector('h1')?.textContent;
  }

  getCurrency() {
    return document.querySelector(`${this.parentSelector} [name="${DONATE_CURRENCY}"]:checked`).value;
  }

  getGlobalPartnerParam(key) {
    if (typeof GLOBAL_partnerParams === 'undefined') {
      return '';
    }
    return JSON.parse(GLOBAL_partnerParams)?.[key] ?? '';
  }

  /**
   * @returns {number}
   * 0 - army
   * 1 - fund
   */
  getWhoToSupport() {
    if (document.getElementById('help-fund')?.checked || location.hash.includes('donate-fund')) {
      return 1;
    }

    return 0;
  }

  validateEmail(email) {
    const maxAllowedEmailLengthOnSolidgateSide = 100

    if (!email.length) {
      return false;
    }

    if (email.length > maxAllowedEmailLengthOnSolidgateSide) {
      return false;
    }
    if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z0-9-]{2,63}(?:\.[a-z]{63})?)$/i.test(email.toLowerCase())) {
      return false
    }

    //after all rely on HTML5 validation
    return document.querySelector(`${this.parentSelector} #${DONATE_EMAIL}`).checkValidity();
  }

  validateAmount(amountInCents, maxDonationAmountInCents = 999999999) {
    if (this.isDonateSubscription()) {
      return true;
    }

    if (amountInCents > maxDonationAmountInCents || amountInCents < 1) {
      return false;
    }

    return amountInCents >= 1 && Math.round(amountInCents) === parseFloat(amountInCents)
  }

  validateForm({ customer_email = "", amount = 0 }) {
    const invalidEmail = !this.validateEmail(customer_email);
    const invalidAmount = !this.validateAmount(amount);

    this.setFieldErrorVisible(invalidEmail, DONATE_EMAIL);
    this.setFieldErrorVisible(invalidAmount, DONATE_AMOUNT);

    return !(invalidEmail || invalidAmount);
  }

  setFieldErrorVisible(isVisible, fieldSelector) {
    let fieldElement = document.querySelector(`${this.parentSelector} .${fieldSelector}-error`);
    if (fieldElement) {
      fieldElement.style.display = isVisible ? 'block' : 'none';
    }
  }

  resetForm() {
    const form = document.querySelector(`${this.parentSelector} form`);

    form.reset();

    form.querySelectorAll('input').forEach(function (input) {
      input.value = null;
    });

    form.querySelectorAll('.error').forEach(function (element) {
      element.style.display = 'none';
    });
    // hide custom amount fields for the modal because predefined value is set by default
    if (this.parentSelector === '#donate-modal') {
      form.querySelector('.project-donate-field[data-field=donateAmount]').classList.add('hidden');
    }
  }

  async activateDonateForm() {
    this.destroyForm();

    let amount = this.getAmountInCents(),
      customer_email = this.getCustomerEmail(),
      currency = this.getCurrency(),
      language = document.querySelector('html').lang,
      product_id = this.getProductId(),
      project_id = this.getProjectId(),
      project_name = this.getProjectName(),
      traffic_source = this.getGlobalPartnerParam('traffic_source'),
      partner_customer_id = this.getGlobalPartnerParam('partner_customer_id'),
      url = '/wp-json/solidgate/action/get_form_params_onetime';

    if (!this.validateForm({
      customer_email,
      amount
    })) {
      return;
    }

    if (this.isDonateSubscription()) {
      currency = this.getCurrency();
      url = '/wp-json/solidgate/action/get_form_params_subscription';
      if (product_id == 0) {
        return;
      }
    }

    let data = {
      amount,
      customer_email,
      product_id,
      currency,
      language,
      project_id,
      project_name,
      traffic_source,
      partner_customer_id,
      whoToSupport: this.getWhoToSupport()
    };

    await this.postData(url, data)
      .then(response => {
        let formConfig = this.getFormConfig();
        formConfig.merchantData = JSON.parse(response.merchantData);

        if (formConfig.styles && formConfig.styles.form_title) {
          formConfig.styles.form_title['white-space'] = 'nowrap';
          if (document.body.clientWidth < 420) {
            formConfig.styles.form_title.margin = '0 22%';
          }
          if (document.body.clientWidth < 376) {
            formConfig.styles.form_title.margin = '0 18%';
          }
          if (document.body.clientWidth < 330) {
            formConfig.styles.form_title.margin = '0 14%';
          }
        }

        if (!response.googlePayIsVisible && !response.applePayIsVisible) {
          delete formConfig.styles.header;
          delete formConfig.styles.form_title;
        }

        delete formConfig.applePayButtonParams;
        if (response.applePayIsVisible === false) {
          if (!formConfig.applePayButtonParams) {
            formConfig.applePayButtonParams = {};
          }
          formConfig.applePayButtonParams.enabled = false;
        }

        this.form = PaymentFormSdk.init(formConfig);
      });

    this.formIsDestroyed = false;

    return true;
  }

  activateDonateFormAddListener(listener) {
    if (typeof listener === 'function') {
      this.activateDonateFormListeners.push(listener);
    }
  }
}

// this is for donation page
let parentSelector = '#tabsDonate';
if (document.querySelector(parentSelector)?.offsetParent === null) {
  parentSelector = '#accordionDonate';

  let solidPaymentFormContainer = document.querySelector('#solid-payment-form-container-wrapper');
  solidPaymentFormContainer.remove();
  document.querySelector(parentSelector + ' #bag-for-solid-payment-form-container').appendChild(solidPaymentFormContainer);
}

if (!document.querySelector(parentSelector)) {
  // try to find donate modal
  parentSelector = '#donate-modal';

  if (!document.querySelector(parentSelector)) {
    parentSelector = '';
  }
}

let solidgateClient = new SolidgateClient(parentSelector);

if (window.solidgateClientCustomFormConfig) {
  solidgateClient.extendFormConfig(window.solidgateClientCustomFormConfig);
}

window.setTimeout(() => {
  document.querySelectorAll('.regenerate-form')
    .forEach((element, index) => {
      element.onclick = () => {
        destroyDonateForm();
      }
    });
  document.querySelectorAll('[name="bundleSelect"]')
    .forEach((element, index) => element.onchange = () => {
      destroyDonateForm();
    });

  document.querySelectorAll('.donate-once')
    .forEach((element, index) => element.onclick = () => {
      solidgateClient.setDonateOneTime(true);
    });
  document.querySelectorAll('.donate-subscription')
    .forEach((element, index) => element.onclick = () => {
      solidgateClient.setDonateOneTime(false);
    });
}, 1000);

if (document.querySelector(`${parentSelector} #${DONATE_AMOUNT}`)) {
  document.querySelector(`${parentSelector} #${DONATE_AMOUNT}`).onkeyup = () => {
    const amountErrorElement = document.querySelector(`${parentSelector} .${DONATE_AMOUNT}-error`);
    if (amountErrorElement) {
      amountErrorElement.style.display = 'none';
    }
    destroyDonateForm();
  }
}

if (document.querySelector(`${parentSelector} #${DONATE_EMAIL}`)) {
  const emailValidationMessage = document.querySelector(`${parentSelector} .${DONATE_EMAIL}-error`);
  if (emailValidationMessage) {
    document.querySelector(`${parentSelector} #${DONATE_EMAIL}`).onkeyup = () => {
      emailValidationMessage.style.display = 'none';
      destroyDonateForm();
    };
  }
}

const hideFondyFallbackBlock = () => { document.querySelector(`#fondy_fallback`).style.display = 'none'; }
const hideCustomErrorMessages = () => {
  document.querySelectorAll('#custom_error_messages, #custom_error_messages p')
    .forEach((el) => { el.classList.add('d-none'); });
}
const destroyDonateForm = () => {
  if (!solidgateClient.formIsDestroyed) {
    // also set formIsDestroyed = true
    solidgateClient.destroyForm();
  }
  hideFondyFallbackBlock();
  hideCustomErrorMessages();

  // show submit button
  let activateDonateFormButton = document.getElementById('activateDonateFormButton')
  if (activateDonateFormButton) {
    activateDonateFormButton.classList.remove('d-none');
  }

  // delete success popup
  let successModal = document.getElementById('successDonateThankyouModal');
  if (successModal) {
    successModal.remove();
  }

  resetSafeTransaction();
}

const resetDonateForm = () => {
  solidgateClient.resetForm()
}

const activateDonateForm = (buttonClicked, isDonateOneTime = solidgateClient.donateOneTime) => {
  destroyDonateForm();

  solidgateClient.setDonateOneTime(isDonateOneTime);
  let loadingStateClass = 'disabled';

  if (buttonClicked.classList.contains(loadingStateClass)) {
    return false;
  }

  buttonClicked.classList.add(loadingStateClass);
  solidgateClient.activateDonateForm()
    .then(isFormActivated => {
      if (isFormActivated) {
        // hide submit button
        solidgateClient.form.on('mounted', (e) => {
          buttonClicked.classList.add('d-none');
        });

        solidgateClient.form.on('formRedirect', (e) => {
          document.getElementById('solid-payment-form-iframe').height = '500px';
        });
        // TODO: figure out if error can be related to email only
        solidgateClient.form.on('error', (e) => {
          document.querySelector(`${parentSelector} .${DONATE_EMAIL}-error`).style.display = 'block';
        });

        const safeTransaction = document.getElementById('safe-transaction');
        if (safeTransaction) {
          safeTransaction.classList.add('hidden');
          safeTransaction.classList.remove('d-flex');
        }
      }
      setTimeout(() => buttonClicked.classList.remove(loadingStateClass), 1000);

      solidgateClient.activateDonateFormListeners.forEach((callback, index) => {
        callback();
      });
    });

  return true;
}

const setMonoButtonHandler = (monoButtonId) => {
  let monoButton = document.getElementById(monoButtonId);
  if (!monoButton) {
    console.error('No element with given ID is found: ' + monoButtonId);
    return false;
  }

  // hide MonoButton if currency is not UAH
  document.querySelectorAll(`[name="${DONATE_CURRENCY}"]`)
    .forEach((currencyBtn, index) => currencyBtn.addEventListener('click', (event) => {

      if (solidgateClient.getCurrency() !== DONATE_CURRENCY_UAH) {
        monoButton.classList.add('hidden');
        return;
      }
      monoButton.classList.remove('hidden');
    }));

  monoButton.onclick = () => {
    event.preventDefault();

    let currency = solidgateClient.getCurrency(),
      amountInCents = solidgateClient.getAmountInCents(),
      amount = Math.trunc(amountInCents / 100),
      bankaUrl = monoButton.href,
      target = monoButton.target ?? '_self';

    if (amountInCents === DONATE_INVALID_AMOUNT) {
      console.error('The amount is invalid');
      return false;
    }
    if (amount < 1) {
      console.error('The amount should be greater that 1');
      return false;
    }
    if (currency !== DONATE_CURRENCY_UAH) {
      console.error('Currency is not supported by Monobank');
      return false;
    }
    if (!bankaUrl) {
      return false;
    }

    window.open(bankaUrl + '?a=' + amount, target);
  }
}

const logSuccessfulDonate = (withoutThanksPopup = false) => {
  solidgateClient.activateDonateFormAddListener(function () {
    if (!solidgateClient.form) {
      return;
    }

    solidgateClient.form.on('success', (e) => {
      //@todo solidgate for some reasons do not support multiple listeners :( for the same event - make some workaround

      if(!withoutThanksPopup) {
        createSuccessModal(e?.data);
      }

      let order_id = e.data.order.order_id,
        project_id = (order_id.split('_')[1] ?? false),
        ////          nonce = '<?= wp_create_nonce('storeDonateMessage')?>',
        lang = document.querySelector('html').lang,
        ignore_thankyou_email = 0;

      if (window.dataLayer) {
        window.dataLayer.push({
          'event': 'solidgate_form_process_success',
          'order': e.data.order
        });
      }

      if (!order_id) {
        return;
      }

      const whoToSupport = solidgateClient.getWhoToSupport();
      const brevoContact = solidgateClient.getAgreeGdpr() ? {
        email: solidgateClient.getCustomerEmail(),
        updateEnabled: false,
        attributes: {
          SUBSCRIPTION_DATE: (new Date()).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }).replace(/\//g, '-'),
          SUBSCRIPTION_PAGE: location.toString(),
          DONATE_GOAL: solidgateClient.getWhoToSupport() ? "Адмінка" : "Армія",
          DONATE_PROJECT: solidgateClient.getProjectId(),
          DONATE_PROJECT_NAME: solidgateClient.getProjectId() ? solidgateClient.getProjectName() : ' - ',
          DONATE_PERIOD: solidgateClient.isDonateSubscription() ? "Підписка" : "Разово"
        }
      } : null;

      solidgateClient
        .postData('/wp-json/solidgate/action/donateDone', { order_id, project_id, lang, ignore_thankyou_email, whoToSupport, brevoContact })
        .then(response => {
          //we can update list of donates and project progress
        });
    });
  });
}

const createSuccessModal = (data) => {
  if (!data.order) {
    return;
  }
  const translations = {
    ua: {
      supportArmyTitle: 'ДЯКУЄМО ЗА ВАШ ВНЕСОК У ПЕРЕМОГУ!',
      supportFundTitle: 'ДЯКУЄМО ЗА ВАШ ВНЕСОК У ПІДТРИМКУ ФОНДУ!',
      descriptionArmy: 'Ваші кошти будуть витрачені виключно на закупівлі для ЗСУ та інші спецпідрозділи з метою підвищення обороноздатності України.',
      descriptionFund: 'Ваші кошти будуть витрачені на забезпечення адміністративної діяльності організації.',
      month: 'МІСЯЦЬ',
      week: 'ТИЖДЕНЬ',
      yourDonate: 'Ваш внесок:',
      date: 'Дата:',
      hide: 'Приховати суму донату',
      hide_mobile: 'Приховати суму',
      download: 'Скачати, щоб поділитися',
      download_mobile: 'Скачати'
    },
    en: {
      supportArmyTitle: 'THANK YOU FOR YOUR DONATION TO THE VICTORY!',
      supportFundTitle: 'THANK YOU FOR YOUR DONATION TO THE FUND!',
      descriptionArmy: 'Your funds will be spent exclusively on procurement for the Armed Forces and other special forces to improve Ukraine\'s defense capabilities.',
      descriptionFund: 'Your donations will be used to support the administrative activities of the organization.',
      month: 'MONTH',
      week: 'WEEK',
      yourDonate: 'Your donation:',
      date: 'Date:',
      hide: 'Hide donation amount',
      hide_mobile: 'Hide amount',
      download: 'Download to share',
      download_mobile: 'Download'
    }
  }
  const lang = document.querySelector('html').lang === 'uk-UA' ? 'ua' : 'en';
  const imageConfig = getRandomImageForModal();
  const dialogImg = `/wp-content/themes/savelife/assets/images/success-donate-popup/${imageConfig.imgSrc}`;
  const dialogImgAuthor = lang === 'ua' ? `Автор: ${imageConfig.author}` : `Author: ${imageConfig.author}`;
  const dialogSupportTitle = solidgateClient.getWhoToSupport() ? translations[lang].supportFundTitle : translations[lang].supportArmyTitle;
  const dialogSupportDescription = solidgateClient.getWhoToSupport() ? translations[lang].descriptionFund : translations[lang].descriptionArmy;
  const total = `${data.order.amount / 100}`;
  const periodLabelEl = document.getElementById('donate-period-1')?.innerText.toLowerCase();
  const periodName = solidgateClient.isDonateOneTime() ? '' : periodLabelEl.includes('тиждень') || periodLabelEl.includes('weekly') ? translations[lang].week : translations[lang].month;
  const dialogDonateAmount = solidgateClient.isDonateOneTime() ? `${new Intl.NumberFormat('uk-UK').format(parseInt(total))} ${data.order.currency}` : `${new Intl.NumberFormat('uk-UK').format(parseInt(total))} ${data.order.currency}/${periodName}`;
  const dialogDonateTime = (new Date()).toLocaleDateString('en-GB', {
    minute: '2-digit',
    hour: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '-');

  const downloadImgConfig = {
    author: dialogImgAuthor,
    imgSrc: dialogImg
  };

  const modalContainer = document.createElement("div");

  const modal = `<div id="successDonateThankyouModal" class="modal fade" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="donate-modal" aria-hidden="true">
        <div class="modal-dialog success-donate-thankyou-modal">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <img src="${dialogImg}" class="donate-image img-fluid">
                    <span class="donate-image-author d-block mt-1">${dialogImgAuthor}</span>
                    <div class="donate-title d-flex">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5H46.5V46.5H1.5V1.5Z" fill="white" stroke="black" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M32.8996 21.3961L24.301 32.7936L15.7023 21.3961L15.7022 21.3961C14.16 19.352 14.4238 16.5119 16.3148 14.7834L16.3149 14.7833C17.3437 13.8427 18.737 13.3848 20.1221 13.5248L20.1246 13.525C21.3071 13.6425 22.3982 14.1862 23.2125 15.0449L24.301 16.1927L25.3894 15.0449C26.2024 14.1875 27.3029 13.6425 28.4783 13.5249L28.479 13.5248C29.8737 13.3846 31.2577 13.8423 32.287 14.7833L32.2893 14.7854C34.1874 16.5137 34.4505 19.3505 32.9018 21.3933L32.8996 21.3961Z" stroke="black" stroke-width="3"/>
                      </svg>
                      ${dialogSupportTitle}
                    </div>
                    <p>${dialogSupportDescription}</p>
                    <div class="donate-summary">
                      <div class="donate-amount-row">
                        <div class="text-start">${translations[lang].yourDonate}</div>
                        <div class="text-end" id="modalDonateAmount">${dialogDonateAmount}</div>
                      </div>
                      <div class="donate-datetime-row">
                        <div class="text-start">${translations[lang].date}</div>
                        <div class="text-end">${dialogDonateTime}</div>
                      </div>
                    </div>
                    <div class="share-footer">
                      <div class="hide-amount-checkbox mb-2">
                        <input type="checkbox" name="hideAmount" id="hideAmountForDownload" class="form-check-input float-start me-2" />
                        <label for="hideAmountForDownload" class="show_desktop">${translations[lang].hide}</label>
                        <label for="hideAmountForDownload" class="show_mobile">${translations[lang].hide_mobile}</label>
                      </div>
                      <div>
                        <a id="successDonateImgDownloadBtn" class="btn-heart border-black btn-heart--light" title="${translations[lang].download}" role="button">
                          <span class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="11.0001" y="2" width="2" height="14" fill="black"/>
                              <rect x="4" y="20" width="16" height="2" fill="black"/>
                              <path d="M5.33325 10L11.9999 16L18.6666 10" stroke="black" stroke-width="2"/>
                            </svg>
                          </span>
                          <span class="text show_desktop">${translations[lang].download}</span>
                          <span class="text show_mobile">${translations[lang].download_mobile}</span>
                        </a>

                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button id="btnOpenModal" type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#successDonateThankyouModal">
      Launch modal
    </button>`;
  modalContainer.innerHTML = modal;
  document.body.append(modalContainer);
  document.getElementById('btnOpenModal').click();

  document.getElementById('hideAmountForDownload').addEventListener('change', function () {
    const amountEl = document.getElementById('modalDonateAmount');
    if (this.checked) {
      const amount = '💛💛💛💛';
      amountEl.innerHTML = solidgateClient.isDonateOneTime() ? `${amount} ${data.order.currency}` : `${amount} ${data.order.currency}/${periodName}`;
    } else {
      const total = new Intl.NumberFormat('uk-UK').format(parseInt(`${data.order.amount / 100}`));
      amountEl.innerHTML = solidgateClient.isDonateOneTime() ? `${total} ${data.order.currency}` : `${total} ${data.order.currency}/${periodName}`;
    }
  });
  document.getElementById('successDonateImgDownloadBtn').addEventListener('click', function () {
    downloadSuccessDonationImg(downloadImgConfig, lang, dialogDonateTime);
  });
}

const getRandomImageForModal = () => {
  const imageConfigArray = [
    { author: 'Albina Yaloza', imgSrc: 'Albina_Yaloza_1.jpg' },
    { author: 'Albina Yaloza', imgSrc: 'Albina_Yaloza_2.jpg' },
    { author: 'Albina Yaloza', imgSrc: 'Albina_Yaloza_3.jpg' },
    { author: 'Albina Yaloza', imgSrc: 'Albina_Yaloza_4.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_1.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_2.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_3.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_4.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_5.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_6.jpg' },
    { author: 'Anastasia Gaydaenko', imgSrc: 'Anastasia_Gaydaenko_7.jpg' },
    { author: 'Anastasiia Khomutova', imgSrc: 'Anastasiia_Khomulova_1.jpg' },
    //{author: 'Anastasiia Khomulova', imgSrc: 'Anastasiia_Khomulova_2.jpg'},
    { author: 'Anton Abo', imgSrc: 'Anton_Abo_1.jpg' },
    { author: 'Anton Abo', imgSrc: 'Anton_Abo_2.jpg' },
    { author: 'Anton Abo', imgSrc: 'Anton_Abo_3.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_1.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_2.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_3.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_4.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_5.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_6.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_7.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_8.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_9.jpg' },
    { author: 'Bright art', imgSrc: 'Bright_art_10.jpg' },
    { author: 'Dmytro Kryvonos', imgSrc: 'Dmytro_Kryvonos_1.jpg' },
    { author: 'Dmytro Kryvonos', imgSrc: 'Dmytro_Kryvonos_2.jpg' },
    { author: 'Dmytro Kryvonos', imgSrc: 'Dmytro_Kryvonos_3.jpg' },
    { author: 'Dmytro Kryvonos', imgSrc: 'Dmytro_Kryvonos_4.jpg' },
    { author: 'Foya Masha', imgSrc: 'Foya_Masha_1.jpg' },
    { author: 'Foya Masha', imgSrc: 'Foya_Masha_2.jpg' },
    { author: 'Foya Masha', imgSrc: 'Foya_Masha_3.jpg' },
    { author: 'Foya Masha', imgSrc: 'Foya_Masha_4.jpg' },
    { author: 'Jenya Polosina', imgSrc: 'Jenya_Polosina_1.jpg' },
    { author: 'Jenya Polosina', imgSrc: 'Jenya_Polosina_2.jpg' },
    { author: 'Jenya Polosina', imgSrc: 'Jenya_Polosina_3.jpg' },
    { author: 'Jenya Polosina', imgSrc: 'Jenya_Polosina_4.jpg' },
    { author: 'Kristina Tsvenger', imgSrc: 'Kristina_Tsvenger_1.jpg' },
    { author: 'Kristina Tsvenger', imgSrc: 'Kristina_Tsvenger_2.jpg' },
    { author: 'Kristina Tsvenger', imgSrc: 'Kristina_Tsvenger_3.jpg' },
    { author: 'Kristina Tsvenger', imgSrc: 'Kristina_Tsvenger_4.jpg' },
    { author: 'Kristina Tsvenger', imgSrc: 'Kristina_Tsvenger_5.jpg' },
    { author: 'Kristina Tsvenger', imgSrc: 'Kristina_Tsvenger_6.jpg' },
    { author: 'Ksenia Igolkina', imgSrc: 'Ksenia_Igolkina_1.jpg' },
    { author: 'Ksenia Igolkina', imgSrc: 'Ksenia_Igolkina_2.jpg' },
    { author: 'Ksenia Igolkina', imgSrc: 'Ksenia_Igolkina_3.jpg' },
    { author: 'Ksenia Igolkina', imgSrc: 'Ksenia_Igolkina_4.jpg' },
    { author: 'Ksenia Igolkina', imgSrc: 'Ksenia_Igolkina_5.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_1.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_2.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_3.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_4.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_5.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_6.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_7.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_8.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_9.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_10.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_11.jpg' },
    { author: 'Marinoss Art', imgSrc: 'Marinoss_Art_12.jpg' },
    { author: 'Marta Leshak', imgSrc: 'Marta_Leshak_1.jpg' },
    { author: 'Marta Leshak', imgSrc: 'Marta_Leshak_2.jpg' },
    { author: 'Marta Leshak', imgSrc: 'Marta_Leshak_3.jpg' },
    { author: 'Marta Leshak', imgSrc: 'Marta_Leshak_4.jpg' },
    { author: 'Marta Leshak', imgSrc: 'Marta_Leshak_5.jpg' },
    { author: 'Max Moshkovsky', imgSrc: 'Max_Moshkovsky_1.jpg' },
    { author: 'Max Moshkovsky', imgSrc: 'Max_Moshkovsky_2.jpg' },
    { author: 'Max Moshkovsky', imgSrc: 'Max_Moshkovsky_3.jpg' },
    { author: 'Max Moshkovsky', imgSrc: 'Max_Moshkovsky_4.jpg' },
    { author: 'Nato Mikeladze', imgSrc: 'Nato_Mikeladze_1.jpg' },
    { author: 'Nato Mikeladze', imgSrc: 'Nato_Mikeladze_2.jpg' },
    { author: 'Nato Mikeladze', imgSrc: 'Nato_Mikeladze_3.jpg' },
    { author: 'Nato Mikeladze', imgSrc: 'Nato_Mikeladze_4.jpg' },
    { author: 'Nato Mikeladze', imgSrc: 'Nato_Mikeladze_5.jpg' },
    { author: 'Nato Mikeladze', imgSrc: 'Nato_Mikeladze_6.jpg' },
    { author: 'Oleg White', imgSrc: 'Oleg_White_1.jpg' },
    { author: 'Oleg White', imgSrc: 'Oleg_White_2.jpg' },
    { author: 'Viacheslav Vishtal', imgSrc: 'Viacheslav_Vishtal_1.jpg' },
    { author: 'Viacheslav Vishtal', imgSrc: 'Viacheslav_Vishtal_2.jpg' },
    { author: 'Viacheslav Vishtal', imgSrc: 'Viacheslav_Vishtal_3.jpg' },
    { author: 'Yana_sketch.ua', imgSrc: 'Yana_sketch_ua_1.jpg' },
    { author: 'Yana_sketch.ua', imgSrc: 'Yana_sketch_ua_2.jpg' },
    { author: 'Yana_sketch.ua', imgSrc: 'Yana_sketch_ua_3.jpg' },
    { author: 'Yana_sketch.ua', imgSrc: 'Yana_sketch_ua_4.jpg' },
    { author: 'Yana_sketch.ua', imgSrc: 'Yana_sketch_ua_5.jpg' }
  ];

  return imageConfigArray[Math.floor(Math.random() * imageConfigArray.length)];
}

const downloadSuccessDonationImg = (configData, lang, donateDate) => {
  let config = {
    author: configData.author,
    imgSrc: configData.imgSrc,
    logoSrc: lang === 'ua' ? '/wp-content/themes/savelife/assets/images/new-logo-black-ua.svg' : '/wp-content/themes/savelife/assets/images/new-logo-en.svg',
    textColor: '#FFFFFF',
    backgroundColor: '#2D2D2D',
    canvasWidth: 540,
    imgWidth: 400,
    marginTop: 32,
    marginBottom: 16,
    amount: lang === 'ua' ? 'Рахунок поповнено на суму' : 'Your donation is',
    thank: lang === 'ua' ? 'Дякуємо за довіру та підтримку!' : 'Thank you for your trust and support!',
  }

  const amount = document.getElementById('modalDonateAmount')?.innerText;

  let canvasHeight = config.marginTop;
  let elYposition = 0

  const canvas = document.createElement('canvas');
  canvas.id = 'successDonateDownloadImg';

  addImageProcess(config.imgSrc).then(img => {
    canvas.width = config.canvasWidth;
    const scaleHeight = (img.height * config.imgWidth) / img.width;
    canvasHeight = canvasHeight + scaleHeight + 250 + config.marginBottom;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // add image
    elYposition = 32;
    ctx.drawImage(img, 70, elYposition, config.imgWidth, scaleHeight);

    // add author
    ctx.font = "12px Helvetica";
    ctx.fillStyle = config.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    elYposition += scaleHeight + 6;
    ctx.fillText(config.author, config.canvasWidth / 2, elYposition);

    // add amoutn description
    ctx.font = "300 15px Helvetica";
    ctx.fillStyle = config.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    elYposition += 16 + 32;
    ctx.fillText(config.amount, config.canvasWidth / 2, elYposition);

    // add amoutn
    ctx.font = "400 40px Laqonic";
    ctx.fillStyle = config.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    elYposition += 24;
    ctx.fillText(amount, config.canvasWidth / 2, elYposition);

    // add thanks
    ctx.font = "700 15px Helvetica";
    ctx.fillStyle = config.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    elYposition += 80;
    ctx.fillText(config.thank, config.canvasWidth / 2, elYposition);

    // add logo
    elYposition += 25;
    addImageProcess(config.logoSrc).then(logoImg => {
      ctx.drawImage(logoImg, (config.canvasWidth / 2) - 50, elYposition, 97, 48);

      document.body.appendChild(canvas);

      // download image jpg
      const link = document.createElement('a');
      const substring = donateDate.split(',');
      const time = substring[1].replace(':', '');
      const date = substring[0].split('-');
      const downloadDateTime = `${time}_${date[0]}${date[1]}${date[2].slice(2)}`;
      link.download = `donation_${downloadDateTime}.jpeg`;
      link.href = document.getElementById('successDonateDownloadImg').toDataURL("image/jpeg");
      link.click();

      document.body.removeChild(canvas);
    });
  });
}

const addImageProcess = (src) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function resetSafeTransaction(){
  const safeTransactionEl = document.getElementById('safe-transaction');
  if (safeTransactionEl) {
    document.getElementById('safe-transaction').classList.remove('hidden');
    document.getElementById('safe-transaction').classList.add('d-flex');
  }
}
