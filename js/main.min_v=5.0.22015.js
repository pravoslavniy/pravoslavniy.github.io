
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",f=function(e){return Array.prototype.slice.call(e)},R=function(e){console.warn("".concat(t," ").concat(e))},I=function(e){console.error("".concat(t," ").concat(e))},n=[],m=function(e){-1===n.indexOf(e)&&(n.push(e),R(e))},H=function(e){return"function"==typeof e?e():e},D=function(e){return e&&Promise.resolve(e)===e},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),h=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},_=h(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),g=h(["success","warning","info","question","error"]),b={previousBodyPadding:null},v=function(e,t){return e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},y=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},z=function(e,t){y(e,t,!0)},W=function(e,t){y(e,t,!1)},U=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(v(e.childNodes[n],t))return e.childNodes[n]},K=function(e){e.style.opacity="",e.style.display=e.id===_.content?"block":"flex"},F=function(e){e.style.opacity="",e.style.display="none"},Z=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w=function(){return document.body.querySelector("."+_.container)},C=function(e){var t=w();return t?t.querySelector("."+e):null},k=function(){return C(_.popup)},x=function(){var e=k();return f(e.querySelectorAll("."+_.icon))},A=function(){return C(_.title)},B=function(){return C(_.content)},S=function(){return C(_.image)},P=function(){return C(_.progresssteps)},E=function(){return C(_["validation-message"])},L=function(){return C(_.confirm)},O=function(){return C(_.cancel)},Q=function(){return C(_.actions)},Y=function(){return C(_.footer)},$=function(){return C(_.close)},J=function(){var e=f(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=f(k().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return Z(e)})},T=function(){return!M()&&!document.body.classList.contains(_["no-backdrop"])},M=function(){return document.body.classList.contains(_["toast-shown"])},j=function(){return"undefined"==typeof window||"undefined"==typeof document},V='\n <div aria-labelledby="'.concat(_.title,'" aria-describedby="').concat(_.content,'" class="').concat(_.popup,'" tabindex="-1">\n   <div class="').concat(_.header,'">\n     <ul class="').concat(_.progresssteps,'"></ul>\n     <div class="').concat(_.icon," ").concat(g.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(_.icon," ").concat(g.question,'">\n       <span class="').concat(_["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.warning,'">\n       <span class="').concat(_["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.info,'">\n       <span class="').concat(_["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(_.image,'" />\n     <h2 class="').concat(_.title,'" id="').concat(_.title,'"></h2>\n     <button type="button" class="').concat(_.close,'">×</button>\n   </div>\n   <div class="').concat(_.content,'">\n     <div id="').concat(_.content,'"></div>\n     <input class="').concat(_.input,'" />\n     <input type="file" class="').concat(_.file,'" />\n     <div class="').concat(_.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(_.select,'"></select>\n     <div class="').concat(_.radio,'"></div>\n     <label for="').concat(_.checkbox,'" class="').concat(_.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(_.label,'"></span>\n     </label>\n     <textarea class="').concat(_.textarea,'"></textarea>\n     <div class="').concat(_["validation-message"],'" id="').concat(_["validation-message"],'"></div>\n   </div>\n   <div class="').concat(_.actions,'">\n     <button type="button" class="').concat(_.confirm,'">OK</button>\n     <button type="button" class="').concat(_.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(_.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),X=function(e){var t=w();if(t&&(t.parentNode.removeChild(t),W([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]])),!j()){var n=document.createElement("div");n.className=_.container,n.innerHTML=V;var o="string"==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i,r=k(),a=B(),s=U(a,_.input),c=U(a,_.file),u=a.querySelector(".".concat(_.range," input")),l=a.querySelector(".".concat(_.range," output")),d=U(a,_.select),p=a.querySelector(".".concat(_.checkbox," input")),f=U(a,_.textarea);r.setAttribute("role",e.toast?"alert":"dialog"),r.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||r.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(o).direction&&z(w(),_.rtl);var m=function(e){De.isVisible()&&i!==e.target.value&&De.resetValidationMessage(),i=e.target.value};return s.oninput=m,c.onchange=m,d.onchange=m,p.onchange=m,f.oninput=m,u.oninput=function(e){m(e),l.value=u.value},u.onchange=function(e){m(e),u.nextSibling.value=u.value},r}I("SweetAlert2 requires document to initialize")},G=function(e,t){if(!e)return F(t);if(e instanceof HTMLElement)t.appendChild(e);else if("object"===q(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);K(t)},ee=function(){if(j())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),te=function(e){var t=Q(),n=L(),o=O();if(e.showConfirmButton||e.showCancelButton?K(t):F(t),e.showCancelButton?o.style.display="inline-block":F(o),e.showConfirmButton?n.style.removeProperty("display"):F(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=_.confirm,z(n,e.confirmButtonClass),o.className=_.cancel,z(o,e.cancelButtonClass),e.buttonsStyling){z([n,o],_.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else W([n,o],_.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},ne=function(e){var t=B().querySelector("#"+_.content);e.html?G(e.html,t):e.text?(t.textContent=e.text,K(t)):F(t)},oe=function(e){for(var t=x(),n=0;n<t.length;n++)F(t[n]);if(e.type)if(-1!==Object.keys(g).indexOf(e.type)){var o=De.getPopup().querySelector(".".concat(_.icon,".").concat(g[e.type]));K(o),e.animation&&z(o,"swal2-animate-".concat(e.type,"-icon"))}else I('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},ie=function(e){var t=S();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),K(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=_.image,e.imageClass&&z(t,e.imageClass)):F(t)},re=function(i){var r=P(),a=parseInt(null===i.currentProgressStep?De.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(K(r),r.innerHTML="",a>=i.progressSteps.length&&R("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(z(n,_.progresscircle),n.innerHTML=e,t===a&&z(n,_.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");z(o,_.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):F(r)},ae=function(e){var t=A();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),G(e.title,t))},se=function(){null===b.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(b.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=b.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},ce=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ue=function(){var e=w(),t=k();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},le={},de=function(e,t){var n=w(),o=k();if(o){null!==e&&"function"==typeof e&&e(o),W(o,_.show),z(o,_.hide);var i=function(){M()?pe(t):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;le.restoreFocusTimeout=setTimeout(function(){le.previousActiveElement&&le.previousActiveElement.focus?(le.previousActiveElement.focus(),le.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return pe(t)}),le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),n.parentNode&&n.parentNode.removeChild(n),W([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"],_["toast-column"]]),T()&&(null!==b.previousBodyPadding&&(document.body.style.paddingRight=b.previousBodyPadding,b.previousBodyPadding=null),function(){if(v(document.body,_.iosfix)){var e=parseInt(document.body.style.top,10);W(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&ce()&&window.removeEventListener("resize",ue),f(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};ee&&!v(o,_.noanimation)?o.addEventListener(ee,function e(){o.removeEventListener(ee,e),v(o,_.hide)&&i()}):i()}},pe=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};function fe(e){var t=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return l(e,n);Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var me={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},he=["useRejections","expectRejections","extraParams"],ge=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],be=function(e){return me.hasOwnProperty(e)||"extraParams"===e},ve=function(e){return-1!==he.indexOf(e)},ye=function(e){for(var t in e)be(t)||R('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ge.indexOf(t)&&R('The parameter "'.concat(t,'" is incompatible with toasts')),ve(t)&&m('The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'))},we='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',Ce={};var ke=[],xe=function(){var e=k();e||De(""),e=k();var t=Q(),n=L(),o=O();K(t),K(n),z([e,t],_.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Ae=Object.freeze({isValidParameter:be,isDeprecatedParameter:ve,argsToParams:function(n){var o={};switch(q(n[0])){case"object":r(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(q(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:I("Unexpected type of ".concat(e,'! Expected "string", got ').concat(q(n[t])))}})}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:de,closePopup:de,closeModal:de,closeToast:de,isVisible:function(){return!!k()},clickConfirm:function(){return L().click()},clickCancel:function(){return O().click()},getContainer:w,getPopup:k,getTitle:A,getContent:B,getImage:S,getIcons:x,getCloseButton:$,getButtonsWrapper:function(){return m("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),C(_.actions)},getActions:Q,getConfirmButton:L,getCancelButton:O,getFooter:Y,getFocusableElements:J,getValidationMessage:E,isLoading:function(){return k().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(this,t)},mixin:function(n){return fe(function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,e),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var r=this;ke=e;var a=function(){ke=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ke.length?(document.body.setAttribute("data-swal2-queue-step",n),r(ke[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ke.length?ke.splice(t,0,e):ke.push(e)},deleteQueueStep:function(e){void 0!==ke[e]&&ke.splice(e,1)},showLoading:xe,enableLoading:xe,getTimerLeft:function(){return le.timeout&&le.timeout.getTimerLeft()},stopTimer:function(){return le.timeout&&le.timeout.stop()},resumeTimer:function(){return le.timeout&&le.timeout.start()},toggleTimer:function(){var e=le.timeout;return e&&(e.running?e.stop():e.start())},increaseTimer:function(e){return le.timeout&&le.timeout.increase(e)},isTimerRunning:function(){return le.timeout&&le.timeout.isRunning()}}),Be="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),Se="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:Be("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(Be("WeakMap"),Object.defineProperty,{}.hasOwnProperty),Pe={promise:new Se,innerParams:new Se,domCache:new Se};function Ee(){var e=Pe.innerParams.get(this),t=Pe.domCache.get(this);e.showConfirmButton||(F(t.confirmButton),e.showCancelButton||F(t.actions)),W([t.popup,t.actions],_.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function Le(e){var t=Pe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),K(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",_["validation-message"]),N(o),z(o,_.inputerror))}function Oe(){var e=Pe.domCache.get(this);e.validationMessage&&F(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),W(t,_.inputerror))}var Te=function e(t,n){a(this,e);var o,i,r=n;this.running=!1,this.start=function(){return this.running||(this.running=!0,i=new Date,o=setTimeout(t,r)),r},this.stop=function(){return this.running&&(this.running=!1,clearTimeout(o),r-=new Date-i),r},this.increase=function(e){var t=this.running;return t&&this.stop(),r+=e,t&&this.start(),r},this.getTimerLeft=function(){return this.running&&(this.stop(),this.start()),r},this.isRunning=function(){return this.running},this.start()},Me={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var je=function(e){var t=w(),n=k();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(z(n,_.show),z(t,_.fade),W(n,_.hide)):W(n,_.fade),K(n),t.style.overflowY="hidden",ee&&!v(n,_.noanimation)?n.addEventListener(ee,function e(){n.removeEventListener(ee,e),t.style.overflowY="auto"}):t.style.overflowY="auto",z([document.documentElement,document.body,t],_.shown),e.heightAuto&&e.backdrop&&!e.toast&&z([document.documentElement,document.body],_["height-auto"]),T()&&(se(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!v(document.body,_.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",z(document.body,_.iosfix)}}(),"undefined"!=typeof window&&ce()&&(ue(),window.addEventListener("resize",ue)),f(document.body.children).forEach(function(e){e===w()||function(e,t){if("function"==typeof e.contains)return e.contains(t)}(e,w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),M()||le.previousActiveElement||(le.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var Ve,qe=Object.freeze({hideLoading:Ee,disableLoading:Ee,getInput:function(e){var t=Pe.innerParams.get(this),n=Pe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return U(n.content,_[e]);case"checkbox":return n.popup.querySelector(".".concat(_.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(_.radio," input:checked"))||n.popup.querySelector(".".concat(_.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(_.range," input"));default:return U(n.content,_.input)}},enableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:Le,resetValidationMessage:Oe,resetValidationError:function(){m("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"),Oe.bind(this)()},showValidationError:function(e){m("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"),Le.bind(this)(e)},getProgressSteps:function(){return Pe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=r({},Pe.innerParams.get(this),{progressSteps:e});Pe.innerParams.set(this,t),re(t)},showProgressSteps:function(){var e=Pe.domCache.get(this);K(e.progressSteps)},hideProgressSteps:function(){var e=Pe.domCache.get(this);F(e.progressSteps)},_main:function(e){var T=this;ye(e);var M=r({},me,e);!function(t){var e;t.inputValidator||Object.keys(Me).forEach(function(e){t.input===e&&(t.inputValidator=t.expectRejections?Me[e]:De.adaptInputValidator(Me[e]))}),t.validationMessage&&("object"!==q(t.extraParams)&&(t.extraParams={}),t.extraParams.validationMessage=t.validationMessage),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(R('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=k(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?X(t):n||X(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=w(),c=$(),u=Y();if(ae(t),ne(t),"string"==typeof t.backdrop?w().style.background=t.backdrop:t.backdrop||z([document.documentElement,document.body],_["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&R('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in _?z(s,_[t.position]):(R('The "position" parameter is not valid, defaulting to "center"'),z(s,_.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in _&&z(s,_[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),K(c)):F(c),e.className=_.popup,t.toast?(z([document.documentElement,document.body],_["toast-shown"]),z(e,_.toast)):z(e,_.modal),t.customClass&&z(e,t.customClass),t.customContainerClass&&z(s,t.customContainerClass),re(t),oe(t),ie(t),te(t),G(t.footer,u),!0===t.animation?W(e,_.noanimation):z(e,_.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&R("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(M),Object.freeze(M),Pe.innerParams.set(this,M),le.timeout&&(le.timeout.stop(),delete le.timeout),clearTimeout(le.restoreFocusTimeout);var j={popup:k(),container:w(),content:B(),actions:Q(),confirmButton:L(),cancelButton:O(),closeButton:$(),validationMessage:E(),progressSteps:P()};Pe.domCache.set(this,j);var V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?t(e):t({value:e})},c=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?n(e):t({dismiss:e})},u=function(e){V.closePopup(M.onClose,M.onAfterClose),n(e)};M.timer&&(le.timeout=new Te(function(){c("timer"),delete le.timeout},M.timer)),M.input&&setTimeout(function(){var e=T.getInput();e&&N(e)},0);for(var l=function(t){if(M.showLoaderOnConfirm&&V.showLoading(),M.preConfirm){T.resetValidationMessage();var e=Promise.resolve().then(function(){return M.preConfirm(t,M.extraParams)});M.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationMessage(e)}):e.then(function(e){Z(j.validationMessage)||!1===e?T.hideLoading():o(e||t)},function(e){return u(e)})}else o(t)},e=function(e){var t=e.target,n=j.confirmButton,o=j.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&V.isVisible())if(T.disableButtons(),M.input){var a=function(){var e=T.getInput();if(!e)return null;switch(M.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return M.inputAutoTrim?e.value.trim():e.value}}();if(M.inputValidator){T.disableInput();var s=Promise.resolve().then(function(){return M.inputValidator(a,M.extraParams)});M.expectRejections?s.then(function(){T.enableButtons(),T.enableInput(),l(a)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationMessage(e)}):s.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationMessage(e):l(a)},function(e){return u(e)})}else T.getInput().checkValidity()?l(a):(T.enableButtons(),T.showValidationMessage(M.validationMessage))}else l(!0);else r&&V.isVisible()&&(T.disableButtons(),c(V.DismissReason.cancel))}},i=j.popup.querySelectorAll("button"),r=0;r<i.length;r++)i[r].onclick=e,i[r].onmouseover=e,i[r].onmouseout=e,i[r].onmousedown=e;if(j.closeButton.onclick=function(){c(V.DismissReason.close)},M.toast)j.popup.onclick=function(){M.showConfirmButton||M.showCancelButton||M.showCloseButton||M.input||c(V.DismissReason.close)};else{var a=!1;j.popup.onmousedown=function(){j.container.onmouseup=function(e){j.container.onmouseup=void 0,e.target===j.container&&(a=!0)}},j.container.onmousedown=function(){j.popup.onmouseup=function(e){j.popup.onmouseup=void 0,(e.target===j.popup||j.popup.contains(e.target))&&(a=!0)}},j.container.onclick=function(e){a?a=!1:e.target===j.container&&H(M.allowOutsideClick)&&c(V.DismissReason.backdrop)}}M.reverseButtons?j.confirmButton.parentNode.insertBefore(j.cancelButton,j.confirmButton):j.confirmButton.parentNode.insertBefore(j.confirmButton,j.cancelButton);var s=function(e,t){for(var n=J(M.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();j.popup.focus()};le.keydownHandlerAdded&&(le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),M.toast||(le.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=J(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?s(i,-1):s(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===j.confirmButton&&Z(j.cancelButton)?j.cancelButton.focus():document.activeElement===j.cancelButton&&Z(j.confirmButton)&&j.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==H(t.allowEscapeKey)||(e.preventDefault(),c(V.DismissReason.esc));else if(e.target&&T.getInput()&&e.target.outerHTML===T.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;V.clickConfirm(),e.preventDefault()}}(e,M)},le.keydownTarget=M.keydownListenerCapture?window:j.popup,le.keydownListenerCapture=M.keydownListenerCapture,le.keydownTarget.addEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!0),T.enableButtons(),T.hideLoading(),T.resetValidationMessage(),M.toast&&(M.input||M.footer||M.showCloseButton)?z(document.body,_["toast-column"]):W(document.body,_["toast-column"]);for(var d,p,f=["input","file","range","select","radio","checkbox","textarea"],m=function(e){e.placeholder&&!M.inputPlaceholder||(e.placeholder=M.inputPlaceholder)},h=0;h<f.length;h++){var g=_[f[h]],b=U(j.content,g);if(d=T.getInput(f[h])){for(var v in d.attributes)if(d.attributes.hasOwnProperty(v)){var y=d.attributes[v].name;"type"!==y&&"value"!==y&&d.removeAttribute(y)}for(var w in M.inputAttributes)"range"===f[h]&&"placeholder"===w||d.setAttribute(w,M.inputAttributes[w])}b.className=g,M.inputClass&&z(b,M.inputClass),F(b)}switch(M.input){case"text":case"email":case"password":case"number":case"tel":case"url":d=U(j.content,_.input),"string"==typeof M.inputValue||"number"==typeof M.inputValue?d.value=M.inputValue:D(M.inputValue)||R('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(q(M.inputValue),'"')),m(d),d.type=M.input,K(d);break;case"file":m(d=U(j.content,_.file)),d.type=M.input,K(d);break;case"range":var C=U(j.content,_.range),k=C.querySelector("input"),x=C.querySelector("output");k.value=M.inputValue,k.type=M.input,x.value=M.inputValue,K(C);break;case"select":var A=U(j.content,_.select);if(A.innerHTML="",M.inputPlaceholder){var B=document.createElement("option");B.innerHTML=M.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,A.appendChild(B)}p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,M.inputValue.toString()===t.toString()&&(o.selected=!0),A.appendChild(o)}),K(A),A.focus()};break;case"radio":var S=U(j.content,_.radio);S.innerHTML="",p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=_.radio,o.value=t,M.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=_.label,i.appendChild(o),i.appendChild(r),S.appendChild(i)}),K(S);var t=S.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var P=U(j.content,_.checkbox),E=T.getInput("checkbox");E.type="checkbox",E.value=1,E.id=_.checkbox,E.checked=Boolean(M.inputValue),P.querySelector("span").innerHTML=M.inputPlaceholder,K(P);break;case"textarea":var L=U(j.content,_.textarea);L.value=M.inputValue,m(L),K(L);break;case null:break;default:I('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(M.input,'"'))}if("select"===M.input||"radio"===M.input){var O=function(e){return p((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};D(M.inputOptions)?(V.showLoading(),M.inputOptions.then(function(e){T.hideLoading(),O(e)})):"object"===q(M.inputOptions)?O(M.inputOptions):I("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(q(M.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(M.input)&&D(M.inputValue)&&(V.showLoading(),F(d),M.inputValue.then(function(e){d.value="number"===M.input?parseFloat(e)||0:e+"",K(d),d.focus(),T.hideLoading()}).catch(function(e){I("Error in inputValue promise: "+e),d.value="",K(d),d.focus(),T.hideLoading()}));je(M),M.toast||(H(M.allowEnterKey)?M.focusCancel&&Z(j.cancelButton)?j.cancelButton.focus():M.focusConfirm&&Z(j.confirmButton)?j.confirmButton.focus():s(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),j.container.scrollTop=0})}});function Re(){if("undefined"!=typeof window){"undefined"==typeof Promise&&I("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Ve=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);Pe.promise.set(this,i)}}Re.prototype.then=function(e,t){return Pe.promise.get(this).then(e,t)},Re.prototype.catch=function(e){return Pe.promise.get(this).catch(e)},Re.prototype.finally=function(e){return Pe.promise.get(this).finally(e)},r(Re.prototype,qe),r(Re,Ae),Object.keys(qe).forEach(function(t){Re[t]=function(){var e;if(Ve)return(e=Ve)[t].apply(e,arguments)}}),Re.DismissReason=e,Re.noop=function(){};var Ie,He,De=fe((Ie=Re,He=function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,Ie),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},Ce,e))}}],[{key:"setDefaults",value:function(t){if(m(we),!t||"object"!==q(t))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ye(t),Object.keys(t).forEach(function(e){Ie.isValidParameter(e)&&(Ce[e]=t[e])})}},{key:"resetDefaults",value:function(){m(we),Ce={}}}]),t}(),"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&He.setDefaults(window._swalDefaults),He));return De.default=De}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="7.33.1",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");

/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);

var originalChangeHandlers = [];
$('select.its-2').each(function() {
  var events = $._data(this, 'events');
  if (events && events.change) {
    originalChangeHandlers.push(events.change[0].handler);
  }
});

$('select.its-2').select2();

/*
$('select.its-2').each(function(index) {
    $(this).on('change', originalChangeHandlers[index]);
});
*/

let selectedFiles = [];
document.addEventListener("DOMContentLoaded", function(event) {
    /*
    setInterval(function() {
        $.ajax({
            url: '/ajax/check-online',
        });
    }, 20000);
    */
   
    window.lang = $('html').attr('lang');
    window.isRu = (lang === 'ru') ? true : false;

    
    $('.lazyload').lazy();




    $('body').on('click', '.js-child-answer', function(e) {
        e.preventDefault();
        var post = $(this).closest(".post-social");
        var form = post.find('.post-social-comment.comment-input-wrapper');
        var input = form.find('textarea[name="reply_text"]');
        
        $(this).parent().parent().append(form);

        input.val('@' + $(this).data('username') + ' ');
        input.attr('data-reply-parent-id', $(this).data('id'));
        input.focus();

    });


    var consent_check = window.localStorage.getItem('consent');
    if (!consent_check) {
        $('.cookie-consent').fadeIn(1000);
    }
    
    $('.cookie-consent a.red').on('click', function(e){
        e.preventDefault();
        window.localStorage.setItem('consent', true);
        $('.cookie-consent').fadeOut(500,function(){
            $('.cookie-consent').remove();
        });
    });
    
	$('.js-top-menu-btn').on('mouseup', function () {
		$('.js-top-menu').toggleClass('is-open');
        $('.js-top-menu-btn').toggleClass('is-active');
        
        if ($(this).hasClass('is-active')) {
            $(this).find('i').addClass('fa-times');
            $(this).find('i').removeClass('fa-bars');
        }else{
            $(this).find('i').addClass('fa-bars');
            $(this).find('i').removeClass('fa-times');
        }
	});
	$('.add-info-topline__item').on('mouseup', function () {
		$('.add-info-topline__item').removeClass('is-active');
		$(this).addClass('is-active');
	})
	if ( $(window).width()>= 768 ) {
		$('.js-drop-profile').on('mouseup', function (e) {
      e.stopPropagation()
      $(this).toggleClass('is-open');

		})
    }
    
	$(document).on('click', function (e) {
    var dropProfileMenu = $('.js-drop-profile');
		if (!dropProfileMenu.is(e.target)
			&& dropProfileMenu.has(e.target).length === 0) { 
			dropProfileMenu.removeClass('is-open');
		}
	});
	
	$('html').on('click', '.js-rw-sh-more', function(e) {
        e.preventDefault();
        var id = $(this).data('parent');

        $('.js-comment-'+id).css('display', 'block');
        $(this).remove();
    });

	$('html').on('click', '.js-card', function(e) {
        e.preventDefault();
        window.location = $(this).data('link');
    });
    
	$('span.hidden-link').click(function(){
		var link = $(this).data("link");
        if (link == "https://koronapay.com/transfers/europe/?utm_source=layboard&utm_medium=banner&utm_campaign=poland") {
            if ("ga" in window) {tracker = ga.getAll()[0];}
            window.tracker.send("event", "BannerClick", "banner_click");
        }

		if (link.includes('://')) {
			window.open(link);
		}else{
			window.open('//'+link);
		}
		return false;
	});

	$('.js-promotion').on('click', function(e) {
        e.preventDefault();

        $('.js-promotion').removeClass('active');
        $(this).addClass('active');
        $('[name="tarif_id"]').val($(this).data('tarif_id'));

    });

    $('.js-start-payment').on('click', function(e) {
        e.preventDefault();

        var data = {
            user_id: $(this).data('user'),
            vacancy_id: $(this).data('id'),
            tarif_id: $('.js-promotion.active').data('tarif_id'),
            amount: $('.js-promotion.active').data('cost'),
            status: 0
        };

        $.ajax({
            url: "/pay/create-invoice",
            method:'POST',
            data: data,
            success: function(data) {
                var data = JSON.parse(data);

                if (data.success === true) {
                    $('#payment').find('[name="merchantAccount"]').val(data.bill.merchantAccount);
                    $('#payment').find('[name="merchantDomainName"]').val(data.bill.merchantDomainName);
                    $('#payment').find('[name="orderReference"]').val(data.bill.orderReference);
                    $('#payment').find('[name="orderDate"]').val(data.bill.orderDate);
                    $('#payment').find('[name="amount"]').val(data.bill.amount);
                    $('#payment').find('[name="currency"]').val(data.bill.currency);
                    $('#payment').find('[name="productName[]"]').val(data.bill.productName);
                    $('#payment').find('[name="productCount[]"]').val(data.bill.productCount);
                    $('#payment').find('[name="productPrice[]"]').val(data.bill.productPrice);
                    $('#payment').find('[name="merchantSignature"]').val(data.bill.merchantSignature);
                    $('#payment').submit();
                }else{
                    if (lang = 'pl') {
                        Swal.fire(
                            'Ups!',
                            'Błąd podczas tworzenia płatności.<br/> Spróbuj ponownie lub napisz do nas off@layboard.com',
                            'error'
                        );
                    }else if(lang == 'ua') {
                        Swal.fire(
                            'Упс!',
                            'Помилка створення платежу.<br/> Спробуйте ще раз або напишіть нам на пошту off@layboard.com',
                            'error'
                        );
                    }else{
                        Swal.fire(
                            'Упс!',
                            'Ошибка создания платежа.<br/> Попробуйте еще раз или напишите нам на почту off@layboard.com',
                            'error'
                        );
                    }
                    
                }
            }
        })
	});
    
    $('body').on('click', '.js-cancel-reply', function(e) {
        e.preventDefault();
        $('.js-reply-label').html('');
        $('.article-comment-form').find('[name="parent_id"]').val(0);
        $('.vacancy-comment-form').find('[name="parent_id"]').val(0);
        $('.rezume-comment-form').find('[name="parent_id"]').val(0);
    });

$('.js-feedback-vacancy-user').on('click', function(e) {
    e.preventDefault();
    var vac_id = $(this).data('vacancy-id');
    var user_id = $(this).data('user-id');
    var data = {
        vacancy_id:vac_id,
        user_id:user_id,
    };
    if ("ga" in window) {tracker = ga.getAll()[0];}

    if (canSendFeedback(data.vacancy_id)) {
        $.ajax({
            method: "post",
            url: "/ajax/vacancy-feedback-user",
            data:data,
            success: function(data) {
                if (data.success) {
                    canSendFeedback(vac_id, true);
                    if (getCookie('thanks')) {
                        if (lang = 'pl') {
                            Swal.fire(
                                'Dzięki!',
                                'Twoja aplikacja została pomyślnie wysłana do pracodawcy!',
                                'success'
                            );
                        }else if (lang = 'ua') {
                            Swal.fire(
                                'Дякую!',
                                'Ваш відгук був успішно відправлений роботодавцю!',
                                'success'
                            );
                        }else{
                            Swal.fire(
                                'Спасибо!',
                                'Ваш отклик был успешно отправлен работодателю!',
                                'success'
                            );
                        }
                        
                        
                    }else{
                        setCookie('thanks', 'true')
                        window.location.href = "/pay/thanks";
                    }
                    window.tracker.send("event", "ReplyReg", "ReplyReg_1");
                }
            }
        })
    }
});


$('.seo-block__text-holder').bind('contextmenu', function(e) {
    return false;
}); 
$('.nslct').bind('contextmenu', function(e) {
    return false;
}); 

function canSendFeedback(vac_id, only_set = false)
{
    var ids = window.localStorage.getItem('vac_ids');
    var arr = [];

    if (ids) {
        arr = JSON.parse(ids);
    }
    
    if (only_set) {
        arr.push(vac_id);
        window.localStorage.setItem('vac_ids', JSON.stringify(arr));

        return true;
    }

    if (arr.includes(vac_id)) {
        if (lang == 'pl') {
            Swal.fire(
                '',
                'Niedawno złożyłeś podanie o tę pracę',
                'info'
            );
        } else if (lang == 'ua') {
            Swal.fire(
                '',
                'Ви нещодавно залишали відгук для цієї вакансії',
                'info'
            );
        } else {
            Swal.fire(
                '',
               'Вы недавно оставляли отклик для этой вакансии',
                'info'
            );
        }
        

        return false;
    }

    return true;
}

$(document).on('click', '.mrbtn', function() {
    $(this).prev('.text').find('.moreText').show();
    $(this).hide();
});

$('.js-feedback-vacancy').on('click', function(e){
  e.preventDefault();
  var isOpera = false;

  if (navigator.userAgent.indexOf("OPR") !== -1) {
      isOpera = true;
  }
  if ("ga" in window) {tracker = ga.getAll()[0];}
  
  var type = $(this).data('type');

  if (!type) {
      type = "main";
  }

  var u_username = $(this).data('username')
  var u_phone = $(this).data('phone')
  var u_id = $(this).data('userid')
  var vac_id = $(this).data('id')
  
  var data = {
      vacancy_id: $(this).data('id'),
      username:u_username || 'Без имени',
      phone:u_phone||'',
      user_id:u_id
  }

  if (canSendFeedback(data.vacancy_id)) {
  
    if (u_id && u_username && u_phone) {
        
        $.ajax({
            method: "post",
            url: "/ajax/vacancy-feedback",
            data:data,
            success: function(data) {
                if (data.success) {
                    canSendFeedback(vac_id, true);
                    if (getCookie('thanks')) {
                        if (lang == 'pl') {
                            Swal.fire(
                                'Dziękuję Ci!',
                                'Twoja aplikacja została pomyślnie wysłana do pracodawcy!<br> Imię: '+u_username +' <br> Połączenie:' +u_phone,
                                'success'
                            );
                        } else if (lang == 'ua') {
                            Swal.fire(
                                'Дякую!',
                                'Ваш відгук був успішно відправлений роботодавцю!<br> ім\'я: '+u_username +' <br> зв\'язок:' +u_phone,
                                'success'
                            );
                        } else {
                            Swal.fire(
                                'Спасибо!',
                                'Ваш отклик был успешно отправлен работодателю!<br> Имя: '+u_username +' <br> Связь:' +u_phone,
                                'success'
                            );
                        }
                    }else{
                        setCookie('thanks', 'true')
                        window.location.href = "/pay/thanks";
                    }
                    window.tracker.send("event", "ReplyReg", "ReplyReg_1");
                }
            }
        })
    }else{
        var t1, t2, t3, t4, t5, t6, t7, t8;
        
        if (lang == 'pl') {
            t1 = 'Jak się z Tobą skontaktować';
            t2 = 'Numer telefonu';
            t3 = 'Dalej';
            t4 = 'Anuluj';
            t5 = 'Jak mogę do ciebie zadzwonić?';
            t6 = 'Philip';
            t7 = 'Dziękuję Ci!';
            t8 = 'Twoja aplikacja została pomyślnie wysłana do pracodawcy!<p style="font-size:12px;font-style:italic;margin-top:16px;">Możesz zarejestrować się na stronie, aby nie wprowadzać danych za każdym razem</p>';
            offlink = 'Potwierdzam zgodę z <a href="/pl/privacy" style="color:blue;">ofertą publiczną</a> strony layboard.com';
        } else if (lang == 'ua') {
            t1 = 'Як з Вами зв\'язатися?';
            t2 = 'Номер телефону';
            t3 = 'Далі';
            t4 = 'Скасувати';
            t5 = 'Як до вас звертатись?';
            t6 = 'Микола';
            t7 = 'Дякую!';
            t8 = 'Ваш відгук був успішно відправлений роботодавцю!<p style="font-size:12px;font-style:italic;margin-top:16px;">Ви можете зареєструватися на сайті щоб не вводити дані щоразу</p>';
            offlink = 'Підтверджую свою згоду з <a href="/privacy" style="color:blue;">публічною офертою</a> сайту layboard.com';
        } else {
            t1 = 'Как с Вами связатся';
            t2 = 'Номер телефона';
            t3 = 'Дальше';
            t4 = 'Отмена';
            t5 = 'Как к Вам обращаться?';
            t6 = 'Иван';
            t7 = 'Спасибо!';
            t8 = 'Ваш отклик был успешно отправлен работодателю!<p style="font-size:12px;font-style:italic;margin-top:16px;">Вы можете зарегистрироваться на сайте чтобы не вводить данные каждый раз</p>';
            offlink = 'Подтверждаю свое согласие с <a href="/privacy" style="color:blue;">публичной офертой</a> сайта layboard.com';
        }
        
        Swal.fire({
            title: t1,
            text: t2,
            html: '<input type="text" id="phone" class="swal2-input" style="margin-bottom:4px">' +
          '<div style="text-align: left;font-size: 12px;display: flex;align-items: center;">' +
          '<img class="phone-hint-ph" style="margin-right:8px"></img>' +
          '<span class="phone-hint-name"></span></div>' +
          '<div style="text-align: left;font-size: 12px;display: flex;align-items: center;">' +
          '<input type="checkbox" id="data-consent" style="margin-right:8px">' +
          '<label for="data-consent">'+offlink+'</label></div>',
            inputAttributes: {
                autocapitalize: 'off',
            },
            //inputValue:u_phone,
            inputPlaceholder: '+38(000)000-11-22',
            showCancelButton: true,
            confirmButtonText: t3,
            cancelButtonText: t4,
            reverseButtons: true,
            preConfirm: function(login){
                if ($('#phone').inputmask("isComplete")){
                    return $('#phone').val();
                }else{
                    Swal.showValidationMessage(t1)
                }
            },

            onOpen() {
                Swal.getConfirmButton().disabled = true; // Disable confirm button initially

                // Add event listener for checkbox
                document.getElementById('data-consent').addEventListener('input', () => {
                    Swal.getConfirmButton().disabled = !document.getElementById('data-consent').checked;
                });

                var maskOpts = {
                    inputmask: {
                        definitions: {
                            '#': {
                                validator: "[0-9]",
                                cardinality: 1
                            }
                        },
                        //clearIncomplete: true,
                        showMaskOnHover: false,
                        //autoUnmask: true
                    },
                    match: /[0-9]/,
                    replace: '#',
                    list: $.masksSort($.masksLoad("/js/phone-codes.json?v2"), ['#'], /[0-9]|#/, "mask"),
                    listKey: "mask",
                    onMaskChange: function(maskObj, completed) {
                        if (completed) {
                            var hint = maskObj.name_ru;
                            if (maskObj.desc_ru && maskObj.desc_ru != "") {
                                hint += " (" + maskObj.desc_ru + ")";
                            }
                            // maskObj.cc to lowercase
                            var lg = maskObj.cc.toLowerCase();
                            $('.phone-hint-ph').attr('src', '/img/flags/svg/'+lg+'.svg');
                            $('.phone-hint-ph').css('width', '24px');
                            $('.phone-hint-name').html(hint);
                            
                        }else{
                            $('.phone-hint-ph').attr('src', '')
                            $('.phone-hint-name').html('');
                        }
                        
                        $(this).attr("placeholder", "+_(___)___-____");
                    }
                };
            
                $(".swal2-input").inputmasks(maskOpts);
            }
        }).then(function(result){
            data.phone = result.value;
            if (!isOpera && typeof window.tracker !== 'undefined') {
                if (type == 'right') window.tracker.send("event", "ReplyRight", "ReplyRight_2");
                if (type == 'bottom') window.tracker.send("event", "ReplyBottom", "ReplyBottom_2");
            }

            Swal.fire({
                title: t5,
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'on'
                },
                inputPlaceholder: t6,
                inputValue:u_username,
                showCancelButton: false,
                confirmButtonText: t3,
                reverseButtons: true,
            }).then(function(result) {
                if (result.value) { 
                    data.username = result.value;
                }
                
                $.ajax({
                    method: "post",
                    url: "/ajax/vacancy-feedback",
                    data:data,
                    success: function(data) {
                        if (data.success) {
                            canSendFeedback(vac_id, true);
                            if (getCookie('thanks')) {
                                Swal.fire(
                                    t7,
                                    t8,
                                    'success'
                                );
                            }else{
                                setCookie('thanks', 'true')
                                window.location.href = "/pay/thanks";
                            }
                            if (!isOpera && typeof window.tracker !== 'undefined') {
                                    if (type == 'right') window.tracker.send("event", "ReplyRight", "ReplyRight_3");
                                    if (type == 'bottom') window.tracker.send("event", "ReplyBottom", "ReplyBottom_3");
                                    if (type == 'main') window.tracker.send("event", "ReplyMain", "ReplyMain_1");
                                }
                        }
                    }
                })
            })
        })
    }
  }
});
$('.js-switch-lang').on('click', function(e){
    e.preventDefault();

    var link = $(this).attr('href');
    var lang = $(this).data('lang');

    $.ajax({
        url:'/ajax/switch-lang?lang='+lang,
        success: function(data) {
            
            window.location.href = link;
        }
    })

});

$('.js-start-chat').on('click', function(e){
    e.preventDefault();

    var reciver_id = $(this).data('reciver');

    var t1,t2,t3,t4,t5,t6;

    if (lang == 'pl') {
        t1 = 'Napisz wiadomość';
        t2 = 'Wysłać';
        t3 = 'Anuluj';
        t4 = 'Wiadomość nie może być pusta';
        t5 = 'Wiadomość wysłana';
        t6 = 'Możesz teraz - <a href="/profile/chat/index" style="color:#ff1f1f;">przejść do wiadomości<a>';
    } else if (lang == 'ua') {
        t1 = 'Напишіть повідомлення';
        t2 = 'Надіслати';
        t3 = 'Скасувати';
        t4 = 'Повідомлення не може бути порожнім';
        t5 = 'Повідомлення надіслано';
        t6 = 'Тепер ви можете - <a href="/profile/chat/index" style="color:#ff1f1f;">перейти до повідомлень<a>';
    } else {
        t1 = 'Напишите сообщение';
        t2 = 'Отправить';
        t3 = 'Отмена';
        t4 = 'Сообщение не может быть пустым';
        t5 = 'Сообщение отправлено';
        t6 = 'Теперь вы можете - <a href="/profile/chat/index" style="color:#ff1f1f;">перейти к сообщениям<a>';
    }

    Swal.fire({
        title: t1,
        input: 'textarea',
        inputValue:'',
        showCancelButton: true,
        confirmButtonText: t2,
        cancelButtonText: t3,
        reverseButtons: true,
        preConfirm: function(text) {
            if (!text) {
                Swal.showValidationMessage(t4)
            }
        },
    }).then(function(result){
        var text = result.value;
        var data = {
            reciver_id: reciver_id,
            text: text,
        };

        $.ajax({
            method: "post",
            url: "/profile/chat/send-clean",
            data:data,
            success: function(data) {
                var data = JSON.parse(data);
                if (data.success) {
                    Swal.fire(
                        t5,
                        t6,
                        'success'
                    );
                }
            }
        })
    })
});

$('.js-start-chat-rezume').on('click', function(e){
    e.preventDefault();

    var vac_name = $(this).data('name');
    var vac_id = $(this).data('id');
    var sender_id = $(this).data('sender');

    var t1, t2, t3, t4, t5, t6, t7,t8,t9;

    if (lang == 'pl') {
        t1 = 'Napisać wiadomość';
        t2 = 'Witam, jestem zainteresowany Twoim CV. "'+vac_name+'"';
        t3 = 'Wysłać';
        t4 = 'Anuluj';
        t5 = 'Wiadomość nie może być pusta!';
        t6 = 'Wiadomość wysłana!';
        t7 = 'Teraz możesz - <a href="/profile/chat/index" style="color:#ff1f1f;">przejdź do wiadomości<a>';
        t8 = 'Brak dostępu';
        t9 = 'Nie masz dostępu do naszej Bazy CV. <br><a href="/profile/rezume/get-access" style="display:inline-block;margin-top:20px;" class="jreviews__form-submit-btn">Uzyskać dostęp</a>';
    } else if (lang == 'ua') {
        t1 = 'Напишіть повідомлення';
        t2 = 'Привіт, мене зацікавило ваше резюме "'+vac_name+'"';
        t3 = 'Надіслати';
        t4 = 'Скасувати';
        t5 = 'Повідомлення не може бути порожнім!';
        t6 = 'Повідомлення надіслано';
        t7 = 'Тепер ви можете - <a href="/profile/chat/index" style="color:#ff1f1f;">перейти до повідомлень<a>';
        t8 = 'Немає доступу';
        t9 = 'Ви не маєте доступу до нашої Бази Резюме. <br><a href="/profile/rezume/get-access" style="display:inline-block;margin-top:20px;" class="jreviews__form-submit-btn">Отримати доступ</a>';
    } else {
        t1 = 'Напишите сообщение';
        t2 = 'Здравствуйте, меня заинтересовало ваше резюме "'+vac_name+'"';
        t3 = 'Отправить';
        t4 = 'Отмена';
        t5 = 'Сообщение не может быть пустым!';
        t6 = 'Сообщение отправлено!';
        t7 = 'Теперь вы можете - <a href="/profile/chat/index" style="color:#ff1f1f;">перейти к сообщениям<a>';
        t8 = 'Нет доступа';
        t9 = 'У вас нет доступа к нашей Базе Резюме. <br><a href="/profile/rezume/get-access" style="display:inline-block;margin-top:20px;" class="jreviews__form-submit-btn">Получить доступ</a>';
    }

    $.ajax({
        url:'/ajax/get-rezume-phone?id='+vac_id,
        success:function(data) {
            if (data.success) {
                if (data.hasAccess) {
                    Swal.fire({
                        title: t1,
                        input: 'textarea',
                        inputValue: t2,
                        showCancelButton: true,
                        confirmButtonText: t3,
                        cancelButtonText: t4,
                        reverseButtons: true,
                        preConfirm: function(text) {
                            if (!text) {
                                Swal.showValidationMessage(t5)
                            }
                        },
                    }).then(function(result){
                
                        var text = result.value;
                        var sender = sender_id;
                        var vacancy_id = vac_id;
                
                        var data = {
                            sender_id: sender,
                            vacancy_id: vacancy_id,
                            text: text,
                        };
                
                        $.ajax({
                            method: "post",
                            url: "/profile/chat/send-rezume",
                            data:data,
                            success: function(data) {
                                var data = JSON.parse(data);
                                console.log(data);
                                if (data.success) {
                                    Swal.fire(
                                        t6,
                                        t7,
                                        'success'
                                    );
                                }
                            }
                        })
                    });
                }else{
                    Swal.fire(
                        t8,
                        t9,
                        'info'
                    );
                }
            }else{
                Swal.fire(
                    'Упс!',
                    (isRu)?'Что-то пошло не так. попробуйте еще раз!':'Щось пішло не так. спробуйте ще раз',
                    'error'
                );
            }
        },
        error: function() {
            Swal.fire(
                'Упс!',
                (isRu)?'Что-то пошло не так. попробуйте еще раз!':'Щось пішло не так. спробуйте ще раз',
                'error'
            );
        }
    })

    
});

$('.js-phone-click').on('click', function(e) {
    var id = $(this).data('id');
    var phone = $(this).data('phone');

    $.ajax({
        url:'/ajax/phone-click?id='+id,
        methond:"GET",
    });

    if ($(this).text().includes('Показать телефон') || $(this).text().includes('Показати телефон') || $(this).text().includes('Pokaż telefon')) {
        e.preventDefault();
        $(this).html(phone);
    }
});
$('.js-send-rzm').on('click', function(e) {
    e.preventDefault();
    var id = $(this).data('id');

    $.ajax({
        method:'post',
        url: '/ajax/send-rezume',
        data: {vacancy_id:id},
        success:function(data) {
            //var data = JSON.parse(data);

            if (data.result == 'SENDED') {
                if (lang == 'pl') {
                    Swal.fire(
                        'Dziękuję Ci!',
                        'Twoje CV zostało wysłane do pracodawcy',
                        'success'
                    );
                } else if (lang == 'ua') {
                    Swal.fire(
                        'Дякую!',
                        'Ваше резюме було надіслано роботодавцю ',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Спасибо!',
                        'Ваше резюме было отправленно работодателю',
                        'success'
                    );
                }
                
            }else if (data.result == 'NO_REZUME') {
                window.location.href = '/profile/rezume/add';
            }

        }
    })

});

$('.js-fav-btn-vacancy').on('click', function(e) {
    e.preventDefault();
    var vac_id = $(this).data('id');
    var self = $(this);

    if (self.data('processing')) {
        return;
    }

    var t1,t2;
    if (lang == 'pl') {
        t1 = 'Dodaj do ulubionych';
        t2 = 'Usuń z ulubionych';
    } else if (lang == 'ua') {
        t1 = 'Додати в обране';
        t2 = 'Прибрати з обраного';
    } else {
        t1 = 'Добавить в избранное';
        t2 = 'Убрать из избранного';
    }

    self.css('opacity', '0.5');
    self.html('<i class="fas fa-spinner fa-spin"></i>');
    self.data('processing', true);
    if ($(this).hasClass('active')) {
        $.ajax({
            method:'post',
            url: '/ajax/fav-vacancy-remove',
            data: {vacancy_id:vac_id},
            success:function(data) {
                self.css('opacity', '1');
                self.html('<svg><use xlink:href="#svg-favorite"></use></svg>')
                self.removeClass('active');
            },
            complete: function() {
                self.data('processing', false);
            }
        })
    }else{
        $.ajax({
            method:'post',
            url: '/ajax/fav-vacancy-add',
            data: {vacancy_id:vac_id},
            success:function(data) {
                self.css('opacity', '1');
                self.html('<svg><use xlink:href="#svg-favorite-fill"></use></svg>');
                self.addClass('active');
            },
            complete: function() {
                self.data('processing', false);
            }
        })
    }
})


$('.js-dislike').on('click', function(e) {
    e.preventDefault();
    var company_id = $(this).data('company-id');
    var self = $(this);

    if (self.data('processing')) {
        return;
    }

    self.css('opacity', '0.5');
    self.html('<i class="fas fa-spinner fa-spin"></i>');
    self.data('processing', true);

    $.ajax({
        method: "post",
        url: "/ajax/add-to-blacklist",
        data:{company_id:company_id},
        success: function(data) {
            if (data.success) {
                Swal.fire(
                    (isRu)?'Добавлено!':'Додано!',
                    (isRu)?
                        'Теперь эта компания у вас в черном списке. Вы не будете видеть вакансии этой компании в результатах поиска':
                        'Тепер ця компанія у вас в чорному списку. Ви не будете бачити вакансії цієї компанії в результатах пошуку',
                    'success'
                ).then((result) => {
                    document.location.reload();
                });
            }
        }
    })
})

$('.js-fav-btn-rezume').on('click', function(e) {
    e.preventDefault();
    var rezume_id = $(this).data('id');
    var self = $(this);

    if (self.data('processing')) {
        return;
    }

    self.css('opacity', '0.5');
    self.html('<i class="fas fa-spinner fa-spin"></i>');
    self.data('processing', true);

    if ($(this).hasClass('active')) {
        $.ajax({
            method:'post',
            url: '/ajax/fav-rezume-remove',
            data: {rezume_id:rezume_id},
            success:function(data) {
                self.css('opacity', '1');
                self.html('<svg><use xlink:href="#svg-favorite"></use></svg>')
                self.removeClass('active');
            },
            complete: function() {
                self.data('processing', false);
            }
        })
    }else{
        $.ajax({
            method:'post',
            url: '/ajax/fav-rezume-add',
            data: {rezume_id:rezume_id},
            success:function(data) {
                self.css('opacity', '1');
                self.html('<svg><use xlink:href="#svg-favorite-fill"></use></svg>');
                self.addClass('active');
            },
            complete: function() {
                self.data('processing', false);
            }
        })
    }
})
$('.js-open-photo').on('click', function(e) {
    var path = $(this).data('path');
    if (lang == 'pl') {
        Swal.fire({
            width: 600,
            padding: '3em',
            imageUrl: path,
            imageWidth: 550,
            confirmButtonText:'Blisko'
        });
    } else if (lang == 'ua') {
        Swal.fire({
            width: 600,
            padding: '3em',
            imageUrl: path,
            imageWidth: 550,
            confirmButtonText:'Закрити'
        });
    } else {
        Swal.fire({
            width: 600,
            padding: '3em',
            imageUrl: path,
            imageWidth: 550,
            confirmButtonText:'Закрыть'
        });
    }
    

});

$( ".verify-icon" ).hover(
    function() {
        if (lang == 'pl') {
            $( this ).append( $( "<span>zaufana firma</span>" ) );
        } else if (lang == 'ua') {
            $( this ).append( $( "<span>перевірена компанія</span>" ) );
        } else {
            $( this ).append( $( "<span>проверенная компания</span>" ) );
        }

        
    }, function() {
        $( this ).find( "span" ).last().remove();
    }
);

$('.js-company-subscribe.another').on('click', function(e) {
    e.preventDefault();
    var id = $(this).data('id');
    
    let self = this;

    $.ajax({
        method:'get',
        url: '/ajax/subscribe-company?id=' + id,
        success:function(data) {
            if (data.success) {
                if (data.isSubscribed) {
                    Swal.fire(
                        (isRu)?'Вы подписались!':'Ви підписалися!',
                        (isRu) ?'Теперь вы будете получать обновления связаные с этой компанией':
                        'Тепер ви отримуватимете оновлення пов\'язані з цією компанією',
                        'success'
                    );
                    $(self).text('-');
                    $(self).css('border-color', '#ddd');
                    $(self).css('color', '#ddd');
                    
                }else{
                    Swal.fire(
                        (isRu)?'Вы отписались!':'Ви відписалися!',
                        (isRu) ?'Вы больше не будете получать обновления связаные с этой компанией':
                        'Ви більше не отримуватимете оновлення пов\'язані з цією компанією',
                        'success'
                    );
                    $(self).text('+');
                    $(self).css('border-color', '#FF5252');
                    $(self).css('color', '#FF5252');
                }

            }
        }
    })

});

$('.js-company-subscribe:not(.another)').on('click', function(e) {
    e.preventDefault();
    var id = $(this).data('id');
    
    let self = this;
    var t1,t2,t3,t4,t5,t6;
    if (lang == 'pl') {
        t1 = 'Zasubskrybowałeś!';
        t2 = 'Teraz będziesz otrzymywać aktualizacje związane z tą firmą';
        t3 = 'Anulować subskrypcję';
        t4 = 'Anulowałeś subskrypcję';
        t5 = 'Nie będziesz już otrzymywać aktualizacji związanych z tą firmą.';
        t6 = 'Subskrybuj';
    } else if (lang == 'ua') {
        t1 = 'Ви підписалися!';
        t2 = 'Тепер ви отримуватимете оновлення пов\'язані з цією компанією';
        t3 = 'Відписатися';
        t4 = 'Ви відписалися';
        t5 = 'Ви більше не отримуватимете оновлення пов\'язані з цією компанією';
        t6 = 'Підписатися';
    } else {
        t1 = 'Вы подписались!';
        t2 = 'Теперь вы будете получать обновления связаные с этой компанией';
        t3 = 'Отписаться';
        t4 = 'Вы отписались';
        t5 = 'Вы больше не будете получать обновления связаные с этой компанией';
        t6 = 'Подписаться';
    }

    $.ajax({
        method:'get',
        url: '/ajax/subscribe-company?id=' + id,
        success:function(data) {
            if (data.success) {
                if (data.isSubscribed) {
                    Swal.fire(
                        t1,
                        t2,
                        'success'
                    );
                    $(self).text(t3);
                    $(self).css('border-color', '#ddd');
                    $(self).css('color', '#ddd');
                    
                }else{
                    Swal.fire(
                        t4,
                        t5,
                        'success'
                    );
                    $(self).text(t6);
                    $(self).css('border-color', '#FF5252');
                    $(self).css('color', '#FF5252');
                }

            }
        }
    })

});



$('body').on('click', '.js-like-faq', function(e) {
    e.preventDefault();
    var ids = window.localStorage.getItem('ids_faq_topic');
    var arr = [];

    if (ids) {
        arr = JSON.parse(ids);
    }

    if (!arr.includes($(this).data('id'))) {
        $(this).html('<i class="fas fa-spinner fa-spin"></i>');

        let self = this;
        $.ajax({
            url:'/ajax/question-like?id='+$(this).data('id'),
            success:function(data) {
                $(self).html('<i class="far fa-thumbs-up"></i> '+data);
                arr.push($(self).data('id'));
                window.localStorage.setItem('ids_faq_topic', JSON.stringify(arr));
            }
        })
        
    }
});

$(".phone-mask").inputmasks({
    inputmask: {
        
        definitions: {
            '#': {
                validator: "[0-9]",
                cardinality: 1
            }
        },
        //clearIncomplete: true,
        showMaskOnHover: false,
        //autoUnmask: true
    },
    match: /[0-9]/,
    replace: '#',
    list: $.masksSort($.masksLoad("/js/phone-codes.json?v1"), ['#'], /[0-9]|#/, "mask"),
    listKey: "mask",
    onMaskChange: function(maskObj, completed) {
        if (completed) {
            var hint = maskObj.name_ru;
            if (maskObj.desc_ru && maskObj.desc_ru != "") {
                hint += " (" + maskObj.desc_ru + ")";
            }

            $('.phone-hint-ph').attr('src', 'https://www.countryflags.io/'+maskObj.cc+'/flat/16.png')

            if ($('#company-country_id').length > 0) {
                if ($(this).hasClass('company-phone-mask')) {

                    var option = $('#company-country_id').find('option:contains('+maskObj.name_ru+')');
                    
                    if (option.length > 0) {
                        $('#company-country_id').val(option.val());
                    }else{
                        $('#company-country_id').val(4);
                    }
                }
            }
            
        }else{
            $('.phone-hint-ph').attr('src', '')
            $('.phone-hint-name').html('');
        }
    }
});

$(document).on('click', '.js-share-toggle', function (e) {
    e.preventDefault();
    $(this).siblings('.share-dropdown').toggleClass('active');
});

// Close dropdown when clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).closest('.share-dropdown-container').length) {
        $('.share-dropdown').removeClass('active');
    }
});

// Handle copy link action for both guests and logged-in users
$(document).on('click', '.js-copy-link', function (e) {
    e.preventDefault();
    var link = $(this).data('link');

    // Create temporary input element for copying
    var tempInput = $('<input>');
    $('body').append(tempInput);
    tempInput.val(link).select();
    document.execCommand('copy');
    tempInput.remove();

    // Close dropdown if it's open
    $('.share-dropdown').removeClass('active');

    // Show success message
    Swal.fire({
        title: 'Ссылка скопирована!',
        text: 'Теперь вы можете поделиться ею с друзьями',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
    });
});


// Handle topic select change
$('#topic-select').on('change', function () {
    window.location.href = $(this).val();
});

// Toggle sort dropdown
$('.sort-label').on('click', function () {
    $('#sort-dropdown').toggleClass('active');
    $(this).find('.sort-icon').toggleClass('fa-chevron-down fa-chevron-up');
});

// Handle sort option selection
$('#sort-dropdown a').on('click', function (e) {
    e.preventDefault();

    // Get current URL and add/update sort parameter
    const sortType = $(this).data('sort');
    let currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('sort', sortType);

    // Navigate to the URL with sort parameter
    window.location.href = currentUrl.toString();

    // Update visible sort text (optional)
    // $('.sort-label span').text($(this).text());
});

// Close sort dropdown when clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).closest('.sort-container').length) {
        $('#sort-dropdown').removeClass('active');
        $('.sort-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
});

