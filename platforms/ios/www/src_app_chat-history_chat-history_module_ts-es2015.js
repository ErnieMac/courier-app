(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_chat-history_chat-history_module_ts"],{

/***/ 49879:
/*!*************************************************************!*\
  !*** ./src/app/chat-history/chat-history-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatHistoryPageRoutingModule": function() { return /* binding */ ChatHistoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-history.page */ 90345);




const routes = [
    {
        path: '',
        component: _chat_history_page__WEBPACK_IMPORTED_MODULE_0__.ChatHistoryPage
    }
];
let ChatHistoryPageRoutingModule = class ChatHistoryPageRoutingModule {
};
ChatHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatHistoryPageRoutingModule);



/***/ }),

/***/ 87441:
/*!*****************************************************!*\
  !*** ./src/app/chat-history/chat-history.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatHistoryPageModule": function() { return /* binding */ ChatHistoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-history-routing.module */ 49879);
/* harmony import */ var _chat_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-history.page */ 90345);







let ChatHistoryPageModule = class ChatHistoryPageModule {
};
ChatHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatHistoryPageRoutingModule
        ],
        declarations: [_chat_history_page__WEBPACK_IMPORTED_MODULE_1__.ChatHistoryPage]
    })
], ChatHistoryPageModule);



/***/ }),

/***/ 90345:
/*!***************************************************!*\
  !*** ./src/app/chat-history/chat-history.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatHistoryPage": function() { return /* binding */ ChatHistoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat-history.page.html */ 72518);
/* harmony import */ var _chat_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-history.page.scss */ 13916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ChatHistoryPage = class ChatHistoryPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatHistoryPage.ctorParameters = () => [];
ChatHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat-history',
        template: _raw_loader_chat_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatHistoryPage);



/***/ }),

/***/ 13916:
/*!*****************************************************!*\
  !*** ./src/app/chat-history/chat-history.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label h2 {\n  color: #1A6AE1;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDQyxjQUxRO0VBTVIsZ0JBQUE7QUFMTCIsImZpbGUiOiJjaGF0LWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gIENTUyBEb2N1bWVudHNcblxuJGJsdWUtY29sb3I6ICMxQTZBRTE7XG5cbmlvbi1sYWJlbHtcblxuICAgIGgyIHtcbiAgICAgY29sb3I6ICRibHVlLWNvbG9yO1xuICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 72518:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-history/chat-history.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Chat history\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Chat history</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>Lorem ipsum dolor sit amet</h3>\n        <small class=\"distance\">Monday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Han</h2>\n        <h3>Lorem ipsum dolor sit amet</h3>\n        <small class=\"distance\">Thursday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Rey</h2>\n        <h3>dolor sit ametcing</h3>\n        <small class=\"distance\">Saturday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>Lorem ipsum dolor sit amet</h3>\n        <small class=\"distance\">Monday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Han</h2>\n        <h3>Lorem ipsum dolor sit amet</h3>\n        <small class=\"distance\">Thursday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Rey</h2>\n        <h3>dolor sit ametcing</h3>\n        <small class=\"distance\">Saturday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Finn</h2>\n        <h3>Lorem ipsum dolor sit amet</h3>\n        <small class=\"distance\">Monday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Han</h2>\n        <h3>Lorem ipsum dolor sit amet</h3>\n        <small class=\"distance\">Thursday </small>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/chat-details']\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Rey</h2>\n        <h3>dolor sit ametcing</h3>\n        <small class=\"distance\">Saturday </small>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat-history_chat-history_module_ts-es2015.js.map