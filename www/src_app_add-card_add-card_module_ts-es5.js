(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_add-card_add-card_module_ts"], {
    /***/
    69987: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCardPageRoutingModule": function AddCardPageRoutingModule() {
          return (
            /* binding */
            _AddCardPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _add_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-card.page */
      24206);

      var routes = [{
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_0__.AddCardPage
      }];

      var _AddCardPageRoutingModule = function AddCardPageRoutingModule() {
        _classCallCheck(this, AddCardPageRoutingModule);
      };

      _AddCardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddCardPageRoutingModule);
      /***/
    },

    /***/
    38546: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCardPageModule": function AddCardPageModule() {
          return (
            /* binding */
            _AddCardPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-card-routing.module */
      69987);
      /* harmony import */


      var _add_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-card.page */
      24206);

      var _AddCardPageModule = function AddCardPageModule() {
        _classCallCheck(this, AddCardPageModule);
      };

      _AddCardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCardPageRoutingModule],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_1__.AddCardPage]
      })], _AddCardPageModule);
      /***/
    },

    /***/
    24206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCardPage": function AddCardPage() {
          return (
            /* binding */
            _AddCardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-card.page.html */
      92828);
      /* harmony import */


      var _add_card_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-card.page.scss */
      42482);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/business-payment.service */
      95921);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _AddCardPage = /*#__PURE__*/function () {
        function AddCardPage(apiServices, formBuilder, loginService, router) {
          _classCallCheck(this, AddCardPage);

          this.apiServices = apiServices;
          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.router = router;
          this.isError = false;
          this.btnTxt = 'Add card';
          this.local = this.loginService.currentUser.value;
        }

        _createClass(AddCardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              cardReference: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              cardHolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              expiraryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
            });
          }
        }, {
          key: "cardReference",
          get: function get() {
            return this.formGroup.get("cardReference");
          }
        }, {
          key: "cardNumber",
          get: function get() {
            return this.formGroup.get("cardNumber");
          }
        }, {
          key: "cardHolderName",
          get: function get() {
            return this.formGroup.get("cardHolderName");
          }
        }, {
          key: "expiraryDate",
          get: function get() {
            return this.formGroup.get("expiraryDate");
          }
        }, {
          key: "cvv",
          get: function get() {
            return this.formGroup.get("cvv");
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(values) {
            var _this = this;

            this.btnTxt = 'Please wait...';
            var payLoad = values;
            console.log(this.loginService.currentUser.value);
            payLoad["userId"] = this.local.userDetails.id;
            this.isError = false;

            if (this.formGroup.valid) {
              this.apiServices.post('stored-card', payLoad).subscribe(function (res) {
                _this.btnTxt = 'Add card';
                console.log(res);

                _this.router.navigate(["my-balance"]);
              }, function (error) {
                _this.btnTxt = 'Add card';
                console.log(error);
              });
            } else {
              this.btnTxt = 'Add card';
              this.isError = true;
            }
          }
        }]);

        return AddCardPage;
      }();

      _AddCardPage.ctorParameters = function () {
        return [{
          type: _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__.BusinessPaymentService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _AddCardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-card',
        template: _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_card_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddCardPage);
      /***/
    },

    /***/
    42482: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-select {\n  padding-left: 10px;\n  padding: 8px;\n  font-size: 14px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi50eHQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkN2RhOWE7XG59Il19 */";
      /***/
    },

    /***/
    92828: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\" color=\"primary\">\n      Add card\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\" color=\"primary\">Add card</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Cardholder nickname <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"cardReference\" type=\"text\" placeholder=\"Barclays Bank\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(cardReference.invalid &&(cardReference.dirty || cardReference.touched))|| isError\"\n            color=\"danger\">Cardholder nickname is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Cardholder name <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"cardHolderName\" type=\"text\" placeholder=\"John Doe\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(cardHolderName.invalid &&(cardHolderName.dirty || cardHolderName.touched))|| isError\"\n            color=\"danger\">Cardholder name is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Card number<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"cardNumber\" type=\"text\"  placeholder=\"1234567891011213\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(cardNumber.invalid &&(cardNumber.dirty || cardNumber.touched))|| isError\" color=\"danger\">\n            Card number is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Expiry date <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"expiraryDate\" type=\"text\" placeholder=\"MM/YY\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(expiraryDate.invalid &&(expiraryDate.dirty || expiraryDate.touched))|| isError\"\n            color=\"danger\">Expiry date is required</ion-label>\n        </ion-col>\n\n        <ion-col>\n          <ion-label>CVV<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"text\"  formControlName=\"cvv\" placeholder=\"***\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(cvv.invalid &&(cvv.dirty || cvv.touched))|| isError\" color=\"danger\">CVV is required\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Address Line 1 <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"text\" placeholder=\"25 Chill Lane\"></ion-input>\n          </div>\n          <!-- <ion-label color=\"danger\">Address Line 1 is required</ion-label> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Address Line 2 <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"text\" placeholder=\"London\"></ion-input>\n          </div>\n          <!-- <ion-label color=\"danger\">Address Line 2 is required</ion-label> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Postcode <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"text\" placeholder=\"EW2 6LK\"></ion-input>\n          </div>\n          <!-- <ion-label color=\"danger\">Postcode is required</ion-label> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button [disabled]=\"btnTxt == 'Please wait...' ? true : false\" type=\"submit\" color=\"primary\" expand=\"block\">\n            {{btnTxt}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_add-card_add-card_module_ts-es5.js.map