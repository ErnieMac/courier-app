(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_cancel-delivery_cancel-delivery_module_ts"],{

/***/ 57703:
/*!*******************************************************************!*\
  !*** ./src/app/cancel-delivery/cancel-delivery-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelDeliveryPageRoutingModule": function() { return /* binding */ CancelDeliveryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cancel_delivery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-delivery.page */ 54525);




const routes = [
    {
        path: '',
        component: _cancel_delivery_page__WEBPACK_IMPORTED_MODULE_0__.CancelDeliveryPage
    }
];
let CancelDeliveryPageRoutingModule = class CancelDeliveryPageRoutingModule {
};
CancelDeliveryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CancelDeliveryPageRoutingModule);



/***/ }),

/***/ 34573:
/*!***********************************************************!*\
  !*** ./src/app/cancel-delivery/cancel-delivery.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelDeliveryPageModule": function() { return /* binding */ CancelDeliveryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cancel_delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-delivery-routing.module */ 57703);
/* harmony import */ var _cancel_delivery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-delivery.page */ 54525);







let CancelDeliveryPageModule = class CancelDeliveryPageModule {
};
CancelDeliveryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cancel_delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelDeliveryPageRoutingModule
        ],
        declarations: [_cancel_delivery_page__WEBPACK_IMPORTED_MODULE_1__.CancelDeliveryPage]
    })
], CancelDeliveryPageModule);



/***/ }),

/***/ 54525:
/*!*********************************************************!*\
  !*** ./src/app/cancel-delivery/cancel-delivery.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelDeliveryPage": function() { return /* binding */ CancelDeliveryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cancel_delivery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cancel-delivery.page.html */ 50773);
/* harmony import */ var _cancel_delivery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-delivery.page.scss */ 85989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-calls.service */ 80054);
/* harmony import */ var _services_business_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/business-booking.service */ 76547);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let CancelDeliveryPage = class CancelDeliveryPage {
    constructor(apiServices, bookingService, formBuilder, toastController, router, route, loginService) {
        this.apiServices = apiServices;
        this.bookingService = bookingService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.local = this.loginService.currentUser.value;
        this.isError = false;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            cancelReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            cancelNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
        });
    }
    get cancelReason() {
        return this.formGroup.get("cancelReason");
    }
    // get claimNotes() {
    //   return this.formGroup.get("claimNotes");
    // }
    handleFormSubmission(formValues) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var data = {
                'userId': this.local.userDetails.id,
                'cancelReason': formValues.cancelReason,
                'cancelNotes': formValues.cancelNotes,
                "jobId": this.router.snapshot.paramMap.get("id")
            };
            if (this.formGroup.valid) {
                this.isError = false;
                console.log(data);
                this.bookingService.patch('cancel-job', data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    const toast = yield this.toastController.create({
                        message: res.message,
                        duration: 3000,
                        position: 'bottom',
                        color: 'success'
                    });
                    toast.present();
                    this.route.navigateByUrl('ongoing-deliveries');
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(error);
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
        });
    }
};
CancelDeliveryPage.ctorParameters = () => [
    { type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService },
    { type: _services_business_booking_service__WEBPACK_IMPORTED_MODULE_3__.BusinessBookingService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService }
];
CancelDeliveryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cancel-delivery',
        template: _raw_loader_cancel_delivery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cancel_delivery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CancelDeliveryPage);



/***/ }),

/***/ 85989:
/*!***********************************************************!*\
  !*** ./src/app/cancel-delivery/cancel-delivery.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding: 10px;\n}\n\nion-select {\n  padding-left: 10px;\n  padding-right: 8px;\n  font-size: 14px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\nion-textarea {\n  font-size: 14px;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  border: 1px solid #d3d7da9a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbC1kZWxpdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7QUFJSiIsImZpbGUiOiJjYW5jZWwtZGVsaXZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4Oztcbn1cbmlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50eHQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkN2RhOWE7XG59XG4uc2VsZWN0LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkN2RhOWE7XG59Il19 */");

/***/ }),

/***/ 50773:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cancel-delivery/cancel-delivery.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Cancel delivery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Cancel delivery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Reason for cancelling <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select slot=\"start\" formControlName=\"cancelReason\" placeholder=\"Select reason\">\n              <ion-select-option data-reasonCode=\"Reason 1\" value=\"Reason 1\">Reason 1</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 2\" value=\"Reason 2\">Reason 2</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 3\" value=\"Reason 3\">Reason 3</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 4\" value=\"Reason 4\">Reason 4</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 5\" value=\"Reason 5\">Reason 5</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 6\" value=\"Reason 6\">Reason 6</ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(cancelReason.invalid &&(cancelReason.dirty || cancelReason.touched))|| isError\"\n            color=\"danger\">Cancel reason is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Cancel note </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-textarea formControlName=\"cancelNotes\" placeholder=\"Enter your cancellation notes here...\">\n            </ion-textarea>\n          </div>\n          <!-- <ion-label color=\"danger\">Cancel note is required</ion-label> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_cancel-delivery_cancel-delivery_module_ts-es2015.js.map