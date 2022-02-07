(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_chat-details_chat-details_module_ts"], {
    /***/
    35549: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatDetailsPageRoutingModule": function ChatDetailsPageRoutingModule() {
          return (
            /* binding */
            _ChatDetailsPageRoutingModule
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


      var _chat_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat-details.page */
      20979);

      var routes = [{
        path: '',
        component: _chat_details_page__WEBPACK_IMPORTED_MODULE_0__.ChatDetailsPage
      }];

      var _ChatDetailsPageRoutingModule = function ChatDetailsPageRoutingModule() {
        _classCallCheck(this, ChatDetailsPageRoutingModule);
      };

      _ChatDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChatDetailsPageRoutingModule);
      /***/
    },

    /***/
    70108: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatDetailsPageModule": function ChatDetailsPageModule() {
          return (
            /* binding */
            _ChatDetailsPageModule
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


      var _chat_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat-details-routing.module */
      35549);
      /* harmony import */


      var _chat_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chat-details.page */
      20979);

      var _ChatDetailsPageModule = function ChatDetailsPageModule() {
        _classCallCheck(this, ChatDetailsPageModule);
      };

      _ChatDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _chat_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatDetailsPageRoutingModule],
        declarations: [_chat_details_page__WEBPACK_IMPORTED_MODULE_1__.ChatDetailsPage]
      })], _ChatDetailsPageModule);
      /***/
    },

    /***/
    20979: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatDetailsPage": function ChatDetailsPage() {
          return (
            /* binding */
            _ChatDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_chat_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./chat-details.page.html */
      65729);
      /* harmony import */


      var _chat_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chat-details.page.scss */
      69233);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ChatDetailsPage = /*#__PURE__*/function () {
        function ChatDetailsPage() {
          _classCallCheck(this, ChatDetailsPage);
        }

        _createClass(ChatDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatDetailsPage;
      }();

      _ChatDetailsPage.ctorParameters = function () {
        return [];
      };

      _ChatDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat-details',
        template: _raw_loader_chat_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chat_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChatDetailsPage);
      /***/
    },

    /***/
    69233: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWRldGFpbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    65729: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Chat details\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Chat details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-12>\n        <span class=\"user\"></span>\n        <span class=\"message\"></span>\n        <span class=\"time\"></span>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_chat-details_chat-details_module_ts-es5.js.map