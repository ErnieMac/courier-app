(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_reset-password_reset-password_module_ts"], {
    /***/
    54746: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPageRoutingModule": function ResetPasswordPageRoutingModule() {
          return (
            /* binding */
            _ResetPasswordPageRoutingModule
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


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password.page */
      68946);

      var routes = [{
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
      }];

      var _ResetPasswordPageRoutingModule = function ResetPasswordPageRoutingModule() {
        _classCallCheck(this, ResetPasswordPageRoutingModule);
      };

      _ResetPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ResetPasswordPageRoutingModule);
      /***/
    },

    /***/
    44371: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPageModule": function ResetPasswordPageModule() {
          return (
            /* binding */
            _ResetPasswordPageModule
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


      var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password-routing.module */
      54746);
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password.page */
      68946);

      var _ResetPasswordPageModule = function ResetPasswordPageModule() {
        _classCallCheck(this, ResetPasswordPageModule);
      };

      _ResetPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
      })], _ResetPasswordPageModule);
      /***/
    },

    /***/
    68946: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPage": function ResetPasswordPage() {
          return (
            /* binding */
            _ResetPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./reset-password.page.html */
      30170);
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      71541);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);

      var _ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(formBuilder, toastController, router, apiServices) {
          _classCallCheck(this, ResetPasswordPage);

          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.router = router;
          this.apiServices = apiServices;
          this.isError = false;
        }

        _createClass(ResetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
            });
          }
        }, {
          key: "email",
          get: function get() {
            return this.formGroup.get("email");
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(formValues) {
            var _this = this;

            if (this.formGroup.valid) {
              this.isError = false;
              console.log(formValues);
              this.apiServices.post('forgotten-password', formValues).subscribe(function (res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var toast;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log(res);
                          _context.next = 3;
                          return this.toastController.create({
                            message: 'Password reset link has been sent. Pleas check your email',
                            duration: 3000,
                            position: 'bottom',
                            color: 'danger'
                          });

                        case 3:
                          toast = _context.sent;
                          toast.present();

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, function (error) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var toast;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.toastController.create({
                            message: error.error.message,
                            duration: 3000,
                            position: 'bottom',
                            color: 'danger'
                          });

                        case 2:
                          toast = _context2.sent;
                          toast.present();

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            } else {
              this.isError = true;
              console.log('Email is Required');
            }
          }
        }]);

        return ResetPasswordPage;
      }();

      _ResetPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService
        }];
      };

      _ResetPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ResetPasswordPage);
      /***/
    },

    /***/
    71541: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\nion-text p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUk7RUFDSSxlQUFBO0FBQ1IiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udHh0LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDdkYTlhO1xufVxuaW9uLXRleHQge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    30170: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Reset password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Reset password</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text class=\"ion-text-center\">\n          <p>Please enter your email address to reset your password.</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Email <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"email\" required type=\"email\" placeholder=\"John.doe@email.com\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"isError\" color=\"danger\">Email is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Reset password</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_reset-password_reset-password_module_ts-es5.js.map