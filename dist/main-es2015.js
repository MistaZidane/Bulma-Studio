(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-panels></app-panels>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/iframe-panel/iframe-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/iframe-panel/iframe-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"focus\" style=\"display: none; position: absolute ; border: 2px solid teal;\"></div>\n\n<iframe id=\"iframe\"  width=\"85%\" frameborder=\"0\" ></iframe>\n\n<!-- <div class=\"onFocus\" id=\"onFocus\" style=\"display: none; border: 2px solid blue; position: absolute;\">\n\n</div>\n<div class=\"onHover\" id=\"onHover\" style=\"display: none; border: 2px solid blue; position: absolute;\"></div>\n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/component-toolbar/component-toolbar.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/component-toolbar/component-toolbar.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets\">\n    <h1 class=\"heading intro\">Components</h1>\n    <div class=\"search\">\n        <input type=\"text\" class=\"myInput\" placeholder=\"card\">\n        <span class=\"sear has-text-centered\"> <i class=\"material-icons\">search</i> </span>\n    </div>\n    <div class=\"others\">\n        <div class=\"ComponentList separetion\">\n            <span class=\"heading comText\">Components <i class=\"material-icons sign\">add</i> </span>\n            <ul>\n                <li class=\"\" >\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">breadcrumb</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">card</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">dropdown</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">menu</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">message</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">navbar</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">pagination</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">panel</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"comDrag($event)\" (mouseover)=\"over($event)\">tabs</p>\n                </li>\n            </ul>\n        </div>\n        <div class=\"elementsList separetion\">\n            <span class=\"heading comText\">Elements <i class=\"material-icons sign\">add</i> </span>\n            <ul>\n                <li class=\"\">\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">box</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">button</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">delete</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">image</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">notification</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">progress Bar</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">table</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">tag</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">title</p>\n                </li>\n            </ul>\n        </div>\n        <div class=\"LayoutList separetion\">\n            <span class=\"heading comText\">Layout <i class=\"material-icons sign\">add</i> </span>\n            <ul>\n                <li class=\"\">\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Container</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Level</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Hero</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Section</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Footer</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Tiles</p>\n            </ul>\n        </div>\n        <div class=\"formList separetion\">\n            <span class=\"heading comText\">Form <i class=\"material-icons sign\">add</i> </span>\n            <ul>\n                <li class=\"\">\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">input</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">textarea</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">select</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">checkbox</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">radio</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">file</p>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div style=\"display: none;\" id=\"preview\"> </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/left-panel.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/left-panel.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"columns left-panel\">\n        <!-- left toolbar  -->\n      <app-left-toolbar></app-left-toolbar>\n        <!-- components left toolbar -->\n        <div class=\"column is-11 components \">\n            <app-component-toolbar></app-component-toolbar>\n            </div>\n        \n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/left-toolbar/left-toolbar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/left-toolbar/left-toolbar.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column is-1 left-tools\">\n        <div class=\"section aside\">\n            <span class=\"left-icons\" (click)=\"phone()\"> <mat-icon [ngClass]=\"smartphone ? ' ' : 'current'\">smartphone</mat-icon></span>\n            <span class=\"left-icons\" (click)=\"tablet()\"> <mat-icon [ngClass]=\"tab ? '' : 'current'\">tablet_android</mat-icon></span>\n            <span class=\"left-icons\" (click)=\"laptop()\"> <mat-icon [ngClass]=\"lap ? '' : 'current'\">laptop</mat-icon></span>\n            <span class=\"left-icons\" (click)=\"dextop()\"> <mat-icon [ngClass]=\"des ? '' : 'current'\">desktop_windows</mat-icon> </span>\n            <div class=\"btm\">\n                <span class=\"left-icons\"> <mat-icon>cloud_upload </mat-icon> </span>\n                <span class=\"left-icons\"> <mat-icon>pages</mat-icon> </span>\n            </div>\n\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n<!-- panels -->\n<div class=\"columns main-column\">\n        <div class=\"column is-2\">\n            \n    <app-left-panel></app-left-panel>\n        </div>\n\n    <div class=\"column is-8 myFrame has-text-centered\">\n        <app-iframe-panel></app-iframe-panel>\n    </div>\n    <div class=\"column is-2 rightPanel\">\n        <app-right-panel></app-right-panel>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/animation/animation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/animation/animation.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"AnimationProperties\">\n        <span class=\"heading comText\">Animation <i class=\"material-icons sign\">keyboard_arrow_down</i>\n        </span>\n        <div class=\"columns width property\">\n            <div class=\"column is-7\">\n\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <optgroup label=\"Attention Seekers\">\n                            <option value=\"bounce\">bounce</option>\n                            <option value=\"flash\">flash</option>\n                            <option value=\"pulse\">pulse</option>\n                            <option value=\"rubberBand\">rubberBand</option>\n                            <option value=\"shake\">shake</option>\n                            <option value=\"swing\">swing</option>\n                            <option value=\"tada\">tada</option>\n                            <option value=\"wobble\">wobble</option>\n                            <option value=\"jello\">jello</option>\n                            <option value=\"heartBeat\">heartBeat</option>\n                        </optgroup>\n                        <optgroup label=\"Bouncing Entrances\">\n                            <option value=\"bounceIn\">bounceIn</option>\n                            <option value=\"bounceInDown\">bounceInDown</option>\n                            <option value=\"bounceInLeft\">bounceInLeft</option>\n                            <option value=\"bounceInRight\">bounceInRight</option>\n                            <option value=\"bounceInUp\">bounceInUp</option>\n                        </optgroup>\n                        <optgroup label=\"Bouncing Exits\">\n                            <option value=\"bounceOut\">bounceOut</option>\n                            <option value=\"bounceOutDown\">bounceOutDown</option>\n                            <option value=\"bounceOutLeft\">bounceOutLeft</option>\n                            <option value=\"bounceOutRight\">bounceOutRight</option>\n                            <option value=\"bounceOutUp\">bounceOutUp</option>\n                        </optgroup>\n                        <optgroup label=\"Fading Entrances\">\n                            <option value=\"fadeIn\">fadeIn</option>\n                            <option value=\"fadeInDown\">fadeInDown</option>\n                            <option value=\"fadeInDownBig\">fadeInDownBig</option>\n                            <option value=\"fadeInLeft\">fadeInLeft</option>\n                            <option value=\"fadeInLeftBig\">fadeInLeftBig</option>\n                            <option value=\"fadeInRight\">fadeInRight</option>\n                            <option value=\"fadeInRightBig\">fadeInRightBig</option>\n                            <option value=\"fadeInUp\">fadeInUp</option>\n                            <option value=\"fadeInUpBig\">fadeInUpBig</option>\n                        </optgroup>\n                        <optgroup label=\"Fading Exits\">\n                            <option value=\"fadeOut\">fadeOut</option>\n                            <option value=\"fadeOutDown\">fadeOutDown</option>\n                            <option value=\"fadeOutDownBig\">fadeOutDownBig</option>\n                            <option value=\"fadeOutLeft\">fadeOutLeft</option>\n                            <option value=\"fadeOutLeftBig\">fadeOutLeftBig</option>\n                            <option value=\"fadeOutRight\">fadeOutRight</option>\n                            <option value=\"fadeOutRightBig\">fadeOutRightBig</option>\n                            <option value=\"fadeOutUp\">fadeOutUp</option>\n                            <option value=\"fadeOutUpBig\">fadeOutUpBig</option>\n                        </optgroup>\n                        <optgroup label=\"Flippers\">\n                            <option value=\"flip\">flip</option>\n                            <option value=\"flipInX\">flipInX</option>\n                            <option value=\"flipInY\">flipInY</option>\n                            <option value=\"flipOutX\">flipOutX</option>\n                            <option value=\"flipOutY\">flipOutY</option>\n                        </optgroup>\n                        <optgroup label=\"Lightspeed\">\n                            <option value=\"lightSpeedIn\">lightSpeedIn</option>\n                            <option value=\"lightSpeedOut\">lightSpeedOut</option>\n                        </optgroup>\n                        <optgroup label=\"Rotating Entrances\">\n                            <option value=\"rotateIn\">rotateIn</option>\n                            <option value=\"rotateInDownLeft\">rotateInDownLeft</option>\n                            <option value=\"rotateInDownRight\">rotateInDownRight</option>\n                            <option value=\"rotateInUpLeft\">rotateInUpLeft</option>\n                            <option value=\"rotateInUpRight\">rotateInUpRight</option>\n                        </optgroup>\n                        <optgroup label=\"Rotating Exits\">\n                            <option value=\"rotateOut\">rotateOut</option>\n                            <option value=\"rotateOutDownLeft\">rotateOutDownLeft</option>\n                            <option value=\"rotateOutDownRight\">rotateOutDownRight</option>\n                            <option value=\"rotateOutUpLeft\">rotateOutUpLeft</option>\n                            <option value=\"rotateOutUpRight\">rotateOutUpRight</option>\n                        </optgroup>\n                        <optgroup label=\"Sliding Entrances\">\n                            <option value=\"slideInUp\">slideInUp</option>\n                            <option value=\"slideInDown\">slideInDown</option>\n                            <option value=\"slideInLeft\">slideInLeft</option>\n                            <option value=\"slideInRight\">slideInRight</option>\n\n                        </optgroup>\n                        <optgroup label=\"Sliding Exits\">\n                            <option value=\"slideOutUp\">slideOutUp</option>\n                            <option value=\"slideOutDown\">slideOutDown</option>\n                            <option value=\"slideOutLeft\">slideOutLeft</option>\n                            <option value=\"slideOutRight\">slideOutRight</option>\n\n                        </optgroup>\n                        <optgroup label=\"Zoom Entrances\">\n                            <option value=\"zoomIn\">zoomIn</option>\n                            <option value=\"zoomInDown\">zoomInDown</option>\n                            <option value=\"zoomInLeft\">zoomInLeft</option>\n                            <option value=\"zoomInRight\">zoomInRight</option>\n                            <option value=\"zoomInUp\">zoomInUp</option>\n                        </optgroup>\n                        <optgroup label=\"Zoom Exits\">\n                            <option value=\"zoomOut\">zoomOut</option>\n                            <option value=\"zoomOutDown\">zoomOutDown</option>\n                            <option value=\"zoomOutLeft\">zoomOutLeft</option>\n                            <option value=\"zoomOutRight\">zoomOutRight</option>\n                            <option value=\"zoomOutUp\">zoomOutUp</option>\n                        </optgroup>\n                        <optgroup label=\"Specials\">\n                            <option value=\"hinge\">hinge</option>\n                            <option value=\"jackInTheBox\">jackInTheBox</option>\n                            <option value=\"rollIn\">rollIn</option>\n                            <option value=\"rollOut\">rollOut</option>\n                        </optgroup>\n                    </select>\n                </div>\n\n            </div>\n\n            <div class=\"column is-5 inputForms\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>Wow</option>\n                        <option>Animate</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/appearance.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/appearance.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>appearance works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/layout/layout.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/layout/layout.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layoutProperties\">\n        <span class=\"heading comText\">Layout <i class=\"material-icons sign\">keyboard_arrow_down</i> </span>\n        <div class=\"columns width property\">\n            <div class=\"column is-5\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>Width</option>\n                        <option>Min-width</option>\n                        <option>Max-width</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"column is-3 inputForms\">\n                <input type=\"number\" class=\"input\" placeholder=\"12\">\n            </div>\n            <div class=\"column is-4\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>px</option>\n                        <option>%</option>\n                        <option>em</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <!-- height -->\n        <div class=\"columns height property\">\n            <div class=\"column is-5\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>Height</option>\n                        <option>Min-Height</option>\n                        <option>Max-Height</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"column is-3 inputForms\">\n                <input type=\"number\" class=\"input\" placeholder=\"12\">\n            </div>\n            <div class=\"column is-4\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>px</option>\n                        <option>%</option>\n                        <option>em</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div class=\"columns height property\">\n            <div class=\"column is-5\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>Margin</option>\n                        <option>Margin-Left</option>\n                        <option>Margin-Right</option>\n                        <option>Margin-Top</option>\n                        <option>Margin-Bottom</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"column is-3 inputForms\">\n                <input type=\"number\" class=\"input\" placeholder=\"12\">\n            </div>\n            <div class=\"column is-4\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>px</option>\n                        <option>%</option>\n                        <option>em</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div class=\"columns height property\">\n            <div class=\"column is-5\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>Padding</option>\n                        <option>Padding-Left</option>\n                        <option>Padding-Right</option>\n                        <option>Padding-Top</option>\n                        <option>Padding-Bottom</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"column is-3 inputForms\">\n                <input type=\"number\" class=\"input\" placeholder=\"12\">\n            </div>\n            <div class=\"column is-4\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>px</option>\n                        <option>%</option>\n                        <option>em</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/element-path/element-path.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/element-path/element-path.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"buttons are-small path\">\n        <button class=\"button\">Html</button>\n        <button class=\"button\">Body</button>\n        <button class=\"button\">Div</button>\n        <button class=\"button\">Div</button>\n        <button class=\"button is-primary element\">Span</button>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/right-panel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/right-panel.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sub-tools></app-sub-tools>\n<!-- element path -->\n<app-element-path></app-element-path>\n<!-- appearance -->\n<div class=\"apearance\">\n    <p class=\"heading\">Apearance</p>\n <app-layout></app-layout>\n   <app-animation></app-animation>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/sub-tools/sub-tools.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/sub-tools/sub-tools.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"heading comText\">Propeties</p>\n<div class=\"tools\">\n    <div class=\"columns\">\n        <div class=\"column is-6  subTools\">\n            <span><i class=\"material-icons\">format_italic</i></span>\n            <span><i class=\"material-icons\">format_bold</i></span>\n            <span><i class=\"material-icons\">format_underlined</i></span>\n            <span><i class=\"material-icons\">format_textdirection_l_to_r</i></span>\n            <span><i class=\"material-icons\">format_textdirection_r_to_l</i></span>\n        </div>\n        <div class=\"column is-6 subTools\">\n            <span><i class=\"material-icons\">format_align_left</i></span>\n            <span><i class=\"material-icons\">format_align_center</i></span>\n            <span><i class=\"material-icons\">format_align_justify</i></span>\n            <span><i class=\"material-icons\">format_align_right</i></span>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/toolbar/toolbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/toolbar/toolbar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- tool bar -->\n\n<div class=\"navbar toolbar\">\n    <div class=\"navbar-brand\">\n        <span class=\"navbar-item\" (click)=\"sideDrawer()\"> <mat-icon>menu</mat-icon> </span>\n    </div>\n    <div class=\"navbar-start\">\n        <span class=\"navbar-item home\">Design</span>\n        <span class=\"navbar-item\">Preview</span>\n    </div>\n    <div class=\"navbar-end\">\n        <!-- clipboard dropdown -->\n        <span class=\"dropdown is-hoverable\">\n                <span aria-haspopup=\"true\" aria-controls=\"dropdown-menu2\" class=\"navbar-item dropdown-trigger\"> <mat-icon>post_add</mat-icon></span>\n            <div class=\"dropdown-menu\" id=\"dropdown-menu2\" role=\"menu\">\n              <div class=\"dropdown-content\" id=\"clipboard\" (click)=\"copy($event)\">\n                <div class=\"dropdown-item\">\n                   <p class=\"heading\">Click to copy</p>\n                </div>\n                <hr class=\"dropdown-divider\">\n              </div>\n            </div>\n          </span>\n          <span class=\"navbar-item\"> <mat-icon>undo</mat-icon></span>  \n          <span class=\"navbar-item\"> <mat-icon>redo</mat-icon></span>\n          <span class=\"navbar-item\"> <mat-icon>code</mat-icon> </span>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bulmaStudio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/panels/panels.component.ts");
/* harmony import */ var _panels_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panels/left-panel/left-panel.component */ "./src/app/panels/left-panel/left-panel.component.ts");
/* harmony import */ var _panels_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panels/right-panel/right-panel.component */ "./src/app/panels/right-panel/right-panel.component.ts");
/* harmony import */ var _panels_iframe_panel_iframe_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/iframe-panel/iframe-panel.component */ "./src/app/panels/iframe-panel/iframe-panel.component.ts");
/* harmony import */ var _panels_left_panel_left_toolbar_left_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panels/left-panel/left-toolbar/left-toolbar.component */ "./src/app/panels/left-panel/left-toolbar/left-toolbar.component.ts");
/* harmony import */ var _panels_left_panel_component_toolbar_component_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panels/left-panel/component-toolbar/component-toolbar.component */ "./src/app/panels/left-panel/component-toolbar/component-toolbar.component.ts");
/* harmony import */ var _panels_right_panel_sub_tools_sub_tools_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panels/right-panel/sub-tools/sub-tools.component */ "./src/app/panels/right-panel/sub-tools/sub-tools.component.ts");
/* harmony import */ var _panels_right_panel_element_path_element_path_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panels/right-panel/element-path/element-path.component */ "./src/app/panels/right-panel/element-path/element-path.component.ts");
/* harmony import */ var _panels_right_panel_appearance_appearance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panels/right-panel/appearance/appearance.component */ "./src/app/panels/right-panel/appearance/appearance.component.ts");
/* harmony import */ var _panels_right_panel_appearance_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panels/right-panel/appearance/layout/layout.component */ "./src/app/panels/right-panel/appearance/layout/layout.component.ts");
/* harmony import */ var _panels_right_panel_appearance_animation_animation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./panels/right-panel/appearance/animation/animation.component */ "./src/app/panels/right-panel/appearance/animation/animation.component.ts");
/* harmony import */ var _panels_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panels/toolbar/toolbar.component */ "./src/app/panels/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _panels_panels_component__WEBPACK_IMPORTED_MODULE_5__["PanelsComponent"],
            _panels_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_6__["LeftPanelComponent"],
            _panels_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_7__["RightPanelComponent"],
            _panels_iframe_panel_iframe_panel_component__WEBPACK_IMPORTED_MODULE_8__["IframePanelComponent"],
            _panels_left_panel_left_toolbar_left_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["LeftToolbarComponent"],
            _panels_left_panel_component_toolbar_component_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ComponentToolbarComponent"],
            _panels_right_panel_sub_tools_sub_tools_component__WEBPACK_IMPORTED_MODULE_11__["SubToolsComponent"],
            _panels_right_panel_element_path_element_path_component__WEBPACK_IMPORTED_MODULE_12__["ElementPathComponent"],
            _panels_right_panel_appearance_appearance_component__WEBPACK_IMPORTED_MODULE_13__["AppearanceComponent"],
            _panels_right_panel_appearance_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
            _panels_right_panel_appearance_animation_animation_component__WEBPACK_IMPORTED_MODULE_15__["AnimationComponent"],
            _panels_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/panels/iframe-panel/iframe-panel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/panels/iframe-panel/iframe-panel.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9pZnJhbWUtcGFuZWwvaWZyYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/panels/iframe-panel/iframe-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/panels/iframe-panel/iframe-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: IframePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframePanelComponent", function() { return IframePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/size.service */ "./src/app/shared/size.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");




