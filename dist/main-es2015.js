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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/code/code.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/code/code.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"codePreview\">     \n<pre>\n    <code contenteditable=\"\" spellcheck=\"false\" class=\"html\" [highlight]=\"codeHtml\"> </code>\n    \n</pre>\n<br>\n <div class=\"buttons\">\n    <button class=\"button is-primary Save\" (click)=\"save()\">Save</button>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/iframe-panel/iframe-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/iframe-panel/iframe-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div id=\"focus\" style=\"display: none; position: absolute ; border: 2px solid teal;\"></div> -->\n<iframe id=\"iframe\"  width=\"85%\" frameborder=\"0\"></iframe>\n\n\n<!-- <div class=\"onFocus\" id=\"onFocus\" style=\"display: none; border: 2px solid blue; position: absolute;\">\n\n</div>\n<div class=\"onHover\" id=\"onHover\" style=\"display: none; border: 2px solid blue; position: absolute;\"></div>\n -->\n <span id=\"info\" style=\"float: left; position: fixed; padding: 1px; font-size: x-small; background-color: rgb(34, 148, 227); color: rgb(255, 255, 255);\"></span>\n<div id=\"focus\" style=\" position: fixed; border: 1px solid rgb(34, 148, 227);\">\n    \n</div>\n<div id=\"clickFocus\" style=\" position: fixed; border: 1px solid rgb(34, 148, 227);\"></div>\n<span id=\"clickInfo\" style=\" float: left; position: fixed; padding: 1px; font-size: x-small; background-color: rgb(34, 148, 227); color: rgb(255, 255, 255); width: 1061px; top: -16px; left: 0px;\">\n<mat-icon id=\"delete\" matTooltip=\"delete\">delete</mat-icon>\n<mat-icon id=\"duplicate\" matTooltip=\"delete\">add_circle_outline</mat-icon>\n<mat-icon id=\"edit\" matTooltip=\"edit\">edit</mat-icon>\n<mat-icon id=\"parent\" matTooltip=\"select parent\">arrow_drop_up</mat-icon>\n<mat-icon id=\"moveDown\" matTooltip=\"move down\">arrow_downward</mat-icon>\n<mat-icon id=\"moveUp\" matTooltip=\"move up\">arrow_upward</mat-icon>\n</span>\n\n<div id=\"line\" style=\"display: none; position: fixed; border: 1px solid rgb(34, 148, 227); width:100px\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/component-toolbar/component-toolbar.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/left-panel/component-toolbar/component-toolbar.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets\">\n    <h1 class=\"heading intro\">Components</h1>\n    <div class=\"search\">\n        <input type=\"text\" class=\"myInput\" placeholder=\"card\">\n        <span class=\"sear has-text-centered\"> <i class=\"material-icons\">search</i> </span>\n    </div>\n    <div class=\"others\">\n        <mat-expansion-panel [expanded]='true'>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Components\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <ul>\n                <li class=\"\">\n\n                    <p class=\"subtitle is-6 copo\"><span class=\"dragMe\" draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">breadcrumb</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">card</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">dropdown</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">menu</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">message</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">navbar</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">pagination</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">panel</span> </p>\n                    <p class=\"subtitle is-6 copo\"><span draggable=true (drag)=\"comDrag($event)\"\n                            (mouseover)=\"over($event)\">tabs</span> </p>\n                </li>\n            </ul>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel [expanded]='true'>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Elements\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <ul>\n                <li class=\"\">\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">box</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">button</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">delete</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">image</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">notification</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">progress Bar</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">table</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">tag</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"elemDrag($event)\">title</p>\n                </li>\n            </ul>\n        </mat-expansion-panel>\n        <mat-expansion-panel [expanded]='true'>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Layout\n                </mat-panel-title>\n\n            </mat-expansion-panel-header>\n\n            <ul>\n                <li class=\"\">\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Container</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Level</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Hero</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Section</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Footer</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"layDrag($event)\">Tiles</p>\n            </ul>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Layout\n                </mat-panel-title>\n\n            </mat-expansion-panel-header>\n\n            <ul>\n                <li class=\"\">\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">input</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">textarea</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">select</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">checkbox</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">radio</p>\n                    <p class=\"subtitle is-6 copo\" draggable=true (drag)=\"formDrag($event)\">file</p>\n            </ul>\n        </mat-expansion-panel>\n\n    </div>\n</div>\n\n<div style=\"display: none;\" id=\"preview\"> </div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column is-1 left-tools\">\n        <div class=\"section aside\">\n            <span class=\"left-icons\" (click)=\"phone()\" matTooltip=\"Info about the action\"> <mat-icon [ngClass]=\"smartphone ? ' ' : 'current'\">smartphone</mat-icon></span>\n            <span class=\"left-icons\" (click)=\"tablet()\" matTooltip=\"Info about the action\"> <mat-icon [ngClass]=\"tab ? '' : 'current'\">tablet_android</mat-icon></span>\n            <span class=\"left-icons\" (click)=\"laptop()\" matTooltip=\"Info about the action\"> <mat-icon [ngClass]=\"lap ? '' : 'current'\">laptop</mat-icon></span>\n            <span class=\"left-icons\" (click)=\"dextop()\" matTooltip=\"Info about the action\"> <mat-icon [ngClass]=\"des ? '' : 'current'\">desktop_windows</mat-icon> </span>\n            <div class=\"btm\">\n                <span class=\"left-icons\" matTooltip=\"Info about the action\" > <mat-icon>cloud_upload </mat-icon> </span>\n                <input type=\"file\" (change)=\"upload($event)\">\n                <img src=\"\" alt=\"\" id=\"img\" height=\"200px\" width=\"100px\">\n                <span class=\"left-icons\" matTooltip=\"Info about the action\"> <mat-icon>pages</mat-icon> </span>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/panels.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n<!-- panels -->\n<div class=\"columns main-column\">\n        <div class=\"column is-2\">\n            \n    <app-left-panel></app-left-panel>\n        </div>\n\n    <div class=\"column is-8 myFrame has-text-centered\">\n            <router-outlet></router-outlet>\n           \n    </div>\n    <div class=\"column is-2 rightPanel\">\n        <app-right-panel></app-right-panel>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/animation/animation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/appearance/animation/animation.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"AnimationProperties\">\n        <span class=\"heading comText\">Animation <i class=\"material-icons sign\">keyboard_arrow_down</i>\n        </span>\n        <div class=\"columns width property\">\n            <div class=\"column is-7\">\n\n                <div class=\"select\">\n                    <select class=\"mySelect\" (change)=\"animation($event)\">\n                        <optgroup label=\"Attention Seekers\">\n                            <option value=\"bounce\">bounce</option>\n                            <option value=\"flash\">flash</option>\n                            <option value=\"pulse\">pulse</option>\n                            <option value=\"rubberBand\">rubberBand</option>\n                            <option value=\"shake\">shake</option>\n                            <option value=\"swing\">swing</option>\n                            <option value=\"tada\">tada</option>\n                            <option value=\"wobble\">wobble</option>\n                            <option value=\"jello\">jello</option>\n                            <option value=\"heartBeat\">heartBeat</option>\n                        </optgroup>\n                        <optgroup label=\"Bouncing Entrances\">\n                            <option value=\"bounceIn\">bounceIn</option>\n                            <option value=\"bounceInDown\">bounceInDown</option>\n                            <option value=\"bounceInLeft\">bounceInLeft</option>\n                            <option value=\"bounceInRight\">bounceInRight</option>\n                            <option value=\"bounceInUp\">bounceInUp</option>\n                        </optgroup>\n                        <optgroup label=\"Bouncing Exits\">\n                            <option value=\"bounceOut\">bounceOut</option>\n                            <option value=\"bounceOutDown\">bounceOutDown</option>\n                            <option value=\"bounceOutLeft\">bounceOutLeft</option>\n                            <option value=\"bounceOutRight\">bounceOutRight</option>\n                            <option value=\"bounceOutUp\">bounceOutUp</option>\n                        </optgroup>\n                        <optgroup label=\"Fading Entrances\">\n                            <option value=\"fadeIn\">fadeIn</option>\n                            <option value=\"fadeInDown\">fadeInDown</option>\n                            <option value=\"fadeInDownBig\">fadeInDownBig</option>\n                            <option value=\"fadeInLeft\">fadeInLeft</option>\n                            <option value=\"fadeInLeftBig\">fadeInLeftBig</option>\n                            <option value=\"fadeInRight\">fadeInRight</option>\n                            <option value=\"fadeInRightBig\">fadeInRightBig</option>\n                            <option value=\"fadeInUp\">fadeInUp</option>\n                            <option value=\"fadeInUpBig\">fadeInUpBig</option>\n                        </optgroup>\n                        <optgroup label=\"Fading Exits\">\n                            <option value=\"fadeOut\">fadeOut</option>\n                            <option value=\"fadeOutDown\">fadeOutDown</option>\n                            <option value=\"fadeOutDownBig\">fadeOutDownBig</option>\n                            <option value=\"fadeOutLeft\">fadeOutLeft</option>\n                            <option value=\"fadeOutLeftBig\">fadeOutLeftBig</option>\n                            <option value=\"fadeOutRight\">fadeOutRight</option>\n                            <option value=\"fadeOutRightBig\">fadeOutRightBig</option>\n                            <option value=\"fadeOutUp\">fadeOutUp</option>\n                            <option value=\"fadeOutUpBig\">fadeOutUpBig</option>\n                        </optgroup>\n                        <optgroup label=\"Flippers\">\n                            <option value=\"flip\">flip</option>\n                            <option value=\"flipInX\">flipInX</option>\n                            <option value=\"flipInY\">flipInY</option>\n                            <option value=\"flipOutX\">flipOutX</option>\n                            <option value=\"flipOutY\">flipOutY</option>\n                        </optgroup>\n                        <optgroup label=\"Lightspeed\">\n                            <option value=\"lightSpeedIn\">lightSpeedIn</option>\n                            <option value=\"lightSpeedOut\">lightSpeedOut</option>\n                        </optgroup>\n                        <optgroup label=\"Rotating Entrances\">\n                            <option value=\"rotateIn\">rotateIn</option>\n                            <option value=\"rotateInDownLeft\">rotateInDownLeft</option>\n                            <option value=\"rotateInDownRight\">rotateInDownRight</option>\n                            <option value=\"rotateInUpLeft\">rotateInUpLeft</option>\n                            <option value=\"rotateInUpRight\">rotateInUpRight</option>\n                        </optgroup>\n                        <optgroup label=\"Rotating Exits\">\n                            <option value=\"rotateOut\">rotateOut</option>\n                            <option value=\"rotateOutDownLeft\">rotateOutDownLeft</option>\n                            <option value=\"rotateOutDownRight\">rotateOutDownRight</option>\n                            <option value=\"rotateOutUpLeft\">rotateOutUpLeft</option>\n                            <option value=\"rotateOutUpRight\">rotateOutUpRight</option>\n                        </optgroup>\n                        <optgroup label=\"Sliding Entrances\">\n                            <option value=\"slideInUp\">slideInUp</option>\n                            <option value=\"slideInDown\">slideInDown</option>\n                            <option value=\"slideInLeft\">slideInLeft</option>\n                            <option value=\"slideInRight\">slideInRight</option>\n\n                        </optgroup>\n                        <optgroup label=\"Sliding Exits\">\n                            <option value=\"slideOutUp\">slideOutUp</option>\n                            <option value=\"slideOutDown\">slideOutDown</option>\n                            <option value=\"slideOutLeft\">slideOutLeft</option>\n                            <option value=\"slideOutRight\">slideOutRight</option>\n\n                        </optgroup>\n                        <optgroup label=\"Zoom Entrances\">\n                            <option value=\"zoomIn\">zoomIn</option>\n                            <option value=\"zoomInDown\">zoomInDown</option>\n                            <option value=\"zoomInLeft\">zoomInLeft</option>\n                            <option value=\"zoomInRight\">zoomInRight</option>\n                            <option value=\"zoomInUp\">zoomInUp</option>\n                        </optgroup>\n                        <optgroup label=\"Zoom Exits\">\n                            <option value=\"zoomOut\">zoomOut</option>\n                            <option value=\"zoomOutDown\">zoomOutDown</option>\n                            <option value=\"zoomOutLeft\">zoomOutLeft</option>\n                            <option value=\"zoomOutRight\">zoomOutRight</option>\n                            <option value=\"zoomOutUp\">zoomOutUp</option>\n                        </optgroup>\n                        <optgroup label=\"Specials\">\n                            <option value=\"hinge\">hinge</option>\n                            <option value=\"jackInTheBox\">jackInTheBox</option>\n                            <option value=\"rollIn\">rollIn</option>\n                            <option value=\"rollOut\">rollOut</option>\n                        </optgroup>\n                    </select>\n                </div>\n\n            </div>\n\n            <div class=\"column is-5 inputForms\">\n                <div class=\"select\">\n                    <select class=\"mySelect\">\n                        <option>Wow</option>\n                        <option>Animate</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layoutProperties\">\n    <!-- display and position -->\n    <div class=\"columns \">\n        <div class=\"column is-6\">\n            <p class=\"heading\">Display</p>\n            <div class=\"select\">\n                <select class=\"\" id=\"width\" (change)=\"display($event)\">\n                    <option value=\"block\">Block</option>\n                    <option value=\"inline\">Inline</option>\n                    <option value=\"inline-block\">Inline-block</option>\n                    <option value=\"none\">None</option>\n                    <option value=\"flex\">Flex</option>\n                    <option value=\"grid\">Grid</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"column is-6\">\n            <p class=\"heading\">Position</p>\n            <div class=\"select\">\n                <select class=\"\" id=\"width\">\n                    <option>Fixed</option>\n                    <option>Absolute</option>\n                    <option>Static</option>\n                    <option>Relative</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <div class=\"columns\">\n        <div class=\"column\">\n                <p class=\"heading\">Float</p>\n            <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" class=\"float\">\n                <mat-button-toggle value=\" \" (change)=\"float($event.value)\"> <mat-icon>clear</mat-icon></mat-button-toggle>\n                <mat-button-toggle value=\"left\" (change)=\"float($event.value)\"><mat-icon>format_align_left</mat-icon></mat-button-toggle>\n                <mat-button-toggle value=\"right\" (change)=\"float($event.value)\"><mat-icon>format_align_right</mat-icon></mat-button-toggle>\n            </mat-button-toggle-group>\n        </div>\n    </div>\n    <span class=\"heading comText\">Layout <i class=\"material-icons sign\">keyboard_arrow_down</i> </span>\n \n<!-- layout  -->\n<div class=\"columns property\">\n\n</div>\n\n    <div class=\"columns width property\">\n        <div class=\"column is-5\">\n            <div class=\"select\">\n                <select class=\"mySelect\" id=\"width\">\n                    <option>Width</option>\n                    <option>Min-width</option>\n                    <option>Max-width</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"column is-3 inputForms\">\n            <input type=\"number\" class=\"input\" placeholder=\"12\" id=\"widthInput\">\n        </div>\n        <div class=\"column is-4\">\n            <div class=\"select\">\n                <select class=\"mySelect\" id=\"widthUnit\">\n                    <option>px</option>\n                    <option>%</option>\n                    <option>em</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <!-- height -->\n    <div class=\"columns height property\">\n        <div class=\"column is-5\">\n            <div class=\"select\">\n                <select class=\"mySelect\">\n                    <option>Height</option>\n                    <option>Min-Height</option>\n                    <option>Max-Height</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"column is-3 inputForms\">\n            <input type=\"number\" class=\"input\" placeholder=\"12\">\n        </div>\n        <div class=\"column is-4\">\n            <div class=\"select\">\n                <select class=\"mySelect\">\n                    <option>px</option>\n                    <option>%</option>\n                    <option>em</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <div class=\"columns height property\">\n        <div class=\"column is-5\">\n            <div class=\"select\">\n                <select class=\"mySelect\">\n                    <option>Margin</option>\n                    <option>Margin-Left</option>\n                    <option>Margin-Right</option>\n                    <option>Margin-Top</option>\n                    <option>Margin-Bottom</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"column is-3 inputForms\">\n            <input type=\"number\" class=\"input\" placeholder=\"12\">\n        </div>\n        <div class=\"column is-4\">\n            <div class=\"select\">\n                <select class=\"mySelect\">\n                    <option>px</option>\n                    <option>%</option>\n                    <option>em</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    <div class=\"columns height property\">\n        <div class=\"column is-5\">\n            <div class=\"select\">\n                <select class=\"mySelect\">\n                    <option>Padding</option>\n                    <option>Padding-Left</option>\n                    <option>Padding-Right</option>\n                    <option>Padding-Top</option>\n                    <option>Padding-Bottom</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"column is-3 inputForms\">\n            <input type=\"number\" class=\"input\" placeholder=\"12\">\n        </div>\n        <div class=\"column is-4\">\n            <div class=\"select\">\n                <select class=\"mySelect\">\n                    <option>px</option>\n                    <option>%</option>\n                    <option>em</option>\n                </select>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/element-path/element-path.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/element-path/element-path.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"buttons are-small path\" >\n    <div *ngFor= \"let elemment of elementPath; let last = last\" class=\"btnPath\">\n        <button [class.is-primary]=\"last== true\" class=\"button\">{{elemment}}</button>\n    </div>        \n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/right-panel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/right-panel.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- element path -->\n<!-- <app-element-path></app-element-path> <br> -->\n<app-sub-tools></app-sub-tools>\n<!-- appearance -->\n<div class=\"apearance\">\n    <p class=\"heading\">Apearance</p>\n <app-layout></app-layout>\n   <app-animation></app-animation>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/sub-tools/sub-tools.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/right-panel/sub-tools/sub-tools.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"heading comText\">Propeties</p>\n<div class=\"colorPicker\">\n\n</div>\n<div class=\"tools\">\n    <!-- text align -->\n    <div class=\"columns\">\n        <div class=\"column  subTools\">\n            <p class=\"heading\">Text align</p>\n            <mat-button-toggle-group #group=\"matButtonToggleGroup\" class=\"textAlign\">\n                    <mat-button-toggle value=\"\" aria-label=\"Text align normal\" (change)=\"align($event.value)\">\n                            <mat-icon>clear</mat-icon>\n                        </mat-button-toggle>\n                <mat-button-toggle value=\"left\" aria-label=\"Text align left\" (change)=\"align($event.value)\">\n                    <mat-icon>format_align_left</mat-icon>\n                </mat-button-toggle>\n                <mat-button-toggle value=\"center\" aria-label=\"Text align center\" (change)=\"align($event.value)\">\n                    <mat-icon>format_align_center</mat-icon>\n                </mat-button-toggle>\n                <mat-button-toggle value=\"right\" aria-label=\"Text align right\" (change)=\"align($event.value)\">\n                    <mat-icon>format_align_right</mat-icon>\n                </mat-button-toggle>\n                <mat-button-toggle value=\"justify\" aria-label=\"Text align justify\" (change)=\"align($event.value)\">\n                    <mat-icon>format_align_justify</mat-icon>\n                </mat-button-toggle>\n            </mat-button-toggle-group>\n        </div>\n    </div>\n    <!-- Text Options -->\n    <div class=\"columns\">\n        <div class=\"column  subTools\">\n            <p class=\"heading\">Text Options</p>\n            <mat-button-toggle-group #group=\"matButtonToggleGroup\" class=\"textOptions\" multiple>\n                <mat-button-toggle value=\"left\" aria-label=\"Text align left\" (click)=\"italic()\">\n                    <mat-icon>format_italic</mat-icon>\n                </mat-button-toggle>\n                <mat-button-toggle value=\"center\" aria-label=\"Text align center\" (click)=\"bold($event)\">\n                    <mat-icon>format_bold</mat-icon>\n                </mat-button-toggle>\n                <mat-button-toggle value=\"right\" aria-label=\"Text align right\" (click)=\"underline()\">\n                    <mat-icon>format_underlined</mat-icon>\n                </mat-button-toggle>\n                <mat-button-toggle value=\"right\" aria-label=\"Text align right\" (click)=\"lineThrough()\">\n                    <mat-icon>format_strikethrough</mat-icon>\n                </mat-button-toggle>\n            </mat-button-toggle-group>\n        </div>\n    </div>\n     <!-- bacground color and color -->\n     <div class=\"columns\" style=\"background-color: #f7f7f7;\">\n\n            <div class=\"column is-6\">\n                <h1 class=\"heading\">Color</h1>\n                <div class=\"control\">\n                    <div class=\"input\"><span class=\"color-picker\"></span> </div>\n                </div>\n    \n            </div>\n            <div class=\"column is-6\">\n                <h1 class=\"heading\">Background Color</h1>\n                <div class=\"control\">\n                    <div class=\"input\"><span class=\"bgGolor-picker\"></span></div>\n                </div>\n    \n            </div>\n        </div>\n    <!-- opacity, brightness, hue and saturation, contrast, sepia -->\n     <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Filters\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"columns\">\n                <div class=\"column subTools\">\n                    <span class=\"heading\">Opacity</span>\n                    <mat-slider min=\"0\" max=\"1\" step=\"0.1\" (change)=\"opacity($event)\"></mat-slider>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column subTools\">\n                    <span class=\"heading\">brightness</span>\n                    <mat-slider min=\"0\" max=\"400\"  (change)=\"brightness($event)\"></mat-slider>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column subTools\">\n                    <span class=\"heading\">saturation</span>\n                    <mat-slider min=\"0\" max=\"100\" name=\"\" (change)=\"saturation($event)\"></mat-slider>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column subTools\">\n                    <span class=\"heading\">contrast</span>\n                    <mat-slider min=\"0\" max=\"100\" name=\"\" (change)=\"contrast($event)\"></mat-slider>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column subTools\">\n                    <span class=\"heading\">blur</span>\n                    <mat-slider min=\"0\" max=\"100\" name=\"\" (change)=\"blur($event)\"></mat-slider>\n                </div>\n            </div>\n            <div class=\"columns\">\n                <div class=\"column subTools\">\n                    <span class=\"heading\">sepia</span>\n                    <mat-slider min=\"0\" max=\"100\" name=\"\" (change)=\"sepia($event)\" color=\"accent\"></mat-slider>\n                </div>\n            </div>\n    </mat-expansion-panel>\n   \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/toolbar/toolbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panels/toolbar/toolbar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- tool bar -->\n\n<div class=\"navbar toolbar\">\n    <div class=\"navbar-brand\">\n        <span class=\"navbar-item\" (click)=\"sideDrawer()\"> <mat-icon>menu</mat-icon> </span>\n    </div>\n    <div class=\"navbar-start\">\n         <a routerLink=\"/design\"  routerLinkActive=\"home\"><span class=\"navbar-item \">Design</span></a>\n        <a routerLink=\"/code\" routerLinkActive=\"home\"><span class=\"navbar-item\">Code</span></a>\n    </div>\n    <div class=\"navbar-end\">\n        <!-- clipboard dropdown -->\n        <span class=\"dropdown is-hoverable\">\n                <span aria-haspopup=\"true\" aria-controls=\"dropdown-menu2\" class=\"navbar-item dropdown-trigger\"> <mat-icon>post_add</mat-icon></span>\n            <div class=\"dropdown-menu\" id=\"dropdown-menu2\" role=\"menu\">\n              <div class=\"dropdown-content\" id=\"clipboard\" (click)=\"copy($event)\">\n                <div class=\"dropdown-item\">\n                   <p class=\"heading\" matTooltip=\"Info about the action\">Click to copy</p>\n                </div>\n                <hr class=\"dropdown-divider\">\n              </div>\n            </div>\n          </span>\n          <span class=\"navbar-item\" (click)=\"undo()\" matTooltip=\"Info about the action\"> <mat-icon>undo</mat-icon></span>  \n          <span class=\"navbar-item\" (click)=\"redo()\" matTooltip=\"Info about the action\"> <mat-icon>redo</mat-icon></span>\n          <span class=\"navbar-item\" matTooltip=\"Info about the action\"> <mat-icon>code</mat-icon> </span>\n    </div>\n</div>");

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
/*! exports provided: getHighlightLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function() { return getHighlightLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/panels/panels.component.ts");
/* harmony import */ var _panels_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panels/left-panel/left-panel.component */ "./src/app/panels/left-panel/left-panel.component.ts");
/* harmony import */ var _panels_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/right-panel/right-panel.component */ "./src/app/panels/right-panel/right-panel.component.ts");
/* harmony import */ var _panels_iframe_panel_iframe_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panels/iframe-panel/iframe-panel.component */ "./src/app/panels/iframe-panel/iframe-panel.component.ts");
/* harmony import */ var _panels_left_panel_left_toolbar_left_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panels/left-panel/left-toolbar/left-toolbar.component */ "./src/app/panels/left-panel/left-toolbar/left-toolbar.component.ts");
/* harmony import */ var _panels_left_panel_component_toolbar_component_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panels/left-panel/component-toolbar/component-toolbar.component */ "./src/app/panels/left-panel/component-toolbar/component-toolbar.component.ts");
/* harmony import */ var _panels_right_panel_sub_tools_sub_tools_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panels/right-panel/sub-tools/sub-tools.component */ "./src/app/panels/right-panel/sub-tools/sub-tools.component.ts");
/* harmony import */ var _panels_right_panel_element_path_element_path_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panels/right-panel/element-path/element-path.component */ "./src/app/panels/right-panel/element-path/element-path.component.ts");
/* harmony import */ var _panels_right_panel_appearance_appearance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panels/right-panel/appearance/appearance.component */ "./src/app/panels/right-panel/appearance/appearance.component.ts");
/* harmony import */ var _panels_right_panel_appearance_layout_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./panels/right-panel/appearance/layout/layout.component */ "./src/app/panels/right-panel/appearance/layout/layout.component.ts");
/* harmony import */ var _panels_right_panel_appearance_animation_animation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panels/right-panel/appearance/animation/animation.component */ "./src/app/panels/right-panel/appearance/animation/animation.component.ts");
/* harmony import */ var _panels_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./panels/toolbar/toolbar.component */ "./src/app/panels/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _panels_code_code_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./panels/code/code.component */ "./src/app/panels/code/code.component.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");




























