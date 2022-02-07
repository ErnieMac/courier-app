(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_add-new-delivery_add-new-delivery_module_ts"], {
    /***/
    58870: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNewDeliveryPageRoutingModule": function AddNewDeliveryPageRoutingModule() {
          return (
            /* binding */
            _AddNewDeliveryPageRoutingModule
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


      var _add_new_delivery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-new-delivery.page */
      16121);

      var routes = [{
        path: '',
        component: _add_new_delivery_page__WEBPACK_IMPORTED_MODULE_0__.AddNewDeliveryPage
      }];

      var _AddNewDeliveryPageRoutingModule = function AddNewDeliveryPageRoutingModule() {
        _classCallCheck(this, AddNewDeliveryPageRoutingModule);
      };

      _AddNewDeliveryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddNewDeliveryPageRoutingModule);
      /***/
    },

    /***/
    18677: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNewDeliveryPageModule": function AddNewDeliveryPageModule() {
          return (
            /* binding */
            _AddNewDeliveryPageModule
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


      var _add_new_delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-new-delivery-routing.module */
      58870);
      /* harmony import */


      var _add_new_delivery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-new-delivery.page */
      16121);

      var _AddNewDeliveryPageModule = function AddNewDeliveryPageModule() {
        _classCallCheck(this, AddNewDeliveryPageModule);
      };

      _AddNewDeliveryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _add_new_delivery_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddNewDeliveryPageRoutingModule],
        declarations: [_add_new_delivery_page__WEBPACK_IMPORTED_MODULE_1__.AddNewDeliveryPage]
      })], _AddNewDeliveryPageModule);
      /***/
    },

    /***/
    16121: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNewDeliveryPage": function AddNewDeliveryPage() {
          return (
            /* binding */
            _AddNewDeliveryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_new_delivery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-new-delivery.page.html */
      52398);
      /* harmony import */


      var _add_new_delivery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-new-delivery.page.scss */
      12730);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_business_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/business-booking.service */
      76547);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);

      var _AddNewDeliveryPage = /*#__PURE__*/function () {
        function AddNewDeliveryPage(apiServices, businessServices, formBuilder, loginService, router, storage) {
          _classCallCheck(this, AddNewDeliveryPage);

          this.apiServices = apiServices;
          this.businessServices = businessServices;
          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.router = router;
          this.storage = storage;
          this.isError = false;
          this.btnTxt = 'Add Delivery';
          this.btnDisabled = true;
          this.addressesLoaded$ = false;
          this.storageInstance = null;
          this.local = this.loginService.currentUser.value;
          console.log(this.local);
        }

        _createClass(AddNewDeliveryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.formGroup = this.formBuilder.group({
                        deliveryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        scheduleDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        scheduleTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        dropOffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        pickUpId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        parcelSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                        estimatedCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
                        estimatedDistance: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
                        jobDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("")
                      });
                      this.addressesLoaded$ = false;

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.addressesLoaded$ = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getAddresses();
          }
        }, {
          key: "deliveryType",
          get: function get() {
            return this.formGroup.get("deliveryType");
          }
        }, {
          key: "scheduleDate",
          get: function get() {
            return this.formGroup.get("scheduleDate");
          }
        }, {
          key: "scheduleTime",
          get: function get() {
            return this.formGroup.get("scheduleTime");
          }
        }, {
          key: "dropOffId",
          get: function get() {
            return this.formGroup.get("dropOffId");
          }
        }, {
          key: "pickUpId",
          get: function get() {
            return this.formGroup.get("pickUpId");
          }
        }, {
          key: "parcelSize",
          get: function get() {
            return this.formGroup.get("parcelSize");
          }
        }, {
          key: "jobType",
          get: function get() {
            return this.formGroup.get("jobType");
          }
        }, {
          key: "estimatedCost",
          get: function get() {
            return this.formGroup.get("estimatedCost");
          }
        }, {
          key: "estimatedDistance",
          get: function get() {
            return this.formGroup.get("estimatedDistance");
          } // get mediaType() {
          //   return this.formGroup.get("mediaType");
          // }
          // get browserType() {
          //   return this.formGroup.get("browserType");
          // }
          // get deliverySkillSet() {
          //   return this.formGroup.get("deliverySkillSet");
          // }
          // get cashRequired() {
          //   return this.formGroup.get("cashRequired");
          // }
          // get jobDescription() {
          //   return this.formGroup.get("jobDescription");
          // }

        }, {
          key: "getAddresses",
          value: function getAddresses() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var user, addresses, unsavedAddress;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      user = this.loginService.currentUser.value;
                      addresses = null; // const storageInstance = await this.storage.create();

                      _context2.next = 4;
                      return this.storage.get('unsaved-addresses');

                    case 4:
                      unsavedAddress = _context2.sent;
                      this.apiServices.get('store-address', 'businessId=' + user.userDetails.id).subscribe(function (res) {
                        addresses = res;

                        if (unsavedAddress) {
                          unsavedAddress.forEach(function (address) {
                            addresses.push(address);
                          });
                        }

                        console.log(addresses);
                        _this.pickUpAddress$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(addresses.filter(function (address) {
                          return address.type == 'Pick Up Only' || address.type == 'Both';
                        }));
                        _this.dropOffAddress$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(addresses.filter(function (address) {
                          return address.type == 'Drop Off Only' || address.type == 'Both';
                        }));
                        _this.addressesLoaded$ = true;
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handleonChange",
          value: function handleonChange(event) {
            var _this2 = this;

            this.btnDisabled = true;
            var dropOffAddresses = null;
            this.dropOffAddress$.subscribe(function (res) {
              dropOffAddresses = res;
            });
            var dropOff = dropOffAddresses.filter(function (address) {
              return address.id == _this2.formGroup.get('dropOffId').value;
            });
            var pickUpAddresses = null;
            this.pickUpAddress$.subscribe(function (res) {
              pickUpAddresses = res;
            });
            var pickUp = pickUpAddresses.filter(function (address) {
              return address.id == _this2.formGroup.get('pickUpId').value;
            });
            dropOff = dropOff[0];
            pickUp = pickUp[0];
            var selected = dropOffAddresses.filter(function (address) {
              return address.id == _this2.formGroup.get('dropOffId').value;
            });
            this.selectedDOA$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(selected[0]);
            var selectedPU = pickUpAddresses.filter(function (address) {
              return address.id == _this2.formGroup.get('pickUpId').value;
            });
            this.selectedPUA$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(selectedPU[0]);

            if (this.formGroup.valid) {
              this.loading = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(true);
              var data = {
                "userId": this.local.userDetails.id,
                "parcelSize": this.formGroup.get('parcelSize').value,
                "dropOffDetails": {
                  "postcode": dropOff.postcode
                },
                "pickUpDetails": {
                  "postcode": pickUp.postcode
                }
              };
              console.log(data);
              this.businessServices.post('estimate-price', data).subscribe(function (res) {
                console.log(res);

                _this2.formGroup.patchValue({
                  estimatedCost: res.estimatedCost,
                  estimatedDistance: res.estimatedDistance
                });

                _this2.loading = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
                _this2.btnDisabled = false;
              }, function (error) {
                console.log(error);
                _this2.loading = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
              });
              console.log(data);
            }
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(values) {
            var _this3 = this;

            this.btnTxt = 'Please wait...';
            var payLoad = values;
            payLoad["businessId"] = this.local.userDetails.id;
            var dropOffAddresses = null;
            this.dropOffAddress$.subscribe(function (res) {
              dropOffAddresses = res;
            });
            var dropOff = dropOffAddresses.filter(function (address) {
              return address.id == values.dropOffId;
            });
            delete dropOff[0]['id'];
            delete dropOff[0]['addressIdentifierName'];
            delete dropOff[0]['userId'];
            delete dropOff[0]['type'];
            dropOff[0]['email'] = 'some@some.com';
            dropOff[0]['showAddress'] = true;
            dropOff[0]['county'] = dropOff[0]['county'];
            dropOff[0]['intcode'] = dropOff[0]['country'];
            dropOff[0]['country'] = "England";
            payLoad['dropOffDetails'] = dropOff[0];
            payLoad['dropOffId'] = null;
            payLoad['status'] = 'available';
            var pickUpAddresses = null;
            this.pickUpAddress$.subscribe(function (res) {
              pickUpAddresses = res;
            });
            var pickUp = pickUpAddresses.filter(function (address) {
              return address.id == values.pickUpId;
            });
            delete pickUp[0]['id'];
            delete pickUp[0]['addressIdentifierName'];
            delete pickUp[0]['userId'];
            delete pickUp[0]['type'];
            pickUp[0]['email'] = 'some@some.com';
            pickUp[0]['showAddress'] = true;
            pickUp[0]['county'] = pickUp[0]['county'];
            pickUp[0]['intcode'] = pickUp[0]['country'];
            pickUp[0]['country'] = "England";
            payLoad['scheduleTime'] = this.convertToDateTime(values.scheduleDate, values.scheduleTime);
            console.log(payLoad['scheduleTime']);
            payLoad['pickUpDetails'] = pickUp[0];
            payLoad['pickUpId'] = null; //If delivery add secure code

            if (values.deliveryType == 'delivery') {
              payLoad['requestSecureCode'] = true;
            } else {
              payLoad['requestSecureCode'] = false;
            } //Jobtype should determine the delivery skillset required
            //jobDescription should be pulled from the form
            //------------------------------------------------------------------------------------------------------


            payLoad['additionalDetails'] = {
              "parcelSize": values.parcelSize,
              "jobType": values.jobType,
              "mediaType": "app",
              "browserType": "ionic",
              "deliverySkillSet": [values.jobType],
              "cashRequired": false,
              "jobDescription": values.jobDescription
            };
            console.log(payLoad);
            delete payLoad['parcelSize'];
            delete payLoad['jobType'];
            delete payLoad['jobDescription'];
            delete payLoad['scheduleDate'];
            delete payLoad['estimatedCost'];
            delete payLoad['estimatedDistance'];
            delete payLoad['dropOffDetails']['intCode'];
            delete payLoad['pickUpDetails']['intCode'];
            this.isError = false; // payLoad = {
            //   "businessId": "B200013",
            //   "requestSecureCode": false,
            //   "deliveryType": "delivery",
            //   "scheduleTime": "2021-11-1 14:18:18",
            //   "dropOffId": null,
            //   "dropOffDetails": {
            //     "name": "John Smith",
            //     "email": "john@smith.com",
            //     "number": "077777777777",
            //     "addressLineOne": "14 Tiger Ln",
            //     "addressLineTwo": "",
            //     "county": "Bromley",
            //     "country": "England",
            //     "postcode": "BR2 9JG",
            //     "additionalNotes": "",
            //     "showAddress": true
            //   },
            //   "pickUpId": null,
            //   "pickUpDetails": {
            //     "name": "Test comapny",
            //     "email": "blue@smith.com",
            //     "number": "077777777772",
            //     "addressLineOne": "6 St Mark's Square",
            //     "addressLineTwo": "",
            //     "county": "Bromley",
            //     "country": "England",
            //     "postcode": "BR2 9UY",
            //     "additionalNotes": "",
            //     "showAddress": true
            //   },
            //   "additionalDetails": {
            //     "parcelSize": "m",
            //     "jobType": "food",
            //     "mediaType": "Portal",
            //     "browserType": "Chrome",
            //     "deliverySkillSet": ["food"],
            //     "cashRequired": false,
            //     "jobDescription": "This is the job description"
            //   }
            // }

            if (this.formGroup.valid) {
              this.businessServices.post('create-job', payLoad).subscribe(function (res) {
                _this3.btnTxt = 'Add Delivery';
                console.log(res);

                _this3.router.navigate(["business-dashboard"]);
              }, function (error) {
                _this3.btnTxt = 'Add Delivery';
                console.log(error.error.message);
                console.log(error);
              });
            } else {
              this.btnTxt = 'Add Delivery';
              this.isError = true;
            }
          }
        }, {
          key: "convertToDateTime",
          value: function convertToDateTime(pickUpDate, timeString) {
            var unix_timestamp = timeString;
            var date = new Date(unix_timestamp);
            var pickupDate = new Date(pickUpDate); // alert(pickupDate.getFullYear())

            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            var dateTime = pickupDate.getFullYear() + '-' + (pickupDate.getMonth() + 1) + '-' + pickupDate.getDate() + ' ' + formattedTime;
            return dateTime;
          }
        }]);

        return AddNewDeliveryPage;
      }();

      _AddNewDeliveryPage.ctorParameters = function () {
        return [{
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__.ApiCallsService
        }, {
          type: _services_business_booking_service__WEBPACK_IMPORTED_MODULE_2__.BusinessBookingService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage
        }];
      };

      _AddNewDeliveryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-new-delivery',
        template: _raw_loader_add_new_delivery_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_new_delivery_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddNewDeliveryPage);
      /***/
    },

    /***/
    12730: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\n.blue {\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #1A6AE1;\n  padding: 10px;\n}\n\n.orange {\n  color: #F45A2A;\n  font-weight: 600;\n  padding: 10px;\n  text-transform: uppercase;\n}\n\n.add-new {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.add-new ion-chip {\n  display: flex;\n  justify-content: center;\n}\n\na.ion-text-left {\n  text-decoration: none;\n  color: #1A6AE1;\n  font-weight: 800;\n  font-size: 12px;\n  float: right;\n}\n\nion-select {\n  padding-left: 10px;\n  padding-right: 8px;\n  font-size: 14px;\n}\n\nion-datetime {\n  padding-left: 10px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\nion-datetime {\n  font-size: 14px;\n}\n\nion-textarea {\n  font-size: 14px;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.rounded {\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: center;\n  color: #1A6AE1;\n  border: 2px solid #2af0b4;\n  box-shadow: 0px 8px 8px #0000001A;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  border: 1px solid #d3d7da9a;\n}\n\n.loading-estimate {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  margin: 0 auto;\n  background: #ffffff17;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loading-estimate span {\n  font-size: 14px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctZGVsaXZlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksYUFBQTtBQUxKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBWFM7RUFZVCxhQUFBO0FBSko7O0FBTUE7RUFDSSxjQWRXO0VBZVgsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFJSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUZSOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxjQWxDUztFQW1DVCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FyRVM7RUFzRVQseUJBQUE7RUFDQSxpQ0FBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBRlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJWiIsImZpbGUiOiJhZGQtbmV3LWRlbGl2ZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENTUyBEb2N1bWVudHNcbiRibHVlLWNvbG9yOiAjMUE2QUUxO1xuJG9yYW5nZS1jb2xvcjogI0Y0NUEyQTtcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRncmVlbi1jb2xvcjogIzJhZjBiNDtcblxuaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uYmx1ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLm9yYW5nZSB7XG4gICAgY29sb3I6ICRvcmFuZ2UtY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYWRkLW5ldyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICBpb24tY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbmEuaW9uLXRleHQtbGVmdHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRibHVlLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWRhdGV0aW1lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWRhdGV0aW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50eHQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkN2RhOWE7XG59XG4ucm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyZWVuLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggOHB4ICMwMDAwMDAxQTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAkZ3JlZW4tY29sb3I7XG59XG4uc2VsZWN0LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkN2RhOWE7XG59XG4ubG9hZGluZy1lc3RpbWF0ZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjE3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG59Il19 */";
      /***/
    },

    /***/
    52398: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Add new delivery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Add new delivery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"loading-estimate\" *ngIf=\"!addressesLoaded$\">\n    <ion-row>\n      <ion-col>\n        <span>Loading, Please wait...</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"loading-estimate\" *ngIf=\"loading | async\">\n    <ion-row>\n      <ion-col>\n        <span>Estimating, Please wait...</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"7\">\n          <ion-label>Pick up address <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select (ionChange)=\"handleonChange($event)\" formControlName=\"pickUpId\" slot=\"start\"\n              *ngIf=\"pickUpAddress$ | async as addresses\" placeholder=\"Select\">\n              <ion-select-option *ngFor=\"let address of addresses\" data-pickupAddress=\"Pickup 1\" [value]=\"address.id\">\n                {{address.addressIdentifierName}}\n              </ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(pickUpId.invalid &&(pickUpId.dirty || pickUpId.touched))|| isError\" color=\"danger\">Select Pick up address</ion-label>\n        </ion-col>\n\n        <ion-col size=\"5\" class=\"add-new\">\n          <ion-chip color=\"primary\" [routerLink]=\"['/add-new-address']\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label>Add New</ion-label>\n          </ion-chip>\n        </ion-col>\n\n        <ion-col>\n          <ion-chip color=\"primary\" class=\"selected-address\" *ngIf=\"selectedPUA$ | async as address\">\n            <ion-label>{{address.addressLineOne}} {{address.addressLineTwo}} {{address.postcode}}</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"7\">\n          <ion-label>Drop off address <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select (ionChange)=\"handleonChange($event)\" formControlName=\"dropOffId\" slot=\"start\"\n              *ngIf=\"dropOffAddress$ | async as addresses\" placeholder=\"Select\">\n              <ion-select-option *ngFor=\"let address of addresses\" data-pickupAddress=\"Pickup 1\" [value]=\"address.id\">\n                {{address.addressIdentifierName}}\n              </ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(dropOffId.invalid &&(dropOffId.dirty || dropOffId.touched))|| isError\" color=\"danger\">Select Drop off address</ion-label>\n        </ion-col>\n\n        <ion-col size=\"5\" class=\"add-new\">\n          <ion-chip color=\"secondary\" [routerLink]=\"['/add-new-address']\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label>Add New</ion-label>\n          </ion-chip>\n        </ion-col>\n\n        <ion-col class=\"orange\">\n          <ion-chip color=\"secondary\" class=\"selected-address\" *ngIf=\"selectedDOA$ | async as address\">\n            <ion-label>{{address.addressLineOne}} {{address.addressLineTwo}} {{address.postcode}}</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Pick up date <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-datetime (ionChange)=\"handleonChange($event)\" formControlName=\"scheduleDate\" value=\"1990-02-19\" displayFormat=\"DD-MMM-YYYY\" placeholder=\"Choose Date\"></ion-datetime>\n          </div>\n          <ion-label *ngIf=\"(scheduleDate.invalid &&(scheduleDate.dirty || scheduleDate.touched))|| isError\" color=\"danger\">Choose Pick up date</ion-label>\n        </ion-col>\n      <!-- </ion-row>\n\n      <ion-row> -->\n        <ion-col>\n          <ion-label>Pick up time <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-datetime (ionChange)=\"handleonChange($event)\" formControlName=\"scheduleTime\" display-format=\"h:mm A\" picker-format=\"h:mm A\" placeholder=\"Choose time\"></ion-datetime>\n          </div>\n          <ion-label *ngIf=\"(scheduleTime.invalid &&(scheduleTime.dirty || scheduleTime.touched))|| isError\" color=\"danger\">Choose Pick up time</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Delivery type <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select (ionChange)=\"handleonChange($event)\" formControlName=\"deliveryType\" slot=\"start\"\n              placeholder=\"Select type\">\n              <ion-select-option data-deliveryType=\"delivery\" value=\"delivery\">Delivery</ion-select-option>\n              <ion-select-option data-deliveryType=\"pick up\" value=\"pick up\">Pick up</ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(deliveryType.invalid &&(deliveryType.dirty || deliveryType.touched))|| isError\"\n            color=\"danger\">Select Delivery type</ion-label>\n        </ion-col>\n\n        <ion-col>\n          <ion-label>Package type <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select (ionChange)=\"handleonChange($event)\" formControlName=\"jobType\" slot=\"start\"\n              placeholder=\"Package type\">\n              <ion-select-option data-packageType=\"food\" value=\"food\">Food</ion-select-option>\n              <ion-select-option data-packageType=\"package\" value=\"package\">Package</ion-select-option>\n              <ion-select-option data-packageType=\"groceries\" value=\"groceries\">Groceries</ion-select-option>\n              <ion-select-option data-packageType=\"letter\" value=\"letter\">Letter</ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(jobType.invalid &&(jobType.dirty || jobType.touched))|| isError\" color=\"danger\">Select Package type</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Package size <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select (ionChange)=\"handleonChange($event)\" formControlName=\"parcelSize\" slot=\"start\"\n              placeholder=\"Package size\">\n              <ion-select-option data-packageSize=\"Extra small\" value=\"xs\">XS - Bicycle/Motorbike</ion-select-option>\n              <ion-select-option data-packageSize=\"Small\" value=\"s\">S - Bicycle/Motorbike</ion-select-option>\n              <ion-select-option data-packageSize=\"Medium\" value=\"m\">M - Bicycle/Motorbike/Car</ion-select-option>\n              <ion-select-option data-packageSize=\"Large\" value=\"l\">L - Car</ion-select-option>\n              <ion-select-option data-packageSize=\"Extra Large\" value=\"xl\">XL - Small van</ion-select-option>\n              <ion-select-option data-packageSize=\"Extra Extra Large\" value=\"xxl\">XXL - Large van\n              </ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(parcelSize.invalid &&(parcelSize.dirty || parcelSize.touched))|| isError\" color=\"danger\">Select Package size</ion-label>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-label>Delivery notes </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-textarea formControlName=\"jobDescription\" placeholder=\"Enter any delivery notes here...\">\n            </ion-textarea>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Delivery distance </ion-label>\n          <div class=\"txt-wrapper rounded\">\n            <ion-input formControlName=\"estimatedDistance\" value=\"2.4km\" readonly></ion-input>\n          </div>\n        </ion-col>\n\n        <ion-col>\n          <ion-label>Delivery cost </ion-label>\n          <div class=\"txt-wrapper rounded\" color=\"secondary\">\n            <ion-input formControlName=\"estimatedCost\" value=\"£25.50\" readonly></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button [disabled]=\"btnTxt == 'Please wait...' || btnDisabled ? true : false\" type=\"submit\" color=\"primary\"\n            expand=\"block\">\n            {{btnTxt}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_add-new-delivery_add-new-delivery_module_ts-es5.js.map