let IframePanelComponent = class IframePanelComponent {
    constructor(size, data) {
        this.size = size;
        this.data = data;
        // perant methods setup
        window.drop = this.drop.bind(this);
        window.dragover = this.dragover.bind(this);
        window.mouseover = this.mouseover.bind(this);
    }
    ngOnInit() {
        //setting the iframe data
        let iframe = document.querySelector('#iframe');
        let frame = iframe.contentWindow;
        // creating the css link
        let link = document.createElement('link');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css');
        link.setAttribute('rel', 'stylesheet');
        // appending the link to the head
        let csslink = frame.document.querySelector('head').appendChild(link);
        let framebody = frame.document.querySelector('body');
        console.log(framebody);
        // adding the mouseover event
        framebody.setAttribute('onmouseover', 'parent.mouseover(event)');
        // adding the ondrag event in the iframe and letting it access the parent window
        framebody.setAttribute('ondrop', 'parent.drop(event)');
        framebody.setAttribute('ondragover', 'parent.dragover(event)');
        framebody.style.backgroundColor = "white";
        framebody.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('test');
        });
        // listening for drop in body
        // setting the size of the iframe
        this.size.sizze$.subscribe(data => {
            this.output = data;
            if (data["state"] == "true") {
                let iframe = document.querySelector('#iframe');
                iframe.setAttribute('width', this.output['x']);
                iframe.setAttribute('height', this.output['y']);
            }
        });
        // showing textform for the text of elemnts to be editted 
        framebody.addEventListener('dblclick', function (event) {
            event.preventDefault();
            // checking to see that the target is not the body
            if (event.target != framebody) {
                if (event.type == 'dblclick') {
                    // creating the texarea that will show up
                    let input = document.createElement('input');
                    input.style.display = "none";
                    console.log(event);
                    let currentElement = event.target;
                    // the elements textContent should not be empty
                    if (currentElement.textContent !== '') {
                        // check to see if the element does not have chilldnodes
                        if (currentElement.children.length == 0) {
                            input.style.position = 'absolute';
                            input.style.zIndex = '4';
                            input.style.border = currentElement.style.border;
                            // getting computed styles to use for the input appearance 
                            let rect = currentElement.getBoundingClientRect();
                            let style = window.getComputedStyle(currentElement, 'before');
                            input.style.font = style.font;
                            input.style.boxShadow = ` 0 0 2px #3273dc`;
                            input.style.textAlign = style.textAlign;
                            input.style.width = currentElement.clientWidth + 'px';
                            input.style.height = currentElement.clientHeight + 'px';
                            input.style.minWidth = 4 + 'px';
                            input.style.minHeight = 7 + 'px';
                            input.style.zIndex = '99999';
                            input.style.left = rect.left + "px";
                            input.style.top = rect.top + 'px';
                            input.value = currentElement.textContent;
                            input.style.display = 'block';
                            framebody.appendChild(input);
                            // making the input to focus     
                            input.focus();
                            input.select();
                            // interchanging the data on blur
                            input.addEventListener('blur', function (e) {
                                e.preventDefault();
                                if (e.type == 'blur') {
                                    currentElement.textContent = input.value;
                                    framebody.removeChild(input);
                                }
                                else {
                                    framebody.removeChild(input);
                                }
                            });
                        }
                    }
                }
            }
        });
    }
    // preventing deafault to enable dropping
    dragover(event) {
        event.preventDefault();
    }
    // dropping event on iframe
    drop(event) {
        event.preventDefault();
        // setiing up the dropable data
        let iframe = document.querySelector('#iframe');
        let frame = iframe.contentWindow;
        let framebody = frame.document.querySelector('body');
        // creating the css link
        event.target.innerHTML += this.data.recievedData;
    }
    // for m
    mouseover(event) {
        event.preventDefault();
        let div = document.createElement('div');
        var element;
        let iframe = document.querySelector('#iframe');
        let frame = iframe.contentWindow;
        let framebody = frame.document.querySelector('body');
        element = event.target;
        if (event.target != framebody) {
            var bor = window.frames.getComputedStyle(element);
            var bb = bor.border;
            element.style.border = '1px solid green';
        }
        event.target.addEventListener('mouseout', function (e) {
            e.preventDefault();
            let ele = e.target;
            element.style.removeProperty('border');
        });
    }
    undo() {
        let i = 0;
    }
};
IframePanelComponent.ctorParameters = () => [
    { type: _shared_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
IframePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-iframe-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./iframe-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/iframe-panel/iframe-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./iframe-panel.component.css */ "./src/app/panels/iframe-panel/iframe-panel.component.css")).default]
    })
], IframePanelComponent);



