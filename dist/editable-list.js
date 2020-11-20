/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/editableList/index.ts":
/*!**********************************************!*\
  !*** ./src/components/editableList/index.ts ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./src/models/index.ts\");\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ \"./src/components/editableList/template.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar EditableListComponent = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(EditableListComponent, _HTMLElement);\n\n  var _super = _createSuper(EditableListComponent);\n\n  function EditableListComponent() {\n    var _this;\n\n    _classCallCheck(this, EditableListComponent);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"itemsListElement\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"listItemInputElement\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"currentInputValue\", void 0);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.currentInputValue = '';\n    _this.itemsListElement = null;\n    _this.listItemInputElement = null;\n    _this.addItemToList = _this.addItemToList.bind(_assertThisInitialized(_this));\n    _this.clearInputValue = _this.clearInputValue.bind(_assertThisInitialized(_this));\n    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));\n    _this.onKeydown = _this.onKeydown.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(EditableListComponent, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var shadowRoot = this.shadowRoot;\n      var templateInstance = document.importNode(_template__WEBPACK_IMPORTED_MODULE_2__.default.content, true);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(templateInstance);\n      this.listItemInputElement = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('item-input');\n      this.itemsListElement = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('items-list');\n\n      if (this.listItemInputElement) {\n        this.listItemInputElement.onInput = this.onInput;\n        this.listItemInputElement.onKeydown = this.onKeydown;\n      }\n    }\n  }, {\n    key: \"onInput\",\n    value: function onInput(e) {\n      var _ref = e.currentTarget,\n          value = _ref.value;\n      var inputs = (0,utils__WEBPACK_IMPORTED_MODULE_1__.splitMultipleInputs)(value);\n\n      if (inputs.length > 1) {\n        inputs.forEach(this.addItemToList);\n        this.clearInputValue();\n      } else {\n        this.currentInputValue = value;\n      }\n    }\n  }, {\n    key: \"onKeydown\",\n    value: function onKeydown(e) {\n      var key = e.key;\n\n      switch (key) {\n        case models__WEBPACK_IMPORTED_MODULE_0__.ShortcutKeys.COMMA:\n        case models__WEBPACK_IMPORTED_MODULE_0__.ShortcutKeys.ENTER:\n          {\n            e.preventDefault();\n            this.addItemToList(this.currentInputValue);\n            this.clearInputValue();\n          }\n      }\n    }\n  }, {\n    key: \"addItemToList\",\n    value: function addItemToList(title) {\n      if (this.itemsListElement) {\n        this.itemsListElement.addItem(title);\n      }\n    }\n  }, {\n    key: \"clearInputValue\",\n    value: function clearInputValue() {\n      if (this.listItemInputElement) {\n        this.currentInputValue = '';\n        this.listItemInputElement.value = '';\n      }\n    }\n  }]);\n\n  return EditableListComponent;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableListComponent);\n\n//# sourceURL=webpack://editable-list/./src/components/editableList/index.ts?");

/***/ }),

/***/ "./src/components/editableList/template.ts":
/*!*************************************************!*\
  !*** ./src/components/editableList/template.ts ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n  <style type=\\\"text/css\\\">\\n    div {\\n      display: block;\\n      max-height: 6rem;\\n      padding: 0.5rem;\\n      border: 1px solid rgb(195, 194, 207);\\n      border-radius: 0.25rem;\\n      background: #fff;\\n      overflow-y: scroll;\\n    }\\n    item-input {\\n      display: inline-block;\\n    }\\n  </style>\\n  <div>\\n    <items-list>\\n      <item-input type=\\\"text\\\" slot=\\\"input\\\" placeholder=\\\"add more people\\\" />\\n    </items-list>\\n  </div>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);\n\n//# sourceURL=webpack://editable-list/./src/components/editableList/template.ts?");

/***/ }),

