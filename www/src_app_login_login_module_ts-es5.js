(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    45393: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    80107: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      76770);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      21339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../helper/auth.guard */
      37560);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(auth, apiServices, formBuilder, toastController, router, loginService) {
          _classCallCheck(this, LoginPage);

          this.auth = auth;
          this.apiServices = apiServices;
          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.router = router;
          this.loginService = loginService;
          this.isError = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
            });
          }
        }, {
          key: "email",
          get: function get() {
            return this.loginForm.get("email");
          }
        }, {
          key: "password",
          get: function get() {
            return this.loginForm.get("password");
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(formValues) {
            var _this = this;

            if (this.loginForm.valid) {
              this.isError = false;
              console.log(formValues);
              this.apiServices.post('login', formValues).subscribe(function (res) {
                console.log(res);

                _this.handleLogin(res);
              }, function (error) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var toast;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.toastController.create({
                            message: error.error.message,
                            duration: 3000,
                            position: 'bottom',
                            color: 'danger'
                          });

                        case 2:
                          toast = _context.sent;
                          toast.present();

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            } else {
              this.isError = true;
              console.log('All Fields Are Required');
            }
          }
        }, {
          key: "handleLogin",
          value: function handleLogin(response) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loginService.createStorage();

                    case 2:
                      _context2.next = 4;
                      return this.loginService.storageInstance.set('loggedIn', true);

                    case 4:
                      _context2.next = 6;
                      return this.loginService.storageInstance.set('userDetails', response);

                    case 6:
                      this.loginService.currentUser.next(response);
                      _context2.next = 9;
                      return this.toastController.create({
                        message: "Welcome ".concat(response.userDetails.firstname, " ").concat(response.userDetails.lastname),
                        duration: 2000,
                        position: 'bottom',
                        color: 'primary'
                      });

                    case 9:
                      toast = _context2.sent;
                      toast.present();

                      if (response.userDetails.verifiedMobileNumber == false) {
                        this.router.navigate(["phone-verification"]);
                      }

                      if (response.userDetails.verifiedMobileNumber == true) {
                        this.router.navigate(["business-dashboard"]);
                      }

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _helper_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard
        }, {
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__.ApiCallsService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    21339: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.ion-text-center {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENTUyBEb2N1bWVudHNcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnR4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbi5pb24tdGV4dC1jZW50ZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    76770: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Please login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Please login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"handleFormSubmission(loginForm.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Email <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"email\" formControlName=\"email\" placeholder=\"John.doe@email.com\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(email.invalid &&(email.dirty || email.touched))|| isError\" color=\"danger\">Enter a valid\n            email</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Password <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"password\" formControlName=\"password\" placeholder=\"***********\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(password.invalid &&(password.dirty || password.touched))|| isError\" color=\"danger\">Password\n            is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Login</ion-button>\n          <p class=\"ion-text-center\"><a [routerLink]=\"['/reset-password']\"><b>Forgot your password?</b></a></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <p class=\"ion-text-center\">Don’t have an account?<br> <a [routerLink]=\"['/create-account']\"><b>Create an account</b></a>\n  </p>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map