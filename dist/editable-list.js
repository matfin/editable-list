(()=>{"use strict";var t=document.createElement("template");t.innerHTML='\n  <style type="text/css">\n    input {\n      padding: 0 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5rem;\n      border: 0;\n    }\n\n    input::placeholder {\n      color: rgb(195, 194, 207);\n    }\n\n    input:focus {\n      outline: none;\n    }\n  </style>\n  <input />\n';const e=t;function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function c(t,e,n){return(c=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(m,t);var n,u,c,d,y,h=(n=m,u=a(),function(){var t,e=f(n);if(u){var r=f(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return o(this,t)});function m(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),p(l(t=h.call(this)),"inputElement",void 0),p(l(t),"onBlurCallback",void 0),p(l(t),"onInputCallback",void 0),p(l(t),"onKeydownCallback",void 0),t.attachShadow({mode:"open"}),t.inputElement=null,t.onBlurCallback=null,t.onInputCallback=null,t.onKeydownCallback=null,t.blurred=t.blurred.bind(l(t)),t.input=t.input.bind(l(t)),t.key=t.key.bind(l(t)),t}return c=m,y=[{key:"observedAttributes",get:function(){return["placeholder","value"]}}],(d=[{key:"render",value:function(){this.inputElement&&(this.inputElement.placeholder=this.placeHolder,this.inputElement.value=this.value)}},{key:"blurred",value:function(t){this.onBlurCallback&&this.onBlurCallback(t)}},{key:"input",value:function(t){this.onInputCallback&&this.onInputCallback(t)}},{key:"key",value:function(t){this.onKeydownCallback&&this.onKeydownCallback(t)}},{key:"setAttribute",value:function(t,e){i(f(m.prototype),"setAttribute",this).call(this,t,e),this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n)switch(t){case"placeholder":this.placeHolder=n;break;case"value":this.value=n}}},{key:"connectedCallback",value:function(){var t,n,r=this.shadowRoot,i=document.importNode(e.content,!0);null==r||r.appendChild(i),this.inputElement=null==r?void 0:r.querySelector("input"),null===(t=this.inputElement)||void 0===t||t.addEventListener("input",this.input),null===(n=this.inputElement)||void 0===n||n.addEventListener("blur",this.blurred),null==r||r.addEventListener("keydown",this.key),this.render()}},{key:"disconnectedCallback",value:function(){var t,e=this.shadowRoot;null===(t=this.inputElement)||void 0===t||t.removeEventListener("input",this.input),null==e||e.removeEventListener("keydown",this.key)}},{key:"placeHolder",get:function(){return this.getAttribute("placeholder")||""},set:function(t){this.setAttribute("placeholder",t)}},{key:"value",get:function(){return this.getAttribute("value")||""},set:function(t){this.setAttribute("value",t)}},{key:"onBlur",set:function(t){this.onBlurCallback=t}},{key:"onInput",set:function(t){this.onInputCallback=t}},{key:"onKeydown",set:function(t){this.onKeydownCallback=t}}])&&r(c.prototype,d),y&&r(c,y),m}(u(HTMLElement));var y=function(){return crypto.getRandomValues(new Uint32Array(1))[0].toString(16)},h=document.createElement("template");h.innerHTML='\n  <style type="text/css">\n    ul {\n      padding: 0;\n      margin: 0;\n    }\n    list-item {\n      display: inline-block;\n      margin-right: 0.5rem;\n      margin-bottom: 0.25rem;\n    }\n  </style>\n  <ul list>\n    <slot name="input">\n    </slot>\n  </ul>\n';const m=h;function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){var e="function"==typeof Map?new Map:void 0;return(w=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return E(t,arguments,C(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),O(r,t)})(t)}function E(t,e,n){return(E=I()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&O(i,n.prototype),i}).apply(null,arguments)}function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(l,t);var e,n,r,i,o=(e=l,n=I(),function(){var t,r=C(e);if(n){var i=C(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return g(this,t)});function l(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),L(k(t=o.call(this)),"listItems",[]),L(k(t),"listElement",void 0),L(k(t),"slotElement",void 0),t.attachShadow({mode:"open"}),t.addItem=t.addItem.bind(k(t)),t.appendItemToList=t.appendItemToList.bind(k(t)),t.clearItems=t.clearItems.bind(k(t)),t.getItems=t.getItems.bind(k(t)),t.removeItemFromList=t.removeItemFromList.bind(k(t)),t.removeItem=t.removeItem.bind(k(t)),t.render=t.render.bind(k(t)),t.listElement=null,t.slotElement=null,t.listItems=[],t}return r=l,(i=[{key:"appendItemToList",value:function(t){var e,n,r,i=this,o=t.id,l=t.isValid,u=t.title,c=document.createElement("list-item"),a=((null===(e=this.slotElement)||void 0===e?void 0:e.assignedNodes())||[]).length>0;c.id=o,c.isInvalid=!l,c.title=u,c.onClickDelete=function(t){return i.removeItem(t)},this.slotElement&&a?null===(n=this.listElement)||void 0===n||n.insertBefore(c,this.slotElement):null===(r=this.listElement)||void 0===r||r.appendChild(c)}},{key:"removeItemFromList",value:function(t){var e,n,r=null===(e=this.listElement)||void 0===e?void 0:e.querySelector('list-item[id="'.concat(t,'"]'));r&&(null===(n=r.parentNode)||void 0===n||n.removeChild(r))}},{key:"render",value:function(){var t=this;this.listElement&&this.listItems.forEach((function(e){return t.appendItemToList(e)}))}},{key:"removeItem",value:function(t){this.listElement&&(this.removeItemFromList(t),this.listItems=this.listItems.filter((function(e){return t!==e.id})))}},{key:"connectedCallback",value:function(){var t=this.shadowRoot,e=document.importNode(m.content,!0);null==t||t.appendChild(e),this.listElement=null==t?void 0:t.querySelector("[list]"),this.slotElement=null==t?void 0:t.querySelector("slot"),this.render()}},{key:"addItem",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.listElement){var n={id:y(),isValid:e,title:t};this.appendItemToList(n),this.listItems.push(n)}}},{key:"clearItems",value:function(){var t;((null===(t=this.listElement)||void 0===t?void 0:t.querySelectorAll("list-item"))||[]).forEach((function(t){var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),this.listItems=[]}},{key:"getItems",value:function(){return this.listItems}},{key:"rootListElement",get:function(){return this.listElement}},{key:"items",set:function(t){var e=t.map((function(t){return{id:y(),title:t}}));this.clearItems(),this.listItems=e,this.render()}}])&&v(r.prototype,i),l}(w(HTMLElement)),R=["\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: none;\n    border: none;\n    height: 1.5rem;\n    padding: 0;\n    margin: 0 0.5rem;\n    cursor: pointer;\n  }\n\n  :host([invalid]) button {\n    margin-right: 0;\n  }\n\n  button:focus {\n    outline: none;\n  }\n","\n  li {\n    display: flex;\n    height: 1.5rem;\n    align-items: center;\n    padding: 0 0.625rem;\n    padding-right: 0;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 0.75rem;\n  }\n\n  :host([invalid]) li {\n    padding: 0;\n    background: inherit;\n    border-bottom: 1px dashed red;\n    border-radius: 0;\n  }\n","\n  span {\n    flex: 1;\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n  }\n","\n  svg {\n    width: 0.5rem;\n    height: 0.5rem;\n  }\n"].join("");var j=document.createElement("template");j.innerHTML='\n  <style type="text/css">\n    '.concat(R,'\n  </style>\n  <li>\n    <span title></span>\n    <button delete>\n    <svg\n      width="8"\n      height="8"\n      view-box="0 0 8 8"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        fill-rule="evenodd"\n        clip-rule="evenodd"\n        d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z"\n        fill="#050038"\n      />\n    </svg>\n    </button>\n  </li>\n');const T=j;function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function D(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?A(t):e}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t){var e="function"==typeof Map?new Map:void 0;return(B=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return M(t,arguments,H(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),V(r,t)})(t)}function M(t,e,n){return(M=F()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&V(i,n.prototype),i}).apply(null,arguments)}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(u,t);var e,n,r,i,o,l=(e=u,n=F(),function(){var t,r=H(e);if(n){var i=H(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return D(this,t)});function u(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),K(A(t=l.call(this)),"deleteButton",void 0),K(A(t),"clickDeleteCallback",void 0),t.attachShadow({mode:"open"}),t.deleteButton=null,t.onDeleteButtonClick=t.onDeleteButtonClick.bind(A(t)),t.clickDeleteCallback=null,t}return r=u,o=[{key:"observedAttributes",get:function(){return["id","invalid","title","onClickDelete"]}}],(i=[{key:"render",value:function(){var t=this.shadowRoot,e=null==t?void 0:t.querySelector("[title]");e&&(e.innerHTML=this.title)}},{key:"onDeleteButtonClick",value:function(){this.clickDeleteCallback&&this.clickDeleteCallback(this.id)}},{key:"setAttribute",value:function(t,e){x(H(u.prototype),"setAttribute",this).call(this,t,e),this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n)switch(t){case"title":this.title=n;break;case"id":this.id=n;break;case"invalid":this.isInvalid=null!==n}}},{key:"connectedCallback",value:function(){var t,e=this.shadowRoot,n=document.importNode(T.content,!0);null==e||e.appendChild(n),this.deleteButton=null==e?void 0:e.querySelector("[delete]"),null===(t=this.deleteButton)||void 0===t||t.addEventListener("click",this.onDeleteButtonClick),this.render()}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.deleteButton)||void 0===t||t.removeEventListener("click",this.onDeleteButtonClick)}},{key:"id",get:function(){return this.getAttribute("id")||""},set:function(t){this.setAttribute("id",t)}},{key:"title",get:function(){return this.getAttribute("title")||""},set:function(t){this.setAttribute("title",t)}},{key:"isInvalid",get:function(){return this.hasAttribute("invalid")},set:function(t){t?this.setAttribute("invalid","true"):this.removeAttribute("invalid")}},{key:"onClickDelete",set:function(t){this.clickDeleteCallback=t}}])&&_(r.prototype,i),o&&_(r,o),u}(B(HTMLElement));var N;!function(t){t.ENTER="Enter",t.COMMA=","}(N||(N={}));var z=document.createElement("template");z.innerHTML='\n  <style type="text/css">\n    div {\n      display: block;\n      max-height: 6rem;\n      padding: 0.5rem;\n      border: 1px solid rgb(195, 194, 207);\n      border-radius: 0.25rem;\n      background: #fff;\n      overflow-y: scroll;\n    }\n    item-input {\n      display: inline-block;\n    }\n  </style>\n  <div>\n    <items-list>\n      <item-input type="text" slot="input" placeholder="Add more items" />\n    </items-list>\n  </div>\n';const U=z;function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?Q(t):e}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t){var e="function"==typeof Map?new Map:void 0;return(W=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return X(t,arguments,tt(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),$(r,t)})(t)}function X(t,e,n){return(X=Y()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&$(i,n.prototype),i}).apply(null,arguments)}function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function $(t,e){return($=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}(l,t);var e,n,r,i,o=(e=l,n=Y(),function(){var t,r=tt(e);if(n){var i=tt(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return J(this,t)});function l(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),et(Q(t=o.call(this)),"validateFn",void 0),et(Q(t),"itemsListElement",void 0),et(Q(t),"listItemInputElement",void 0),et(Q(t),"currentInputValue",void 0),t.attachShadow({mode:"open"}),t.currentInputValue="",t.itemsListElement=null,t.listItemInputElement=null,t.validateFn=null,t.addItemToList=t.addItemToList.bind(Q(t)),t.clearInputValue=t.clearInputValue.bind(Q(t)),t.onBlur=t.onBlur.bind(Q(t)),t.onInput=t.onInput.bind(Q(t)),t.onKeydown=t.onKeydown.bind(Q(t)),t}return r=l,(i=[{key:"onBlur",value:function(t){var e=t.currentTarget.value;e.length>0&&(this.addItemToList(e),this.clearInputValue())}},{key:"onInput",value:function(t){var e=t.currentTarget.value,n=e.split(",").filter((function(t){return t.length>0})).map((function(t){return t.trim()}));n.length>1?(n.forEach(this.addItemToList),this.clearInputValue()):this.currentInputValue=e}},{key:"onKeydown",value:function(t){switch(t.key){case N.COMMA:case N.ENTER:t.preventDefault(),this.currentInputValue.length>0&&(this.addItemToList(this.currentInputValue),this.clearInputValue())}}},{key:"clearInputValue",value:function(){this.listItemInputElement&&(this.currentInputValue="",this.listItemInputElement.value="")}},{key:"connectedCallback",value:function(){var t=this.shadowRoot,e=document.importNode(U.content,!0);null==t||t.appendChild(e),this.listItemInputElement=null==t?void 0:t.querySelector("item-input"),this.itemsListElement=null==t?void 0:t.querySelector("items-list"),this.listItemInputElement&&(this.listItemInputElement.onBlur=this.onBlur,this.listItemInputElement.onInput=this.onInput,this.listItemInputElement.onKeydown=this.onKeydown)}},{key:"addItemToList",value:function(t){if(this.itemsListElement){var e=!this.validateFn||this.validateFn(t);this.itemsListElement.addItem(t,e)}}},{key:"validationFunction",set:function(t){this.validateFn=t}},{key:"items",get:function(){return this.itemsListElement?this.itemsListElement.getItems():[]}}])&&G(r.prototype,i),l}(W(HTMLElement));customElements.define("item-input",d),customElements.define("list-item",q),customElements.define("items-list",S),customElements.define("editable-list",nt)})();