/***/ "./src/components/itemInput/index.ts":
/*!*******************************************!*\
  !*** ./src/components/itemInput/index.ts ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/components/itemInput/template.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar ItemInputComponent = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(ItemInputComponent, _HTMLElement);\n\n  var _super = _createSuper(ItemInputComponent);\n\n  function ItemInputComponent() {\n    var _this;\n\n    _classCallCheck(this, ItemInputComponent);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"inputElement\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"onInputCallback\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"onKeydownCallback\", void 0);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.inputElement = null;\n    _this.onInputCallback = null;\n    _this.onKeydownCallback = null;\n    _this.input = _this.input.bind(_assertThisInitialized(_this));\n    _this.key = _this.key.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ItemInputComponent, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      _get(_getPrototypeOf(ItemInputComponent.prototype), \"setAttribute\", this).call(this, name, value);\n\n      this.render();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldVal, newVal) {\n      if (oldVal !== newVal) {\n        if (name === 'placeholder') {\n          this.placeHolder = newVal;\n        } else if (name === 'value') {\n          this.value = newVal;\n        }\n      }\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this$inputElement;\n\n      var shadowRoot = this.shadowRoot;\n      var templateInstance = document.importNode(_template__WEBPACK_IMPORTED_MODULE_0__.default.content, true);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(templateInstance);\n      this.inputElement = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('input');\n      (_this$inputElement = this.inputElement) === null || _this$inputElement === void 0 ? void 0 : _this$inputElement.addEventListener('input', this.input);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.addEventListener('keydown', this.key);\n      this.render();\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      var _this$inputElement2;\n\n      var shadowRoot = this.shadowRoot;\n      (_this$inputElement2 = this.inputElement) === null || _this$inputElement2 === void 0 ? void 0 : _this$inputElement2.removeEventListener('input', this.input);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.removeEventListener('keydown', this.key);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.inputElement) {\n        this.inputElement.placeholder = this.placeHolder;\n        this.inputElement.value = this.value;\n      }\n    }\n  }, {\n    key: \"input\",\n    value: function input(e) {\n      if (this.onInputCallback) {\n        this.onInputCallback(e);\n      }\n    }\n  }, {\n    key: \"key\",\n    value: function key(e) {\n      if (this.onKeydownCallback) {\n        this.onKeydownCallback(e);\n      }\n    }\n  }, {\n    key: \"placeHolder\",\n    get: function get() {\n      return this.getAttribute('placeholder') || '';\n    },\n    set: function set(placeholder) {\n      this.setAttribute('placeholder', placeholder);\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      return this.getAttribute('value') || '';\n    },\n    set: function set(value) {\n      this.setAttribute('value', value);\n    }\n  }, {\n    key: \"onInput\",\n    set: function set(onInput) {\n      this.onInputCallback = onInput;\n    }\n  }, {\n    key: \"onKeydown\",\n    set: function set(onKeydown) {\n      this.onKeydownCallback = onKeydown;\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['onChange', 'onKeydown', 'placeholder', 'value'];\n    }\n  }]);\n\n  return ItemInputComponent;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemInputComponent);\n\n//# sourceURL=webpack://editable-list/./src/components/itemInput/index.ts?");

/***/ }),

/***/ "./src/components/itemInput/template.ts":
/*!**********************************************!*\
  !*** ./src/components/itemInput/template.ts ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n  <style type=\\\"text/css\\\">\\n    input {\\n      padding: 0 0.5rem;\\n      font-size: 0.875rem;\\n      line-height: 1.5rem;\\n      border: 0;\\n    }\\n\\n    input::placeholder {\\n      color: rgb(195, 194, 207);\\n    }\\n\\n    input:focus {\\n      outline: none;\\n    }\\n  </style>\\n  <input />\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);\n\n//# sourceURL=webpack://editable-list/./src/components/itemInput/template.ts?");

/***/ }),

