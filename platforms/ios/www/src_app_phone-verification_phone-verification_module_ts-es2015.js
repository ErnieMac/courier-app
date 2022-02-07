(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_phone-verification_phone-verification_module_ts"],{

/***/ 47131:
/*!*************************************************************************!*\
  !*** ./src/app/phone-verification/phone-verification-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneVerificationPageRoutingModule": function() { return /* binding */ PhoneVerificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _phone_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-verification.page */ 93253);




const routes = [
    {
        path: '',
        component: _phone_verification_page__WEBPACK_IMPORTED_MODULE_0__.PhoneVerificationPage
    }
];
let PhoneVerificationPageRoutingModule = class PhoneVerificationPageRoutingModule {
};
PhoneVerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhoneVerificationPageRoutingModule);



/***/ }),

/***/ 53429:
/*!*****************************************************************!*\
  !*** ./src/app/phone-verification/phone-verification.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneVerificationPageModule": function() { return /* binding */ PhoneVerificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _phone_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-verification-routing.module */ 47131);
/* harmony import */ var _phone_verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-verification.page */ 93253);







let PhoneVerificationPageModule = class PhoneVerificationPageModule {
};
PhoneVerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _phone_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneVerificationPageRoutingModule
        ],
        declarations: [_phone_verification_page__WEBPACK_IMPORTED_MODULE_1__.PhoneVerificationPage]
    })
], PhoneVerificationPageModule);



/***/ }),

/***/ 93253:
/*!***************************************************************!*\
  !*** ./src/app/phone-verification/phone-verification.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneVerificationPage": function() { return /* binding */ PhoneVerificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_phone_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./phone-verification.page.html */ 35095);
/* harmony import */ var _phone_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-verification.page.scss */ 21150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-calls.service */ 80054);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);











let PhoneVerificationPage = class PhoneVerificationPage {
    constructor(apiServices, toastController, formBuilder, loginService, storage, router) {
        this.apiServices = apiServices;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.storage = storage;
        this.router = router;
        this.waitText = null;
        this.isError = false;
        this.verificationType = null;
        this.userDetails$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.loginService.currentUser.value);
    }
    ngOnInit() {
        this.codeForm = this.formBuilder.group({
            first: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            second: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            third: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            fourth: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
    }
    generateVerificationCode(type) {
        this.verificationType = type;
        const currentUser = this.loginService.currentUser.value;
        let data = {
            "id": currentUser.userDetails.id,
            "reason": "Just because I can",
            "userType": "BUSINESS",
        };
        if (type == 'SMS') {
            this.waitText = 'sending';
            data['verificationType'] = "mobile";
            console.log(data);
            this.apiServices.post("generate-verification-code", data).subscribe(res => {
                console.log(res);
                this.waitText = null;
            }, error => {
                console.log(error);
                this.waitText = null;
            });
        }
    }
    verifyVerificationCode(formValues) {
        this.waitText = 'Please wait...';
        if (this.codeForm.valid) {
            const currentUser = this.loginService.currentUser.value;
            let data = {
                "userId": currentUser.userDetails.id,
                "verificationNumber": formValues.first + formValues.second + formValues.third + formValues.fourth
            };
            // if (this.verificationType == 'SMS') {
            data['type'] = "mobile";
            console.log(data);
            this.apiServices.post("verify-verification-code", data).subscribe(res => {
                console.log(res);
                let user = this.loginService.currentUser.value;
                user.userDetails.verifiedMobileNumber = true;
                this.loginService.currentUser.next(user);
                this.storage.set('userDetails', user);
                this.waitText = null;
                // if (currentUser.userDetails.verifiedMobileNumber == true ) {
                //   this.router.navigate(["business-dashboard"]);
                // }
                // else {
                //   this.router.navigate(["login"]);
                // }
                this.router.navigate(['business-dashboard']);
            }, error => {
                console.log(error);
                this.waitText = null;
            });
            // }
        }
        else {
            this.waitText = null;
            console.log('Please Enter Code..');
        }
    }
};
PhoneVerificationPage.ctorParameters = () => [
    { type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
PhoneVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-phone-verification',
        template: _raw_loader_phone_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_phone_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PhoneVerificationPage);



/***/ }),

