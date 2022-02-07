(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_delivery-details_delivery-details_module_ts"], {
    /***/
    2217: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    46797: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "timer": function timer() {
          return (
            /* binding */
            _timer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      69165);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isNumeric */
      26561);
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isScheduler */
      54869);

      function _timer() {
        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        var period = -1;

        if ((0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if ((0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
          scheduler = periodOrScheduler;
        }

        if (!(0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          var due = (0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
          return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
          });
        });
      }

      function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);

        if (subscriber.closed) {
          return;
        } else if (period === -1) {
          return subscriber.complete();
        }

        state.index = index + 1;
        this.schedule(state, period);
      } //# sourceMappingURL=timer.js.map

      /***/

    },

    /***/
    22901: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      10826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    401: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      22901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super2 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this;

          _classCallCheck(this, _AsyncAction);

          _this = _super2.call(this, scheduler, work);
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super3 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this2;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this2 = _super3.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this2)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this2.actions = [];
          _this2.active = false;
          _this2.scheduled = undefined;
          return _this2;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    33637: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      401);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    },

    /***/
    26561: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      59796);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      } //# sourceMappingURL=isNumeric.js.map

      /***/

    },

    /***/
    53487: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryDetailsPageRoutingModule": function DeliveryDetailsPageRoutingModule() {
          return (
            /* binding */
            _DeliveryDetailsPageRoutingModule
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


      var _delivery_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delivery-details.page */
      43558);

      var routes = [{
        path: '',
        component: _delivery_details_page__WEBPACK_IMPORTED_MODULE_0__.DeliveryDetailsPage
      }];

      var _DeliveryDetailsPageRoutingModule = function DeliveryDetailsPageRoutingModule() {
        _classCallCheck(this, DeliveryDetailsPageRoutingModule);
      };

      _DeliveryDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeliveryDetailsPageRoutingModule);
      /***/
    },

    /***/
    53215: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryDetailsPageModule": function DeliveryDetailsPageModule() {
          return (
            /* binding */
            _DeliveryDetailsPageModule
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


      var _delivery_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./delivery-details-routing.module */
      53487);
      /* harmony import */


      var _delivery_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-details.page */
      43558);
      /* harmony import */


      var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../google-map/google-map.component */
      31280);

      var _DeliveryDetailsPageModule = function DeliveryDetailsPageModule() {
        _classCallCheck(this, DeliveryDetailsPageModule);
      };

      _DeliveryDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _delivery_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveryDetailsPageRoutingModule],
        declarations: [_delivery_details_page__WEBPACK_IMPORTED_MODULE_1__.DeliveryDetailsPage, _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__.GoogleMapComponent]
      })], _DeliveryDetailsPageModule);
      /***/
    },

    /***/
    43558: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryDetailsPage": function DeliveryDetailsPage() {
          return (
            /* binding */
            _DeliveryDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_delivery_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./delivery-details.page.html */
      94085);
      /* harmony import */


      var _delivery_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-details.page.scss */
      38616);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      46797);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _global_track_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../global/track-location.service */
      40197);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _services_address_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/address-service.service */
      77900);

      ;

      var _DeliveryDetailsPage = /*#__PURE__*/function () {
        function DeliveryDetailsPage(router, route, locationService, apiServices, loginService, addressService, httpClient) {
          _classCallCheck(this, DeliveryDetailsPage);

          this.router = router;
          this.route = route;
          this.locationService = locationService;
          this.apiServices = apiServices;
          this.loginService = loginService;
          this.addressService = addressService;
          this.addressSubject$ = this.addressService.addressSubject.value;
          this.currentUser = this.loginService.currentUser.value;
          this.calling = false;
          this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAd9vZGWXanh-zvkphgh6tcLN0sqDkxgcg', 'callback').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function () {
            return true;
          }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function () {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
          }));
        }

        _createClass(DeliveryDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var navParams = null;
            this.route.queryParams.subscribe(function (_p) {
              navParams = _this3.router.getCurrentNavigation().extras.state;
              console.log(navParams);
              _this3.job$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(navParams.job); // const job = this.router.getCurrentNavigation().extras.state
            });
            var jobLocation = {
              pickUp: {
                lat: navParams.job.pickUpDetails.latitude,
                lng: navParams.job.pickUpDetails.longitude
              },
              dropOff: {
                lat: navParams.job.dropOffDetails.latitude,
                lng: navParams.job.dropOffDetails.longitude
              }
            };
            console.log(jobLocation);
            this.latlng$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(jobLocation);

            if (navParams.job.status === 'collected') {
              this.getCourierLocation(navParams.job.assignedCourier.courierId, navParams);
            }
          }
        }, {
          key: "getDetails",
          value: function getDetails(event) {
            var _this4 = this;

            this.job$.subscribe(function (res) {
              var jobLocation = {
                pickUp: {
                  lat: res.pickUpDetails.latitude,
                  lng: res.pickUpDetails.longitude
                },
                dropOff: {
                  lat: res.dropOffDetails.latitude,
                  lng: res.dropOffDetails.longitude
                }
              };
              console.log(jobLocation);
              _this4.latlng$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(jobLocation);

              if (res.status === 'collected') {
                _this4.getCourierLocation(res.assignedCourier.courierId, res);
              }

              event.target.complete();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) this.subscription.unsubscribe();
          }
        }, {
          key: "callCourier",
          value: function callCourier(job) {
            var _this5 = this;

            this.calling = true;
            console.log(job, this.currentUser.userDetails);
            var data = {
              "callerintCode": this.currentUser.userDetails.intCode,
              "caller": this.currentUser.userDetails.mobileNumber,
              "callingintCode": job.assignedCourier.intCode,
              "calling": job.assignedCourier.mobileNumber
            };
            this.apiServices.call('call?userId=' + this.currentUser.userDetails.id, data).subscribe(function (res) {
              console.log(res);
              _this5.calling = false;
            }, function (error) {
              _this5.calling = false;
            });
          }
        }, {
          key: "getCourierLocation",
          value: function getCourierLocation(courierId, navParams) {
            var _this6 = this;

            this.locationService.googleAuthToken().subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this7 = this;

                var jobLocation;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        jobLocation = {
                          pickUp: {
                            lat: navParams.job.pickUpDetails.latitude,
                            lng: navParams.job.pickUpDetails.longitude
                          },
                          dropOff: {
                            lat: navParams.job.dropOffDetails.latitude,
                            lng: navParams.job.dropOffDetails.longitude
                          }
                        };
                        this.latlng$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(jobLocation);
                        this.subscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(0, 20000).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function () {
                          return _this7.trackLocation(courierId, res, navParams);
                        })).subscribe();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "editJob",
          value: function editJob(job) {
            var navigationExtras = {
              state: {
                job: job
              }
            };
            this.router.navigate(['edit-delivery', job.id], navigationExtras);
          }
        }, {
          key: "trackLocation",
          value: function trackLocation(courierId, res, navParams) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var courierLocation;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.locationService.getLocation(courierId, res.message);

                    case 2:
                      courierLocation = _context2.sent;
                      courierLocation.subscribe(function (res) {
                        console.log(res);
                        var jobLocation = {
                          pickUp: {
                            lat: res.Lat,
                            lng: res.Lng
                          },
                          dropOff: {
                            lat: navParams.job.dropOffDetails.latitude,
                            lng: navParams.job.dropOffDetails.longitude
                          }
                        };
                        _this8.latlng$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(jobLocation);
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return DeliveryDetailsPage;
      }();

      _DeliveryDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: _global_track_location_service__WEBPACK_IMPORTED_MODULE_2__.TrackLocationService
        }, {
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__.ApiCallsService
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
        }, {
          type: _services_address_service_service__WEBPACK_IMPORTED_MODULE_5__.AddressServiceService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
        }];
      };

      _DeliveryDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-delivery-details',
        template: _raw_loader_delivery_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_delivery_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeliveryDetailsPage);
      /***/
    },

    /***/
    40197: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrackLocationService": function TrackLocationService() {
          return (
            /* binding */
            _TrackLocationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/login.service */
      54120);

      var _TrackLocationService = /*#__PURE__*/function () {
        function TrackLocationService(httpClient, loginService, geolocation) {
          _classCallCheck(this, TrackLocationService);

          this.httpClient = httpClient;
          this.loginService = loginService;
          this.geolocation = geolocation;
          this.Url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jobs_api;
          this.googleToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
          this.additionalDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
          this.vehicleType = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
          this.currentUser = this.loginService.currentUser.value;
          this.firebaseURL = "https://delivermate-app-default-rtdb.firebaseio.com/";
        }

        _createClass(TrackLocationService, [{
          key: "googleAuthToken",
          value: function googleAuthToken() {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                "Content-Type": "application/json",
                "Authorization": "Bearer ".concat(this.currentUser.token)
              })
            };
            return this.httpClient.get(this.Url + "firebase-api/create-google-cred?customerNumber=00000&id=00000", options);
          }
        }, {
          key: "getLocation",
          value: function getLocation(courier, token) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var location;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      location = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
                      _context3.next = 3;
                      return this.httpClient.get(this.firebaseURL + "couriers/" + courier + ".json?access_token=" + token).subscribe(function (data) {
                        location.next(data);
                      }, function (error) {
                        return console.log('oops', error);
                      });

                    case 3:
                      return _context3.abrupt("return", location.asObservable());

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return TrackLocationService;
      }();

      _TrackLocationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation
        }];
      };

      _TrackLocationService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
      })], _TrackLocationService);
      /***/
    },

    /***/
    31280: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GoogleMapComponent": function GoogleMapComponent() {
          return (
            /* binding */
            _GoogleMapComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_google_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./google-map.component.html */
      68655);
      /* harmony import */


      var _google_map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./google-map.component.scss */
      41274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _GoogleMapComponent = /*#__PURE__*/function () {
        function GoogleMapComponent() {
          _classCallCheck(this, GoogleMapComponent);
        }

        _createClass(GoogleMapComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this9 = this;

            if (this.latlng) {
              this.latlng.subscribe(function (val) {
                _this9.initMap(val);
              }, function (error) {
                return console.log("error");
              });
            }
          }
        }, {
          key: "initMap",
          value: function initMap(location) {
            var directionsService = new google.maps.DirectionsService();
            var directionsRenderer = new google.maps.DirectionsRenderer(); // ----------------------------------------For Static Lat and Lng. TESTING PURPOSE ---------------------------------------
            // location.pickUp.lat = 51.507322;
            // location.pickUp.lng = -0.128037;
            // location.dropOff.lat = 51.507558;
            // location.dropOff.lng = -0.132854;
            // Initialize Map

            var cords = new google.maps.LatLng(location.pickUp.lat, location.pickUp.lng);
            var mapOptions = {
              center: cords,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); // Pickup and drop-off locations

            var pickUp = {
              lat: location.pickUp.lat,
              lng: location.pickUp.lng
            };
            var dropOff = {
              lat: location.dropOff.lat,
              lng: location.dropOff.lng
            };
            var pickUpLocation = new google.maps.LatLng(pickUp.lat, pickUp.lng);
            var dropOffLocation = new google.maps.LatLng(dropOff.lat, dropOff.lng);
            directionsRenderer.setMap(this.map); // Add markers
            // var mk1 = new google.maps.Marker({ position: pickUp, map: this.map });
            //var mk2 = new google.maps.Marker({ position: dropOff, map: this.map });
            // Draw Route

            this.calculateAndDisplayRoute(directionsService, directionsRenderer, pickUp, dropOff);
          }
        }, {
          key: "calculateAndDisplayRoute",
          value: function calculateAndDisplayRoute(directionsService, directionsRenderer, pickUp, dropOff) {
            var request = {
              origin: pickUp,
              destination: dropOff,
              travelMode: google.maps.TravelMode.DRIVING
            }; // Draw Route

            directionsService.route(request, function (response, status) {
              if (status == 'OK') {
                directionsRenderer.setDirections(response);
              }
            });
          }
        }]);

        return GoogleMapComponent;
      }();

      _GoogleMapComponent.ctorParameters = function () {
        return [];
      };

      _GoogleMapComponent.propDecorators = {
        latlng: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ['map', {
            "static": true
          }]
        }]
      };
      _GoogleMapComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-google-map',
        template: _raw_loader_google_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_google_map_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GoogleMapComponent);
      /***/
    },

    /***/
    38616: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".green-color {\n  color: #2af0b4;\n}\n\n.blue-color {\n  color: #1a6ae1;\n}\n\n.orange-color {\n  color: #F45A2A;\n}\n\nion-grid {\n  padding: 10px;\n}\n\nion-label {\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\nion-label h3 {\n  font-size: 13px;\n  display: flex;\n  margin-top: 0;\n  font-weight: inherit;\n}\n\nion-label p {\n  font-size: 12px;\n}\n\nion-avatar {\n  margin-right: 5px;\n}\n\nion-avatar img {\n  margin-right: 5px;\n}\n\n.status {\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.status span {\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.meta {\n  font-weight: 700;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #1a6ae1;\n}\n\n.meta span {\n  font-size: 13px;\n  font-weight: 800;\n  text-align: center;\n}\n\n.delivery-meta {\n  text-transform: none;\n  display: flex;\n  align-items: center;\n}\n\n.map {\n  height: 46vh !important;\n  z-index: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksY0FKVTtBQURkOztBQU9BO0VBQ0ksY0FSUztBQUliOztBQU1BO0VBQ0ksY0FUVztBQU1mOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFHRTtFQUNJLGVBQUE7QUFETjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUdFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRE47O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FyRFc7QUFvRGI7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQUZKOztBQU1BO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFZQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFURiIsImZpbGUiOiJkZWxpdmVyeS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENTUyBEb2N1bWVudHNcblxuJGJsdWUtY29sb3I6ICMxYTZhZTE7XG4kZ3JlZW4tY29sb3I6ICMyYWYwYjQ7XG4kb3JhbmdlLWNvbG9yOiAjRjQ1QTJBO1xuXG4uZ3JlZW4tY29sb3Ige1xuICAgIGNvbG9yOiAkZ3JlZW4tY29sb3I7XG59XG4uYmx1ZS1jb2xvciB7XG4gICAgY29sb3I6ICRibHVlLWNvbG9yO1xufVxuLm9yYW5nZS1jb2xvciB7XG4gICAgY29sb3I6ICRvcmFuZ2UtY29sb3I7XG59XG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB9XG4gIHAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggO1xuXG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbn1cbi5zdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgXG4gIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuLm1ldGEge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICRibHVlLWNvbG9yO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIC8vIGNvbG9yOiAkYmx1ZS1jb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLmRlbGl2ZXJ5LW1ldGEge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8vIC5mbGV4LWNvbCB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuLy8gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gfVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiA0NnZoICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    41274: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  height: 46vh !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFBUiIsImZpbGUiOiJnb29nbGUtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgI21hcHtcbiAgICAgICAgaGVpZ2h0OiA0NnZoICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICJdfQ== */";
      /***/
    },

    /***/
    94085: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\" color=\"primary\">\n      Delivery details\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getDetails($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\" color=\"primary\">Delivery details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"apiLoaded | async\">\n        <div class=\"map\">\n          <app-google-map [latlng]='latlng$'></app-google-map>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" style=\"text-align: left\">\n        <div>\n          <ion-chip outline color=\"primary\">\n            <ion-label class=\"status\">Status: <span class=\"green-color\"\n                *ngIf=\"job$ | async as job\">{{job.status.toUpperCase()}}</span></ion-label>\n          </ion-chip>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\" style=\"text-align: right\">\n        <div>\n          <ion-chip outline color=\"primary\">\n            <ion-label class=\"status\">Category: <span class=\"green-color\"\n                *ngIf=\"job$ | async as job\">{{job.deliveryType.toUpperCase()}}</span></ion-label>\n          </ion-chip>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"meta\">\n        <div>\n          Package Size<br><span *ngIf=\"job$ | async as job\">{{job.parcelSize.toUpperCase()}}</span>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"meta\">\n        <div>\n          Distance <br><span *ngIf=\"job$ | async as job\">{{job.distance}}KM</span>\n        </div>\n      </ion-col>\n\n      <ion-col class=\"meta\">\n        <div>\n          Package Cost <br><span *ngIf=\"job$ | async as job\">£{{job.price}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"delivery-meta\" size=\"12\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/location-icon-blue.svg\">\n          </ion-avatar>\n          <ion-label>\n            <p class=\"blue-color\" style=\"opacity: 0.7\">Pick Up</p>\n            <h3 class=\"blue-color\" *ngIf=\"job$ | async as job\">{{job.pickUpDetails.name}}</h3>\n            <p class=\"blue-color\" *ngIf=\"job$ | async as job\">{{job.pickUpDetails.addressLineOne}}\n              {{job.pickUpDetails.addressLineTwo}}, {{job.pickUpDetails.postcode}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col class=\"delivery-meta\" size=\"12\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/location-icon-orange.svg\">\n          </ion-avatar>\n          <ion-label>\n            <p class=\"orange-color\" style=\"opacity: 0.7\">Drop off</p>\n            <h3 class=\"orange-color\" *ngIf=\"job$ | async as job\">{{job.dropOffDetails.name}}</h3>\n            <p class=\"orange-color\" *ngIf=\"job$ | async as job\">{{job.dropOffDetails.addressLineOne}}\n              {{job.dropOffDetails.addressLineTwo}}, {{job.dropOffDetails.postcode}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"job$ | async as job\">\n    <ion-row *ngIf=\"job.status == 'collecting' || job.status == 'collected'\">\n      <ion-col class=\"delivery-meta\" size=\"6\">\n        <ion-item lines=\"none\" class=\"ion-no-padding\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/avatar.svg\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{job.assignedCourier.firstname}}</h3>\n            <p class=\"blue-color\">ID: {{job.assignedCourier.courierId}}</p>\n            <p class=\"blue-color\">Vehicle: {{job.assignedCourier.vehicleType}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col class=\"delivery-meta\" size=\"3\">\n        <div>\n          <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\" (click)=\"callCourier(job)\">\n            <ion-fab-button color=\"success\">\n              <!-- <ion-icon name=\"call\"></ion-icon> -->{{calling ? 'Calling...' : 'Call'}}\n            </ion-fab-button>\n          </ion-fab>\n        </div>\n        <!-- <div>\n          <ion-chip (click)=\"callCourier(job)\">\n            <ion-icon name=\"call-outline\" color=\"primary\"></ion-icon>\n            <ion-label color=\"primary\">{{calling ? 'Calling...' : 'Call'}}</ion-label>\n          </ion-chip>\n        </div> -->\n      </ion-col>\n\n      <ion-col class=\"delivery-meta\" size=\"3\">\n        <div>\n          <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button>\n              <ion-icon name=\"chatbubbles\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center\">\n        <ion-chip color=\"primary\">\n          <ion-label class=\"status\">Courier: <span class=\"orange-color\">Not Assigned</span></ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"job.deliveryType == 'delivery'\">\n      <ion-col size=\"6\">\n        <ion-button color=\"primary\" expand=\"block\" fill=\"outline\">Secure code: {{ job.secureCode }}\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button *ngIf=\"job$ | async as job\" type=\"submit\" color=\"danger\" expand=\"block\"\n          [routerLink]=\"['/cancel-delivery',job.id]\">Cancel delivery\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" style=\"text-align: left\">\n          <!-- <div *ngIf=\"job$ | async as job\" [routerLink]=\"['/edit-delivery',job.id]\"> -->\n          <div *ngIf=\"job$ | async as job\" (click)=\"editJob(job)\">\n            <ion-button color=\"primary\" fill=\"outline\">Edit Delivery</ion-button>\n          </div>\n        </ion-col>\n\n        <ion-col size=\"6\" style=\"text-align: right\">\n          <div *ngIf=\"job$ | async as job\" [routerLink]=\"['/make-claim',job.id]\">\n            <ion-button color=\"primary\">Make a claim</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    68655: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #map id=\"map\"></div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_delivery-details_delivery-details_module_ts-es5.js.map