/***/ "./src/components/itemsList/index.ts":
/*!*******************************************!*\
  !*** ./src/components/itemsList/index.ts ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/components/itemsList/template.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar ItemsListComponent = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(ItemsListComponent, _HTMLElement);\n\n  var _super = _createSuper(ItemsListComponent);\n\n  function ItemsListComponent() {\n    var _this;\n\n    _classCallCheck(this, ItemsListComponent);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"listItems\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"listElement\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"slotElement\", void 0);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.listElement = null;\n    _this.slotElement = null;\n    _this.listItems = [{\n      title: 'matfin@gmail.com',\n      id: '123'\n    }, {\n      title: 'me@mattfinucane.com',\n      id: '456'\n    }, {\n      title: 'matfin@hotmail.com',\n      id: '789'\n    }];\n    return _this;\n  }\n\n  _createClass(ItemsListComponent, [{\n    key: \"appendItemToList\",\n    value: function appendItemToList(item) {\n      var _this2 = this;\n\n      var id = item.id,\n          title = item.title;\n      var listItem = document.createElement('list-item');\n      listItem.setAttribute('title', title);\n      listItem.setAttribute('id', id);\n\n      listItem.onClickDelete = function (id) {\n        return _this2.removeItem(id);\n      };\n\n      if (this.slotElement) {\n        var _this$listElement;\n\n        (_this$listElement = this.listElement) === null || _this$listElement === void 0 ? void 0 : _this$listElement.insertBefore(listItem, this.slotElement);\n      } else {\n        var _this$listElement2;\n\n        (_this$listElement2 = this.listElement) === null || _this$listElement2 === void 0 ? void 0 : _this$listElement2.appendChild(listItem);\n      }\n    }\n  }, {\n    key: \"removeItemFromList\",\n    value: function removeItemFromList(id) {\n      var _this$listElement3;\n\n      var itemNode = (_this$listElement3 = this.listElement) === null || _this$listElement3 === void 0 ? void 0 : _this$listElement3.querySelector(\"list-item[id=\\\"\".concat(id, \"\\\"]\"));\n\n      if (itemNode) {\n        var _itemNode$parentNode;\n\n        (_itemNode$parentNode = itemNode.parentNode) === null || _itemNode$parentNode === void 0 ? void 0 : _itemNode$parentNode.removeChild(itemNode);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      if (this.listElement) {\n        this.clearList();\n        this.listItems.forEach(function (item) {\n          return _this3.appendItemToList(item);\n        });\n      }\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var shadowRoot = this.shadowRoot;\n      var templateInstance = document.importNode(_template__WEBPACK_IMPORTED_MODULE_1__.default.content, true);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(templateInstance);\n      this.listElement = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('[list]');\n      this.slotElement = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('slot');\n      this.render();\n    }\n  }, {\n    key: \"addItem\",\n    value: function addItem(title) {\n      if (this.listElement) {\n        var item = {\n          id: (0,utils__WEBPACK_IMPORTED_MODULE_0__.generateRandomId)(),\n          title: title\n        };\n        this.appendItemToList(item);\n        this.listItems.push(item);\n      }\n    }\n  }, {\n    key: \"clearList\",\n    value: function clearList() {\n      var _this$listElement4;\n\n      var listItems = ((_this$listElement4 = this.listElement) === null || _this$listElement4 === void 0 ? void 0 : _this$listElement4.querySelectorAll('list-item')) || [];\n      listItems.forEach(function (listItem) {\n        var _listItem$parentNode;\n\n        return (_listItem$parentNode = listItem.parentNode) === null || _listItem$parentNode === void 0 ? void 0 : _listItem$parentNode.removeChild(listItem);\n      });\n    }\n  }, {\n    key: \"getItems\",\n    value: function getItems() {\n      return this.listItems;\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(id) {\n      if (this.listElement) {\n        this.removeItemFromList(id);\n        this.listItems = this.listItems.filter(function (item) {\n          return id !== item.id;\n        });\n      }\n    }\n  }, {\n    key: \"items\",\n    set: function set(titles) {\n      var items = titles.map(function (title) {\n        return {\n          id: (0,utils__WEBPACK_IMPORTED_MODULE_0__.generateRandomId)(),\n          title: title\n        };\n      });\n      this.listItems = items;\n      this.render();\n    }\n  }]);\n\n  return ItemsListComponent;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsListComponent);\n\n//# sourceURL=webpack://editable-list/./src/components/itemsList/index.ts?");

/***/ }),