$('.js-find').on('click', function (e) {
    e.preventDefault();
    var q = $('#q').val();
    var countrySlug = $('[name="country_id"] option:selected').data('slug');
    var specialitySlug = $('[name="speciality_id"] option:selected').data('slug');

    // If search query exists, submit the form normally
    if (q) {
        $('#faq-search').submit();
        return;
    }

    // Otherwise, build URL based on selected country and speciality
    var baseUrl = '';

    // Set language prefix
    if (lang == 'pl') {
        baseUrl = '/pl/forum';
    } else if (lang == 'ua') {
        baseUrl = '/ua/forum';
    } else {
        baseUrl = '/forum';
    }

    // Build URL with country and/or speciality
    if (countrySlug && specialitySlug) {
        // Both country and speciality selected
        window.location.href = baseUrl + '/' + countrySlug + '/speciality-' + specialitySlug;
    } else if (countrySlug) {
        // Only country selected
        window.location.href = baseUrl + '/' + countrySlug;
    } else if (specialitySlug) {
        // Only speciality selected
        window.location.href = baseUrl + '/speciality-' + specialitySlug;
    } else {
        // Nothing selected, go to main forum
        window.location.href = baseUrl;
    }
});


$('body').on('click', '.js-reply-general', function(e) {
    e.preventDefault();

    $('.reply-form').css('display', 'none');

    var model = $(this).data('model');
    var id = $(this).data('id');
    var name = $(this).data('name');
    
    var form = $(this).closest('.social-post').find('.reply-form');
    form.css('display', 'block');
    form.find('[name="reply_model"]').val(model);
    form.find('[name="reply_id"]').val(id);
    form.find('[name="reply_text"]').val('@'+name+' ');
    form.find('[name="reply_text"]').get(0).focus();
});
$('#loadMoreRooms').click(function() {
    var btn = $(this);
    var offset = btn.data('offset');
    var isMini = btn.data('is-mini');

    var t1 = 'Загрузка...';
    var t2 = 'Еще';

    if (lang == 'pl'){
        t1 = 'Ładowanie...';
        t2 = 'Więcej';
        
    }

    if (lang == 'ua'){
        t1 = 'Заватаження...';
        t2 = 'Ще';
    }
    btn.text(t1);
    btn.attr('disabled', true);
    $.ajax({
        url: '/profile/chat/load-more',
        data: { offset: offset, isMini: isMini},
        success: function(data) {
            if (isMini) {
                $('.js-open-room:last').after(data);
            }else{
                $('.room-contact:last').after(data);
            }
            btn.data('offset', offset + 10); // предполагая, что загружается 30 комнат за раз

            btn.text(t2);
            btn.attr('disabled', false);

            if (($(data).length - 1) < 10) {
                btn.remove();
            }
        }
    });
});
$('body').on('click', '.social-card-link', function(e) {
    e.preventDefault();
    
    if ($(this).data('link')) {
        window.location.href = $(this).data('link');
    }
});
$('body').on('click', '.js-save-edit', function(e) {
    e.preventDefault();
   
    var model = $(this).data('model');
    var id = $(this).data('id');
    var text = $(this).parent().find('textarea').val();

    if (text) {
        $.ajax({
            url:'/ajax/post-edit',
            method:'POST',
            data:{model:model,id:id,text:text},
            success:function(data) {
                if (data.success) {
                    window.location.reload();
                }else{
                    console.log(data);
                }
            }
        })
    }
});
$('body').on('click', '.js-select-friend', function(e) {
    e.preventDefault();
    var link = $('#ajax-hidden-link').data('link');

    if (link) {
        var user_id = $(this).data('user-id');
        var self = this;
        var text = "<a href=\""+link+"\">Посмотреть пост</a>";

        $.ajax({
            url: "/profile/chat/send-clean",
            method:'POST',
            data: {reciver_id:user_id, text:text},
            success: function(data) {
                var data = JSON.parse(data);

                if (data.success === true) {
                    Swal.fire(
                        'Отлично!',
                        'Пользователь получил ваше сообщение',
                        'success'
                    );
                    $(self).remove();
                }else{
                    Swal.fire(
                        'Упс!',
                        'Что-то пошло не так :(',
                        'error'
                    );
                }
            }
        })

        Swal.close();
    }
});
$('body').on('click', '.js-send-post', function(e) {
    e.preventDefault();
    var link = $(this).data('link');
    $.ajax({
        url:"/profile/settings/get-friends-html",
        success:function(data) {
            Swal.fire({
                title: 'Кому хотите отправить эту запись?',
                icon: 'info',
                html:'<div id="ajax-hidden-link" data-link="'+link+'">'+data,
                showCloseButton: true,
                showCancelButton: true,
            });
        }
    });
});
$('body').on('click', '.js-make-repost', function(e) {
    e.preventDefault();
    var model = $(this).data('model');
    var id = $(this).data('id');

    Swal.fire({
        title: 'Сделать репост записи?',
        text:'Эта запись будет размещена на вашей странице в профиле',
        showCancelButton: true,
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
      }).then((result) => {

        if (result.value) {
            $.ajax({
                url:'/ajax/make-repost',
                method:'POST',
                data:{model:model,id:id},
                success:function(data) {
                    if (data.success) {
                        Swal.fire('Готово!', '', 'success');
                    }
                }
            });
        }
    });
/*
    
    */
});
$('body').on('click', '.js-edit-post', function(e) {
    e.preventDefault();
    var area  = $(this).parent().parent().parent().parent().parent().find('.js-text-area-input');
    var text = area.text().trim();
    area.html('<textarea class="editable-input" rows="5">'+text+'</textarea>');

    var model = $(this).data('model');
    var id = $(this).data('id');
    var space = $(this).parent().parent().parent().parent().parent().find('.js-text-area-input').parent();

    $(this).remove();
    
    space.append('<a href="#" class="reply edit js-save-edit" data-model="'+model+'" data-id="'+id+'"><i class="far fa-save"></i> Сохранить</a>')
    space.append('<a href="#" class="js-add-new-photo" data-model="'+model+'" data-id="'+id+'"><i class="fas fa-plus"></i> Добавить фото</a>');
    updatesPostPhotos(model, id);
})

