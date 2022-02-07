(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_add-new-address_add-new-address_module_ts"], {
    /***/
    65035: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNewAddressPageRoutingModule": function AddNewAddressPageRoutingModule() {
          return (
            /* binding */
            _AddNewAddressPageRoutingModule
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


      var _add_new_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-new-address.page */
      92210);

      var routes = [{
        path: '',
        component: _add_new_address_page__WEBPACK_IMPORTED_MODULE_0__.AddNewAddressPage
      }];

      var _AddNewAddressPageRoutingModule = function AddNewAddressPageRoutingModule() {
        _classCallCheck(this, AddNewAddressPageRoutingModule);
      };

      _AddNewAddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddNewAddressPageRoutingModule);
      /***/
    },

    /***/
    8543: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNewAddressPageModule": function AddNewAddressPageModule() {
          return (
            /* binding */
            _AddNewAddressPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-new-address-routing.module */
      65035);
      /* harmony import */


      var _add_new_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-new-address.page */
      92210);
      /* harmony import */


      var _shared_google_auto_complete_places_auto_complete_places_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/google/auto-complete-places/auto-complete-places.component */
      41371);
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/google-maps */
      99010);

      var _AddNewAddressPageModule = function AddNewAddressPageModule() {
        _classCallCheck(this, AddNewAddressPageModule);
      };

      _AddNewAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMapsModule, _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddNewAddressPageRoutingModule],
        declarations: [_add_new_address_page__WEBPACK_IMPORTED_MODULE_1__.AddNewAddressPage, _shared_google_auto_complete_places_auto_complete_places_component__WEBPACK_IMPORTED_MODULE_2__.AutoCompletePlacesComponent]
      })], _AddNewAddressPageModule);
      /***/
    },

    /***/
    92210: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddNewAddressPage": function AddNewAddressPage() {
          return (
            /* binding */
            _AddNewAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_new_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-new-address.page.html */
      19046);
      /* harmony import */


      var _add_new_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-new-address.page.scss */
      38384);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _services_address_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/address-service.service */
      77900);

      var _AddNewAddressPage = /*#__PURE__*/function () {
        function AddNewAddressPage(apiServices, formBuilder, loginService, router, storage, addressService, httpClient) {
          var _this = this;

          _classCallCheck(this, AddNewAddressPage);

          this.apiServices = apiServices;
          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.router = router;
          this.storage = storage;
          this.addressService = addressService;
          this.local = this.loginService.currentUser.value;
          this.isError = false;
          this.addressSubject$ = null;
          this.btnTxt = 'Save';
          this._storage = null;
          this.storageInstance = null;
          console.log(this.addressSubject$);
          this.addressService.addressSubject.subscribe(function (res) {
            _this.addressSubject$ = res;
          });
          this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyAd9vZGWXanh-zvkphgh6tcLN0sqDkxgcg', 'callback').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function () {
            return true;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function () {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
          }));
        }

        _createClass(AddNewAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroup = this.formBuilder.group({
              addressIdentifierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              // name: new FormControl("", [Validators.required]),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(""),
              county: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              intCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("+44", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              number: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
              additionalNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(""),
              saveAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false)
            }); // this.clearStorage()
          }
        }, {
          key: "clearStorage",
          value: function clearStorage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.create();

                    case 2:
                      this.storageInstance = _context.sent;
                      this.storageInstance.clear('unsaved-address-pickup');
                      this.storageInstance.clear('unsaved-address-dropoff');
                      this.storageInstance.clear('unsaved-address-body');

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addressIdentifierName",
          get: function get() {
            return this.formGroup.get("addressIdentifierName");
          } //add name  --------------------------------------------------------------------

        }, {
          key: "type",
          get: function get() {
            return this.formGroup.get("type");
          }
        }, {
          key: "addressLineOne",
          get: function get() {
            return this.formGroup.get("addressLineOne");
          }
        }, {
          key: "addressLineTwo",
          get: function get() {
            return this.formGroup.get("addressLineTwo");
          }
        }, {
          key: "intCode",
          get: function get() {
            return this.formGroup.get("intCode");
          } //add int code Set Country to England --------------------------------------------------------------------
          // get country() {
          //   return this.formGroup.get("country");
          // }

        }, {
          key: "county",
          get: function get() {
            return this.formGroup.get("county");
          }
        }, {
          key: "postcode",
          get: function get() {
            return this.formGroup.get("postcode");
          }
        }, {
          key: "number",
          get: function get() {
            return this.formGroup.get("number");
          }
        }, {
          key: "additionalNotes",
          get: function get() {
            return this.formGroup.get("additionalNotes");
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(values) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var payLoad, unSavedAddress, localAddresses;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      payLoad = values;
                      this.btnTxt = 'Please wait...';
                      payLoad["userId"] = this.local.userDetails.id;
                      this.isError = false;
                      console.log(payLoad);
                      payLoad['name'] = payLoad['addressIdentifierName'];
                      payLoad['country'] = 'England';

                      if (!this.formGroup.valid) {
                        _context2.next = 28;
                        break;
                      }

                      if (!payLoad['saveAddress']) {
                        _context2.next = 13;
                        break;
                      }

                      delete payLoad['saveAddress'];
                      this.apiServices.post('store-address', payLoad).subscribe(function (res) {
                        console.log(res);
                        _this2.btnTxt = 'Save';

                        _this2.router.navigate(['add-new-delivery']);
                      }, function (error) {
                        _this2.btnTxt = 'Save';
                        console.log(error);
                      });
                      _context2.next = 26;
                      break;

                    case 13:
                      delete payLoad['saveAddress']; // this.storageInstance = await this.storage.create();

                      payLoad['id'] = Math.random().toString(36).substr(2, 10);
                      unSavedAddress = [];
                      _context2.next = 18;
                      return this.storage.get('unsaved-addresses');

                    case 18:
                      localAddresses = _context2.sent;
                      console.log('localAddresses', localAddresses);

                      if (localAddresses != null) {
                        localAddresses.forEach(function (address) {
                          unSavedAddress.push(address);
                        });
                      }

                      unSavedAddress.push(payLoad);
                      console.log(unSavedAddress);
                      this.storage.set('unsaved-addresses', unSavedAddress);
                      this.btnTxt = 'Save';
                      this.router.navigate(['add-new-delivery']);

                    case 26:
                      _context2.next = 30;
                      break;

                    case 28:
                      this.btnTxt = 'Save';
                      this.isError = true;

                    case 30:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AddNewAddressPage;
      }();

      _AddNewAddressPage.ctorParameters = function () {
        return [{
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage
        }, {
          type: _services_address_service_service__WEBPACK_IMPORTED_MODULE_4__.AddressServiceService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
        }];
      };

      _AddNewAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-add-new-address',
        template: _raw_loader_add_new_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_new_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddNewAddressPage);
      /***/
    },

    /***/
    41371: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutoCompletePlacesComponent": function AutoCompletePlacesComponent() {
          return (
            /* binding */
            _AutoCompletePlacesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_auto_complete_places_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./auto-complete-places.component.html */
      63317);
      /* harmony import */


      var _auto_complete_places_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auto-complete-places.component.scss */
      94506);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var _services_address_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/address-service.service */
      77900);

      var _AutoCompletePlacesComponent = /*#__PURE__*/function () {
        function AutoCompletePlacesComponent(geolocation, nativeGeocoder, zone, addressService) {
          _classCallCheck(this, AutoCompletePlacesComponent);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.addressService = addressService;
          this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.hideList = false;
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
        }

        _createClass(AutoCompletePlacesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMap();
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var _this3 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              _this3.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
              // this.map.addListener('tilesloaded', () => {
              //   console.log('accuracy', this.map, this.map.center.lat());
              //   this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
              //   this.lat = this.map.center.lat()
              //   this.long = this.map.center.lng()
              // });

            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(lattitude, longitude) {
            var _this4 = this;

            console.log("getAddressFromCoords " + lattitude + " " + longitude);
            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
              _this4.address = "";
              var responseAddress = [];

              for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                if (value.length > 0) responseAddress.push(value);
              }

              responseAddress.reverse();

              for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
                var _value = _responseAddress[_i2];
                _this4.address += _value + ", ";
              }

              _this4.address = _this4.address.slice(0, -2);
            })["catch"](function (error) {
              _this4.address = "Address Not Available!";
            });
          }
        }, {
          key: "UpdateSearchResults",
          value: function UpdateSearchResults() {
            var _this5 = this;

            this.hideList = false;

            if (this.autocomplete.input == '') {
              this.autocompleteItems = [];
              return;
            }

            this.GoogleAutocomplete.getPlacePredictions({
              input: this.autocomplete.input,
              componentRestrictions: {
                country: 'uk'
              },
              fields: ["address_components", "geometry"]
            }, function (predictions, status) {
              _this5.autocompleteItems = [];

              _this5.zone.run(function () {
                predictions.forEach(function (prediction) {
                  _this5.autocompleteItems.push(prediction);
                });
              });
            });
          }
        }, {
          key: "initAutocomplete",
          value: function initAutocomplete() {
            // let address1Field = document.querySelector("#ship-address") as HTMLInputElement;
            // let address1Field = document.getElementById('ship-address')
            // address2Field = document.querySelector("#address2") as HTMLInputElement;
            // postalField = document.querySelector("#postcode") as HTMLInputElement;
            // Create the autocomplete object, restricting the search predictions to
            // addresses in the US and Canada.
            this.autocompletep = new google.maps.places.Autocomplete(this.places.nativeElement); // address1Field.focus();
            // When the user selects an address from the drop-down, populate the
            // address fields in the form.
            // this.autocompletep.addListener("place_changed", this.fillInAddress);
          }
        }, {
          key: "SelectSearchResult",
          value: function SelectSearchResult(item) {
            this.geoCode(item.place_id);
            this.hideList = true;
            this.placeid = item.place_id;
          }
        }, {
          key: "geoCode",
          value: function geoCode(placeid) {
            var _this6 = this;

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              placeId: placeid
            }, function (results, status) {
              console.log(results);
              var addressObject = {
                "street_number": '',
                "route": ''
              };

              var _iterator = _createForOfIteratorHelper(results[0].address_components),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var component = _step.value;
                  var componentType = component.types[0];

                  switch (componentType) {
                    case "street_number":
                      {
                        // address1 = `${component.long_name} ${address1}`;
                        addressObject['street_number'] = component.long_name;
                        console.log('Street Number:', component.long_name);
                        break;
                      }

                    case "route":
                      {
                        // address1 += component.short_name;
                        addressObject['route'] = component.long_name;
                        console.log('Route:', component.short_name);
                        break;
                      }

                    case "postal_code":
                      {
                        // postcode = `${component.long_name}${postcode}`;
                        addressObject['postal_code'] = component.long_name;
                        console.log('Postal Code:', component.long_name);
                        break;
                      }

                    case "postal_town":
                      {
                        // postcode = `${component.long_name}${postcode}`;
                        addressObject['postal_town'] = component.long_name;
                        console.log('County:', component.long_name);
                        break;
                      }

                    case "postal_code_suffix":
                      {
                        // postcode = `${postcode}-${component.long_name}`;
                        addressObject['postal_code_suffix'] = component.long_name;
                        console.log('Postal Code Suffix:', component.long_name);
                        break;
                      }

                    case "locality":
                      // (document.querySelector("#locality") as HTMLInputElement).value =
                      //   component.long_name;
                      addressObject['locality'] = component.long_name;
                      console.log('Locality:', component.long_name);
                      break;

                    case "administrative_area_level_1":
                      {
                        // (document.querySelector("#state") as HTMLInputElement).value =
                        //   component.short_name;
                        addressObject['administrative_area_level_1'] = component.short_name;
                        console.log('Administrative Area:', component.short_name);
                        break;
                      }

                    case "country":
                      // (document.querySelector("#country") as HTMLInputElement).value =
                      //   component.long_name;
                      addressObject['country'] = component.long_name;
                      console.log('Country:', component.long_name);
                      break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              addressObject['address_line'] = addressObject.street_number + ' ' + addressObject.route;

              _this6.addressService.addressSubject.next(addressObject);
            });
          }
        }, {
          key: "ClearAutocomplete",
          value: function ClearAutocomplete() {
            this.autocompleteItems = [];
            this.autocomplete.input = '';
          }
        }, {
          key: "GoTo",
          value: function GoTo() {
            return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
          }
        }]);

        return AutoCompletePlacesComponent;
      }();

      _AutoCompletePlacesComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
        }, {
          type: _services_address_service_service__WEBPACK_IMPORTED_MODULE_4__.AddressServiceService
        }];
      };

      _AutoCompletePlacesComponent.propDecorators = {
        adressType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
        }],
        setAddress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        addresstext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
          args: ['addresstext']
        }],
        places: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
          args: ["places"]
        }],
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
          args: ['map', {
            "static": false
          }]
        }]
      };
      _AutoCompletePlacesComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-auto-complete-places',
        template: _raw_loader_auto_complete_places_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_auto_complete_places_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AutoCompletePlacesComponent);
      /***/
    },

    /***/
    38384: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-select {\n  padding-left: 10px;\n  padding-right: 8px;\n  font-size: 14px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\nion-textarea {\n  font-size: 14px;\n}\n\nion-checkbox {\n  font-size: 14px;\n  font-weight: 800;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  border: 1px solid #d3d7da9a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQUtKIiwiZmlsZSI6ImFkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLXNlbGVjdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLXRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY2hlY2tib3gge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuLnR4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbi5zZWxlY3Qtd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn0iXX0= */";
      /***/
    },

    /***/
    94506: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search-bar {\n  padding: 0;\n  border: 0;\n  border-width: 1px;\n  border-radius: 4px;\n  border-color: #e5e7e9;\n  --box-shadow: none !important;\n}\n\nion-item {\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG8tY29tcGxldGUtcGxhY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoiYXV0by1jb21wbGV0ZS1wbGFjZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XG4gICAgcGFkZGluZzowO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlN2U5O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLy8gaW9uLXNlYXJjaGJhciB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4vLyB9Il19 */";
      /***/
    },

    /***/
    19046: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Add new address\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Add new address</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"handleFormSubmission(formGroup.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!-- <ion-label>Search address<ion-text color=\"danger\"></ion-text>\n                </ion-label>\n                <div class=\"txt-wrapper\">\n                  <ion-input required type=\"text\" placeholder=\"Search Address\"></ion-input>\n                </div> -->\n          <app-auto-complete-places *ngIf=\"apiLoaded | async\" (setAddress)=\"getEstablishmentAddress($event)\"\n            adressType=\"establishment\"></app-auto-complete-places>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Full name / Business name <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required formControlName=\"addressIdentifierName\" type=\"text\"\n              placeholder=\"Full name or business name\">\n            </ion-input>\n          </div>\n          <ion-label\n            *ngIf=\"(addressIdentifierName.invalid &&(addressIdentifierName.dirty || addressIdentifierName.touched))|| isError\"\n            color=\"danger\">This field is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Address Line 1 <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required [(ngModel)]=\"addressSubject$.address_line \" formControlName=\"addressLineOne\" type=\"text\"\n              placeholder=\"25 Chill Lane\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(addressLineOne.invalid &&(addressLineOne.dirty || addressLineOne.touched))|| isError\"\n            color=\"danger\">Address Line 1 is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Address Line 2 <ion-text color=\"danger\"></ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input formControlName=\"addressLineTwo\" type=\"text\" placeholder=\"25 Chill Lane\"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>County<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required [(ngModel)]=\"addressSubject$.postal_town \" formControlName=\"county\" type=\"text\"\n              placeholder=\"London\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(county.invalid &&(county.dirty || county.touched))|| isError\" color=\"danger\">County is\n            required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Postcode <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required [(ngModel)]=\"addressSubject$.postal_code\" formControlName=\"postcode\" type=\"text\"\n              placeholder=\"EW2 6LK\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(postcode.invalid &&(postcode.dirty || postcode.touched))|| isError\" color=\"danger\">\n            Postcode is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Delivery type <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select required formControlName=\"type\" slot=\"start\" placeholder=\"Delivery type\">\n              <ion-select-option data-deliveryType=\"Pick Up Only\" value=\"Pick Up Only\">Pick Up Only\n              </ion-select-option>\n              <ion-select-option data-deliveryType=\"Drop Off Only\" value=\"Drop Off Only\">Drop Off Only\n              </ion-select-option>\n              <ion-select-option data-deliveryType=\"Both\" value=\"Both\">Both</ion-select-option>\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(type.invalid &&(type.dirty || type.touched))|| isError\" color=\"danger\">Delivery type is\n            required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label>Country code <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select required formControlName=\"intCode\" slot=\"start\" placeholder=\"Select\">\n              <ion-select-option data-countryCode=\"GB\" value=\"44\">UK (+44)</ion-select-option>\n              <!-- <ion-select-option data-countryCode=\"US\" value=\"1\">USA (+1)</ion-select-option>\n              <ion-select-option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</ion-select-option>\n              <ion-select-option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</ion-select-option>\n              <ion-select-option data-countryCode=\"AO\" value=\"244\">Angola (+244)</ion-select-option>\n              <ion-select-option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</ion-select-option>\n              <ion-select-option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</ion-select-option>\n              <ion-select-option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</ion-select-option>\n              <ion-select-option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</ion-select-option>\n              <ion-select-option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</ion-select-option>\n              <ion-select-option data-countryCode=\"AU\" value=\"61\">Australia (+61)</ion-select-option>\n              <ion-select-option data-countryCode=\"AT\" value=\"43\">Austria (+43)</ion-select-option>\n              <ion-select-option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</ion-select-option>\n              <ion-select-option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</ion-select-option>\n              <ion-select-option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</ion-select-option>\n              <ion-select-option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</ion-select-option>\n              <ion-select-option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</ion-select-option>\n              <ion-select-option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</ion-select-option>\n              <ion-select-option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</ion-select-option>\n              <ion-select-option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</ion-select-option>\n              <ion-select-option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</ion-select-option>\n              <ion-select-option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</ion-select-option>\n              <ion-select-option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</ion-select-option>\n              <ion-select-option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</ion-select-option>\n              <ion-select-option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</ion-select-option>\n              <ion-select-option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</ion-select-option>\n              <ion-select-option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</ion-select-option>\n              <ion-select-option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</ion-select-option>\n              <ion-select-option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</ion-select-option>\n              <ion-select-option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</ion-select-option>\n              <ion-select-option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</ion-select-option>\n              <ion-select-option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</ion-select-option>\n              <ion-select-option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</ion-select-option>\n              <ion-select-option data-countryCode=\"CA\" value=\"1\">Canada (+1)</ion-select-option>\n              <ion-select-option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</ion-select-option>\n              <ion-select-option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</ion-select-option>\n              <ion-select-option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</ion-select-option>\n              <ion-select-option data-countryCode=\"CL\" value=\"56\">Chile (+56)</ion-select-option>\n              <ion-select-option data-countryCode=\"CN\" value=\"86\">China (+86)</ion-select-option>\n              <ion-select-option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</ion-select-option>\n              <ion-select-option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</ion-select-option>\n              <ion-select-option data-countryCode=\"CG\" value=\"242\">Congo (+242)</ion-select-option>\n              <ion-select-option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</ion-select-option>\n              <ion-select-option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</ion-select-option>\n              <ion-select-option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</ion-select-option>\n              <ion-select-option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</ion-select-option>\n              <ion-select-option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</ion-select-option>\n              <ion-select-option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</ion-select-option>\n              <ion-select-option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</ion-select-option>\n              <ion-select-option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</ion-select-option>\n              <ion-select-option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</ion-select-option>\n              <ion-select-option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</ion-select-option>\n              <ion-select-option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</ion-select-option>\n              <ion-select-option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</ion-select-option>\n              <ion-select-option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</ion-select-option>\n              <ion-select-option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</ion-select-option>\n              <ion-select-option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</ion-select-option>\n              <ion-select-option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</ion-select-option>\n              <ion-select-option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</ion-select-option>\n              <ion-select-option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</ion-select-option>\n              <ion-select-option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</ion-select-option>\n              <ion-select-option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</ion-select-option>\n              <ion-select-option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</ion-select-option>\n              <ion-select-option data-countryCode=\"FI\" value=\"358\">Finland (+358)</ion-select-option>\n              <ion-select-option data-countryCode=\"FR\" value=\"33\">France (+33)</ion-select-option>\n              <ion-select-option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</ion-select-option>\n              <ion-select-option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</ion-select-option>\n              <ion-select-option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</ion-select-option>\n              <ion-select-option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</ion-select-option>\n              <ion-select-option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</ion-select-option>\n              <ion-select-option data-countryCode=\"DE\" value=\"49\">Germany (+49)</ion-select-option>\n              <ion-select-option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</ion-select-option>\n              <ion-select-option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</ion-select-option>\n              <ion-select-option data-countryCode=\"GR\" value=\"30\">Greece (+30)</ion-select-option>\n              <ion-select-option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</ion-select-option>\n              <ion-select-option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</ion-select-option>\n              <ion-select-option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</ion-select-option>\n              <ion-select-option data-countryCode=\"GU\" value=\"671\">Guam (+671)</ion-select-option>\n              <ion-select-option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</ion-select-option>\n              <ion-select-option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</ion-select-option>\n              <ion-select-option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</ion-select-option>\n              <ion-select-option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</ion-select-option>\n              <ion-select-option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</ion-select-option>\n              <ion-select-option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</ion-select-option>\n              <ion-select-option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</ion-select-option>\n              <ion-select-option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</ion-select-option>\n              <ion-select-option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</ion-select-option>\n              <ion-select-option data-countryCode=\"IN\" value=\"91\">India (+91)</ion-select-option>\n              <ion-select-option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</ion-select-option>\n              <ion-select-option data-countryCode=\"IR\" value=\"98\">Iran (+98)</ion-select-option>\n              <ion-select-option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</ion-select-option>\n              <ion-select-option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</ion-select-option>\n              <ion-select-option data-countryCode=\"IL\" value=\"972\">Israel (+972)</ion-select-option>\n              <ion-select-option data-countryCode=\"IT\" value=\"39\">Italy (+39)</ion-select-option>\n              <ion-select-option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</ion-select-option>\n              <ion-select-option data-countryCode=\"JP\" value=\"81\">Japan (+81)</ion-select-option>\n              <ion-select-option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</ion-select-option>\n              <ion-select-option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</ion-select-option>\n              <ion-select-option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</ion-select-option>\n              <ion-select-option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</ion-select-option>\n              <ion-select-option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</ion-select-option>\n              <ion-select-option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</ion-select-option>\n              <ion-select-option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</ion-select-option>\n              <ion-select-option data-countryCode=\"LA\" value=\"856\">Laos (+856)</ion-select-option>\n              <ion-select-option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</ion-select-option>\n              <ion-select-option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</ion-select-option>\n              <ion-select-option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</ion-select-option>\n              <ion-select-option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</ion-select-option>\n              <ion-select-option data-countryCode=\"LY\" value=\"218\">Libya (+218)</ion-select-option>\n              <ion-select-option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</ion-select-option>\n              <ion-select-option data-countryCode=\"LT\" value=\"370\">Lithuania (+370)</ion-select-option>\n              <ion-select-option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</ion-select-option>\n              <ion-select-option data-countryCode=\"MO\" value=\"853\">Macao (+853)</ion-select-option>\n              <ion-select-option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</ion-select-option>\n              <ion-select-option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</ion-select-option>\n              <ion-select-option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</ion-select-option>\n              <ion-select-option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</ion-select-option>\n              <ion-select-option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</ion-select-option>\n              <ion-select-option data-countryCode=\"ML\" value=\"223\">Mali (+223)</ion-select-option>\n              <ion-select-option data-countryCode=\"MT\" value=\"356\">Malta (+356)</ion-select-option>\n              <ion-select-option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</ion-select-option>\n              <ion-select-option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</ion-select-option>\n              <ion-select-option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</ion-select-option>\n              <ion-select-option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</ion-select-option>\n              <ion-select-option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</ion-select-option>\n              <ion-select-option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</ion-select-option>\n              <ion-select-option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</ion-select-option>\n              <ion-select-option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</ion-select-option>\n              <ion-select-option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</ion-select-option>\n              <ion-select-option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</ion-select-option>\n              <ion-select-option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</ion-select-option>\n              <ion-select-option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</ion-select-option>\n              <ion-select-option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</ion-select-option>\n              <ion-select-option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</ion-select-option>\n              <ion-select-option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</ion-select-option>\n              <ion-select-option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</ion-select-option>\n              <ion-select-option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</ion-select-option>\n              <ion-select-option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</ion-select-option>\n              <ion-select-option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</ion-select-option>\n              <ion-select-option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</ion-select-option>\n              <ion-select-option data-countryCode=\"NE\" value=\"227\">Niger (+227)</ion-select-option>\n              <ion-select-option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</ion-select-option>\n              <ion-select-option data-countryCode=\"NU\" value=\"683\">Niue (+683)</ion-select-option>\n              <ion-select-option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</ion-select-option>\n              <ion-select-option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</ion-select-option>\n              <ion-select-option data-countryCode=\"NO\" value=\"47\">Norway (+47)</ion-select-option>\n              <ion-select-option data-countryCode=\"OM\" value=\"968\">Oman (+968)</ion-select-option>\n              <ion-select-option data-countryCode=\"PW\" value=\"680\">Palau (+680)</ion-select-option>\n              <ion-select-option data-countryCode=\"PA\" value=\"507\">Panama (+507)</ion-select-option>\n              <ion-select-option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</ion-select-option>\n              <ion-select-option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</ion-select-option>\n              <ion-select-option data-countryCode=\"PE\" value=\"51\">Peru (+51)</ion-select-option>\n              <ion-select-option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</ion-select-option>\n              <ion-select-option data-countryCode=\"PL\" value=\"48\">Poland (+48)</ion-select-option>\n              <ion-select-option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</ion-select-option>\n              <ion-select-option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</ion-select-option>\n              <ion-select-option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</ion-select-option>\n              <ion-select-option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</ion-select-option>\n              <ion-select-option data-countryCode=\"RO\" value=\"40\">Romania (+40)</ion-select-option>\n              <ion-select-option data-countryCode=\"RU\" value=\"7\">Russia (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</ion-select-option>\n              <ion-select-option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</ion-select-option>\n              <ion-select-option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</ion-select-option>\n              <ion-select-option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</ion-select-option>\n              <ion-select-option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</ion-select-option>\n              <ion-select-option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</ion-select-option>\n              <ion-select-option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</ion-select-option>\n              <ion-select-option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</ion-select-option>\n              <ion-select-option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</ion-select-option>\n              <ion-select-option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</ion-select-option>\n              <ion-select-option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</ion-select-option>\n              <ion-select-option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</ion-select-option>\n              <ion-select-option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</ion-select-option>\n              <ion-select-option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</ion-select-option>\n              <ion-select-option data-countryCode=\"ES\" value=\"34\">Spain (+34)</ion-select-option>\n              <ion-select-option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</ion-select-option>\n              <ion-select-option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</ion-select-option>\n              <ion-select-option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</ion-select-option>\n              <ion-select-option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</ion-select-option>\n              <ion-select-option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</ion-select-option>\n              <ion-select-option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</ion-select-option>\n              <ion-select-option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</ion-select-option>\n              <ion-select-option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</ion-select-option>\n              <ion-select-option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</ion-select-option>\n              <ion-select-option data-countryCode=\"SI\" value=\"963\">Syria (+963)</ion-select-option>\n              <ion-select-option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</ion-select-option>\n              <ion-select-option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</ion-select-option>\n              <ion-select-option data-countryCode=\"TG\" value=\"228\">Togo (+228)</ion-select-option>\n              <ion-select-option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</ion-select-option>\n              <ion-select-option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</ion-select-option>\n              <ion-select-option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</ion-select-option>\n              <ion-select-option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</ion-select-option>\n              <ion-select-option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</ion-select-option>\n              <ion-select-option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)\n              </ion-select-option>\n              <ion-select-option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</ion-select-option>\n              <ion-select-option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</ion-select-option>\n              <ion-select-option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</ion-select-option>\n              <ion-select-option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</ion-select-option>\n              <ion-select-option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</ion-select-option>\n              <ion-select-option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</ion-select-option>\n              <ion-select-option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</ion-select-option>\n              <ion-select-option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</ion-select-option>\n              <ion-select-option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</ion-select-option>\n              <ion-select-option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</ion-select-option>\n              <ion-select-option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</ion-select-option>\n              <ion-select-option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</ion-select-option>\n              <ion-select-option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</ion-select-option>\n              <ion-select-option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</ion-select-option>\n              <ion-select-option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</ion-select-option>\n              <ion-select-option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</ion-select-option> -->\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"(intCode.invalid &&(intCode.dirty || intCode.touched))|| isError\" color=\"danger\">Country\n            code is required</ion-label>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <ion-label>Phone number <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input required formControlName=\"number\" type=\"tel\" placeholder=\"0798345687\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"(number.invalid &&(number.dirty || number.touched))|| isError\" color=\"danger\">Phone number\n            is required</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label>Additional note </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-textarea formControlName=\"additionalNotes\" placeholder=\"Enter your notes here...\">\n            </ion-textarea>\n          </div>\n          <!-- <ion-label *ngIf=\"(additionalNotes.invalid &&(additionalNotes.dirty || additionalNotes.touched))|| isError\"\n                    color=\"danger\">Additional note is required</ion-label> -->\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-checkbox formControlName=\"saveAddress\" color=\"primary\" slot=\"start\"></ion-checkbox>\n            <ion-label>Save address</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button [disabled]=\"btnTxt == 'Please wait...' ? true : false\" type=\"submit\" color=\"primary\"\n            expand=\"block\">\n            Save\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    63317: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-searchbar class=\"search-bar\" [(ngModel)]=\"autocomplete.input\" (ionInput)=\"UpdateSearchResults()\"\n  placeholder=\"Search for a place\" (ionClear)=\"ClearAutocomplete()\">\n</ion-searchbar>\n\n<ion-list [hidden]=\"autocompleteItems.length == 0 || hideList\">\n  <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n    {{ item.description }}\n  </ion-item>\n</ion-list>\n\n<!-- <ion-input #places type=\"text\" name=\"search\"></ion-input> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_add-new-address_add-new-address_module_ts-es5.js.map