/***/ }),

/***/ "./src/app/panels/left-panel/component-toolbar/component-toolbar.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/panels/left-panel/component-toolbar/component-toolbar.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9sZWZ0LXBhbmVsL2NvbXBvbmVudC10b29sYmFyL2NvbXBvbmVudC10b29sYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/panels/left-panel/component-toolbar/component-toolbar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/panels/left-panel/component-toolbar/component-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: ComponentToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentToolbarComponent", function() { return ComponentToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/data.service */ "./src/app/shared/data.service.ts");



let ComponentToolbarComponent = class ComponentToolbarComponent {
    constructor(data) {
        this.data = data;
        // varaibles to hold data from the service
        this.recivedComponentData = [];
        this.recievedElementData = [];
    }
    ngOnInit() {
        // getting all the data associated with the service
        this.recivedComponentData = this.data.componentData;
        this.recievedElementData = this.data.elementData;
    }
    // handles componet data drag
    comDrag(event) {
        // handles componet data drag
        event.preventDefault();
        // console.log(event.target.innerHTML)
        // console.log(this.data.data)
        let text = event.target.innerHTML;
        for (let i = 0; i < this.data.componentData.length; i++) {
            if (this.recivedComponentData[i].name == text) {
                this.dataToBeSent = this.recivedComponentData[i].source;
                console.log('ok');
                this.data.recievedData = this.dataToBeSent;
            }
        }
    }
    // handles element data drag
    elemDrag(event) {
        event.preventDefault();
        let text = event.target.innerHTML;
        for (let i = 0; i < this.data.elementData.length; i++) {
            if (this.recievedElementData[i].name == text) {
                this.dataToBeSent = this.recievedElementData[i].source;
                this.data.recievedData = this.dataToBeSent;
            }
        }
    }
    // handles layout data drag
    layDrag(event) {
        event.preventDefault();
        console.log(event.target.innerHTML);
    }
    // handles form data drag
    formDrag(event) {
        event.preventDefault();
        console.log(event.target.innerHTML);
    }
    // show the hidden preview div
    over(event) {
        // event.preventDefault()
        // let previewDiv = <HTMLElement>document.querySelector('#preview');
        // let text = event.target.innerHTML;
        // for (let i = 0; i < this.data.componentData.length; i++) {
        //   if (this.recivedComponentData[i].name == text) {
        //     previewDiv.innerHTML = this.recivedComponentData[i].source;
        //     console.log(event)
        //     previewDiv.style.display= "block"
        //     previewDiv.style.position='fixed';
        //     previewDiv.style.top= 100+ "px";
        //     previewDiv.style.left= 100 + "px";
        //   }
        // }
    }
};
ComponentToolbarComponent.ctorParameters = () => [
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
ComponentToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-component-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/component-toolbar/component-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component-toolbar.component.css */ "./src/app/panels/left-panel/component-toolbar/component-toolbar.component.css")).default]
    })
], ComponentToolbarComponent);



