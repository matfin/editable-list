/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/editableList/index.ts":
/*!**********************************************!*\
  !*** ./src/components/editableList/index.ts ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar EditableList = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(EditableList, _HTMLElement);\n\n  var _super = _createSuper(EditableList);\n\n  function EditableList() {\n    var _this;\n\n    _classCallCheck(this, EditableList);\n\n    _this = _super.call(this);\n\n    var shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    var container = document.createElement('ul'); // const item: HTMLElement = document.createElement('list-item');\n    // item.setAttribute('title', 'Hello!');\n\n    for (var i = 0; i < 3; i++) {\n      var item = document.createElement('list-item');\n      var text = \"Item: \".concat(i);\n      item.setAttribute('title', text);\n      container.appendChild(item);\n    }\n\n    shadowRoot.appendChild(container);\n    return _this;\n  }\n\n  return EditableList;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableList);\n\n//# sourceURL=webpack://editable-list/./src/components/editableList/index.ts?");

/***/ }),

/***/ "./src/components/listItem/index.ts":
/*!******************************************!*\
  !*** ./src/components/listItem/index.ts ***!
  \******************************************/
/*! namespace exports */
/*! export ListItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListItem\": () => /* binding */ ListItem,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/components/listItem/template.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar ListItem = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(ListItem, _HTMLElement);\n\n  var _super = _createSuper(ListItem);\n\n  function ListItem() {\n    var _this;\n\n    _classCallCheck(this, ListItem);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"deleteButton\", void 0);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.onDeleteButtonClick = _this.onDeleteButtonClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ListItem, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      _get(_getPrototypeOf(ListItem.prototype), \"setAttribute\", this).call(this, name, value);\n\n      this.render();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldVal, newVal) {\n      if (name === 'title' && oldVal !== newVal) {\n        this.title = newVal;\n      }\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this$shadowRoot, _this$deleteButton;\n\n      var shadowRoot = this.shadowRoot;\n      var templateInstance = document.importNode(_template__WEBPACK_IMPORTED_MODULE_0__.default.content, true);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(templateInstance);\n      this.deleteButton = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector('[delete]');\n      (_this$deleteButton = this.deleteButton) === null || _this$deleteButton === void 0 ? void 0 : _this$deleteButton.addEventListener('click', this.onDeleteButtonClick);\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var shadowRoot = this.shadowRoot;\n      var titleNode = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('[title]');\n\n      if (titleNode) {\n        titleNode.innerHTML = this.title;\n      }\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      var _this$deleteButton2;\n\n      (_this$deleteButton2 = this.deleteButton) === null || _this$deleteButton2 === void 0 ? void 0 : _this$deleteButton2.removeEventListener('click', this.onDeleteButtonClick);\n    }\n  }, {\n    key: \"onDeleteButtonClick\",\n    value: function onDeleteButtonClick() {\n      console.log('Delete clicked', this.title);\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this.getAttribute('title') || '';\n    },\n    set: function set(title) {\n      this.setAttribute('title', title);\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['title'];\n    }\n  }]);\n\n  return ListItem;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);\n\n//# sourceURL=webpack://editable-list/./src/components/listItem/index.ts?");

/***/ }),

/***/ "./src/components/listItem/style.ts":
/*!******************************************!*\
  !*** ./src/components/listItem/style.ts ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar button = \"\\n  button {\\n    background: none;\\n    border: none;\\n    flex: 0 0 0.75rem;\\n    height: 1.5rem;\\n    padding: 0;\\n  }\\n\";\nvar li = \"\\n  li {\\n    display: flex;\\n    height: 1.5rem;\\n    align-items: center;\\n    padding: 0 0.625rem;\\n    background: rgba(102, 153, 255, 0.2);\\n    border-radius: 0.75rem;\\n  }\\n\";\nvar span = \"\\n  span {\\n    flex: 1;\\n    font-size: 0.875rem;\\n    line-height: 1.5rem;\\n  }\\n\";\nvar svg = \"\\n  svg {\\n    width: 0.5rem;\\n    height: 0.5rem;\\n    margin-left: 0.5rem;\\n  }\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([button, li, span, svg].join(''));\n\n//# sourceURL=webpack://editable-list/./src/components/listItem/style.ts?");

/***/ }),

/***/ "./src/components/listItem/template.ts":
/*!*********************************************!*\
  !*** ./src/components/listItem/template.ts ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/components/listItem/style.ts\");\n;\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n  <style type=\\\"text/css\\\">\\n    \".concat(_style__WEBPACK_IMPORTED_MODULE_0__.default, \"\\n  </style>\\n  <li>\\n    <span title></span>\\n    <button delete>\\n    <svg\\n      width=\\\"8\\\"\\n      height=\\\"8\\\"\\n      view-box=\\\"0 0 8 8\\\"\\n      fill=\\\"none\\\"\\n      xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n    >\\n      <path\\n        fill-rule=\\\"evenodd\\\"\\n        clip-rule=\\\"evenodd\\\"\\n        d=\\\"M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z\\\"\\n        fill=\\\"#050038\\\"\\n      />\\n    </svg>\\n    </button>\\n  </li>\\n\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);\n\n//# sourceURL=webpack://editable-list/./src/components/listItem/template.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var components_editableList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/editableList */ \"./src/components/editableList/index.ts\");\n/* harmony import */ var components_listItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/listItem */ \"./src/components/listItem/index.ts\");\n;\n\n\n(function () {\n  customElements.define('list-item', components_listItem__WEBPACK_IMPORTED_MODULE_1__.default);\n  customElements.define('editable-list', components_editableList__WEBPACK_IMPORTED_MODULE_0__.default);\n})();\n\n//# sourceURL=webpack://editable-list/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;