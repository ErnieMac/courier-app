(self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_ongoing-deliveries_ongoing-deliveries_module_ts"],{

/***/ 63634:
/*!*************************************************************************!*\
  !*** ./src/app/ongoing-deliveries/ongoing-deliveries-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OngoingDeliveriesPageRoutingModule": function() { return /* binding */ OngoingDeliveriesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ongoing_deliveries_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ongoing-deliveries.page */ 34638);




const routes = [
    {
        path: '',
        component: _ongoing_deliveries_page__WEBPACK_IMPORTED_MODULE_0__.OngoingDeliveriesPage
    }
];
let OngoingDeliveriesPageRoutingModule = class OngoingDeliveriesPageRoutingModule {
};
OngoingDeliveriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OngoingDeliveriesPageRoutingModule);



/***/ }),

/***/ 21951:
/*!*****************************************************************!*\
  !*** ./src/app/ongoing-deliveries/ongoing-deliveries.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OngoingDeliveriesPageModule": function() { return /* binding */ OngoingDeliveriesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ongoing_deliveries_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ongoing-deliveries-routing.module */ 63634);
/* harmony import */ var _ongoing_deliveries_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ongoing-deliveries.page */ 34638);







let OngoingDeliveriesPageModule = class OngoingDeliveriesPageModule {
};
OngoingDeliveriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ongoing_deliveries_routing_module__WEBPACK_IMPORTED_MODULE_0__.OngoingDeliveriesPageRoutingModule
        ],
        declarations: [_ongoing_deliveries_page__WEBPACK_IMPORTED_MODULE_1__.OngoingDeliveriesPage]
    })
], OngoingDeliveriesPageModule);



/***/ }),

/***/ 34638:
/*!***************************************************************!*\
  !*** ./src/app/ongoing-deliveries/ongoing-deliveries.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OngoingDeliveriesPage": function() { return /* binding */ OngoingDeliveriesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ongoing_deliveries_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ongoing-deliveries.page.html */ 55209);
/* harmony import */ var _ongoing_deliveries_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ongoing-deliveries.page.scss */ 51201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_business_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/business-booking.service */ 76547);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let OngoingDeliveriesPage = class OngoingDeliveriesPage {
    constructor(loginService, apiCalls, router) {
        this.loginService = loginService;
        this.apiCalls = apiCalls;
        this.router = router;
        this.selectedTab = 'Ongoing';
        this.currentUser = this.loginService.currentUser.value;
    }
    ngOnInit() {
        this.getOngoingJobs();
    }
    getOngoingJobs() {
        // this.apiCalls.get('active/retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=m&jobType=food,e-commerce&status=').subscribe(res => {
        this.apiCalls.get('active/retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=&jobType=&status=').subscribe(res => {
            this.ongoingJobs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res);
        });
    }
    doRefresh(event) {
        this.ongoingJobs$ = null;
        setTimeout(() => {
            this.getOngoingJobs();
            event.target.complete();
        }, 2000);
    }
    getScheduledJobs() {
        this.apiCalls.get('scheduled/retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=&jobType=&status=available').subscribe(res => {
            this.scheduledJobs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res);
        });
    }
    getCompletedJobs() {
        this.apiCalls.get('retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=&transportationType=&jobType=&status=').subscribe(res => {
            this.completedJobs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(res);
        });
    }
    viewJob(job) {
        let navigationExtras = {
            state: {
                job: job
            }
        };
        this.router.navigate(['delivery-details'], navigationExtras);
    }
    viewScheduledJob(job) {
        let navigationExtras = {
            state: {
                job: job
            }
        };
        this.router.navigate(['delivery-details'], navigationExtras);
    }
};
OngoingDeliveriesPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _services_business_booking_service__WEBPACK_IMPORTED_MODULE_2__.BusinessBookingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
OngoingDeliveriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ongoing-deliveries',
        template: _raw_loader_ongoing_deliveries_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ongoing_deliveries_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OngoingDeliveriesPage);



/***/ }),