/***/ "./src/components/itemsList/template.ts":
/*!**********************************************!*\
  !*** ./src/components/itemsList/template.ts ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n  <style type=\\\"text/css\\\">\\n    ul {\\n      padding: 0;\\n      margin: 0;\\n    }\\n    list-item {\\n      display: inline-block;\\n      margin-right: 0.5rem;\\n      margin-bottom: 0.25rem;\\n    }\\n  </style>\\n  <ul list>\\n    <slot name=\\\"input\\\">\\n    </slot>\\n  </ul>\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);\n\n//# sourceURL=webpack://editable-list/./src/components/itemsList/template.ts?");

/***/ }),

/***/ "./src/components/listItem/index.ts":
/*!******************************************!*\
  !*** ./src/components/listItem/index.ts ***!
  \******************************************/
/*! namespace exports */
/*! export ListItemComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListItemComponent\": () => /* binding */ ListItemComponent,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/components/listItem/template.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar ListItemComponent = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(ListItemComponent, _HTMLElement);\n\n  var _super = _createSuper(ListItemComponent);\n\n  function ListItemComponent() {\n    var _this;\n\n    _classCallCheck(this, ListItemComponent);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"deleteButton\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"clickDeleteCallback\", void 0);\n\n    _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this.onDeleteButtonClick = _this.onDeleteButtonClick.bind(_assertThisInitialized(_this));\n    _this.clickDeleteCallback = null;\n    return _this;\n  }\n\n  _createClass(ListItemComponent, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      _get(_getPrototypeOf(ListItemComponent.prototype), \"setAttribute\", this).call(this, name, value);\n\n      this.render();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldVal, newVal) {\n      if (oldVal !== newVal) {\n        if (name === 'title') {\n          this.title = newVal;\n        } else if (name === 'id') {\n          this.id = newVal;\n        }\n      }\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this$deleteButton;\n\n      var shadowRoot = this.shadowRoot;\n      var templateInstance = document.importNode(_template__WEBPACK_IMPORTED_MODULE_0__.default.content, true);\n      shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.appendChild(templateInstance);\n      this.deleteButton = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('[delete]');\n      (_this$deleteButton = this.deleteButton) === null || _this$deleteButton === void 0 ? void 0 : _this$deleteButton.addEventListener('click', this.onDeleteButtonClick);\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var shadowRoot = this.shadowRoot;\n      var titleNode = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('[title]');\n\n      if (titleNode) {\n        titleNode.innerHTML = this.title;\n      }\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      var _this$deleteButton2;\n\n      (_this$deleteButton2 = this.deleteButton) === null || _this$deleteButton2 === void 0 ? void 0 : _this$deleteButton2.removeEventListener('click', this.onDeleteButtonClick);\n    }\n  }, {\n    key: \"onDeleteButtonClick\",\n    value: function onDeleteButtonClick() {\n      if (this.clickDeleteCallback) {\n        this.clickDeleteCallback(this.id);\n      }\n    }\n  }, {\n    key: \"id\",\n    get: function get() {\n      return this.getAttribute('id') || '';\n    },\n    set: function set(id) {\n      this.setAttribute('id', id);\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this.getAttribute('title') || '';\n    },\n    set: function set(title) {\n      this.setAttribute('title', title);\n    }\n  }, {\n    key: \"onClickDelete\",\n    set: function set(onClickDelete) {\n      this.clickDeleteCallback = onClickDelete;\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['id', 'title', 'onClickDelete'];\n    }\n  }]);\n\n  return ListItemComponent;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemComponent);\n\n//# sourceURL=webpack://editable-list/./src/components/listItem/index.ts?");

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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar button = \"\\n  button {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background: none;\\n    border: none;\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    padding: 0;\\n    cursor: pointer;\\n  }\\n\\n  button:focus {\\n    outline: none;\\n  }\\n\";\nvar li = \"\\n  li {\\n    display: flex;\\n    height: 1.5rem;\\n    align-items: center;\\n    padding: 0 0.625rem;\\n    padding-right: 0;\\n    background: rgba(102, 153, 255, 0.2);\\n    border-radius: 0.75rem;\\n  }\\n\";\nvar span = \"\\n  span {\\n    flex: 1;\\n    font-size: 0.875rem;\\n    line-height: 1.5rem;\\n  }\\n\";\nvar svg = \"\\n  svg {\\n    width: 0.5rem;\\n    height: 0.5rem;\\n  }\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([button, li, span, svg].join(''));\n\n//# sourceURL=webpack://editable-list/./src/components/listItem/style.ts?");

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