/***/ }),

/***/ "./src/app/panels/left-panel/left-panel.component.css":
/*!************************************************************!*\
  !*** ./src/app/panels/left-panel/left-panel.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9sZWZ0LXBhbmVsL2xlZnQtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/panels/left-panel/left-panel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/panels/left-panel/left-panel.component.ts ***!
  \***********************************************************/
/*! exports provided: LeftPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPanelComponent", function() { return LeftPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeftPanelComponent = class LeftPanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeftPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-left-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/left-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-panel.component.css */ "./src/app/panels/left-panel/left-panel.component.css")).default]
    })
], LeftPanelComponent);



/***/ }),

/***/ "./src/app/panels/left-panel/left-toolbar/left-toolbar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/panels/left-panel/left-toolbar/left-toolbar.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9sZWZ0LXBhbmVsL2xlZnQtdG9vbGJhci9sZWZ0LXRvb2xiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/panels/left-panel/left-toolbar/left-toolbar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/panels/left-panel/left-toolbar/left-toolbar.component.ts ***!
  \**************************************************************************/
/*! exports provided: LeftToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftToolbarComponent", function() { return LeftToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/size.service */ "./src/app/shared/size.service.ts");



let LeftToolbarComponent = class LeftToolbarComponent {
    constructor(size) {
        this.size = size;
        this.smartphone = true;
        this.tab = true;
        this.lap = false;
        this.des = true;
    }
    ngOnInit() {
    }
    phone() {
        let data = {
            "y": '914px',
            "x": '425px',
            'state': 'true'
        };
        this.smartphone = false;
        this.tab = true;
        this.lap = true;
        this.des = true;
        this.size.iframeSize(data);
    }
    tablet() {
        let data = {
            "y": '914px',
            "x": '768px',
            'state': 'true'
        };
        this.size.iframeSize(data);
        this.smartphone = true;
        this.tab = false;
        this.lap = true;
        this.des = true;
    }
    laptop() {
        let data = {
            "x": '85%',
            "y": '99.1%',
            'state': 'true'
        };
        this.size.iframeSize(data);
        this.smartphone = true;
        this.tab = true;
        this.lap = false;
        this.des = true;
    }
    dextop() {
        let data = {
            "x": '94%',
            "y": '942px',
            'state': 'true'
        };
        this.size.iframeSize(data);
        this.smartphone = true;
        this.tab = true;
        this.lap = true;
        this.des = false;
    }
};
LeftToolbarComponent.ctorParameters = () => [
    { type: _shared_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] }
];
LeftToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-left-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/left-toolbar/left-toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-toolbar.component.css */ "./src/app/panels/left-panel/left-toolbar/left-toolbar.component.css")).default]
    })
], LeftToolbarComponent);