/***/ 51201:
/*!*****************************************************************!*\
  !*** ./src/app/ongoing-deliveries/ongoing-deliveries.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue {\n  color: #1A6AE1;\n}\n\n.orange {\n  color: #F45A2A;\n}\n\nion-card-header {\n  padding-bottom: 0px;\n}\n\n.distance {\n  float: right;\n  font-size: 10px;\n  color: #F45A2A;\n  font-weight: 200;\n  text-transform: none;\n}\n\n.duration {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.heading {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.subtitle {\n  font-size: 14px;\n  padding-left: 25px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\nion-badge {\n  text-transform: uppercase;\n  font-size: 12px;\n  border-radius: 4px;\n}\n\nion-chip {\n  float: right;\n}\n\nion-chip .cost {\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: none;\n}\n\n.location-meta {\n  margin-bottom: 5px;\n}\n\n.location-meta .blue-fade {\n  color: #1A6AE1;\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 12px;\n  padding-top: 2px;\n  opacity: 0.7;\n}\n\n.location-meta .orange-fade {\n  color: #F45A2A;\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 12px;\n  padding-top: 2px;\n  opacity: 0.7;\n}\n\n.location-meta div {\n  display: flex;\n  align-items: center;\n}\n\n.location-meta div img {\n  width: 20px;\n  margin-right: 5px;\n}\n\n.bg-blue, .bg-orange {\n  padding: 10px 0px;\n}\n\n.ion-text-center {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  position: relative;\n  top: 160px;\n}\n\n.ion-text-center h5 {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.loading-text {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1A6AE1;\n}\n\n.loader-wrapper {\n  height: 54vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.loader-wrapper img {\n  width: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZ29pbmctZGVsaXZlcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxjQUhTO0FBRGI7O0FBTUE7RUFDSSxjQVBXO0FBSWY7O0FBTUE7RUFDSSxtQkFBQTtBQUhKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQWhCVztFQWlCWCxnQkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFFUjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUk7RUFDSSxjQXJESztFQXNETCx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUFJO0VBQ0ksY0E5RE87RUErRFAseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFUjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRVo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBcEdTO0FBbUdiOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHSTtFQUNJLFdBQUE7QUFEUiIsImZpbGUiOiJvbmdvaW5nLWRlbGl2ZXJpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIERvY3VtZW50c1xuXG4kb3JhbmdlLWNvbG9yOiAjRjQ1QTJBO1xuJGJsdWUtY29sb3I6ICMxQTZBRTE7XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogJGJsdWUtY29sb3I7XG59XG4ub3JhbmdlIHtcbiAgICBjb2xvcjogJG9yYW5nZS1jb2xvcjtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmRpc3RhbmNlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAkb3JhbmdlLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uZHVyYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24tYmFkZ2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmlvbi1jaGlwIHtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAuY29zdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxufVxuLmxvY2F0aW9uLW1ldGEge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgIC5ibHVlLWZhZGUge1xuICAgICAgICBjb2xvcjogJGJsdWUtY29sb3I7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgICAub3JhbmdlLWZhZGUge1xuICAgICAgICBjb2xvcjogJG9yYW5nZS1jb2xvcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJnLWJsdWUsIC5iZy1vcmFuZ2Uge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE2MHB4O1xuICAgIFxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmxvYWRpbmctdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAkYmx1ZS1jb2xvcjtcbn1cblxuLmxvYWRlci13cmFwcGVyIHtcbiAgICBoZWlnaHQ6NTR2aDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 55209:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ongoing-deliveries/ongoing-deliveries.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      My deliveries\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">My deliveries</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-segment [(ngModel)]=\"selectedTab\">\n          <ion-segment-button (click)=\"getOngoingJobs()\" value=\"Ongoing\">\n            <ion-label>Ongoing</ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button (click)=\"getScheduledJobs()\" value=\"Scheduled\">\n            <ion-label>Scheduled</ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button (click)=\"getCompletedJobs()\" value=\"Completed\">\n            <ion-label>Completed</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Ongoing Deliveries -->\n  <ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf=\"selectedTab == 'Ongoing'\">\n      <div *ngIf=\"!ongoingJobs$\" class=\"loader-wrapper\">\n        <img src=\"assets/loader.svg\">\n        <h5 class=\"loading-text\">Loading deliveries...</h5>\n      </div>\n      <div *ngIf=\"ongoingJobs$ | async as jobs\">\n        <ion-grid *ngIf=\"jobs.length == 0\">\n          <ion-row>\n            <ion-col ion-padding>\n              <ion-text class=\"ion-text-center\" color=\"primary\">\n                <img src=\"assets/cross-icon.svg\" style=\"align-items: center;\">\n                <h5>No Ongoing deliveries <br>Your Ongoing deliveries will appear here</h5>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-card *ngFor=\"let job of jobs\" (click)=\"viewJob(job)\">\n          <ion-card-header>\n            <ion-row>\n              <ion-col style=\"padding-left: 0px;\" size=\"8\">\n                <ion-card-subtitle class=\"duration\">\n                  <ion-badge color=\"secondary\">\n                    Delivery Time: {{job.estimatedTime}}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n              <ion-col style=\"padding-right: 0px;\" size=\"4\">\n                <ion-card-subtitle class=\"distance\">\n                  <ion-badge color=\"primary\">\n                    <ion-icon name=\"navigate\"></ion-icon> {{job.distance}}km\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n            </ion-row>\n            <ion-card-title class=\"heading\">{{job.pickUpDetails.name}}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <div class=\"location-meta bg-blue\">\n              <div>\n                <img src=\"assets/location-icon-blue.svg\">\n                <ion-card-subtitle class=\"blue-fade\"> Pick Up</ion-card-subtitle>\n              </div>\n              <ion-card-title class=\"subtitle blue\">{{job.pickUpDetails.addressLineOne}}, {{job.pickUpDetails.postcode}}\n              </ion-card-title>\n            </div>\n\n            <ion-card-title class=\"heading\">{{job.dropOffDetails.name}}</ion-card-title>\n            <div class=\"location-meta bg-orange\">\n              <div>\n                <img src=\"assets/location-icon-orange.svg\">\n                <ion-card-subtitle class=\"orange-fade\"> Drop Off</ion-card-subtitle>\n              </div>\n              <ion-card-title class=\"subtitle orange\">{{job.dropOffDetails.addressLineOne}},\n                {{job.dropOffDetails.postcode}}</ion-card-title>\n            </div>\n            <ion-row>\n              <ion-col style=\"padding-left: 0px;\" size=\"8\">\n                <ion-card-subtitle class=\"duration\">\n                  <ion-badge color=\"success\">\n                    Status: {{job.status.toUpperCase()}}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n              <ion-col style=\"padding-right: 0px;\" size=\"4\" *ngIf=\"job.status == 'collecting' || job.status == 'collected'\">\n                <ion-card-subtitle class=\"distance\">\n                  <ion-badge color=\"secondary\">\n                    Courier ID: {{job.assignedCourier.courierId}}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n    <!-- Scheduled Deliveries -->\n    <div *ngIf=\"selectedTab == 'Scheduled'\">\n      <div *ngIf=\"!scheduledJobs$\" class=\"loader-wrapper\">\n        <img src=\"assets/loader.svg\">\n        <h5 class=\"loading-text\">Loading deliveries...</h5>\n      </div>\n      <div *ngIf=\"scheduledJobs$ | async as jobs\">\n        <ion-grid *ngIf=\"jobs.length == 0\">\n          <ion-row>\n            <ion-col ion-padding class=\" empty-state\">\n              <ion-text class=\"ion-text-center\" color=\"primary\">\n                <img src=\"assets/cross-icon.svg\" style=\"align-items: center;\">\n                <h5>No Scheduled deliveries <br>Your Scheduled deliveries will appear here</h5>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-card *ngFor=\"let job of jobs\" (click)=\"viewScheduledJob(job)\">\n          <ion-card-header>\n            <ion-row>\n              <ion-col style=\"padding-left: 0px;\" size=\"8\">\n                <ion-card-subtitle class=\"duration\">\n                  <ion-badge color=\"secondary\">\n                    Delivery Time: {{job.estimatedTime}}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n              <ion-col style=\"padding-right: 0px;\" size=\"4\">\n                <ion-card-subtitle class=\"distance\">\n                  <ion-badge color=\"primary\">\n                    <ion-icon name=\"navigate\"></ion-icon> {{job.distance}}km\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n            </ion-row>\n            <ion-card-title class=\"heading\">{{job.pickUpDetails.name}}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <div class=\"location-meta bg-blue\">\n              <div>\n                <img src=\"assets/location-icon-blue.svg\">\n                <ion-card-subtitle class=\"blue-fade\"> Pick Up</ion-card-subtitle>\n              </div>\n              <ion-card-title class=\"subtitle blue\">{{job.pickUpDetails.addressLineOne}}, {{job.pickUpDetails.postcode}}\n              </ion-card-title>\n            </div>\n\n            <ion-card-title class=\"heading\">{{job.dropOffDetails.name}}</ion-card-title>\n            <div class=\"location-meta bg-orange\">\n              <div>\n                <img src=\"assets/location-icon-orange.svg\">\n                <ion-card-subtitle class=\"orange-fade\"> Drop Off</ion-card-subtitle>\n              </div>\n              <ion-card-title class=\"subtitle orange\">{{job.dropOffDetails.addressLineOne}},\n                {{job.dropOffDetails.postcode}}</ion-card-title>\n            </div>\n            <ion-row>\n              <ion-col style=\"padding-left: 0px;\" size=\"8\">\n                <ion-card-subtitle class=\"duration\">\n                  <ion-badge color=\"success\">\n                    PICK UP DATE:{{job.scheduledTime | date : 'dd-MM-YYYY' }}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n              <ion-col style=\"padding-right: 0px;\" size=\"4\">\n                <ion-card-subtitle class=\"distance\">\n                  <ion-badge color=\"secondary\">\n                    PICK UP TIME: {{job.scheduledTime | date: 'HH:mm' }}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n    <!-- Completed Deliveries -->\n    <div *ngIf=\"selectedTab == 'Completed'\">\n      <div *ngIf=\"!completedJobs$\" class=\"loader-wrapper\">\n        <img src=\"assets/loader.svg\">\n        <h5 class=\"loading-text\">Loading deliveries...</h5>\n      </div>\n      <div *ngIf=\"completedJobs$ | async as jobs\">\n        <ion-grid *ngIf=\"jobs.length == 0\">\n          <ion-row>\n            <ion-col ion-padding>\n              <ion-text class=\"ion-text-center\" color=\"primary\">\n                <img src=\"assets/cross-icon.svg\" style=\"align-items: center;\">\n                <h5>No Completed deliveries <br>Your Completed deliveries will appear here</h5>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-card *ngFor=\"let job of jobs\">\n          <ion-card-header>\n            <ion-row>\n              <ion-col style=\"padding-left: 0px;\" size=\"8\">\n                <ion-card-subtitle class=\"duration\">\n                  <ion-badge color=\"secondary\">\n                    Delivery Time: {{job.estimatedTime}}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n              <ion-col style=\"padding-right: 0px;\" size=\"4\">\n                <ion-card-subtitle class=\"distance\">\n                  <ion-badge color=\"primary\">\n                    <ion-icon name=\"navigate\"></ion-icon> {{job.distance}}km\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n            </ion-row>\n            <ion-card-title class=\"heading\">{{job.pickUpDetails.name}}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <div class=\"location-meta bg-blue\">\n              <div>\n                <img src=\"assets/location-icon-blue.svg\">\n                <ion-card-subtitle class=\"blue-fade\"> Pick Up</ion-card-subtitle>\n              </div>\n              <ion-card-title class=\"subtitle blue\">{{job.pickUpDetails.addressLineOne}}, {{job.pickUpDetails.postcode}}\n              </ion-card-title>\n            </div>\n\n            <ion-card-title class=\"heading\">{{job.dropOffDetails.name}}</ion-card-title>\n            <div class=\"location-meta bg-orange\">\n              <div>\n                <img src=\"assets/location-icon-orange.svg\">\n                <ion-card-subtitle class=\"orange-fade\"> Drop Off</ion-card-subtitle>\n              </div>\n              <ion-card-title class=\"subtitle orange\">{{job.dropOffDetails.addressLineOne}},\n                {{job.dropOffDetails.postcode}}</ion-card-title>\n            </div>\n            <ion-row>\n              <ion-col style=\"padding-left: 0px;\" size=\"8\">\n                <ion-card-subtitle class=\"duration\">\n                  <ion-badge color=\"success\">\n                    Cost: £{{job.price}}\n                  </ion-badge>\n                </ion-card-subtitle>\n              </ion-col>\n\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ongoing-deliveries_ongoing-deliveries_module_ts-es2015.js.map