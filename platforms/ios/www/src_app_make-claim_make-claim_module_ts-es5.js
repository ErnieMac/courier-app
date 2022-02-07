(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_make-claim_make-claim_module_ts"], {
    /***/
    395: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MakeClaimPageRoutingModule": function MakeClaimPageRoutingModule() {
          return (
            /* binding */
            _MakeClaimPageRoutingModule
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


      var _make_claim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./make-claim.page */
      58174);

      var routes = [{
        path: '',
        component: _make_claim_page__WEBPACK_IMPORTED_MODULE_0__.MakeClaimPage
      }];

      var _MakeClaimPageRoutingModule = function MakeClaimPageRoutingModule() {
        _classCallCheck(this, MakeClaimPageRoutingModule);
      };

      _MakeClaimPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MakeClaimPageRoutingModule);
      /***/
    },

    /***/
    62160: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MakeClaimPageModule": function MakeClaimPageModule() {
          return (
            /* binding */
            _MakeClaimPageModule
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


      var _make_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./make-claim-routing.module */
      395);
      /* harmony import */


      var _make_claim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./make-claim.page */
      58174);

      var _MakeClaimPageModule = function MakeClaimPageModule() {
        _classCallCheck(this, MakeClaimPageModule);
      };

      _MakeClaimPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _make_claim_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakeClaimPageRoutingModule],
        declarations: [_make_claim_page__WEBPACK_IMPORTED_MODULE_1__.MakeClaimPage]
      })], _MakeClaimPageModule);
      /***/
    },

    /***/
    58174: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MakeClaimPage": function MakeClaimPage() {
          return (
            /* binding */
            _MakeClaimPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_make_claim_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./make-claim.page.html */
      30383);
      /* harmony import */


      var _make_claim_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./make-claim.page.scss */
      34297);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_business_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/business-booking.service */
      76547);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      25917);

      var _MakeClaimPage = /*#__PURE__*/function () {
        function MakeClaimPage(apiServices, formBuilder, toastController, router, route, loginService) {
          _classCallCheck(this, MakeClaimPage);

          this.apiServices = apiServices;
          this.formBuilder = formBuilder;
          this.toastController = toastController;
          this.router = router;
          this.route = route;
          this.loginService = loginService;
          this.local = this.loginService.currentUser.value;
          this.isError = false;
          this.submitText = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('Submit');
        }

        _createClass(MakeClaimPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              claimReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
              claimNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
            });
          }
        }, {
          key: "claimReason",
          get: function get() {
            return this.formGroup.get("claimReason");
          } // get claimNotes() {
          //   return this.formGroup.get("claimNotes");
          // }

        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(formValues) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.submitText = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('Please wait...');
                      data = {
                        'userId': this.local.userDetails.id,
                        'claimNotes': formValues.claimNotes,
                        'claimReason': formValues.claimReason,
                        "jobId": this.router.snapshot.paramMap.get("id")
                      };

                      if (this.formGroup.valid) {
                        this.isError = false;
                        console.log(data);
                        this.apiServices.patch('claim-job', data).subscribe(function (res) {
                          _this.submitText = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('Submit');
                          console.log(res);
                          var navigationExtras = {
                            state: {
                              job: res
                            }
                          };

                          _this.route.navigate(['delivery-details'], navigationExtras);
                        }, function (error) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var toast;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    this.submitText = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('Submit');
                                    console.log(error);
                                    _context.next = 4;
                                    return this.toastController.create({
                                      message: error.error.message,
                                      duration: 3000,
                                      position: 'bottom',
                                      color: 'danger'
                                    });

                                  case 4:
                                    toast = _context.sent;
                                    toast.present();

                                  case 6:
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

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return MakeClaimPage;
      }();

      _MakeClaimPage.ctorParameters = function () {
        return [{
          type: _services_business_booking_service__WEBPACK_IMPORTED_MODULE_3__.BusinessBookingService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }];
      };

      _MakeClaimPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-make-claim',
        template: _raw_loader_make_claim_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_make_claim_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MakeClaimPage);
      /***/
    },

    /***/
    34297: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-select {\n  padding-left: 10px;\n  padding-right: 8px;\n  font-size: 14px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\nion-textarea {\n  font-size: 14px;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  border: 1px solid #d3d7da9a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2UtY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FBSUoiLCJmaWxlIjoibWFrZS1jbGFpbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLXNlbGVjdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLXRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4udHh0LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDdkYTlhO1xufVxuLnNlbGVjdC13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDdkYTlhO1xufSJdfQ== */";
      /***/
    },

    /***/
    30383: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Make a claim\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Make a claim</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label>Reason for making a claim <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select slot=\"start\" formControlName=\"claimReason\" placeholder=\"Select reason\">\n              <ion-select-option data-reasonCode=\"Reason 1\" value=\"Reason 1\">Reason 1</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 2\" value=\"Reason 2\">Reason 2</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 3\" value=\"Reason 3\">Reason 3</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 4\" value=\"Reason 4\">Reason 4</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 5\" value=\"Reason 5\">Reason 5</ion-select-option>\n              <ion-select-option data-reasonCode=\"Reason 6\" value=\"Reason 6\">Reason 6</ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(claimReason.invalid &&(claimReason.dirty || claimReason.touched))|| isError\"\n            color=\"danger\">Claim reason is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Claim note </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-textarea formControlName=\"claimNotes\" placeholder=\"Enter your claim notes here...\"></ion-textarea>\n          </div>\n          <!-- <ion-label color=\"danger\">Claim note is required</ion-label> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngIf=\"submitText | async as btnText\">\n          <ion-button [disabled]=\"btnText == 'Please wait...'\" type=\"submit\" color=\"primary\" expand=\"block\">\n            {{btnText}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_make-claim_make-claim_module_ts-es5.js.map