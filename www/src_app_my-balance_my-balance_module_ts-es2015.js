(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_my-balance_my-balance_module_ts"],{

/***/ 21626:
/*!*********************************************************!*\
  !*** ./src/app/my-balance/my-balance-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyBalancePageRoutingModule": function() { return /* binding */ MyBalancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_balance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-balance.page */ 71893);




const routes = [
    {
        path: '',
        component: _my_balance_page__WEBPACK_IMPORTED_MODULE_0__.MyBalancePage
    }
];
let MyBalancePageRoutingModule = class MyBalancePageRoutingModule {
};
MyBalancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyBalancePageRoutingModule);



/***/ }),

/***/ 96078:
/*!*************************************************!*\
  !*** ./src/app/my-balance/my-balance.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyBalancePageModule": function() { return /* binding */ MyBalancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_balance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-balance-routing.module */ 21626);
/* harmony import */ var _my_balance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-balance.page */ 71893);







let MyBalancePageModule = class MyBalancePageModule {
};
MyBalancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_balance_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyBalancePageRoutingModule
        ],
        declarations: [_my_balance_page__WEBPACK_IMPORTED_MODULE_1__.MyBalancePage]
    })
], MyBalancePageModule);



/***/ }),

/***/ 71893:
/*!***********************************************!*\
  !*** ./src/app/my-balance/my-balance.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyBalancePage": function() { return /* binding */ MyBalancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_balance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-balance.page.html */ 91223);
/* harmony import */ var _my_balance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-balance.page.scss */ 81792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/business-payment.service */ 95921);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);









let MyBalancePage = class MyBalancePage {
    constructor(apiServices, loginService, alertController) {
        this.apiServices = apiServices;
        this.loginService = loginService;
        this.alertController = alertController;
        this.user = this.loginService.currentUser.value;
    }
    ngOnInit() {
        let user = this.loginService.currentUser.value;
        this.savedCards$ = this.apiServices.get('retrieve-stored-card', 'businessId=' + user.userDetails.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((cards) => "cards:" + cards), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        }));
    }
    ionViewWillEnter() {
        let user = this.loginService.currentUser.value;
        this.savedCards$ = this.apiServices.get('retrieve-stored-card', 'businessId=' + user.userDetails.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((cards) => "cards:" + cards), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        }));
        this.savedCards$.subscribe(res => {
            console.log(res);
        });
        this.getAccount();
    }
    getAccount() {
        let user = this.loginService.currentUser.value;
        this.account$ = this.apiServices.get('retrieve-account', 'id=' + user.userDetails.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((account) => "account:" + account), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        }));
    }
    handleCardDeletion(cardId) {
        this.confirmDeletionAlert(cardId);
    }
    confirmDeletionAlert(cardId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.user.userDetails.id, cardId);
            const alert = yield this.alertController.create({
                cssClass: 'danger-alert',
                header: 'Confirm Deletion!',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('No');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.apiServices.delete('remove-stored-card', 'businessId=' + this.user.userDetails.id + '&cardId=' + cardId).subscribe(res => {
                                console.log(res);
                                this.savedCards$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(res);
                            }, error => {
                                console.log(error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MyBalancePage.ctorParameters = () => [
    { type: _services_business_payment_service__WEBPACK_IMPORTED_MODULE_2__.BusinessPaymentService },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
MyBalancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-my-balance',
        template: _raw_loader_my_balance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_balance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyBalancePage);



/***/ }),

/***/ 81792:
/*!*************************************************!*\
  !*** ./src/app/my-balance/my-balance.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  padding: 10px;\n}\n\n.card-blue {\n  background: #1A6AE1 0% 0% no-repeat;\n  box-shadow: 0px 10px 10px #0000001A;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.heading-title {\n  color: #FFFFFF;\n  font-weight: 800;\n  font-size: 20px;\n  padding: 25px;\n  line-height: 30px;\n  float: left;\n  width: 50%;\n}\n\n.balance {\n  padding: 40px 20px;\n}\n\n.title {\n  padding-left: 20px;\n}\n\n.danger-alert {\n  background: #00000033;\n}\n\nion-card {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWJhbGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksYUFBQTtBQUpKOztBQU1BO0VBQ0ksbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksY0FiVTtFQWNWLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSEo7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoibXktYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbiRibHVlLWNvbG9yOiAjMUE2QUUxO1xuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuXG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJkLWJsdWUge1xuICAgIGJhY2tncm91bmQ6ICRibHVlLWNvbG9yIDAlIDAlIG5vLXJlcGVhdDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4ICMwMDAwMDAxQTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRpbmctdGl0bGUge1xuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xufVxuLmJhbGFuY2Uge1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbn1cbi50aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZGFuZ2VyLWFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMzM7XG59XG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 91223:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-balance/my-balance.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      My account\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">My account</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment value=\"My credit\">\n          <ion-segment-button value=\"My credit\" [routerLink]=\"['/my-balance']\">\n            <ion-label>My credit</ion-label>\n          </ion-segment-button>\n    \n          <ion-segment-button value=\"Top up\" [routerLink]=\"['/top-up']\">\n            <ion-label>Top up</ion-label>\n          </ion-segment-button>\n    \n          <ion-segment-button value=\"Transactions\" [routerLink]=\"['/transaction-history']\">\n            <ion-label>Transactions</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row>\n    <ion-col>\n      <ion-card class=\"card-blue\">\n        <div class=\"heading-title\">My<br> Credit</div>\n        <div *ngIf=\"!account$\" class=\"heading-title balance\">£0.00</div>\n        <div *ngIf=\"account$ | async as account\" class=\"heading-title balance\">£{{account.total}}</div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <label color=\"dark\">\n        <h4 class=\"title\">Saved cards</h4>\n      </label>\n    </ion-col>\n  </ion-row>\n    \n  <ion-row>\n    <ion-col>\n      <ion-list *ngIf=\"savedCards$ | async as cards\">\n        <ion-item *ngFor=\"let card of cards\">\n          <ion-icon slot=\"start\" name=\"card-outline\" color=\"primary\"></ion-icon>\n          <ion-label>{{card.cardReference}}\n          </ion-label>\n          <ion-icon slot=\"end\" (click)=\"handleCardDeletion(card.cardId)\" name=\"trash-outline\" color=\"danger\">\n          </ion-icon>\n        </ion-item>\n        <ion-item *ngIf=\"cards.length == 0\">\n          <p>No saved card found</p>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngIf=\"!savedCards$ | async as cards\">\n        <ion-item>\n          Loading Saved Cards...\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <div>\n          <ion-button type=\"submit\" expand=\"block\" fill=\"outline\" [routerLink]=\"['/recurring-payment']\">Recurring\n          </ion-button>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <div>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [routerLink]=\"['/add-card']\">Add card</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_my-balance_my-balance_module_ts-es2015.js.map