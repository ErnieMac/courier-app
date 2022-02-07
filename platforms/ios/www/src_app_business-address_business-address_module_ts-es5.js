(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_business-address_business-address_module_ts"], {
    /***/
    19731: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BusinessAddressPageRoutingModule": function BusinessAddressPageRoutingModule() {
          return (
            /* binding */
            _BusinessAddressPageRoutingModule
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


      var _business_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./business-address.page */
      68421);

      var routes = [{
        path: '',
        component: _business_address_page__WEBPACK_IMPORTED_MODULE_0__.BusinessAddressPage
      }];

      var _BusinessAddressPageRoutingModule = function BusinessAddressPageRoutingModule() {
        _classCallCheck(this, BusinessAddressPageRoutingModule);
      };

      _BusinessAddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BusinessAddressPageRoutingModule);
      /***/
    },

    /***/
    93468: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BusinessAddressPageModule": function BusinessAddressPageModule() {
          return (
            /* binding */
            _BusinessAddressPageModule
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


      var _business_address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./business-address-routing.module */
      19731);
      /* harmony import */


      var _business_address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./business-address.page */
      68421);

      var _BusinessAddressPageModule = function BusinessAddressPageModule() {
        _classCallCheck(this, BusinessAddressPageModule);
      };

      _BusinessAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _business_address_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessAddressPageRoutingModule],
        declarations: [_business_address_page__WEBPACK_IMPORTED_MODULE_1__.BusinessAddressPage]
      })], _BusinessAddressPageModule);
      /***/
    },

    /***/
    68421: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BusinessAddressPage": function BusinessAddressPage() {
          return (
            /* binding */
            _BusinessAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_business_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./business-address.page.html */
      25363);
      /* harmony import */


      var _business_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./business-address.page.scss */
      24733);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BusinessAddressPage = /*#__PURE__*/function () {
        function BusinessAddressPage() {
          _classCallCheck(this, BusinessAddressPage);
        }

        _createClass(BusinessAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BusinessAddressPage;
      }();

      _BusinessAddressPage.ctorParameters = function () {
        return [];
      };

      _BusinessAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-business-address',
        template: _raw_loader_business_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_business_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BusinessAddressPage);
      /***/
    },

    /***/
    24733: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-select {\n  padding-left: 10px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 13px;\n}\n\nion-textarea {\n  font-size: 13px;\n}\n\nion-checkbox {\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  border: 1px solid #d3d7da9a;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  font-size: 14px;\n  border: 1px solid #d3d7da9a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUlKIiwiZmlsZSI6ImJ1c2luZXNzLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG5pb24tc2VsZWN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLXRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tY2hlY2tib3gge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuLnR4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbi5zZWxlY3Qtd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkN2RhOWE7XG59Il19 */";
      /***/
    },

    /***/
    25363: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\" color=\"primary\">\n      Business address\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\" color=\"primary\">Add drop address</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form>\n    <ion-list lines=\"full\" class=\"ion-padding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>Address Line 1 <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <div class=\"txt-wrapper\">\n              <ion-input type=\"text\" placeholder=\"14 Elm Lane\"></ion-input>\n            </div>\n            <ion-label color=\"danger\">Address Line 1 is required</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label>Address Line 2 <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <div class=\"txt-wrapper\">\n              <ion-input type=\"text\" placeholder=\"London\"></ion-input>\n            </div>\n            <ion-label color=\"danger\">Address Line 2 is required</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label>Postcode <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <div class=\"txt-wrapper\">\n              <ion-input type=\"text\" placeholder=\"EW2 6TR\"></ion-input>\n            </div>\n            <ion-label color=\"danger\">Postcode is required</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label>How many locations do you have?<ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <div class=\"txt-wrapper\">\n              <ion-input type=\"number\" placeholder=\"3\"></ion-input>\n            </div>\n            <ion-label color=\"danger\">Locations is required</ion-label>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [routerLink]=\"['/']\">Submit\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_business-address_business-address_module_ts-es5.js.map