function updatesPostPhotos(model, id) {
    $('#img-gallery-'+id).parent().html('<div id="ajax-photos-'+id+'" style="display:flex;flex-wrap:wrap;"><p>Загрузка...</p></div>');

    $.ajax({
        url:'/ajax/post-update-photo',
        data:{model:model,id:id},
        method:'post',
        success:function(data) {
            if (data.success) {
                $('#ajax-photos-'+id).html('');
                if (data.images) {
                    data.images.forEach(element => {
                        var imgThumb = $('<div class="img-thumb"></div>');
                        var imagePreview = $('<img class="image-preview" src="'+element.path+'">');
                        var removeImageBtn = $('<a href="#" class="js-drop-img remove-image-btn" data-model="'+model+'" data-remove_id="'+element.id+'"><i class="fas fa-trash"></i></a>');

                        imgThumb.append(imagePreview);
                        imgThumb.append(removeImageBtn);
                        setTimeout(() => {
                            $('#ajax-photos-'+id).append(imgThumb);
                        }, 150);
                    });
                }else{
                    $('#img-gallery-'+id).parent().html('<div id="ajax-photos-'+id+'" style="display:flex;flex-wrap:wrap;"></div>');
                }
            }
        }
    });
}

$('body').on('click', '.js-drop-img', function(e) {
    e.preventDefault();
    var id = $(this).data('remove_id');
    var model = $(this).data('model');
    var self = this;

    $.ajax({
        url:'/ajax/post-update-photo',
        data:{remove_id:id, model:model},
        method:'post',
        success:function(data) {
            if (data.success) {
                $(self).parent().remove();
            }
        }
    });
});