/***/ }),

/***/ "./src/app/panels/panels.component.css":
/*!*********************************************!*\
  !*** ./src/app/panels/panels.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9wYW5lbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/panels/panels.component.ts":
/*!********************************************!*\
  !*** ./src/app/panels/panels.component.ts ***!
  \********************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/size.service */ "./src/app/shared/size.service.ts");
/* harmony import */ var _shared_drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/drawer.service */ "./src/app/shared/drawer.service.ts");




let PanelsComponent = class PanelsComponent {
    constructor(size, drawer) {
        this.size = size;
        this.drawer = drawer;
        this.drawerOpen = false;
        this.sizess = {
            "y": '914px',
            "x": '425px',
            'state': 'true'
        };
    }
    ngOnInit() {
        // // gettting the current iframe size
        // this.size.sizze$.subscribe(data => {
        //   this.output = data;
        //   if (data["state"] == "true") {
        //     let iframe = document.querySelector('#iframe');
        //     iframe.setAttribute('width', this.output['x']);
        //     iframe.setAttribute('height', this.output['y']);
        //   }
        // });
        // // zooming
        // let iframe = document.querySelector('.myFrame');
        // window.addEventListener('keydown', function (event) {
        //   if (event.key == 'Control') {
        //     // wheel event
        //     iframe.addEventListener('wheel', function (e) {
        //       console.log(e)
        //       if ((<any>e).deltaY > -1) {
        //         console.log(this.sizess['y'])
        //         let num = 5;
        //         this.sizess['y'] = `${num += num} px`;
        //         this.sizess['x'] = `${num += num} px`;
        //         this.size.iframeSize(this.sizess)
        //       }
        //       // iframe.setAttribute('width', '')
        //     })
        //   }
        // })
    }
};
PanelsComponent.ctorParameters = () => [
    { type: _shared_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] },
    { type: _shared_drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"] }
];
PanelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panels',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panels.component.css */ "./src/app/panels/panels.component.css")).default]
    })
], PanelsComponent);