/***/ 21150:
/*!*****************************************************************!*\
  !*** ./src/app/phone-verification/phone-verification.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding: 10px;\n}\n\nion-label {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.verify-number {\n  margin: 5px;\n  text-align: center;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 18px;\n  border: 1px solid #1A6AE1;\n}\n\n.native-.sc-ion-input-ios {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.native-input.sc-ion-input-md {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\nion-text p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHSTtFQUNJLGVBQUE7QUFBUiIsImZpbGUiOiJwaG9uZS12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG4kYmx1ZS1jb2xvcjogIzFBNkFFMTtcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnZlcmlmeS1udW1iZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJsdWUtY29sb3I7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2QzZDdkYTlhO1xufVxuLm5hdGl2ZS0uc2MtaW9uLWlucHV0LWlvcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi10ZXh0IHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 35095:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phone-verification/phone-verification.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\" color=\"primary\">\n      Phone verification\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\" color=\"primary\">Phone verification</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text class=\"ion-text-center\">\n          <p>Please click <b>TEXT</b> or <b>CALL</b> button to recieve the 4-digit code sent to your phone number:<br>\n            <ion-text color=\"primary\" *ngIf=\"userDetails$ | async as user\"><b>+{{user.userDetails.intCode}}\n                {{user.userDetails.mobileNumber}}</b></ion-text>\n          </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"codeForm\" (ngSubmit)=\"verifyVerificationCode(codeForm.value)\">\n          <ion-grid>\n            <ion-label>Verifcation code</ion-label>\n            <ion-row>\n              <ion-col class=\"verify-number\">\n                <div>\n                  <ion-input type=\"text\" formControlName=\"first\" maxlength=\"1\"></ion-input>\n                </div>\n              </ion-col>\n              <ion-col class=\"verify-number\">\n                <div>\n                  <ion-input type=\"text\" formControlName=\"second\" maxlength=\"1\"></ion-input>\n                </div>\n              </ion-col>\n              <ion-col class=\"verify-number\">\n                <div>\n                  <ion-input type=\"text\" formControlName=\"third\" maxlength=\"1\"></ion-input>\n                </div>\n              </ion-col>\n              <ion-col class=\"verify-number\">\n                <div>\n                  <ion-input type=\"text\" formControlName=\"fourth\" maxlength=\"1\"></ion-input>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <!-- <p class=\"ion-text-center\">Didn’t get the code? \n              <ion-text color=\"primary\"><b>Resend</b></ion-text>\n            </p> -->\n\n          <ion-row class=\"ion-align-item-center\">\n            <ion-col class=\"ion-text-center\" size=\"6\">\n              <ion-button color=\"primary\" (click)=\"generateVerificationCode('TEXT')\" fill=\"outline\" size=\"small\"\n                expand=\"inline-block\">{{waitText == 'sending' ? 'Please wait...' : 'TEXT'}}\n                <ion-icon slot=\"start\" name=\"phone-portrait-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\" size=\"6\">\n              <ion-button color=\"primary\" (click)=\"generateVerificationCode('CALL')\" fill=\"outline\" size=\"small\"\n                expand=\"inline-block\">{{waitText == 'calling' ? 'Please wait...' : 'CALL'}}\n                <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"primary\" expand=\"block\">\n                {{waitText == null ? 'Verify' : 'Please wait...'}}</ion-button>\n              <!-- <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [routerLink]=\"['/change-phone-number']\">Change\n                phone\n                number</ion-button> -->\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" fill=\"outline\" [routerLink]=\"['/change-phone-number']\">Change\n            phone number</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_phone-verification_phone-verification_module_ts-es2015.js.map