const appRoutes = [
    { path: 'design', component: _panels_iframe_panel_iframe_panel_component__WEBPACK_IMPORTED_MODULE_9__["IframePanelComponent"] },
    { path: 'code', component: _panels_code_code_component__WEBPACK_IMPORTED_MODULE_25__["CodeComponent"] },
    { path: '', redirectTo: 'design', pathMatch: 'full' },
];
function getHighlightLanguages() {
    return {
        javascript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-javascript */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js", 7)),
        css: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-css */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js", 7)),
        xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js", 7))
    };
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _panels_panels_component__WEBPACK_IMPORTED_MODULE_6__["PanelsComponent"],
            _panels_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_7__["LeftPanelComponent"],
            _panels_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_8__["RightPanelComponent"],
            _panels_iframe_panel_iframe_panel_component__WEBPACK_IMPORTED_MODULE_9__["IframePanelComponent"],
            _panels_left_panel_left_toolbar_left_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["LeftToolbarComponent"],
            _panels_left_panel_component_toolbar_component_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ComponentToolbarComponent"],
            _panels_right_panel_sub_tools_sub_tools_component__WEBPACK_IMPORTED_MODULE_12__["SubToolsComponent"],
            _panels_right_panel_element_path_element_path_component__WEBPACK_IMPORTED_MODULE_13__["ElementPathComponent"],
            _panels_right_panel_appearance_appearance_component__WEBPACK_IMPORTED_MODULE_14__["AppearanceComponent"],
            _panels_right_panel_appearance_layout_layout_component__WEBPACK_IMPORTED_MODULE_15__["LayoutComponent"],
            _panels_right_panel_appearance_animation_animation_component__WEBPACK_IMPORTED_MODULE_16__["AnimationComponent"],
            _panels_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"],
            _panels_code_code_component__WEBPACK_IMPORTED_MODULE_25__["CodeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_26__["HighlightModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [
            {
                provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_26__["HIGHLIGHT_OPTIONS"],
                useValue: {
                    languages: getHighlightLanguages()
                }
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/panels/code/code.component.css":
/*!************************************************!*\
  !*** ./src/app/panels/code/code.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".codePreview{\n    margin-left: 5%;\n    margin-bottom: 10%;\n    text-align: left; \n    -webkit-user-select: text !important; \n       -moz-user-select: text !important; \n        -ms-user-select: text !important; \n            user-select: text !important;\n}\n.Save{\n    background-color: #2294e3 !important;\n}\npre{\n    background-color: white;\n    margin-left: 5%;\n    margin-right: 5%;\n}\ncode{\n    height: 75vh;\n}\n.html{\n    -webkit-user-select: text !important;\n       -moz-user-select: text !important;\n        -ms-user-select: text !important;\n            user-select: text !important;\n}\n.buttons{\n    margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2NvZGUvY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0NBQTRCO09BQTVCLGlDQUE0QjtRQUE1QixnQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBNEI7T0FBNUIsaUNBQTRCO1FBQTVCLGdDQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvY29kZS9jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZVByZXZpZXd7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcbiAgICB1c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xufVxuLlNhdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyOTRlMyAhaW1wb3J0YW50O1xufVxucHJle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuY29kZXtcbiAgICBoZWlnaHQ6IDc1dmg7XG59XG4uaHRtbHtcbiAgICB1c2VyLXNlbGVjdDogdGV4dCAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbnN7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/panels/code/code.component.ts":
/*!***********************************************!*\
  !*** ./src/app/panels/code/code.component.ts ***!
  \***********************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/code.service */ "./src/app/shared/code.service.ts");



let CodeComponent = class CodeComponent {
    constructor(code) {
        this.code = code;
        this.codeHtml = ``;
    }
    ngOnInit() {
        setTimeout(() => {
            this.codeHtml = localStorage.getItem("frameData");
        }, 200);
    }
    // saving the code html back
    save() {
        // this.code.codeData = document.querySelector('code').innerText;
        localStorage.setItem("frameData", document.querySelector('code').innerText);
    }
};
CodeComponent.ctorParameters = () => [
    { type: _shared_code_service__WEBPACK_IMPORTED_MODULE_2__["CodeService"] }
];
CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/code/code.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.css */ "./src/app/panels/code/code.component.css")).default]
    })
], CodeComponent);



