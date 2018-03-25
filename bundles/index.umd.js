(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng2-slim-loading-bar"] = factory(require("@angular/core"), require("rxjs/Subject"));
	else
		root["ng2-slim-loading-bar"] = factory(root["@angular/core"], root["rxjs/Subject"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE_rxjs_Subject__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: SlimLoadingBarModule, SlimLoadingBarComponent, SlimLoadingBarEventType, SlimLoadingBarEvent, SlimLoadingBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarModule\", function() { return SlimLoadingBarModule; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"@angular/core\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_slim_loading_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/slim-loading-bar.component */ \"./src/slim-loading-bar.component.ts\");\n/* harmony import */ var _src_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/slim-loading-bar.service */ \"./src/slim-loading-bar.service.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarComponent\", function() { return _src_slim_loading_bar_component__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarComponent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarEventType\", function() { return _src_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_2__[\"SlimLoadingBarEventType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarEvent\", function() { return _src_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_2__[\"SlimLoadingBarEvent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarService\", function() { return _src_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_2__[\"SlimLoadingBarService\"]; });\n\n// Copyright (C) 2016 Sergey Akopkokhyants\r\n// This project is licensed under the terms of the MIT license.\r\n// https://github.com/akserg/ng2-slim-loading-bar\r\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\n\r\nvar SlimLoadingBarModule = (function () {\r\n    function SlimLoadingBarModule() {\r\n    }\r\n    SlimLoadingBarModule_1 = SlimLoadingBarModule;\r\n    SlimLoadingBarModule.forRoot = function () {\r\n        return {\r\n            ngModule: SlimLoadingBarModule_1,\r\n            providers: [_src_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_2__[\"SlimLoadingBarService\"]]\r\n        };\r\n    };\r\n    SlimLoadingBarModule = SlimLoadingBarModule_1 = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"NgModule\"])({\r\n            declarations: [_src_slim_loading_bar_component__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarComponent\"]],\r\n            exports: [_src_slim_loading_bar_component__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarComponent\"]],\r\n            providers: [_src_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_2__[\"SlimLoadingBarService\"]]\r\n        })\r\n    ], SlimLoadingBarModule);\r\n    return SlimLoadingBarModule;\r\n    var SlimLoadingBarModule_1;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ng2-slim-loading-bar/./index.ts?");

/***/ }),

/***/ "./src/slim-loading-bar.component.ts":
/*!*******************************************!*\
  !*** ./src/slim-loading-bar.component.ts ***!
  \*******************************************/
