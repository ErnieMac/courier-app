(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_saved-addresses_saved-addresses_module_ts"],{

/***/ 1308:
/*!*******************************************************************!*\
  !*** ./src/app/saved-addresses/saved-addresses-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedAddressesPageRoutingModule": function() { return /* binding */ SavedAddressesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _saved_addresses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-addresses.page */ 89693);




const routes = [
    {
        path: '',
        component: _saved_addresses_page__WEBPACK_IMPORTED_MODULE_0__.SavedAddressesPage
    }
];
let SavedAddressesPageRoutingModule = class SavedAddressesPageRoutingModule {
};
SavedAddressesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SavedAddressesPageRoutingModule);



/***/ }),

/***/ 26774:
/*!***********************************************************!*\
  !*** ./src/app/saved-addresses/saved-addresses.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedAddressesPageModule": function() { return /* binding */ SavedAddressesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _saved_addresses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-addresses-routing.module */ 1308);
/* harmony import */ var _saved_addresses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-addresses.page */ 89693);







let SavedAddressesPageModule = class SavedAddressesPageModule {
};
SavedAddressesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _saved_addresses_routing_module__WEBPACK_IMPORTED_MODULE_0__.SavedAddressesPageRoutingModule
        ],
        declarations: [_saved_addresses_page__WEBPACK_IMPORTED_MODULE_1__.SavedAddressesPage]
    })
], SavedAddressesPageModule);



/***/ }),

/***/ 89693:
/*!*********************************************************!*\
  !*** ./src/app/saved-addresses/saved-addresses.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedAddressesPage": function() { return /* binding */ SavedAddressesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_saved_addresses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./saved-addresses.page.html */ 81381);
/* harmony import */ var _saved_addresses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-addresses.page.scss */ 70934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-calls.service */ 80054);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ 54120);







let SavedAddressesPage = class SavedAddressesPage {
    constructor(apiServices, loginService) {
        this.apiServices = apiServices;
        this.loginService = loginService;
        this.local = this.loginService.currentUser.value;
    }
    ngOnInit() {
        this.apiServices.get('store-address', 'businessId=' + this.local.userDetails.id).subscribe(res => {
            this.addresses$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res);
            console.log(res);
        });
    }
    handleAddressDeletion(addressId) {
        var data = {
            'businessId': this.local.userDetails.id,
            'addressId': addressId
        };
        this.apiServices.delete('delete-address', 'businessId=' + this.local.userDetails.id + '&addressId=' + addressId).subscribe(res => {
            this.addresses$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res);
            console.log(res);
        });
    }
};
SavedAddressesPage.ctorParameters = () => [
    { type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService }
];
SavedAddressesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-saved-addresses',
        template: _raw_loader_saved_addresses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_saved_addresses_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SavedAddressesPage);



/***/ }),

/***/ 70934:
/*!***********************************************************!*\
  !*** ./src/app/saved-addresses/saved-addresses.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label h3 {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLWFkZHJlc3Nlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6InNhdmVkLWFkZHJlc3Nlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbmlvbi1sYWJlbCBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ 81381:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saved-addresses/saved-addresses.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Saved addresses\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Saved addresses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list *ngIf=\"addresses$ | async as addresses\">\n    <ion-item *ngFor=\"let address of addresses\">\n      <ion-icon name=\"location-outline\" color=\"primary\"></ion-icon>&nbsp; &nbsp;\n      <ion-label>\n        <h3>{{address.addressIdentifierName}}</h3>\n        <p>{{address.addressLineOne}}, {{address.addressLineTwo}}</p>\n        <p>{{address.postcode}}</p>\n        <ion-badge color=\"primary\">{{address.type}}</ion-badge>\n      </ion-label>\n      <ion-icon slot=\"end\" (click)=\"handleAddressDeletion(address.id)\" name=\"trash-outline\" color=\"primary\">\n      </ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_saved-addresses_saved-addresses_module_ts-es2015.js.map