$('body').on('click', '.js-add-new-photo', function(e) {
    e.preventDefault();
    var model = $(this).data('model');
    var id = $(this).data('id');
    var self = this;

    var fileInput = $('<input type="file" id="swal-input-file" style="display: none;">');
    $('body').append(fileInput);

    fileInput.trigger('click');

    fileInput.on('change', function() {
        var reader = new FileReader();
        reader.onload = function(e) {
            Swal.fire({
                title: 'Добавить фото',
                html: '<img src="'+e.target.result+'" style="width:100%;height:auto;">',
                showCancelButton: true,
                confirmButtonText: 'Добавить',
                cancelButtonText: 'Отмена',
                reverseButtons: true,
                preConfirm: function() {
                    return new Promise(function(resolve) {
                        var file = $('#swal-input-file').prop('files') ? $('#swal-input-file').prop('files')[0] : null;
                        resolve([file]);
                    });
                },
            }).then(function(result){
                if (result.value) {
                    var file = result.value[0];
                    var formData = new FormData();
                    formData.append('file', file);
                    formData.append('model', model);
                    formData.append('id', id);

                    $.ajax({
                        url:'/ajax/post-update-photo',
                        method:'POST',
                        data:formData,
                        processData: false,
                        contentType: false,
                        success:function(data) {
                            if (data.success) {
                                $('#ajax-photos-'+id).html('');
                                if (data.images) {
                                    data.images.forEach(element => {
                                        var imgThumb = $('<div class="img-thumb"></div>');
                                        var imagePreview = $('<img class="image-preview" src="'+element.path+'">');
                                        var removeImageBtn = $('<a href="#" class="js-drop-img remove-image-btn" data-model="'+model+'" data-remove_id="'+element.id+'"><i class="fas fa-trash"></i></a>');
                
                                        imgThumb.append(imagePreview);
                                        imgThumb.append(removeImageBtn);
                                        setTimeout(() => {
                                            $('#ajax-photos-'+id).append(imgThumb);
                                        }, 150);
                                    });
                                }
                            }
                        }
                    })
                }

                fileInput.remove();
            });
        }
        reader.readAsDataURL(this.files[0]);
    });
});