/*! exports provided: SlimLoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarComponent\", function() { return SlimLoadingBarComponent; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"@angular/core\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slim-loading-bar.service */ \"./src/slim-loading-bar.service.ts\");\n/* harmony import */ var _slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slim-loading-bar.utils */ \"./src/slim-loading-bar.utils.ts\");\n// Copyright (C) 2016 Sergey Akopkokhyants\r\n// This project is licensed under the terms of the MIT license.\r\n// https://github.com/akserg/ng2-slim-loading-bar\r\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\n/**\r\n * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.\r\n */\r\nvar SlimLoadingBarComponent = (function () {\r\n    function SlimLoadingBarComponent(service, _elmRef, _changeDetectorRef) {\r\n        this.service = service;\r\n        this._elmRef = _elmRef;\r\n        this._changeDetectorRef = _changeDetectorRef;\r\n        this.isTransition = 'none';\r\n        this._progress = '0';\r\n        this.color = 'firebrick';\r\n        this.height = '2px';\r\n        this.show = true;\r\n    }\r\n    Object.defineProperty(SlimLoadingBarComponent.prototype, \"progress\", {\r\n        get: function () {\r\n            return this._progress;\r\n        },\r\n        set: function (progress) {\r\n            this.isTransition = progress >= this._progress ? 'all 0.5s ease-in-out' : 'none';\r\n            this._progress = progress;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    SlimLoadingBarComponent.prototype.ngOnInit = function () {\r\n        var _this = this;\r\n        this.service.events.subscribe(function (event) {\r\n            if (event.type === _slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarEventType\"].PROGRESS && Object(_slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_2__[\"isPresent\"])(event.value)) {\r\n                _this.progress = event.value;\r\n            }\r\n            else if (event.type === _slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarEventType\"].COLOR) {\r\n                _this.color = event.value;\r\n            }\r\n            else if (event.type === _slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarEventType\"].HEIGHT) {\r\n                _this.height = event.value;\r\n            }\r\n            else if (event.type === _slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarEventType\"].VISIBLE) {\r\n                _this.show = event.value;\r\n            }\r\n            _this._changeDetectorRef.markForCheck();\r\n        });\r\n    };\r\n    SlimLoadingBarComponent.prototype.ngAfterViewInit = function () {\r\n        var _this = this;\r\n        this.service.events.subscribe(function (event) {\r\n            _this._elmRef.nativeElement.visible = event.type === _slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarEventType\"].VISIBLE ? event.value : true;\r\n            _this._changeDetectorRef.detectChanges();\r\n        });\r\n    };\r\n    __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"])(),\r\n        __metadata(\"design:type\", String),\r\n        __metadata(\"design:paramtypes\", [String])\r\n    ], SlimLoadingBarComponent.prototype, \"progress\", null);\r\n    __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"])(),\r\n        __metadata(\"design:type\", String)\r\n    ], SlimLoadingBarComponent.prototype, \"color\", void 0);\r\n    __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"])(),\r\n        __metadata(\"design:type\", String)\r\n    ], SlimLoadingBarComponent.prototype, \"height\", void 0);\r\n    __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"])(),\r\n        __metadata(\"design:type\", Boolean)\r\n    ], SlimLoadingBarComponent.prototype, \"show\", void 0);\r\n    SlimLoadingBarComponent = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])({\r\n            selector: 'ng2-slim-loading-bar',\r\n            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ChangeDetectionStrategy\"].OnPush,\r\n            template: \"\\n<div class=\\\"slim-loading-bar\\\">\\n    <div class=\\\"slim-loading-bar-progress\\\" [style.width]=\\\"progress + '%'\\\" [style.backgroundColor]=\\\"color\\\" [style.color]=\\\"color\\\"\\n        [style.height]=\\\"height\\\" [style.opacity]=\\\"show ? '1' : '0'\\\" [style.transition]=\\\"isTransition\\\"></div>\\n</div>\"\r\n        }),\r\n        __metadata(\"design:paramtypes\", [_slim_loading_bar_service__WEBPACK_IMPORTED_MODULE_1__[\"SlimLoadingBarService\"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ElementRef\"], _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ChangeDetectorRef\"]])\r\n    ], SlimLoadingBarComponent);\r\n    return SlimLoadingBarComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ng2-slim-loading-bar/./src/slim-loading-bar.component.ts?");

/***/ }),

/***/ "./src/slim-loading-bar.service.ts":
/*!*****************************************!*\
  !*** ./src/slim-loading-bar.service.ts ***!
  \*****************************************/
