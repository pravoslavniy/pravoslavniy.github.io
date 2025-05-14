const fancyBoxFunction = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    arrows: true,
  });
};

fancyBoxFunction();

// Range slider
const rangeSliders = () => {
  try {
    const sliders = document.querySelectorAll('input[type="range"]');
    const resetButton = document.querySelector(".reset-range-btn");

    sliders.forEach((slider) => {
      rangeSlider.create(slider, {
        polyfill: true,
        root: document,
        onSlide: function (value) {
          const current = document.querySelector(`#${slider.dataset.current}`);
          current.textContent = value.toLocaleString("uk-UA");
        },
      });
    });

    resetButton.addEventListener("click", () => {
      sliders.forEach((item) => {
        item.rangeSlider.update(
          {
            value: item.max,
          },
          true
        );
      });
    });
  } catch (e) {
    console.log("Function rangeSliders in main.js has some troubles, error is:", e);
  }
};

rangeSliders();

// Scroll

const scrollFunction = () => {
  try {
    const header = document.querySelector("header"); // Знайдіть ваш хедер
    const scrolledClass = "scrolled"; // Ім'я класу

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        header.classList.add(scrolledClass);
      } else {
        header.classList.remove(scrolledClass);
      }
    });
  } catch (e) {
    console.log("Function scrollFunction in main.js has some troubles, error is:", e);
  }
};

scrollFunction();

// Hide scroll

const hideScroll = (status) => {
  try {
    // status 1 show
    // status 2 hide
    const body = document.querySelector("body");

    if (status === 1) {
      body.classList.remove("no-scroll");
    }
    if (status === 2) {
      body.classList.add("no-scroll");
    }
  } catch (e) {
    console.log("Function hideScroll in main.js has some troubles, error is:", e);
  }
};

const menuFunction = () => {
  try {
    const menuBtn = document.querySelector(".menu-toggle"),
      header = document.querySelector(".header"),
      body = document.querySelector("body");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      header.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  } catch (e) {
    console.log("Function menuFunction in main.js has some troubles, error is:", e);
  }
};

menuFunction();

// Tabs

const tabsFunction = () => {
  try {
    const tabsWraps = document.querySelectorAll(".tabs");

    tabsWraps.forEach((tabItem) => {
      const tabsBtn = tabItem.querySelectorAll(".tab-item");
      const tabs = document.querySelectorAll(`${tabItem.getAttribute("data-content-id")} .tab-content-item`);

      tabsBtn.forEach((item) => {
        let currentTabBtn = item;
        let tabId = currentTabBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        item.classList.contains("active") ? currentTab.classList.add("active") : null;

        item.addEventListener("click", () => {
          if (!currentTabBtn.classList.contains("active")) {
            tabsBtn.forEach((item) => {
              item.classList.remove("active");
            });

            tabs.forEach((item) => {
              item.classList.remove("active");
            });

            currentTabBtn.classList.add("active");
            currentTab.classList.add("active");
          }
        });
      });
    });
  } catch (e) {
    console.log("Function tabsFunction in main.js has some troubles, error is:", e);
  }
};

tabsFunction();

// Popup

const popupFunction = () => {
  try {
    let popup;
    const popupOpenButtons = document.querySelectorAll(".modal-button-open"),
      popupCloseButton = document.querySelectorAll(".modal-close");

    popupOpenButtons.forEach((button) => {
      button.addEventListener("click", () => {
        popup = document.querySelector(`#${button.dataset.id}`);
        popup.style.display = "flex";
        hideScroll(2);
      });
    });

    popupCloseButton.forEach((item) => {
      item.addEventListener("click", () => {
        popup.style.display = "none";
        hideScroll(1);
      });
    });

    window.onclick = function (e) {
      if (e.target == popup) {
        popup.style.display = "none";
        popup.classList.remove("success");
        hideScroll(1);
      }
    };
  } catch (e) {
    console.log("Function popupFunction in main.js has some troubles, error is:", e);
  }
};

popupFunction();

const imgSliders = () => {
  const sliders = document.querySelectorAll(".collection-slider");

  sliders.forEach((item) => {
    const sliderClasses = Array.from(item.classList);
    const sliderNumberClass = sliderClasses.find((className) => /collection-slider-\d+/.test(className));

    const slider = new Swiper(item, {
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 20,
      pagination: {
        type: "fraction",
        el: `.${sliderNumberClass} .swiper-pagination`,
      },
      navigation: {
        nextEl: `.${sliderNumberClass} .swiper-button.next`,
        prevEl: `.${sliderNumberClass} .swiper-button.prev`,
      },
    });
  });
};

imgSliders();

const aboutSlider = new Swiper(".about-subdivision", {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: `.about-subdivision .swiper-button.next`,
    prevEl: `.about-subdivision .swiper-button.prev`,
  },
});

const newsSlider = new Swiper(".about-news-slider", {
  loop: true,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  effect: "slide",
  speed: 4000,
  autoplay: {
    delay: 1,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    waitForTransition: true,
    stopOnLastSlide: false,
  },
});

const copyToClipboardFunction = () => {
  try {
    document.addEventListener("DOMContentLoaded", function () {
      const copyButtons = document.querySelectorAll(".copy-btn");

      copyButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Get the ID of the element to copy from data-id attribute
          const valueId = this.getAttribute("data-id");

          // Find the element with that ID
          const valueToCopy = document.querySelector(valueId);

          navigator.clipboard.writeText(valueToCopy.textContent);
        });
      });
    });
  } catch (error) {}
};

copyToClipboardFunction();
