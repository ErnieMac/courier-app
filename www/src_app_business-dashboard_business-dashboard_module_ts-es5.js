(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_business-dashboard_business-dashboard_module_ts"], {
    /***/
    56370: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FCMPluginOnIonic": function FCMPluginOnIonic() {
          return (
            /* binding */
            _FCMPluginOnIonic
          );
        },

        /* harmony export */
        "FCM": function FCM() {
          return (
            /* binding */
            _FCM
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      function _FCMPluginOnIonic() {}

      _FCMPluginOnIonic.prototype.clearAllNotifications = function () {
        return window.FCM.clearAllNotifications();
      };

      _FCMPluginOnIonic.prototype.createNotificationChannel = function (channelConfig) {
        return window.FCM.createNotificationChannel(channelConfig);
      };

      _FCMPluginOnIonic.prototype.deleteInstanceId = function () {
        return window.FCM.deleteInstanceId();
      };

      _FCMPluginOnIonic.prototype.getAPNSToken = function () {
        return window.FCM.getAPNSToken();
      };

      _FCMPluginOnIonic.prototype.getInitialPushPayload = function () {
        return window.FCM.getInitialPushPayload();
      };

      _FCMPluginOnIonic.prototype.getToken = function () {
        return window.FCM.getToken();
      };

      _FCMPluginOnIonic.prototype.hasPermission = function () {
        return window.FCM.hasPermission();
      };

      _FCMPluginOnIonic.prototype.onNotification = function (options) {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();

        var handler = function handler(payload) {
          return observable.next(payload);
        };

        window.FCM.onNotification(handler, options);
        return observable;
      };

      _FCMPluginOnIonic.prototype.onTokenRefresh = function (options) {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        window.FCM.onTokenRefresh(function (token) {
          return observable.next(token);
        }, options);
        return observable;
      };

      _FCMPluginOnIonic.prototype.requestPushPermission = function (options) {
        return window.FCM.requestPushPermission(options);
      };

      _FCMPluginOnIonic.prototype.subscribeToTopic = function (topic) {
        return window.FCM.subscribeToTopic(topic);
      };

      _FCMPluginOnIonic.prototype.unsubscribeFromTopic = function (topic) {
        return window.FCM.unsubscribeFromTopic(topic);
      };

      var _FCM = new _FCMPluginOnIonic();
      /***/

    },

    /***/
    92441: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BusinessDashboardPageRoutingModule": function BusinessDashboardPageRoutingModule() {
          return (
            /* binding */
            _BusinessDashboardPageRoutingModule
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


      var _business_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./business-dashboard.page */
      74094);

      var routes = [{
        path: '',
        component: _business_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.BusinessDashboardPage
      }];

      var _BusinessDashboardPageRoutingModule = function BusinessDashboardPageRoutingModule() {
        _classCallCheck(this, BusinessDashboardPageRoutingModule);
      };

      _BusinessDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BusinessDashboardPageRoutingModule);
      /***/
    },

    /***/
    80776: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BusinessDashboardPageModule": function BusinessDashboardPageModule() {
          return (
            /* binding */
            _BusinessDashboardPageModule
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


      var _business_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./business-dashboard-routing.module */
      92441);
      /* harmony import */


      var _business_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./business-dashboard.page */
      74094);

      var _BusinessDashboardPageModule = function BusinessDashboardPageModule() {
        _classCallCheck(this, BusinessDashboardPageModule);
      };

      _BusinessDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _business_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessDashboardPageRoutingModule],
        declarations: [_business_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.BusinessDashboardPage]
      })], _BusinessDashboardPageModule);
      /***/
    },

    /***/
    74094: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BusinessDashboardPage": function BusinessDashboardPage() {
          return (
            /* binding */
            _BusinessDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_business_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./business-dashboard.page.html */
      89310);
      /* harmony import */


      var _business_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./business-dashboard.page.scss */
      26559);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic */
      56370); // import { BackgroundMode } from '@ionic-native/background-mode/ngx';
      // import { FCM } from '@ionic-native/fcm/ngx';


      var _BusinessDashboardPage = /*#__PURE__*/function () {
        function BusinessDashboardPage( // private backgroundMode: BackgroundMode,
        loginService, apiService) {
          _classCallCheck(this, BusinessDashboardPage);

          this.loginService = loginService;
          this.apiService = apiService;
          this.userDetails$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.loginService.currentUser.value);
        }

        _createClass(BusinessDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.backgroundMode.enable();
            var currentUser = this.loginService.currentUser.value;
            console.log(this.loginService.currentUser.value);
            console.log(currentUser.userDetails.id);
            this.getToken(currentUser);
          }
        }, {
          key: "getToken",
          value: function getToken(res) {
            var _this = this;

            cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_4__.FCM.requestPushPermission().then(function (hasPermission) {
              console.log('PERMISSION:', hasPermission);

              if (hasPermission) {
                cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_4__.FCM.getToken().then(function (token) {
                  console.log('THIS IS FROM getToken()------->' + token);
                  var data = {
                    "userId": res.userDetails.id,
                    "fcmToken": token
                  };

                  _this.apiService.saveFCMToken(data).subscribe(function (res) {
                    console.log(res);
                  });
                }, function (error) {
                  console.log('THIS IS ERROR-------->', error);
                });
                cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_4__.FCM.onNotification().subscribe(function (data) {
                  console.log(data);

                  if (data.wasTapped) {
                    console.log('Received in background');
                  } else {
                    console.log('Received in foreground');
                  }
                }, function (error) {
                  console.log('error', error);
                });
                cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_4__.FCM.onTokenRefresh().subscribe(function (token) {
                  console.log('THIS IS FROM onTokenRefresh()------->' + token);
                }, function (error) {
                  console.log('THIS IS REFRESH ERROR-------->', error);
                }); // subscribe to a topic

                cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_4__.FCM.subscribeToTopic('businesses');
              }
            });
          }
        }]);

        return BusinessDashboardPage;
      }();

      _BusinessDashboardPage.ctorParameters = function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }, {
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_3__.ApiCallsService
        }];
      };

      _BusinessDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-business-dashboard',
        template: _raw_loader_business_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_business_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BusinessDashboardPage);
      /***/
    },

    /***/
    26559: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-orange {\n  background: #F45A2A 0% 0% no-repeat;\n  box-shadow: 0px 10px 10px #0000001A;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.card-green {\n  background: #2AF0B4 0% 0% no-repeat;\n  box-shadow: 0px 10px 10px #0000001A;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.card-blue {\n  background: #1A6AE1 0% 0% no-repeat;\n  box-shadow: 0px 10px 10px #0000001A;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.heading-title {\n  color: #FFFFFF;\n  font-weight: 600;\n  font-size: 18px;\n  padding: 15px;\n}\n\nion-card {\n  height: 120px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTko7O0FBUUE7RUFDSSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTEo7O0FBT0E7RUFDSSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSko7O0FBTUE7RUFDSSxjQXJCVTtFQXNCVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSEo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUZKIiwiZmlsZSI6ImJ1c2luZXNzLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG4kb3JhbmdlLWNvbG9yOiAjRjQ1QTJBO1xuJGJsdWUtY29sb3I6ICMxQTZBRTE7XG4kYmxhY2stY29sb3I6ICMyRjM3M0Q7XG4kZ3JlZW4tY29sb3I6ICMyQUYwQjQ7XG4kd2hpdGUtY29sb3I6ICNGRkZGRkY7XG5cbi5jYXJkLW9yYW5nZSB7XG4gICAgYmFja2dyb3VuZDogJG9yYW5nZS1jb2xvciAwJSAwJSBuby1yZXBlYXQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAjMDAwMDAwMUE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG4uY2FyZC1ncmVlbiB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuLWNvbG9yIDAlIDAlIG5vLXJlcGVhdDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4ICMwMDAwMDAxQTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5jYXJkLWJsdWUge1xuICAgIGJhY2tncm91bmQ6ICRibHVlLWNvbG9yIDAlIDAlIG5vLXJlcGVhdDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4ICMwMDAwMDAxQTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5oZWFkaW5nLXRpdGxlIHtcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5pb24tY2FyZCB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    89310: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n    <ion-title class=\"title-android\">\n      <span *ngIf=\"userDetails$ | async as user\">{{user.userDetails.firstname}} {{user.userDetails.lastname}}</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\"><span *ngIf=\"userDetails$ | async as user\">{{user.userDetails.businessName}}</span></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card [routerLink]=\"['/add-new-delivery']\" color=\"primary\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"add-circle\"></ion-icon><br /> Add New<br> Delivery\n          </div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card [routerLink]=\"['/ongoing-deliveries']\" color=\"primary\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"bookmarks\"></ion-icon><br /> My <br />Deliveries\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card [routerLink]=\"['/my-balance']\" class=\"card-blue\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"wallet\"></ion-icon><br /> My Balance\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card [routerLink]=\"['/top-up']\" color=\"primary\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"card\"></ion-icon><br />Top Up<br> Credit\n          </div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card [routerLink]=\"['/chat-history']\" color=\"primary\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"chatbubbles\"></ion-icon><br /> Chat <br />History\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card [routerLink]=\"['/business-profile']\" class=\"card-blue\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"business\"></ion-icon><br /> Business<br /> Profile\n          </div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card [routerLink]=\"['/help-support']\" color=\"primary\">\n          <div class=\"heading-title\">\n            <ion-icon name=\"help-circle\"></ion-icon><br /> Help &<br /> Support\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_business-dashboard_business-dashboard_module_ts-es5.js.map