/***/ }),

/***/ "./src/app/panels/right-panel/appearance/animation/animation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/panels/right-panel/appearance/animation/animation.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9hcHBlYXJhbmNlL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/panels/right-panel/appearance/animation/animation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/panels/right-panel/appearance/animation/animation.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimationComponent = class AnimationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/animation/animation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animation.component.css */ "./src/app/panels/right-panel/appearance/animation/animation.component.css")).default]
    })
], AnimationComponent);



/***/ }),

/***/ "./src/app/panels/right-panel/appearance/appearance.component.css":
/*!************************************************************************!*\
  !*** ./src/app/panels/right-panel/appearance/appearance.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9hcHBlYXJhbmNlL2FwcGVhcmFuY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/panels/right-panel/appearance/appearance.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/panels/right-panel/appearance/appearance.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppearanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceComponent", function() { return AppearanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppearanceComponent = class AppearanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppearanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appearance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appearance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/appearance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appearance.component.css */ "./src/app/panels/right-panel/appearance/appearance.component.css")).default]
    })
], AppearanceComponent);



/***/ }),

/***/ "./src/app/panels/right-panel/appearance/layout/layout.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/panels/right-panel/appearance/layout/layout.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9hcHBlYXJhbmNlL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/panels/right-panel/appearance/layout/layout.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/panels/right-panel/appearance/layout/layout.component.ts ***!
  \**************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/panels/right-panel/appearance/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/panels/right-panel/element-path/element-path.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/panels/right-panel/element-path/element-path.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9lbGVtZW50LXBhdGgvZWxlbWVudC1wYXRoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/panels/right-panel/element-path/element-path.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/panels/right-panel/element-path/element-path.component.ts ***!
  \***************************************************************************/