$('body').on('click', '.js-send-reply', function(e) {
    e.preventDefault();

    var input = $(this).parent().find('textarea');
    var model = input.data('reply-model');
    var parent_id = input.data('reply-parent-id') || 0;
    var id = input.data('reply-id');
    var text = input.val();
    
    if (lang == 'pl') {
        t3 = 'Sprawdź błędy';
    } else if (lang == 'ua') {
        t3 = 'Перевірте помилки';
    } else {
        t3 = 'Проверьте ошибки';
    }
    

    $(this).html('<i class="fas fa-spinner fa-spin"></i>');
    $(this).prop('disabled', true);

    if (text) {
        $.ajax({
            url:'/ajax/send-reply-general',
            method:'POST',
            data:{text:text,model:model,id:id, parent_id:parent_id},
            success:function(data) {
                if (data.success){
                    window.location.reload();
                }else{
                    if (data.errors) {
                        var txt ="";
                        data.errors.forEach(element => {
                            txt += element+'<br>';
                        });
                    }
                    Swal.fire(
                        t3,
                        txt,
                        'error'
                    );
                }
            }
        });
    }
});

let post_page = 2;
var isLoading = false;
var existingElementsCount = $('.js-fix-images').length;
function initImagesGrid(element) {

    var arr = [];
    var id = $(element).data('id');

    $('#img-gallery-' + id).find('.hidden-img').each((i, hiddenElement) => {
        arr.push($(hiddenElement).data('path'))
    });

    $('#img-gallery-' + id).imagesGrid({
        images: arr
    });
}

