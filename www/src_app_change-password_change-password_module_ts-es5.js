(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_change-password_change-password_module_ts"], {
    /***/
    22070: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordPageRoutingModule": function ChangePasswordPageRoutingModule() {
          return (
            /* binding */
            _ChangePasswordPageRoutingModule
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password.page */
      37517);

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
      }];

      var _ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      _ChangePasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    68232: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordPageModule": function ChangePasswordPageModule() {
          return (
            /* binding */
            _ChangePasswordPageModule
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password-routing.module */
      22070);
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-password.page */
      37517);

      var _ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      _ChangePasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
      })], _ChangePasswordPageModule);
      /***/
    },

    /***/
    37517: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordPage": function ChangePasswordPage() {
          return (
            /* binding */
            _ChangePasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./change-password.page.html */
      53586);
      /* harmony import */


      var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-password.page.scss */
      87803);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      54120);

      var _ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(formBuilder, toastController, router, apiServices, loginService) {
          _classCallCheck(this, ChangePasswordPage);

          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.router = router;
          this.apiServices = apiServices;
          this.loginService = loginService;
          this.local = this.loginService.currentUser.value;
          this.isError = false;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              existingPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
            });
          }
        }, {
          key: "existingPassword",
          get: function get() {
            return this.formGroup.get("existingPassword");
          }
        }, {
          key: "newPassword",
          get: function get() {
            return this.formGroup.get("newPassword");
          }
        }, {
          key: "confirmPassword",
          get: function get() {
            return this.formGroup.get("confirmPassword");
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(formValues) {
            var _this = this;

            if (this.formGroup.valid) {
              this.isError = false;
              formValues['id'] = this.local.userDetails.id;
              console.log(formValues);

              if (formValues['confirmPassword'] == formValues['newPassword']) {
                delete formValues['confirmPassword'];
                this.apiServices.patch('password', formValues).subscribe(function (res) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var toast;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            console.log(res);
                            _context.next = 3;
                            return this.toastController.create({
                              message: 'Password reset successfully!',
                              duration: 3000,
                              position: 'bottom',
                              color: 'success'
                            });

                          case 3:
                            toast = _context.sent;
                            toast.present();
                            this.router.navigate(["business-dashboard"]);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }, function (error) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                alert('Password doesn\'t match.');
              }
            } else {
              this.isError = true;
            }
          }
        }]);

        return ChangePasswordPage;
      }();

      _ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }];
      };

      _ChangePasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-change-password",
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChangePasswordPage);
      /***/
    },

    /***/
    87803: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udHh0LXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn0iXX0= */";
      /***/
    },

    /***/
    53586: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Change Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Change password</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Current Password <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"password\" formControlName=\"existingPassword\" required></ion-input>\n          </div>\n          <ion-label *ngIf=\"(existingPassword.invalid &&(existingPassword.dirty || existingPassword.touched))|| isError\"\n            color=\"danger\">Current password is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>New Password <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required formControlName=\"newPassword\" type=\"password\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(newPassword.invalid &&(newPassword.dirty || newPassword.touched))|| isError\"\n            color=\"danger\">New password is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Confirm password <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required formControlName=\"confirmPassword\" type=\"password\"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Submit\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_change-password_change-password_module_ts-es5.js.map