/***/ }),

/***/ "./src/app/panels/iframe-panel/iframe-panel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/panels/iframe-panel/iframe-panel.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#focus, #clickFocus{\n    display: none;\n    position: fixed;\n    height: 923px;\n    width: 1061px;\n    border: 2px solid #2294e3;\n    top: 0px;\n    left: 0px;\n    z-index: 99999;\n    pointer-events: none;\n}\n#clickFocus{\n    background-color: rgba(166, 166, 255,0.2);\n}\n#info, #clickInfo{\n    float: left;\n    position: fixed;\n    padding: 1px;\n    font-size: x-small;\n    background-color: rgb(34, 148, 227);\n    color: rgb(255, 255, 255);\n    display: none;\n}\n#info{\n    width: 70px !important;\n}\nmat-icon{\n    font-size: small;\n}\n#clickInfo {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  width: 145px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2lmcmFtZS1wYW5lbC9pZnJhbWUtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9pZnJhbWUtcGFuZWwvaWZyYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9jdXMsICNjbGlja0ZvY3Vze1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogOTIzcHg7XG4gICAgd2lkdGg6IDEwNjFweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjI5NGUzO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiNjbGlja0ZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY2LCAxNjYsIDI1NSwwLjIpO1xufVxuI2luZm8sICNjbGlja0luZm97XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAxNDgsIDIyNyk7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuI2luZm97XG4gICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbn1cbm1hdC1pY29ue1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4jY2xpY2tJbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgd2lkdGg6IDE0NXB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

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
/* harmony import */ var _shared_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/state.service */ "./src/app/shared/state.service.ts");
/* harmony import */ var _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/right-panel.service */ "./src/app/shared/right-panel.service.ts");
/* harmony import */ var _shared_code_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/code.service */ "./src/app/shared/code.service.ts");