$('body').on('click', '.js-social-more', function(e) {
    e.preventDefault();

    var user = $(this).data('user');
    var self = this;
    let ajaxUrl = window.location.pathname ;


    $.ajax({
        url:ajaxUrl,
        method:'GET',
        data:{page:post_page,id:user},
        success:function(data) {
            var data = JSON.parse(data);
            if (data.has) {
                $('.post-line').append(data.html);
                console.log('after ' + $('.js-fix-images').length);
                setTimeout(() => {
 
                    $('.js-fix-images').each((i, element) => {
       
                        if ((i+1) > existingElementsCount) {
            
                            initImagesGrid(element);
                        }
                    });

                    existingElementsCount = $('.js-fix-images').length
                }, 500);

                post_page++
            }else{
                $(self).remove();
            }
        }
    });
});

$('body').on('click', '.js-post-comments-more', function(e) {
    e.preventDefault();

    var date = $(this).data('last-date');
    var model = $(this).data('model');
    var id = $(this).data('id');

    var self = this;

    $.ajax({
        url:'/site/post-comment-more',
        method:'POST',
        data:{date:date,model:model,id:id},
        success:function(data) {
            $(self).parent().find('.social-childrens').append(data);
            $(self).remove();
        }
    });
});
$('.js-create-faq').on('click', function(e){
    e.preventDefault();


    var title = $('#post-social-modal [name="title-modal"]').val();
    var text = $('#post-social-modal .realtextarea-modal').val();
    var country = $('#post-social-modal [name="country_id"]').val();
    var category = $('#post-social-modal [name="category_id"]').val();
    var speciality  = $('#post-social-modal [name="speciality_id"]').val();
    var you = $('#post-social-modal [name="youtube-link-input-modal"]').val();
    var done = true;

    text = text+"\n"+you;
    if (!title || !text || !category || !country) {
        done = false;
    }


    t1 = 'Готово';
    t2 = 'Ваш пост успешно опубликован';
    t3 = 'Проверьте ошибки';
    
    var myFormData = new FormData();

    selectedFiles.forEach(function(file, index) {
        myFormData.append('files_' + index, file);
    });

    myFormData.append('title', title);
    myFormData.append('country_id', country);
    myFormData.append('category_id', category);
    myFormData.append('speciality_id', speciality);
    myFormData.append('text', text);
    
    if (done) {
        $('#post-social-modal').addClass('disable');
   
        $.ajax({
            url:'/ajax/create-faq',
            method:'POST',
            processData: false, // important
            contentType: false, // important
            data: myFormData,
            success:function(data) {
                $('#post-social-modal').removeClass('disable');
                if (data.success){
                    Swal.fire(
                        t1,
                        t2,
                        'success'
                    ).then(function(){
                        window.location.reload();
                    });
                }else{
                    if (data.errors) {
                        var txt ="";
                        data.errors.forEach(element => {
                            txt += element+'<br>';
                        });
                    }
                    Swal.fire(
                        t3,
                        txt,
                        'error'
                    );
                }
            }
        })
    }else{
        var originalBorderColor = $('#post-social-modal [name="title"]').css("border-color");

        if (!title) {
            
            $('#post-social-modal [name="title-modal"]').css("border-color", "red");
            setTimeout(function() {
                $('#post-social-modal [name="title-modal"]').css("border-color", originalBorderColor);
            }, 2000);
        }
        if (!text) {
            $('#post-social-modal .realtextarea-modal').css("border-color", "red");
            setTimeout(function() {
                $('#post-social-modal .realtextarea-modal').css("border-color", originalBorderColor);
            }, 2000);
        }

        if (!country) {
            $('#post-social-modal [name="country_id"]').css("border-color", "red");
            setTimeout(function() {
                $('#post-social-modal [name="country_id"]').css("border-color", originalBorderColor);
            }, 2000);
        }

        if (!category) {
            $('#post-social-modal [name="category_id"]').css("border-color", "red");
            setTimeout(function() {
                $('#post-social-modal [name="category_id"]').css("border-color", originalBorderColor);
            }, 2000);
        }
    }
});

