(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_help-support_help-support_module_ts"], {
    /***/
    23734: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpSupportPageRoutingModule": function HelpSupportPageRoutingModule() {
          return (
            /* binding */
            _HelpSupportPageRoutingModule
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


      var _help_support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./help-support.page */
      83802);

      var routes = [{
        path: '',
        component: _help_support_page__WEBPACK_IMPORTED_MODULE_0__.HelpSupportPage
      }];

      var _HelpSupportPageRoutingModule = function HelpSupportPageRoutingModule() {
        _classCallCheck(this, HelpSupportPageRoutingModule);
      };

      _HelpSupportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HelpSupportPageRoutingModule);
      /***/
    },

    /***/
    49779: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpSupportPageModule": function HelpSupportPageModule() {
          return (
            /* binding */
            _HelpSupportPageModule
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


      var _help_support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./help-support-routing.module */
      23734);
      /* harmony import */


      var _help_support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./help-support.page */
      83802);

      var _HelpSupportPageModule = function HelpSupportPageModule() {
        _classCallCheck(this, HelpSupportPageModule);
      };

      _HelpSupportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _help_support_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpSupportPageRoutingModule],
        declarations: [_help_support_page__WEBPACK_IMPORTED_MODULE_1__.HelpSupportPage]
      })], _HelpSupportPageModule);
      /***/
    },

    /***/
    83802: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HelpSupportPage": function HelpSupportPage() {
          return (
            /* binding */
            _HelpSupportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_help_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./help-support.page.html */
      93414);
      /* harmony import */


      var _help_support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./help-support.page.scss */
      32245);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HelpSupportPage = /*#__PURE__*/function () {
        function HelpSupportPage() {
          _classCallCheck(this, HelpSupportPage);
        }

        _createClass(HelpSupportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpSupportPage;
      }();

      _HelpSupportPage.ctorParameters = function () {
        return [];
      };

      _HelpSupportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help-support',
        template: _raw_loader_help_support_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help_support_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HelpSupportPage);
      /***/
    },

    /***/
    32245: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-size: 16px;\n}\n\nion-grid {\n  padding: 10px;\n}\n\nion-list-header {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtc3VwcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxlQUFBO0FBSEo7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBSUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJoZWxwLXN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG4kYmx1ZS1jb2xvcjogIzFhNmFlMTtcblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
      /***/
    },

    /***/
    93414: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\" color=\"primary\">\n      Help & support\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\" color=\"primary\">Help & support</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text>Call or email our customer support <br>team 24 hours a day.</ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-list>\n    <ion-list-header>\n      Need help?\n    </ion-list-header>\n    <ion-item href=\"tel:020 3907 6500\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"call-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Contact us</ion-label>\n    </ion-item>\n\n    <ion-item href=\"mailto:courier@delivermateapp.com?subject=Courier enquiry\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"mail-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Send us an email</ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://delivermateapp.freshdesk.com/support/solutions\" target=\"_blank\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"information-circle-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Frequently asked questions</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Legal Support\n    </ion-list-header>\n    <ion-item href=\"https://www.delivermateapp.com/privacy-policy\" target=\"_blank\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"shield-checkmark-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Privacy policy</ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://www.delivermateapp.com/data-protection\" target=\"_blank\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"lock-closed-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Data protection</ion-label>\n    </ion-item>\n\n    <ion-item href=\"https://www.delivermateapp.com/terms-conditions\" target=\"_blank\" class=\"spacer\">\n      <ion-icon slot=\"start\" name=\"checkbox-outline\" class=\"blue-color\"></ion-icon>\n      <ion-label>Terms & conditions</ion-label>\n    </ion-item>\n    <!--\n      <ion-item href=\"https://www.delivermateapp.com/files/Courier%20Starter%20Guide.pdf\" target=\"_blank\" class=\"spacer\">\n        <ion-icon slot=\"start\" name=\"information-circle-outline\" class=\"blue-color\"></ion-icon>\n        <ion-label>Starter Guide</ion-label>\n      </ion-item>-->\n  </ion-list>\n  </ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_help-support_help-support_module_ts-es5.js.map