/*! exports provided: SlimLoadingBarEventType, SlimLoadingBarEvent, SlimLoadingBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarEventType\", function() { return SlimLoadingBarEventType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarEvent\", function() { return SlimLoadingBarEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlimLoadingBarService\", function() { return SlimLoadingBarService; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"@angular/core\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slim-loading-bar.utils */ \"./src/slim-loading-bar.utils.ts\");\n/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ \"rxjs/Subject\");\n/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__);\n// Copyright (C) 2016 Sergey Akopkokhyants\r\n// This project is licensed under the terms of the MIT license.\r\n// https://github.com/akserg/ng2-slim-loading-bar\r\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\nvar SlimLoadingBarEventType;\r\n(function (SlimLoadingBarEventType) {\r\n    SlimLoadingBarEventType[SlimLoadingBarEventType[\"PROGRESS\"] = 0] = \"PROGRESS\";\r\n    SlimLoadingBarEventType[SlimLoadingBarEventType[\"HEIGHT\"] = 1] = \"HEIGHT\";\r\n    SlimLoadingBarEventType[SlimLoadingBarEventType[\"COLOR\"] = 2] = \"COLOR\";\r\n    SlimLoadingBarEventType[SlimLoadingBarEventType[\"VISIBLE\"] = 3] = \"VISIBLE\";\r\n})(SlimLoadingBarEventType || (SlimLoadingBarEventType = {}));\r\nvar SlimLoadingBarEvent = (function () {\r\n    function SlimLoadingBarEvent(type, value) {\r\n        this.type = type;\r\n        this.value = value;\r\n    }\r\n    return SlimLoadingBarEvent;\r\n}());\r\n\r\n/**\r\n * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component\r\n */\r\nvar SlimLoadingBarService = (function () {\r\n    function SlimLoadingBarService() {\r\n        this._progress = 0;\r\n        this._height = '2px';\r\n        this._color = 'firebrick';\r\n        this._visible = true;\r\n        this._intervalCounterId = 0;\r\n        this.interval = 500; // in milliseconds\r\n        this.eventSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__[\"Subject\"]();\r\n        this.events = this.eventSource.asObservable();\r\n    }\r\n    Object.defineProperty(SlimLoadingBarService.prototype, \"progress\", {\r\n        get: function () {\r\n            return this._progress;\r\n        },\r\n        set: function (value) {\r\n            if (Object(_slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_1__[\"isPresent\"])(value)) {\r\n                if (value > 0) {\r\n                    this.visible = true;\r\n                }\r\n                this._progress = value;\r\n                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.PROGRESS, this._progress));\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SlimLoadingBarService.prototype, \"height\", {\r\n        get: function () {\r\n            return this._height;\r\n        },\r\n        set: function (value) {\r\n            if (Object(_slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_1__[\"isPresent\"])(value)) {\r\n                this._height = value;\r\n                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.HEIGHT, this._height));\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SlimLoadingBarService.prototype, \"color\", {\r\n        get: function () {\r\n            return this._color;\r\n        },\r\n        set: function (value) {\r\n            if (Object(_slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_1__[\"isPresent\"])(value)) {\r\n                this._color = value;\r\n                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.COLOR, this._color));\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SlimLoadingBarService.prototype, \"visible\", {\r\n        get: function () {\r\n            return this._visible;\r\n        },\r\n        set: function (value) {\r\n            if (Object(_slim_loading_bar_utils__WEBPACK_IMPORTED_MODULE_1__[\"isPresent\"])(value)) {\r\n                this._visible = value;\r\n                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    SlimLoadingBarService.prototype.emitEvent = function (event) {\r\n        if (this.eventSource) {\r\n            // Push up a new event\r\n            this.eventSource.next(event);\r\n        }\r\n    };\r\n    SlimLoadingBarService.prototype.start = function (onCompleted) {\r\n        var _this = this;\r\n        if (onCompleted === void 0) { onCompleted = null; }\r\n        // Stop current timer\r\n        this.stop();\r\n        // Make it visible for sure\r\n        this.visible = true;\r\n        // Run the timer with milliseconds iterval\r\n        this._intervalCounterId = setInterval(function () {\r\n            // Increment the progress and update view component\r\n            _this.progress++;\r\n            // If the progress is 100% - call complete\r\n            if (_this.progress === 100) {\r\n                _this.complete(onCompleted);\r\n            }\r\n        }, this.interval);\r\n    };\r\n    SlimLoadingBarService.prototype.stop = function () {\r\n        if (this._intervalCounterId) {\r\n            clearInterval(this._intervalCounterId);\r\n            this._intervalCounterId = null;\r\n        }\r\n    };\r\n    SlimLoadingBarService.prototype.reset = function () {\r\n        this.stop();\r\n        this.progress = 0;\r\n    };\r\n    SlimLoadingBarService.prototype.complete = function (onCompleted) {\r\n        var _this = this;\r\n        if (onCompleted === void 0) { onCompleted = null; }\r\n        this.progress = 100;\r\n        this.stop();\r\n        setTimeout(function () {\r\n            // Hide it away\r\n            _this.visible = false;\r\n            setTimeout(function () {\r\n                // Drop to 0\r\n                _this.progress = 0;\r\n                if (onCompleted) {\r\n                    onCompleted();\r\n                }\r\n            }, 250);\r\n        }, 250);\r\n    };\r\n    SlimLoadingBarService = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Injectable\"])(),\r\n        __metadata(\"design:paramtypes\", [])\r\n    ], SlimLoadingBarService);\r\n    return SlimLoadingBarService;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://ng2-slim-loading-bar/./src/slim-loading-bar.service.ts?");

/***/ }),

/***/ "./src/slim-loading-bar.utils.ts":
/*!***************************************!*\
  !*** ./src/slim-loading-bar.utils.ts ***!
  \***************************************/
/*! exports provided: isPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPresent\", function() { return isPresent; });\n/**\r\n * Check and return true if an object not undefined or null\r\n */\r\nfunction isPresent(obj) {\r\n    return obj !== undefined && obj !== null;\r\n}\r\n\n\n//# sourceURL=webpack://ng2-slim-loading-bar/./src/slim-loading-bar.utils.ts?");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;\n\n//# sourceURL=webpack://ng2-slim-loading-bar/external_%22@angular/core%22?");

/***/ }),

/***/ "rxjs/Subject":
/*!*******************************!*\
  !*** external "rxjs/Subject" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_Subject__;\n\n//# sourceURL=webpack://ng2-slim-loading-bar/external_%22rxjs/Subject%22?");

/***/ })

/******/ });
});