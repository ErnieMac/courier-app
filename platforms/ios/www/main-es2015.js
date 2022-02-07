(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/auth.guard */ 37560);
/* harmony import */ var _helper_loggedIn_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/loggedIn.guard */ 63400);





const authRoutes = [
    {
        path: 'change-phone-number',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_change-phone-number_change-phone-number_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./change-phone-number/change-phone-number.module */ 96574)).then(m => m.ChangePhoneNumberPageModule)
    },
    {
        path: 'phone-verification',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_phone-verification_phone-verification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./phone-verification/phone-verification.module */ 53429)).then(m => m.PhoneVerificationPageModule)
    },
    {
        path: 'business-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_business-profile_business-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./business-profile/business-profile.module */ 41874)).then(m => m.BusinessProfilePageModule)
    },
    {
        path: 'business-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_business-dashboard_business-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./business-dashboard/business-dashboard.module */ 80776)).then(m => m.BusinessDashboardPageModule)
    },
    {
        path: 'chat-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat-history_chat-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat-history/chat-history.module */ 87441)).then(m => m.ChatHistoryPageModule)
    },
    {
        path: 'chat-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat-details_chat-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat-details/chat-details.module */ 70108)).then(m => m.ChatDetailsPageModule)
    },
    {
        path: "change-password",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./change-password/change-password.module */ 68232)).then((m) => m.ChangePasswordPageModule),
    },
    {
        path: 'help-support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_help-support_help-support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./help-support/help-support.module */ 49779)).then(m => m.HelpSupportPageModule)
    },
    {
        path: 'my-balance',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_my-balance_my-balance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-balance/my-balance.module */ 96078)).then(m => m.MyBalancePageModule)
    },
    {
        path: 'transaction-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_transaction-history_transaction-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transaction-history/transaction-history.module */ 77934)).then(m => m.TransactionHistoryPageModule)
    },
    {
        path: 'edit-delivery/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-delivery_edit-delivery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-delivery/edit-delivery.module */ 40241)).then(m => m.EditDeliveryPageModule)
    },
    {
        path: 'cancel-delivery/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cancel-delivery_cancel-delivery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cancel-delivery/cancel-delivery.module */ 34573)).then(m => m.CancelDeliveryPageModule)
    },
    {
        path: 'make-claim/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_make-claim_make-claim_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./make-claim/make-claim.module */ 62160)).then(m => m.MakeClaimPageModule)
    },
    {
        path: 'add-card',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_add-card_add-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-card/add-card.module */ 38546)).then(m => m.AddCardPageModule)
    },
    {
        path: 'top-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_top-up_top-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./top-up/top-up.module */ 57097)).then(m => m.TopUpPageModule)
    },
    {
        path: 'recurring-payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_recurring-payment_recurring-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recurring-payment/recurring-payment.module */ 26226)).then(m => m.RecurringPaymentPageModule)
    },
    {
        path: 'business-address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_business-address_business-address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./business-address/business-address.module */ 93468)).then(m => m.BusinessAddressPageModule)
    },
    {
        path: 'saved-addresses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_saved-addresses_saved-addresses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./saved-addresses/saved-addresses.module */ 26774)).then(m => m.SavedAddressesPageModule)
    },
    {
        path: 'add-new-address',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_add-new-address_add-new-address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-new-address/add-new-address.module */ 8543)).then(m => m.AddNewAddressPageModule)
    },
    {
        path: 'add-new-delivery',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_add-new-delivery_add-new-delivery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-new-delivery/add-new-delivery.module */ 18677)).then(m => m.AddNewDeliveryPageModule)
    },
    // {
    //   path: 'completed-deliveries',
    //   loadChildren: () => import('./completed-deliveries/completed-deliveries.module').then(m => m.CompletedDeliveriesPageModule)
    // },
    {
        path: 'delivery-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_delivery-details_delivery-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./delivery-details/delivery-details.module */ 53215)).then(m => m.DeliveryDetailsPageModule)
    },
    {
        path: 'ongoing-deliveries',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_ongoing-deliveries_ongoing-deliveries_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ongoing-deliveries/ongoing-deliveries.module */ 21951)).then(m => m.OngoingDeliveriesPageModule)
    },
    // {
    //   path: 'scheduled-deliveries',
    //   loadChildren: () => import('./scheduled-deliveries/scheduled-deliveries.module').then(m => m.ScheduledDeliveriesPageModule)
    // },
];
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: authRoutes
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canActivate: [_helper_loggedIn_guard__WEBPACK_IMPORTED_MODULE_1__.LoggedInGuard]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule),
        canActivate: [_helper_loggedIn_guard__WEBPACK_IMPORTED_MODULE_1__.LoggedInGuard]
    },
    {
        path: 'create-account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_create-account_create-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-account/create-account.module */ 55110)).then(m => m.CreateAccountPageModule),
        canActivate: [_helper_loggedIn_guard__WEBPACK_IMPORTED_MODULE_1__.LoggedInGuard]
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 44371)).then(m => m.ResetPasswordPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/google-maps */ 99010);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ 84549);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/error.interceptor */ 13300);
/* harmony import */ var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/jwt.interceptor */ 75459);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ 30582);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientJsonpModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_14__.IonicStorageModule.forRoot()
        ],
        providers: [
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__.FCM,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder,
            _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.BackgroundGeolocation,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor, multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 37560:
/*!**************************************!*\
  !*** ./src/app/helper/auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);




let AuthGuard = class AuthGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const local = yield this.loginService.isLoggedIn().then(res => {
                return res;
            });
            if (local.loggedIn) {
                if (local.loggedInUser.userDetails.verifiedMobileNumber == true) {
                    this.loginService.currentUser.next(local.loggedInUser);
                    return true;
                }
                else {
                    this.router.navigate(["phone-verification"], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
            return false;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" })
], AuthGuard);



/***/ }),

