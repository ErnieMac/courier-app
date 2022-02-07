(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/auth.guard */ 37560);
/* harmony import */ var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-calls.service */ 80054);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let LoginPage = class LoginPage {
    constructor(auth, apiServices, formBuilder, toastController, router, loginService) {
        this.auth = auth;
        this.apiServices = apiServices;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.router = router;
        this.loginService = loginService;
        this.isError = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
    }
    get email() {
        return this.loginForm.get("email");
    }
    get password() {
        return this.loginForm.get("password");
    }
    handleFormSubmission(formValues) {
        if (this.loginForm.valid) {
            this.isError = false;
            console.log(formValues);
            this.apiServices.post('login', formValues).subscribe(res => {
                console.log(res);
                this.handleLogin(res);
            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastController.create({
                    message: error.error.message,
                    duration: 3000,
                    position: 'bottom',
                    color: 'danger'
                });
                toast.present();
            }));
        }
        else {
            this.isError = true;
            console.log('All Fields Are Required');
        }
    }
    handleLogin(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loginService.createStorage();
            yield this.loginService.storageInstance.set('loggedIn', true);
            yield this.loginService.storageInstance.set('userDetails', response);
            this.loginService.currentUser.next(response);
            const toast = yield this.toastController.create({
                message: `Welcome ${response.userDetails.firstname} ${response.userDetails.lastname}`,
                duration: 2000,
                position: 'bottom',
                color: 'primary'
            });
            toast.present();
            if (response.userDetails.verifiedMobileNumber == false) {
                this.router.navigate(["phone-verification"]);
            }
            if (response.userDetails.verifiedMobileNumber == true) {
                this.router.navigate(["business-dashboard"]);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _helper_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard },
    { type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__.ApiCallsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding: 10px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.ion-text-center {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENTUyBEb2N1bWVudHNcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnR4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbi5pb24tdGV4dC1jZW50ZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Please login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Please login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"handleFormSubmission(loginForm.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Email <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"email\" formControlName=\"email\" placeholder=\"John.doe@email.com\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(email.invalid &&(email.dirty || email.touched))|| isError\" color=\"danger\">Enter a valid\n            email</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Password <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"password\" formControlName=\"password\" placeholder=\"***********\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(password.invalid &&(password.dirty || password.touched))|| isError\" color=\"danger\">Password\n            is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Login</ion-button>\n          <p class=\"ion-text-center\"><a [routerLink]=\"['/reset-password']\"><b>Forgot your password?</b></a></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <p class=\"ion-text-center\">Don’t have an account?<br> <a [routerLink]=\"['/create-account']\"><b>Create an account</b></a>\n  </p>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map