$('.js-create-post').on('click', function(e){
    e.preventDefault();

    var text = $('#post-input').val();
    var you = $('#youtube-link-input').val();
    var done = true;
    
    if (you) text = text +'\n'+you;

    if (!text) {
        done = false;
    }

    t1 = 'Готово';
    t2 = 'Ваш пост успешно опубликован';
    t3 = 'Проверьте ошибки';
    
    var myFormData = new FormData();

    selectedFiles.forEach(function(file, index) {
        myFormData.append('files_' + index, file);
    });

    myFormData.append('text', text);
    
    if (done) {
        $(this).attr('disabled', true);
        $(this).css('opacity', '0.5');

        $('#drop-area').addClass('disable');
        $('#drop-area').css('opacity', '0.7');
   
        $.ajax({
            url:'/ajax/create-post',
            method:'POST',
            processData: false, // important
            contentType: false, // important
            data: myFormData,
            success:function(data) {
                $('#drop-area').removeClass('disable');
                if (data.success){
                    Swal.fire(
                        t1,
                        t2,
                        'success'
                    ).then(function(){
                        window.location.reload();
                    });
                }else{
                    if (data.errors) {
                        var txt ="";
                        data.errors.forEach(element => {
                            txt += element+'<br>';
                        });
                    }
                    Swal.fire(
                        t3,
                        txt,
                        'error'
                    );
                }
            }
        })
    }else{
        var originalBorderColor = $('#post-input').css("border-color");

        if (!text) {
            $('#post-input').css("border-color", "red");
            setTimeout(function() {
                $('#post-input').css("border-color", originalBorderColor);
            }, 2000);
        }
    }

});

var lids = window.localStorage.getItem('likes');