/***/ 13300:
/*!*********************************************!*\
  !*** ./src/app/helper/error.interceptor.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": function() { return /* binding */ ErrorInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 80476);


// import { LoginService } from "../login/shared/login.service";

let ErrorInterceptor = class ErrorInterceptor {
    constructor(
    // private loginService: LoginService,
    toastController) {
        this.toastController = toastController;
    }
    intercept(request, next) {
        return next.handle(request).pipe(
        // catchError((err) => {
        //   if (err.status === 401) {
        //     // auto logout if 401 response returned from api
        //     this.loginService.logout();
        //     window.location.reload;
        //   }
        //   if (err.status === 400) {
        //     const validationErrors = err.error.validationErrors;
        //     return throwError(validationErrors);
        //   }
        //   const error = err.error.message || err.statusText;
        //   return throwError(error);
        // })
        );
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ToastController }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 75459:
/*!*******************************************!*\
  !*** ./src/app/helper/jwt.interceptor.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": function() { return /* binding */ JwtInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 54120);



let JwtInterceptor = class JwtInterceptor {
    constructor(loginService) {
        this.loginService = loginService;
    }
    intercept(request, next) {
        if (request.headers.has("skip")) {
            request = request.clone({
                headers: request.headers.delete("skip"),
            });
        }
        else {
            // add authorization header with jwt token if available
            let currentUser = this.loginService.currentUser.value;
            // const user = this.loginService.storageInstance
            if (currentUser && currentUser.token.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token.token}`,
                    },
                });
            }
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], JwtInterceptor);



/***/ }),

/***/ 63400:
/*!******************************************!*\
  !*** ./src/app/helper/loggedIn.guard.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInGuard": function() { return /* binding */ LoggedInGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 54120);




let LoggedInGuard = class LoggedInGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const local = yield this.loginService.isLoggedIn().then(res => {
                return res;
            });
            if (local.loggedIn) {
                this.loginService.currentUser.next(local.loggedInUser);
                console.log(local);
                this.router.navigate(["/business-dashboard"]);
                return false;
            }
            return true;
        });
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
LoggedInGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" })
], LoggedInGuard);



/***/ }),

/***/ 54120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);




let LoginService = class LoginService {
    constructor(storage) {
        this.storage = storage;
        this._storage = null;
        this.storageInstance = null;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.createStorage();
    }
    createStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.storageInstance = yield this.storage.create();
        });
    }
    isLoggedIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const storageInstance = yield this.storage.create();
            const loggedIn = yield storageInstance.get('loggedIn');
            const loggedInUser = yield storageInstance.get('userDetails');
            return { loggedIn: loggedIn, loggedInUser: loggedInUser };
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: "http://testrestapi.delivermateapp.com:8080/deliver-mate/backend/api/business/",
    businessPayment: "http://testrestapi.delivermateapp.com:8080/deliver-mate/backend/api/business-payment/",
    businessCommunication: "http://testrestapi.delivermateapp.com:8080/deliver-mate/backend/api/booking-communication/",
    businessBooking: "http://testrestapi.delivermateapp.com:8080/deliver-mate/backend/api/business-booking/",
    jobs_api: "http://testrestapi.delivermateapp.com:8080/deliver-mate/backend/api/",
    firebaseApi: "http://testrestapi.delivermateapp.com:8080/deliver-mate/backend/api/firebase-api/",
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map