let IframePanelComponent = class IframePanelComponent {
    constructor(size, data, iframeState, rightPanelData, code) {
        this.size = size;
        this.data = data;
        this.iframeState = iframeState;
        this.rightPanelData = rightPanelData;
        this.code = code;
        // the current element in the focus bar
        this.clickedElement = [];
        // when should focus show
        this.focusState = true;
        // to show elemnt path
        this.elementPath = [];
        this.frameData = [];
        // perant methods setup so iframe could access the methods here
        window.drop = this.drop.bind(this);
        window.dragover = this.dragover.bind(this);
        window.mouseover = this.mouseover.bind(this);
    }
    ngOnInit() {
        //setting the iframe data
        let iframe = document.querySelector('#iframe');
        let frame = iframe.contentWindow;
        // my link
        let myLink = document.createElement('link');
        myLink.setAttribute('href', './assets/framebody.css');
        myLink.setAttribute('rel', 'stylesheet');
        // creating the bulma css link
        let bulmaLink = document.createElement('link');
        // the animate css link
        let animateLink = document.createElement('link');
        bulmaLink.setAttribute('href', './assets/bulma/bulma.min.css');
        // attributing animate link
        animateLink.setAttribute('href', './assets/libs/animate.min.css');
        bulmaLink.setAttribute('rel', 'stylesheet');
        animateLink.setAttribute('rel', 'stylesheet');
        // appending the link to the head
        frame.document.querySelector('head').appendChild(bulmaLink);
        frame.document.querySelector('head').appendChild(animateLink);
        frame.document.querySelector('head').appendChild(myLink);
        let framebody = frame.document.querySelector('body');
        // when you click the save button in the code component when the iframe component is loading again the data is set
        // set timout to delay the innerHTML until the css has loaded completly
        setTimeout(() => {
            if (localStorage.getItem("frameData") != undefined) {
                framebody.innerHTML = localStorage.getItem("frameData");
            }
            else {
                return;
            }
        }, 300);
        this.iframeState.frameData$.subscribe(value => {
            // making sure that the value of the frame is not underfined
            if (value == undefined) {
                return;
            }
            else {
                framebody.innerHTML = value.toString();
            }
        });
        // framebody.innerHTML = this.iframeState.redo_undoData;
        // adding the mouseover event
        framebody.setAttribute('onmouseover', 'parent.mouseover(event)');
        // adding the ondrag event in the iframe and letting it access the parent window
        framebody.setAttribute('ondrop', 'parent.drop(event)');
        framebody.setAttribute('ondragover', 'parent.dragover(event)');
        framebody.style.backgroundColor = "white";
        ////////////////////////////////////////////
        let mutations = new MutationObserver((data) => {
            data.forEach((mutation) => {
                // this.code.codeData = framebody.innerHTML;
                localStorage.setItem("frameData", framebody.innerHTML);
            });
        });
        mutations.observe(framebody, {
            attributes: true,
            subtree: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true
        });
        // setting the size of the iframe
        this.size.sizze$.subscribe(data => {
            this.output = data;
            if (data["state"] == "true") {
                let iframe = document.querySelector('#iframe');
                iframe.setAttribute('width', this.output['x']);
                // iframe.setAttribute('height', this.output['y']);
                iframe.style.height = this.output['y'];
            }
        });
        // when the focus bar is double clicked
        let focus = document.querySelector('#focus');
        let info = document.querySelector('#info');
        // hidden the focus bar
        framebody.addEventListener('mouseout', () => {
            focus.style.display = 'none';
            info.style.display = 'none';
        });
        framebody.addEventListener('mousemove', (event) => {
            //  if(event.target.localName == 'body'){
            //    console.log('dfvb')
            //  } 
        });
        // for displaying the clickable focus bar
        framebody.addEventListener('click', (event) => {
            event.preventDefault();
            // working with the click focus bar
            this.clickedElement.push(event.target);
            this.rightPanelData.edditedElement = event.target;
            let element = event.target;
            let coordinates = this.clickedElement[this.clickedElement.length - 1].getBoundingClientRect();
            let coor = iframe.getBoundingClientRect();
            let clickFocus = document.querySelector('#clickFocus');
            let clickInfo = document.querySelector('#clickInfo');
            clickFocus.style.height = coordinates.height + "px";
            clickFocus.style.width = coordinates.width + "px";
            clickFocus.style.top = (coordinates.top + coor.top) + "px";
            clickFocus.style.left = (coordinates.left + coor.left) + "px";
            clickInfo.style.height = info.style.height;
            clickFocus.style.display = 'block';
            clickInfo.style.display = 'grid';
            clickInfo.style.height = info.style.height;
            clickInfo.style.top = (coordinates.top + coor.top - 26) + "px";
            clickInfo.style.left = (coordinates.left + coor.left) + "px";
            frame.addEventListener('scroll', () => {
                coor = iframe.getBoundingClientRect();
                let currentCoordinates = this.clickedElement[this.clickedElement.length - 1].getBoundingClientRect();
                clickFocus.style.top = (currentCoordinates.top + coor.top) + "px";
                clickFocus.style.left = (currentCoordinates.left + coor.left) + "px";
                clickInfo.style.top = (currentCoordinates.top + coor.top) - 26 + "px";
                clickInfo.style.left = (currentCoordinates.left + coor.left) + "px";
                // clickFocus.style.display = 'none';
                // clickInfo.style.display = 'none';
                // dont show the focus bar on scroll
                focus.style.display = 'none';
                info.style.display = 'none';
            });
        }, true);
        // deleting the current element
        let clickFocus = document.querySelector('#clickFocus');
        let clickInfo = document.querySelector('#clickInfo');
        let del = document.querySelector('#delete');
        del.addEventListener('click', (event) => {
            event.preventDefault();
            clickFocus.style.display = 'none';
            clickInfo.style.display = 'none';
            // deleting the element
            // dont delette the body
            if (this.clickedElement[this.clickedElement.length - 1].nodeName == 'BODY') {
                // do nothing
            }
            else {
                this.clickedElement[this.clickedElement.length - 1].parentNode.removeChild(this.clickedElement[this.clickedElement.length - 1]);
                // sending the data to enable redo and undo
                // this.iframeState.iframeStateData = framebody.innerHTML;
            }
        });
        // duplicating elements
        let duplicate = document.querySelector('#duplicate');
        duplicate.addEventListener('click', (event) => {
            event.preventDefault();
            clickFocus.style.display = 'none';
            clickInfo.style.display = 'none';
            let parent = this.clickedElement[this.clickedElement.length - 1].parentNode;
            let clonedNode = this.clickedElement[this.clickedElement.length - 1].cloneNode(true);
            parent.insertBefore(clonedNode, this.clickedElement[this.clickedElement.length - 1].nextSibling);
            // this.iframeState.iframeStateData = framebody.innerHTML;
        });
        // dont show the clickfocus after the dellete has taken place
        clickFocus.style.display = 'none';
        // making it posible for us to edit text
        let edit = document.querySelector('#edit');
        edit.addEventListener('click', (event) => {
            clickFocus.style.display = 'none';
            clickInfo.style.display = 'none';
            event.preventDefault();
            // setting focus state to false
            this.focusState = false;
            // adding the contenteditable attribute
            this.clickedElement[this.clickedElement.length - 1].setAttribute('contenteditable', 'true');
            // making it auto focus when you click the edit icon
            this.clickedElement[this.clickedElement.length - 1].focus();
            // adding an event listener to remove the contenteditable attribute
            this.clickedElement[this.clickedElement.length - 1].addEventListener('blur', () => {
                this.clickedElement[this.clickedElement.length - 1].removeAttribute('contenteditable');
                // on blur setting focus state to true 
                this.focusState = true;
            });
        });
        // selecting parent
        let parentSelector = document.querySelector('#parent');
        parentSelector.addEventListener('click', (e) => {
            e.preventDefault();
            let parentElementt = this.clickedElement[this.clickedElement.length - 1].parentElement;
            this.clickedElement.push(parentElementt);
            this.clickedElement.shift();
            parentElementt.click();
        });
        // moving element down
        let moveDown = document.querySelector('#moveDown');
        moveDown.addEventListener('click', (e) => {
            e.preventDefault();
            // clone the node first
            try {
                let clonedNode = this.clickedElement[this.clickedElement.length - 1].cloneNode(true);
                let parentElementt = this.clickedElement[this.clickedElement.length - 1].parentElement;
                let nextElement = this.clickedElement[this.clickedElement.length - 1].nextElementSibling;
                parentElementt.insertBefore(clonedNode, nextElement.nextElementSibling);
                parentElementt.removeChild(this.clickedElement[this.clickedElement.length - 1]);
                clickFocus.style.display = 'none';
                clickInfo.style.display = 'none';
                // clicking the node
                clonedNode.click();
            }
            catch (_a) { }
        });
        // moving element up
        let moveUp = document.querySelector('#moveUp');
        moveUp.addEventListener('click', (e) => {
            e.preventDefault();
            try {
                let clonedNode = this.clickedElement[this.clickedElement.length - 1].cloneNode(true);
                let parentElementt = this.clickedElement[this.clickedElement.length - 1].parentElement;
                let previousElement = this.clickedElement[this.clickedElement.length - 1].previousElementSibling;
                parentElementt.insertBefore(clonedNode, previousElement.previousElementSibling);
                parentElementt.removeChild(this.clickedElement[this.clickedElement.length - 1]);
                clickFocus.style.display = 'none';
                clickInfo.style.display = 'none';
                // clicking the node
                clonedNode.click();
            }
            catch (_a) { }
        });
        // making it posible for us to edit text through dblclick
        framebody.addEventListener('dblclick', (event) => {
            clickFocus.style.display = 'none';
            clickInfo.style.display = 'none';
            info.style.display = 'none';
            let element = event.target;
            // adding the contenteditable attribute
            element.setAttribute('contenteditable', 'true');
            // making it auto focus when you click the edit icon
            element.focus();
            // setting focus state to false
            this.focusState = false;
            // adding an event listener to remove the contenteditable attribute
            element.addEventListener('blur', () => {
                element.removeAttribute('contenteditable');
                // on blur setting focus state to true
                this.focusState = true;
            });
        });
        // tracking the window resize to update the click focus bar
        frame.addEventListener('resize', () => {
            let element = this.clickedElement[this.clickedElement.length - 1];
            // so that even wen resizing without selecting and element
            if (element != undefined) {
                let currentCoordinates = element.getBoundingClientRect();
                let coor = iframe.getBoundingClientRect();
                clickFocus.style.top = (currentCoordinates.top + coor.top) + "px";
                clickFocus.style.left = (currentCoordinates.left + coor.left) + "px";
                clickInfo.style.top = (currentCoordinates.top + coor.top) - 26 + "px";
                clickInfo.style.left = (currentCoordinates.left + coor.left) + "px";
                clickInfo.style.height = info.style.height;
                clickFocus.style.width = currentCoordinates.width + 'px';
                clickFocus.style.height = currentCoordinates.height + 'px';
            }
        });
    }
    // preventing deafault to enable dropping
    dragover(event) {
        event.preventDefault();
        // shows the line on dragover
        let coordinates = event.target.getBoundingClientRect();
        let iframe = document.querySelector('#iframe');
        let coor = iframe.getBoundingClientRect();
        let line = document.querySelector('#line');
        // line.style.width = coordinates.width + "px";
        // line.style.backgroundColor = 'blue';
        // line.style.top = (coordinates.top + coor.top) + "px";
        // line.style.left = (coordinates.left + coor.left) + "px";
        // line.style.display = 'block';
        let info = document.querySelector('#info');
        // calling the mouseover event in the dragover method to show us where the dragover is
        // this.mouseover(event);
    }
    // dropping event on iframe
    drop(event) {
        event.preventDefault();
        // stop the line from showing
        let line = document.querySelector('#line');
        line.style.display = 'none';
        // setiing up the dropable data
        let iframe = document.querySelector('#iframe');
        let frame = iframe.contentWindow;
        let framebody = frame.document.querySelector('body');
        if (this.data.recievedData != undefined) {
            event.target.innerHTML += this.data.recievedData;
        }
        // this.iframeState.iframeStateData = framebody.innerHTML;
        line.style.display = 'none';
        // let element = event.target.getBoundingClientRect();
        // let prev = event.target.previousElementSibling.getBoundingClientRect();
        // let next = event.target.nextElementSibling.getBoundingClientRect();
        // console.log(prev, 'prev');
        // console.log(next, 'next');
        // console.log(element, 'cure');
        // console.log('cu - prev', element.top- prev.top);
        // console.log('cu - next', element.top- next.top);
    }
    // for showing the location an element targeted on mousee over
    mouseover(event) {
        event.preventDefault();
        let iframe = document.querySelector('#iframe');
        let frame = iframe.contentWindow;
        // setting up the focus bar
        let focus = document.querySelector('#focus');
        let info = document.querySelector('#info');
        let coordinates = event.target.getBoundingClientRect();
        let coor = iframe.getBoundingClientRect();
        focus.style.height = coordinates.height + "px";
        focus.style.width = coordinates.width + "px";
        focus.style.top = (coordinates.top + coor.top) + "px";
        focus.style.left = (coordinates.left + coor.left) + "px";
        focus.style.zIndex = '99999';
        // focus state to show or hide
        if (this.focusState == true) {
            focus.style.display = 'block';
            info.style.display = 'inline';
        }
        info.style.top = (parseInt(coordinates.top + coor.top) - 16) + "px";
        info.style.left = (coordinates.left + coor.left) + "px";
        if (event.target.classList == '') {
            info.innerHTML = event.target.localName;
        }
        else if (event.target.classList !== '') {
            info.innerHTML = event.target.classList;
        }
    }
};
IframePanelComponent.ctorParameters = () => [
    { type: _shared_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"] },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _shared_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] },
    { type: _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_5__["RightPanelService"] },
    { type: _shared_code_service__WEBPACK_IMPORTED_MODULE_6__["CodeService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel {\n    background: #f7f7f7;\n    border: none !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL2xlZnQtcGFuZWwvY29tcG9uZW50LXRvb2xiYXIvY29tcG9uZW50LXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9sZWZ0LXBhbmVsL2NvbXBvbmVudC10b29sYmFyL2NvbXBvbmVudC10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG4iXX0= */");

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
        let dragMe = document.querySelector('.dragMe');
        // still to work on it
        dragMe.addEventListener('dragstart', function (event) {
            var crt = this.cloneNode(true);
            crt.style.backgroundColor = "red";
            crt.style.display = "block"; /* or visibility: hidden, or any of the above */
            document.body.appendChild(crt);
            // event.dataTransfer.setDragImage(crt, 10, 10);
        });
    }
    // handles componet data drag
    comDrag(event) {
        // handles component data drag
        event.preventDefault();
        // console.log(event.target.innerHTML)
        // console.log(this.data.data)
        let text = event.target.innerHTML;
        for (let i = 0; i < this.data.componentData.length; i++) {
            if (this.recivedComponentData[i].name == text) {
                this.dataToBeSent = this.recivedComponentData[i].source;
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
    }
    // handles form data drag
    formDrag(event) {
        event.preventDefault();
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
            "y": '842px',
            "x": '325px',
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
            "y": '842px',
            "x": '668px',
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
            "y": '842px',
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
            "x": '95%',
            "y": '942px',
            'state': 'true'
        };
        this.size.iframeSize(data);
        this.smartphone = true;
        this.tab = true;
        this.lap = true;
        this.des = false;
    }
    // testing upload
    upload(event) {
        // let img = <HTMLImageElement> document.querySelector('#img');
        // let file = event.target.files[0];
        // const fileread = new FileReader();
        // fileread.onload = (e)=>{
        //  console.log(e.target.result)
        // //  img.setAttribute('src', e.target.result);
        // }
        // fileread.readAsDataURL(file);
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
/* harmony import */ var _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/right-panel.service */ "./src/app/shared/right-panel.service.ts");



let AnimationComponent = class AnimationComponent {
    constructor(currentElement) {
        this.currentElement = currentElement;
    }
    ngOnInit() {
    }
    animation(event) {
        let element = this.currentElement.edditedElement;
        element.classList.add('animate');
        element.classList.add(event.target.value);
        console.log(element);
    }
};
AnimationComponent.ctorParameters = () => [
    { type: _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_2__["RightPanelService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".float{\n    width: 100%;\n}\n.float mat-button-toggle{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL3JpZ2h0LXBhbmVsL2FwcGVhcmFuY2UvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvcmlnaHQtcGFuZWwvYXBwZWFyYW5jZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZmxvYXQgbWF0LWJ1dHRvbi10b2dnbGV7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

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
/* harmony import */ var _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/right-panel.service */ "./src/app/shared/right-panel.service.ts");



let LayoutComponent = class LayoutComponent {
    constructor(rightPanelData) {
        this.rightPanelData = rightPanelData;
        this.unitAndValue = [];
    }
    ngOnInit() {
    }
    // working on display
    display(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            element.style.display = event.target.value;
        }
        catch (_a) { }
    }
    // working on float 
    float(value) {
        try {
            let element = this.rightPanelData.edditedElement;
            if (value == ' ') {
                element.style.removeProperty('float');
            }
            else {
                element.style.cssFloat = value;
            }
        }
        catch (_a) { }
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_2__["RightPanelService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".is-primary{\n    background-color: #2294e3 !important;\n}\n.btnPath{\n    margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL3JpZ2h0LXBhbmVsL2VsZW1lbnQtcGF0aC9lbGVtZW50LXBhdGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFuZWxzL3JpZ2h0LXBhbmVsL2VsZW1lbnQtcGF0aC9lbGVtZW50LXBhdGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjk0ZTMgIWltcG9ydGFudDtcbn1cbi5idG5QYXRoe1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4iXX0= */");

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
/* harmony import */ var _shared_element_path_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/element-path.service */ "./src/app/shared/element-path.service.ts");



let ElementPathComponent = class ElementPathComponent {
    constructor(path) {
        this.path = path;
    }
    ngOnInit() {
        if (this.path.path$ != undefined) {
            this.path.path$.subscribe((data) => {
                this.elementPath = data;
                console.log(this.elementPath);
            });
        }
    }
};
ElementPathComponent.ctorParameters = () => [
    { type: _shared_element_path_service__WEBPACK_IMPORTED_MODULE_2__["ElementPathService"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = (".textAlign{\n    width: 100%;\n}\n.textAlign mat-button-toggle{\n    width: 100%;\n}\n.textOptions{\n    width: 100%;\n}\n.textOptions mat-button-toggle{\n    width: 100%;\n}\n.column{\n    margin-bottom: 0;\n}\n.columns{\n    margin-bottom: 0;\n}\nmat-slider{\n    width: 100%;\n}\n.block{\n    margin: 0 !important;\n}\n.filters{\n    background-color: #f7f7f7;\n}\n.mat-expansion-panel {\n    background: #f7f7f7;\n    border: none !important;\n    box-shadow: none;\n    border: none;\n    border-radius: 0;\n    margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxzL3JpZ2h0LXBhbmVsL3N1Yi10b29scy9zdWItdG9vbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9yaWdodC1wYW5lbC9zdWItdG9vbHMvc3ViLXRvb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dEFsaWdue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRleHRBbGlnbiBtYXQtYnV0dG9uLXRvZ2dsZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0T3B0aW9uc3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0T3B0aW9ucyBtYXQtYnV0dG9uLXRvZ2dsZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb2x1bW57XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb2x1bW5ze1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5tYXQtc2xpZGVye1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJsb2Nre1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLmZpbHRlcnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/right-panel.service */ "./src/app/shared/right-panel.service.ts");




let SubToolsComponent = class SubToolsComponent {
    constructor(rightPanelData) {
        this.rightPanelData = rightPanelData;
        this.filtersArray = [];
    }
    ngOnInit() {
        const pickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_2___default.a.create({
            el: '.color-picker',
            theme: 'classic',
            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
        const Backpickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_2___default.a.create({
            el: '.bgGolor-picker',
            theme: 'classic',
            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,
                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
    }
    // to bold text
    bold(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            if (element.style.fontWeight == 'bold') {
                element.style.removeProperty('font-weight');
            }
            else {
                element.style.fontWeight = 'bold';
            }
        }
        catch (_a) { }
    }
    // to italise
    italic() {
        try {
            let element = this.rightPanelData.edditedElement;
            if (element.style.fontStyle == "italic") {
                element.style.removeProperty('font-style');
            }
            else {
                element.style.fontStyle = 'italic';
            }
        }
        catch (_a) { }
    }
    // line throug
    lineThrough() {
        try {
            let element = this.rightPanelData.edditedElement;
            if (element.style.textDecoration == 'underline' || element.style.textDecoration == 'line-through') {
                element.style.removeProperty('text-decoration');
            }
            else {
                element.style.textDecoration = 'line-through';
            }
        }
        catch (_a) { }
    }
    // to underline
    underline() {
        try {
            let element = this.rightPanelData.edditedElement;
            if (element.style.textDecoration == 'underline' || element.style.textDecoration == 'line-through') {
                element.style.removeProperty('text-decoration');
            }
            else {
                element.style.textDecoration = 'underline';
            }
        }
        catch (_a) { }
    }
    // text align 
    align(value) {
        try {
            let element = this.rightPanelData.edditedElement;
            if (value == '') {
                element.style.removeProperty('text-align');
            }
            else {
                element.style.textAlign = value;
            }
        }
        catch (_a) { }
    }
    // filters 
    // opacity
    opacity(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            element.style.opacity = event.value;
            console.log(element.style.opacity);
        }
        catch (_a) { }
    }
    // brigthness
    brightness(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            this.filtersArray[0] = ' brightness(' + event.value + '%) ';
            element.style.filter = this.filtersArray.join('');
        }
        catch (_a) { }
    }
    saturation(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            this.filtersArray[1] = 'saturate(' + event.value + '%)';
            element.style.filter = this.filtersArray.join('');
        }
        catch (_a) { }
    }
    contrast(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            this.filtersArray[2] = 'contrast(' + event.value + '%)';
            element.style.filter = this.filtersArray.join('');
        }
        catch (_a) { }
    }
    blur(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            this.filtersArray[4] = 'blur(' + event.value + 'px)';
            element.style.filter = this.filtersArray.join('');
        }
        catch (_a) { }
    }
    sepia(event) {
        try {
            let element = this.rightPanelData.edditedElement;
            this.filtersArray[3] = 'sepia(' + event.value + '%)';
            element.style.filter = this.filtersArray.join('');
        }
        catch (_a) { }
    }
};
SubToolsComponent.ctorParameters = () => [
    { type: _shared_right_panel_service__WEBPACK_IMPORTED_MODULE_3__["RightPanelService"] }
];
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
/* harmony import */ var _shared_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/state.service */ "./src/app/shared/state.service.ts");



let ToolbarComponent = class ToolbarComponent {
    constructor(iframeState) {
        this.iframeState = iframeState;
        this.open = false;
        // index for undo and redo
        this.currentIndex = 1;
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
    // working on undo and redo
    //undo 
    undo() {
        let length = this.iframeState._iframeContent.length;
        if (this.currentIndex == length) {
            // set the focus bar element
            let empty = '';
            this.iframeState.iframedata(empty);
            console.log('max undo');
            return;
        }
        else {
            // sending the data to the service
            this.iframeState.iframedata(this.iframeState._iframeContent[(length - 1) - this.currentIndex]);
            this.currentIndex += 1;
        }
    }
    //redo
    redo() {
        let length = this.iframeState._iframeContent.length;
        if (this.currentIndex > 0 && this.currentIndex <= length) {
            // sending the data to the service
            this.iframeState.iframedata(this.iframeState._iframeContent[length - this.currentIndex]);
            this.currentIndex -= 1;
        }
        else {
            console.log("hihest undo");
            return;
        }
    }
    sideDrawer() {
        console.log("dwwf");
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _shared_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/panels/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/panels/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/shared/code.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/code.service.ts ***!
  \****************************************/
/*! exports provided: CodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return CodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodeService = class CodeService {
    constructor() { }
    set htmlCode(value) {
        this.codeData = value;
    }
    get htmlCode() {
        return this.codeData;
    }
};
CodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CodeService);



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

/***/ "./src/app/shared/element-path.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/element-path.service.ts ***!
  \************************************************/
/*! exports provided: ElementPathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementPathService", function() { return ElementPathService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ElementPathService = class ElementPathService {
    constructor() {
        this._path = [];
        this._pathSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.path$ = this._pathSource.asObservable();
    }
    elementPath(dara) {
        this._pathSource.next(dara);
    }
};
ElementPathService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ElementPathService);

// element path service


/***/ }),

/***/ "./src/app/shared/right-panel.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/right-panel.service.ts ***!
  \***********************************************/
/*! exports provided: RightPanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPanelService", function() { return RightPanelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightPanelService = class RightPanelService {
    constructor() { }
    get edditedElement() {
        return this.element;
    }
    set edditedElement(value) {
        this.element = value;
    }
};
RightPanelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RightPanelService);



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

/***/ "./src/app/shared/state.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/state.service.ts ***!
  \*****************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let StateService = class StateService {
    constructor() {
        this._iframeContent = [];
        this._dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.frameData$ = this._dataSource.asObservable();
    }
    get iframeStateData() {
        return this._state;
    }
    // undo and redo data
    // use to send data in the _iframecontent array
    set iframeStateData(value) {
        this._state = value;
        this._iframeContent.push(this._state);
    }
    iframedata(dara) {
        this._dataSource.next(dara);
    }
};
StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StateService);



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

module.exports = __webpack_require__(/*! /Users/sevenacademy/Desktop/Bulma-Studio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map