/*! exports provided: ElementPathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementPathComponent", function() { return ElementPathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElementPathComponent = class ElementPathComponent {
    constructor() { }
    ngOnInit() {
    }
};
ElementPathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-element-path',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./element-path.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/element-path/element-path.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./element-path.component.css */ "./src/app/panels/right-panel/element-path/element-path.component.css")).default]
    })
], ElementPathComponent);



/***/ }),

/***/ "./src/app/panels/right-panel/right-panel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/panels/right-panel/right-panel.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9yaWdodC1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/panels/right-panel/right-panel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/panels/right-panel/right-panel.component.ts ***!
  \*************************************************************/
/*! exports provided: RightPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPanelComponent", function() { return RightPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightPanelComponent = class RightPanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
RightPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-right-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./right-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/right-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./right-panel.component.css */ "./src/app/panels/right-panel/right-panel.component.css")).default]
    })
], RightPanelComponent);



/***/ }),

/***/ "./src/app/panels/right-panel/sub-tools/sub-tools.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/panels/right-panel/sub-tools/sub-tools.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9zdWItdG9vbHMvc3ViLXRvb2xzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/panels/right-panel/sub-tools/sub-tools.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/panels/right-panel/sub-tools/sub-tools.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubToolsComponent", function() { return SubToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubToolsComponent = class SubToolsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SubToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-tools',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/sub-tools/sub-tools.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-tools.component.css */ "./src/app/panels/right-panel/sub-tools/sub-tools.component.css")).default]
    })
], SubToolsComponent);



/***/ }),