"use strict";
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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var components_itemInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/itemInput */ \"./src/components/itemInput/index.ts\");\n/* harmony import */ var components_itemsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/itemsList */ \"./src/components/itemsList/index.ts\");\n/* harmony import */ var components_listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/listItem */ \"./src/components/listItem/index.ts\");\n/* harmony import */ var components_editableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/editableList */ \"./src/components/editableList/index.ts\");\n;\n\n\n\n\n(function () {\n  customElements.define('item-input', components_itemInput__WEBPACK_IMPORTED_MODULE_0__.default);\n  customElements.define('list-item', components_listItem__WEBPACK_IMPORTED_MODULE_2__.default);\n  customElements.define('items-list', components_itemsList__WEBPACK_IMPORTED_MODULE_1__.default);\n  customElements.define('editable-list', components_editableList__WEBPACK_IMPORTED_MODULE_3__.default);\n})();\n\n//# sourceURL=webpack://editable-list/./src/index.ts?");

/***/ }),

/***/ "./src/models/enums.ts":
/*!*****************************!*\
  !*** ./src/models/enums.ts ***!
  \*****************************/
/*! namespace exports */
/*! export ShortcutKeys [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShortcutKeys\": () => /* binding */ ShortcutKeys\n/* harmony export */ });\nvar ShortcutKeys;\n\n(function (ShortcutKeys) {\n  ShortcutKeys[\"ENTER\"] = \"Enter\";\n  ShortcutKeys[\"COMMA\"] = \",\";\n})(ShortcutKeys || (ShortcutKeys = {}));\n\n//# sourceURL=webpack://editable-list/./src/models/enums.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! namespace exports */
/*! export ShortcutKeys [provided] [no usage info] [missing usage info prevents renaming] -> ./src/models/enums.ts .ShortcutKeys */
/*! export default [not provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] -> ./src/models/interfaces.ts */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShortcutKeys\": () => /* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_0__.ShortcutKeys\n/* harmony export */ });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/models/enums.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ \"./src/models/interfaces.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_1__) if([\"default\",\"ShortcutKeys\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _interfaces__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n//# sourceURL=webpack://editable-list/./src/models/index.ts?");

/***/ }),

/***/ "./src/models/interfaces.ts":
/*!**********************************!*\
  !*** ./src/models/interfaces.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("\n\n//# sourceURL=webpack://editable-list/./src/models/interfaces.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! namespace exports */
/*! export generateRandomId [provided] [no usage info] [missing usage info prevents renaming] */
/*! export splitMultipleInputs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomId\": () => /* binding */ generateRandomId,\n/* harmony export */   \"splitMultipleInputs\": () => /* binding */ splitMultipleInputs\n/* harmony export */ });\nvar generateRandomId = function generateRandomId() {\n  return crypto.getRandomValues(new Uint32Array(1))[0].toString(16);\n};\nvar splitMultipleInputs = function splitMultipleInputs(input) {\n  return input.split(',').filter(function (item) {\n    return item.length > 0;\n  }).map(function (item) {\n    return item.trim();\n  });\n};\n\n//# sourceURL=webpack://editable-list/./src/utils/index.ts?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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