if (lids) {
    ariki = JSON.parse(lids);
    ariki.forEach(function(element) {
        var id = Number(element.replace(/\D+/g, ""));
        var name = element.replace(id, '');
        $('.js-like-new[data-model="'+name+'"][data-id="'+id+'"]').addClass('liked');
        $('.js-like[data-model="'+name+'"][data-id="'+id+'"]').find('i').removeClass('far').addClass('fas');
    });
}


$('.js-send-invite').on('click', function(e) {
    e.preventDefault();

    var user_id = $(this).data('user-id');
    var self = this;
    var link = $(this).data('link');
    var text = "Здравствуйте, подпишитесь на обновления нашей компании, чтобы не пропустить новые вакансии. <a href=\""+link+"\">Подписаться</a>";

    $.ajax({
        url: "/profile/chat/send-clean",
        method:'POST',
        data: {reciver_id:user_id, text:text},
        success: function(data) {
            var data = JSON.parse(data);

            if (data.success === true) {
                Swal.fire(
                    'Отлично!',
                    'Приглашение отправлено пользователю',
                    'success'
                );
                $(self).remove();
            }else{
                Swal.fire(
                    'Упс!',
                    'Что-то пошло не так :(',
                    'error'
                );
            }
        }
    })
});



$('body').on('js-click-post', '.js-delete-post', function(e) {
    e.preventDefault();
    var link = $(this).data('link');
    if (link){
        window.location.href = link;
    }
});

$('body').on('click', '.showMoreBtn', function(e) {
    e.preventDefault();
    $(this).prev(".content").find(".hiddenContent").show();
    $(this).prev(".content").find(".dots-hide").hide();
    $(this).hide();
});

$('body').on('click', '.js-delete-post', function(e) {
    e.preventDefault();

    var model = $(this).data('model');
    var id = $(this).data('id');
    
    $.ajax({
        url:'/ajax/delete-post?id='+id+'&model_string='+model,
        success:function(data) {
            window.location.reload();
        }
    })
});

$('body').on('click', '.js-like-new', function(e) {
    e.preventDefault();
    
    var ids = window.localStorage.getItem('likes');
    var arr = [];

    if (ids) {
        arr = JSON.parse(ids);
    }

    var id = $(this).data('id');
    var model = $(this).data('model');
    var parent = $(this).data('parent');
    var nummer = $(parent).find('.num').first();
    var check_id = model+id;

    if (!arr.includes(check_id)) {
        nummer.html('<i class="fas fa-spinner fa-spin"></i>');
        
        let self = this;

        $.ajax({
            url:'/ajax/general-like?id='+id+'&model_string='+model,
            success:function(data) {
                $(self).addClass('liked');
                arr.push(check_id);
                window.localStorage.setItem('likes', JSON.stringify(arr));
                nummer.html(parseInt(data))
                $(parent).find('.extra-likes').removeClass('o-none');
            }
        })
        
    }
});

document.addEventListener('input', function (event) {
    if (!event.target.classList.contains('autoresizing-textarea')) return;
    autoresizeTextarea(event.target);
}, false);

function autoresizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// $('body').on('click', '.js-post-replay', function(e) {
//     e.preventDefault();

//     var off = $(this).data('offset');
//     var post_id = $(this).data('post-id')
//     var cont = $(this).parent().find('.post-social-comments');
//     var btn = $(this);

//     var par = $(this).parent();
//     par.css('opacity', '0.4');

//     $.ajax({
//         url:'/ajax/post-replies',
//         method:'POST',
//         data:{off:off, post_id:post_id},
//         success:function(data) {
//             par.css('opacity', '1');
//             if (data.success) {
//                 if (data.html) {
//                     cont.append(data.html);
//                     if (data.count < 5) {
//                         btn.remove();
//                     }else{
//                         btn.data('offset', off+data.count);
//                     }
//                 }else{
//                     btn.remove();
//                 }
//             }
//         }
//     })
// });

    /**
     * JavaScript для обработки подгрузки комментариев через AJAX
     */
    
    $(document).ready(function () {

        $(document).on('click', '.extra-control', function () {
            var commentParent = $(this).closest('.ck-parent');

            // Toggle the collapsed state
            commentParent.toggleClass('comment-collapsed');

            // Only hide/show the content inside ck-right in the last row, not the entire row
            if (commentParent.hasClass('comment-collapsed')) {
                // Only hide the nested comments content
                commentParent.find('.ck-row:last-child .nested-comments').slideUp(200);
            } else {
                // Show the nested comments content
                commentParent.find('.ck-row:last-child .nested-comments').slideDown(200);
            }

            return false;
        });

        // // Обработчик для подгрузки комментариев первого уровня
        $(document).on('click', '.js-post-replay', function (e) {
            e.preventDefault();

            const btn = $(this);
            const postId = btn.data('post-id');
            const post_model = btn.data('model');

            const offset = btn.data('offset');
            const offsetik = btn.data('offset');

            // Если комментарии уже загружены, просто показываем их
            // if (btn.data('loaded')) {
            //     $('.post-social-comment.additional-comments').show();
            //     return;
            // }

            // Показываем лоадер
            btn.html('<i class="fa fa-spinner fa-spin"></i>');
            btn.attr('disabled', true);

            // add $_GET['sort'] if exist to ajax data
            var url = new URL(window.location.href);
            var sort = url.searchParams.get('sort');
            var data = {
                post_id: postId,
                offset: offset,
                model: post_model,
                level: 1, // Первый уровень комментариев
                parent_id: 0 // Для верхнего уровня parent_id = 0
            };

            if (sort) {
                data.sort = sort;
            }

            $.ajax({
                url: '/ajax/post-replies',
                type: 'GET',
                data: data,
                success: function (response) {
                    if (response.success) {
                        btn.before(response.html);

                        // Обновляем смещение для следующей подгрузки
                        const newOffset = btn.data('offset') + response.count;
                        btn.data('offset', newOffset);
                        btn.data('loaded', true);

                        // Скрываем кнопку, если больше нет комментариев
                        if (!response.has_more) {
                            btn.hide();
                        }else{
                            btn.text('Показать еще');
                        }
                    } else {
                        console.error('Ошибка при загрузке комментариев:', response.message);
                        btn.text('Показать еще');
                    }

                    btn.attr('disabled', false);
                },
                error: function (xhr, status, error) {
                    console.error('AJAX запрос завершился ошибкой:', error);
                    btn.text('Показать еще');
                    btn.attr('disabled', false);
                }
            });
        });

        // Обработчик для подгрузки вложенных комментариев (уровни 2 и 3)
        $(document).on('click', '.js-nested-reply', function (e) {
            e.preventDefault();

            const btn = $(this);
            const commentId = btn.data('comment-id');
            const parentComment = btn.closest('.post-social-comment');
            const nestedContainer = parentComment.find('.nested-comments').first();
            const post_model = btn.data('model');

            // Если у кнопки есть класс 'expanded', значит нужно скрыть комментарии
            if (btn.hasClass('expanded')) {
                // Скрываем дополнительные комментарии
                nestedContainer.find('.post-social-comment.additional-comments').hide();

                // Меняем текст кнопки и её состояние
                btn.text(Yii.t('app', 'Показать еще'));
                btn.removeClass('expanded');
                return;
            }

            const offset = btn.data('offset');
            const level = parentComment.hasClass('level-1') ? 2 : 3; // Определяем уровень вложенности

            // Если комментарии уже загружены, просто показываем их
            if (btn.data('loaded')) {
                nestedContainer.find('.post-social-comment.additional-comments').show();
                btn.text(Yii.t('app', 'Скрыть'));
                btn.addClass('expanded');
                return;
            }

            // Показываем лоадер
            btn.html('<i class="fa fa-spinner fa-spin"></i>');
            btn.attr('disabled', true);

            // Отправляем AJAX запрос
            $.ajax({
                url: '/ajax/post-replies',
                type: 'GET',
                data: {
                    parent_id: commentId,
                    model: post_model,
                    offset: offset,
                    level: level
                },
                success: function (response) {
                    if (response.success) {
                        // Добавляем класс для дополнительных комментариев
                        const newComments = $(response.html).addClass('additional-comments');

                        // Вставляем новые комментарии в конец контейнера
                        nestedContainer.append(newComments);

                        // Обновляем смещение для следующей подгрузки
                        const newOffset = offset + response.count;
                        btn.data('offset', newOffset);
                        btn.data('loaded', true);

                        // Скрываем кнопку, если больше нет комментариев
                        if (!response.has_more) {
                            btn.hide();
                        } else {
                            // Меняем текст кнопки на "Скрыть"
                            btn.text('Показать еще');
                            btn.addClass('expanded');
                        }
                    } else {
                        console.error('Ошибка при загрузке вложенных комментариев:', response.message);
                        btn.text('Показать еще');
                    }

                    btn.attr('disabled', false);
                },
                error: function (xhr, status, error) {
                    console.error('AJAX запрос завершился ошибкой:', error);
                    btn.text('Показать еще');
                    btn.attr('disabled', false);
                }
            });
        });

        // Обработчик для раскрытия длинного текста комментария
        $(document).on('click', '.mrbtn', function () {
            const btn = $(this);
            const commentText = btn.prev('.text');
            const moreText = commentText.find('.moreText');

            moreText.toggle();

            if (moreText.is(':visible')) {
                btn.text('Скрыть');
            } else {
                btn.text('Показать еще...');
            }
        });
    });

$('body').on('click', '.js-like', function(e) {
    e.preventDefault();
    
    var ids = window.localStorage.getItem('likes');
    var arr = [];

    if (ids) {
        arr = JSON.parse(ids);
    }

    var id = $(this).data('id');
    var model = $(this).data('model');
    var check_id = model+id;

    if (!arr.includes(check_id)) {
        $(this).html('<i class="fas fa-spinner fa-spin"></i>');

        let self = this;
        $.ajax({
            url:'/ajax/general-like?id='+id+'&model_string='+model,
            success:function(data) {
                $(self).html('<i class="fas fa-thumbs-up"></i> '+data);
                arr.push(check_id);
                window.localStorage.setItem('likes', JSON.stringify(arr));
            }
        })
        
    }
});


})
topbtn = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbtn.style.bottom = "20px";
  } else {
    topbtn.style.bottom = "-100px";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/'
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}

const preview = (file) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);  // Object Blob
    img.alt = file.name;
    document.querySelector('#preview-uploads').append(img);
};
  
if (document.querySelector("#social-post-files")) {
    document.querySelector("#social-post-files").addEventListener("change", (ev) => {
        $('#preview-uploads').html('');
        if (!ev.target.files) return; // Do nothing.
        [...ev.target.files].forEach(preview);
    });
}