/***/ "./src/app/panels/toolbar/toolbar.component.css":
/*!******************************************************!*\
  !*** ./src/app/panels/toolbar/toolbar.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" .dropdown-content{\n    margin-right: 20px !important;\n    \n}\n.dropdown-menu{  \n    width: 70%;\n}\npre{\n    overflow: auto;\n    color: black !important;\n    width: 100%;\n}\n.dropdown-item{\n    padding: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csNkJBQTZCOztBQUVqQztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5kcm9wZG93bi1jb250ZW50e1xuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgIFxufVxuLmRyb3Bkb3duLW1lbnV7ICBcbiAgICB3aWR0aDogNzAlO1xufVxucHJle1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duLWl0ZW17XG4gICAgcGFkZGluZzogMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/panels/toolbar/toolbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/panels/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.open = false;
    }
    ngOnInit() {
        // clipboard pasting 
        window.addEventListener('paste', function (event) {
            console.log("pasting");
            let pasted = event.clipboardData;
            let clip = document.querySelector('#clipboard');
            clip.innerHTML += `<div class="dropdown-item">
      <pre> ${pasted.getData('text')} </pre>
   </div>
   <hr class="dropdown-divider">`;
        });
        // working on the clipboard select from pre tag
    }
    // copy from clipboard
    copy(event) {
        if (event.target.localName == 'pre') {
            console.log('gdghsdhgd');
            // creating a texarea element to access the select() method
            let textarea = document.createElement('textarea');
            let targ = event.target;
            document.body.appendChild(textarea);
            textarea.value = targ.textContent;
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
        else {
            console.log("not ok");
        }
    }
    sideDrawer() {
        console.log("dwwf");
    }
};
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/panels/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() {
        this.componentData = [
            {
                "name": "breadcrumb",
                "source": `<nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>`
            },
            {
                "name": "card",
                "source": `<div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
    
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>`
            },
            {
                "name": "dropdown",
                "source": `<div class="dropdown is-active">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Dropdown button</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item">
          Dropdown item
        </a>
        <a class="dropdown-item">
          Other dropdown item
        </a>
        <a href="#" class="dropdown-item is-active">
          Active dropdown item
        </a>
        <a href="#" class="dropdown-item">
          Other dropdown item
        </a>
        <hr class="dropdown-divider">
        <a href="#" class="dropdown-item">
          With a divider
        </a>
      </div>
    </div>
  </div>`
            },
            {
                "name": "menu",
                "source": `<aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>`
            },
            {
                "name": "message",
                "source": `<article class="message">
  <div class="message-header">
    <p>Hello World</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>`
            },
            {
                "name": "modal",
                "source": `<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>`
            },
            {
                "name": "navbar",
                "source": `<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`
            },
            {
                "name": "pagination",
                "source": `<nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>`
            },
            {
                "name": "breadcrumb",
                "source": `<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>`
            },
            {
                "name": "panel",
                "source": `<nav class="panel">
  <p class="panel-heading">
    Repositories
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </p>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    daniellowtw/infboard
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    mojs
  </a>
  <label class="panel-block">
    <input type="checkbox">
    remember me
  </label>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset all filters
    </button>
  </div>
</nav>`
            },
            {
                "name": "tabs",
                "source": `<div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>`
            },
        ];
        this.elementData = [
            {
                "name": "box",
                "source": `<div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>`
            },
            {
                "name": "button",
                "source": `<button class="button">Button</button>`
            },
            {
                "name": "delete",
                "source": `<a class="delete"></a>`
            },
            {
                "name": "image",
                "source": `<figure class="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>`
            },
            {
                "name": "notification",
                "source": `<div class="notification">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>`
            },
            {
                "name": "progress Bar",
                "source": `<progress class="progress" value="15" max="100">15%</progress>`
            },
            {
                "name": "breadcrumb",
                "source": `<nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>`
            },
            {
                "name": "tag",
                "source": `<span class="tag">
        Tag label
      </span>`
            },
            {
                "name": "title",
                "source": `<h1 class="title">Title</h1>
        <h2 class="subtitle">Subtitle</h2>`
            },
        ];
    }
    // the get and set for the droppable data
    get recievedData() {
        return this._recievedData;
    }
    set recievedData(value) {
        this._recievedData = value;
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/shared/drawer.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/drawer.service.ts ***!
  \******************************************/
/*! exports provided: DrawerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerService", function() { return DrawerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DrawerService = class DrawerService {
    constructor() {
        this._drawerource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.state$ = this._drawerource.asObservable();
    }
    drawerState(dara) {
        this._drawerource.next(dara);
    }
};
DrawerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DrawerService);



/***/ }),

/***/ "./src/app/shared/size.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/size.service.ts ***!
  \****************************************/
/*! exports provided: SizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeService", function() { return SizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SizeService = class SizeService {
    constructor() {
        this._size = {
            'state': ''
        };
        this._sizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sizze$ = this._sizeSource.asObservable();
    }
    iframeSize(dara) {
        this._sizeSource.next(dara);
    }
};
SizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SizeService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sevenacademy/Desktop/bulmaStudio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map