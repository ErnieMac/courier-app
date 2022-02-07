(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_business-profile_business-profile_module_ts"],{

/***/ 36148:
/*!*********************************************************************!*\
  !*** ./src/app/business-profile/business-profile-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessProfilePageRoutingModule": function() { return /* binding */ BusinessProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _business_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-profile.page */ 40180);




const routes = [
    {
        path: '',
        component: _business_profile_page__WEBPACK_IMPORTED_MODULE_0__.BusinessProfilePage
    }
];
let BusinessProfilePageRoutingModule = class BusinessProfilePageRoutingModule {
};
BusinessProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BusinessProfilePageRoutingModule);



/***/ }),

/***/ 41874:
/*!*************************************************************!*\
  !*** ./src/app/business-profile/business-profile.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessProfilePageModule": function() { return /* binding */ BusinessProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _business_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-profile-routing.module */ 36148);
/* harmony import */ var _business_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-profile.page */ 40180);







let BusinessProfilePageModule = class BusinessProfilePageModule {
};
BusinessProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _business_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessProfilePageRoutingModule
        ],
        declarations: [_business_profile_page__WEBPACK_IMPORTED_MODULE_1__.BusinessProfilePage]
    })
], BusinessProfilePageModule);



/***/ }),

/***/ 40180:
/*!***********************************************************!*\
  !*** ./src/app/business-profile/business-profile.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessProfilePage": function() { return /* binding */ BusinessProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_business_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./business-profile.page.html */ 2594);
/* harmony import */ var _business_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-profile.page.scss */ 55720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let BusinessProfilePage = class BusinessProfilePage {
    constructor(loginService, storage, router) {
        this.loginService = loginService;
        this.storage = storage;
        this.router = router;
        this.userDetails$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.loginService.currentUser.value);
    }
    ngOnInit() {
        console.log(this.loginService.currentUser.value);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const cleared = yield this.storage.clear();
            this.router.navigate(["login"]);
        });
    }
};
BusinessProfilePage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
BusinessProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-business-profile',
        template: _raw_loader_business_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_business_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BusinessProfilePage);



/***/ }),

/***/ 55720:
/*!*************************************************************!*\
  !*** ./src/app/business-profile/business-profile.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status {\n  color: #1A6AE1;\n}\n\nion-grid {\n  padding: 10px;\n}\n\nion-label h3 {\n  font-size: 20px;\n  font-weight: 600;\n}\n\nion-label p {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A6AE1;\n  text-transform: uppercase;\n}\n\nion-list-header {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FIUztBQUFiOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQU1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSFI7O0FBS0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWpCSztFQWtCTCx5QkFBQTtBQUhSOztBQU1BO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FBSEoiLCJmaWxlIjoiYnVzaW5lc3MtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbiRibHVlLWNvbG9yOiAjMUE2QUUxO1xuXG4uc3RhdHVzIHtcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XG59XG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1sYWJlbCB7XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICRibHVlLWNvbG9yO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 2594:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business-profile/business-profile.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\" color=\"primary\">\n      Business profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\" color=\"primary\">Business profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/avatar.svg\">\n        </ion-avatar>\n        <ion-label *ngIf=\"userDetails$ | async as user\">\n          <h3>{{user.userDetails.businessName}}</h3>\n          <p>Business ID: {{user.userDetails.id}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item [routerLink]=\"['/change-phone-number']\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"call-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Change phone number</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/change-password']\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"lock-closed-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Change password</ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/saved-addresses']\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"business-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Saved addresses</ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/my-balance']\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"wallet-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>My Credit</ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['/help-support']\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"help-circle-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Help & support</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"logout()\" color=\"primary\" fill=\"outline\" expand=\"block\">\n            <ion-icon slot=\"start\" name=\"log-out-outline\" color=\"primary\"></ion-icon>Logout\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_business-profile_business-profile_module_ts-es2015.js.map