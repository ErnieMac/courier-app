(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_top-up_top-up_module_ts"], {
    /***/
    96546: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopUpPageRoutingModule": function TopUpPageRoutingModule() {
          return (
            /* binding */
            _TopUpPageRoutingModule
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


      var _top_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./top-up.page */
      34487);

      var routes = [{
        path: '',
        component: _top_up_page__WEBPACK_IMPORTED_MODULE_0__.TopUpPage
      }];

      var _TopUpPageRoutingModule = function TopUpPageRoutingModule() {
        _classCallCheck(this, TopUpPageRoutingModule);
      };

      _TopUpPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TopUpPageRoutingModule);
      /***/
    },

    /***/
    57097: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopUpPageModule": function TopUpPageModule() {
          return (
            /* binding */
            _TopUpPageModule
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


      var _top_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./top-up-routing.module */
      96546);
      /* harmony import */


      var _top_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-up.page */
      34487);

      var _TopUpPageModule = function TopUpPageModule() {
        _classCallCheck(this, TopUpPageModule);
      };

      _TopUpPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _top_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopUpPageRoutingModule],
        declarations: [_top_up_page__WEBPACK_IMPORTED_MODULE_1__.TopUpPage]
      })], _TopUpPageModule);
      /***/
    },

    /***/
    34487: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TopUpPage": function TopUpPage() {
          return (
            /* binding */
            _TopUpPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_top_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./top-up.page.html */
      91161);
      /* harmony import */


      var _top_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-up.page.scss */
      83702);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      59193);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5304);

      var _TopUpPage = /*#__PURE__*/function () {
        function TopUpPage(apiServices, formBuilder, loginService, router) {
          _classCallCheck(this, TopUpPage);

          this.apiServices = apiServices;
          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.router = router;
          this.isError = false;
          this.btnTxt = 'Add credit';
          this.local = this.loginService.currentUser.value;
        }

        _createClass(TopUpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              topUpAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              cardReference: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
            });
            this.getAccount();
            this.getSavedCards();
          }
        }, {
          key: "topUpAmount",
          get: function get() {
            return this.formGroup.get("topUpAmount");
          }
        }, {
          key: "cardReference",
          get: function get() {
            return this.formGroup.get("cardReference");
          }
        }, {
          key: "getSavedCards",
          value: function getSavedCards() {
            var user = this.loginService.currentUser.value;
            console.log(user);
            this.savedCards$ = this.apiServices.get('retrieve-stored-card', 'businessId=' + user.userDetails.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function (cards) {
              return "cards:" + cards;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (err) {
              return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
            }));
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            var user = this.loginService.currentUser.value;
            this.account$ = this.apiServices.get('retrieve-account', 'id=' + user.userDetails.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function (account) {
              return "account:" + account;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (err) {
              return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
            }));
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(values) {
            var _this = this;

            this.btnTxt = 'Please wait...';
            var payLoad = values;
            payLoad["id"] = this.local.userDetails.id;
            this.isError = false;

            if (this.formGroup.valid) {
              this.apiServices.post('top-up', payLoad).subscribe(function (res) {
                _this.btnTxt = 'Add credit';
                console.log(res);

                _this.router.navigate(["my-balance"]);
              }, function (error) {
                _this.btnTxt = 'Add credit';
                console.log(error);
              });
            } else {
              this.btnTxt = 'Add credit';
              this.isError = true;
            }
          }
        }]);

        return TopUpPage;
      }();

      _TopUpPage.ctorParameters = function () {
        return [{
          type: _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__.BusinessPaymentService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _TopUpPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-top-up',
        template: _raw_loader_top_up_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_top_up_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TopUpPage);
      /***/
    },

    /***/
    83702: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\n.card-blue {\n  background: #1A6AE1 0% 0% no-repeat;\n  box-shadow: 0px 10px 10px #0000001A;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.heading-title {\n  color: #FFFFFF;\n  font-weight: 800;\n  font-size: 20px;\n  padding: 25px;\n  line-height: 30px;\n  float: left;\n  width: 50%;\n}\n\n.balance {\n  padding: 40px 20px;\n}\n\n.title {\n  padding-left: 20px;\n}\n\nion-select {\n  padding-left: 10px;\n  padding-right: 8px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  border: 1px solid #d3d7da9a;\n}\n\nion-card {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxhQUFBO0FBSko7O0FBTUE7RUFDSSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxjQWJVO0VBY1YsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSiIsImZpbGUiOiJ0b3AtdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG4kYmx1ZS1jb2xvcjogIzFBNkFFMTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FyZC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZS1jb2xvciAwJSAwJSBuby1yZXBlYXQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAjMDAwMDAwMUE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5oZWFkaW5nLXRpdGxlIHtcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5iYWxhbmNlIHtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG59XG4udGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnR4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbi5zZWxlY3Qtd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    91161: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Top up\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Top up</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment value=\"Top up\">\n          <ion-segment-button value=\"My credit\" [routerLink]=\"['/my-balance']\">\n            <ion-label>My credit</ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button value=\"Top up\" [routerLink]=\"['/top-up']\">\n            <ion-label>Top up</ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button value=\"Transactions\" [routerLink]=\"['/transaction-history']\">\n            <ion-label>Transactions</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row>\n    <ion-col>\n      <ion-card class=\"card-blue\">\n        <div class=\"heading-title\">My<br> Credit</div>\n        <div *ngIf=\"!account$\" class=\"heading-title balance\">£0.00</div>\n        <div *ngIf=\"account$ | async as account\" class=\"heading-title balance\">£{{account.total}}</div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Cardholder nickname <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select *ngIf=\"savedCards$ | async as cards\" formControlName=\"cardReference\" slot=\"start\"\n              placeholder=\"Saved cards\">\n              <ion-select-option *ngFor=\"let card of cards\" [value]=\"card.cardId\">{{card.cardReference}}\n              </ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(cardReference.invalid &&(cardReference.dirty || cardReference.touched))|| isError\"\n            color=\"danger\">Select a card</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Top up amount <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"topUpAmount\" type=\"number\" placeholder=\"£50.00\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(topUpAmount.invalid &&(topUpAmount.dirty || topUpAmount.touched))|| isError\"\n            color=\"danger\">Top up amount is required</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button [disabled]=\"btnTxt == 'Please wait...' ? true : false\" type=\"submit\" color=\"primary\"\n            expand=\"block\">\n            {{btnTxt}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_top-up_top-up_module_ts-es5.js.map