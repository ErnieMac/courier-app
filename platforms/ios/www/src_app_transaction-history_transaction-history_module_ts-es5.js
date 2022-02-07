(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_transaction-history_transaction-history_module_ts"], {
    /***/
    78763: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionHistoryPageRoutingModule": function TransactionHistoryPageRoutingModule() {
          return (
            /* binding */
            _TransactionHistoryPageRoutingModule
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


      var _transaction_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transaction-history.page */
      31394);

      var routes = [{
        path: '',
        component: _transaction_history_page__WEBPACK_IMPORTED_MODULE_0__.TransactionHistoryPage
      }];

      var _TransactionHistoryPageRoutingModule = function TransactionHistoryPageRoutingModule() {
        _classCallCheck(this, TransactionHistoryPageRoutingModule);
      };

      _TransactionHistoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TransactionHistoryPageRoutingModule);
      /***/
    },

    /***/
    77934: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionHistoryPageModule": function TransactionHistoryPageModule() {
          return (
            /* binding */
            _TransactionHistoryPageModule
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


      var _transaction_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./transaction-history-routing.module */
      78763);
      /* harmony import */


      var _transaction_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transaction-history.page */
      31394);

      var _TransactionHistoryPageModule = function TransactionHistoryPageModule() {
        _classCallCheck(this, TransactionHistoryPageModule);
      };

      _TransactionHistoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _transaction_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionHistoryPageRoutingModule],
        declarations: [_transaction_history_page__WEBPACK_IMPORTED_MODULE_1__.TransactionHistoryPage]
      })], _TransactionHistoryPageModule);
      /***/
    },

    /***/
    31394: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionHistoryPage": function TransactionHistoryPage() {
          return (
            /* binding */
            _TransactionHistoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_transaction_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./transaction-history.page.html */
      1870);
      /* harmony import */


      var _transaction_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./transaction-history.page.scss */
      90794);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/business-payment.service */
      95921);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      59193);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5304);

      var _TransactionHistoryPage = /*#__PURE__*/function () {
        function TransactionHistoryPage(apiServices, loginService) {
          _classCallCheck(this, TransactionHistoryPage);

          this.apiServices = apiServices;
          this.loginService = loginService;
          this.local = this.loginService.currentUser.value;
        }

        _createClass(TransactionHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTransactions();
          }
        }, {
          key: "getTransactions",
          value: function getTransactions() {
            var user = this.loginService.currentUser.value;
            this.transactions$ = this.apiServices.get('retrieve-all', 'id=' + user.userDetails.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (transaction) {
              return "transaction:" + transaction.reverse();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
            }));
          }
        }]);

        return TransactionHistoryPage;
      }();

      _TransactionHistoryPage.ctorParameters = function () {
        return [{
          type: _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__.BusinessPaymentService
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }];
      };

      _TransactionHistoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-transaction-history',
        template: _raw_loader_transaction_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_transaction_history_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TransactionHistoryPage);
      /***/
    },

    /***/
    90794: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".status {\n  color: #1A6AE1;\n  font-weight: 600;\n}\n\nion-label h3 {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksY0FIUztFQUlULGdCQUFBO0FBSko7O0FBTUE7RUFDSSxnQkFBQTtBQUhKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG4kb3JhbmdlLWNvbG9yOiAjRjQ1QTJBO1xuJGJsdWUtY29sb3I6ICMxQTZBRTE7XG5cbi5zdGF0dXMge1xuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWxhYmVsIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    1870: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Transaction\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Transaction</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment value=\"Transactions\">\n          <ion-segment-button value=\"My credit\" [routerLink]=\"['/my-balance']\">\n            <ion-label>My credit</ion-label>\n          </ion-segment-button>\n    \n          <ion-segment-button value=\"Top up\" [routerLink]=\"['/top-up']\">\n            <ion-label>Top up</ion-label>\n          </ion-segment-button>\n    \n          <ion-segment-button value=\"Transactions\" [routerLink]=\"['/transaction-history']\">\n            <ion-label>Transactions</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"transactions$ | async as transactions\">\n    <ion-item *ngFor=\"let transaction of transactions\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/avatar.svg\">\n      </ion-avatar>\n\n      <ion-label>\n        <h3></h3>\n        <p>{{transaction.timeStamp | date:'d MMM yyyy' }}</p>\n        <small class=\"status\" color=\"primary\">Payment </small>\n      </ion-label>\n\n      <ion-badge slot=\"end\" color=\"primary\">£{{transaction.amount}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_transaction-history_transaction-history_module_ts-es5.js.map