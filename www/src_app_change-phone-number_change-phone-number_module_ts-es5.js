(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdelivermate_business"] = self["webpackChunkdelivermate_business"] || []).push([["src_app_change-phone-number_change-phone-number_module_ts"], {
    /***/
    67187: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePhoneNumberPageRoutingModule": function ChangePhoneNumberPageRoutingModule() {
          return (
            /* binding */
            _ChangePhoneNumberPageRoutingModule
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


      var _change_phone_number_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-phone-number.page */
      54590);

      var routes = [{
        path: '',
        component: _change_phone_number_page__WEBPACK_IMPORTED_MODULE_0__.ChangePhoneNumberPage
      }];

      var _ChangePhoneNumberPageRoutingModule = function ChangePhoneNumberPageRoutingModule() {
        _classCallCheck(this, ChangePhoneNumberPageRoutingModule);
      };

      _ChangePhoneNumberPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangePhoneNumberPageRoutingModule);
      /***/
    },

    /***/
    96574: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePhoneNumberPageModule": function ChangePhoneNumberPageModule() {
          return (
            /* binding */
            _ChangePhoneNumberPageModule
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


      var _change_phone_number_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-phone-number-routing.module */
      67187);
      /* harmony import */


      var _change_phone_number_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-phone-number.page */
      54590);

      var _ChangePhoneNumberPageModule = function ChangePhoneNumberPageModule() {
        _classCallCheck(this, ChangePhoneNumberPageModule);
      };

      _ChangePhoneNumberPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _change_phone_number_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePhoneNumberPageRoutingModule],
        declarations: [_change_phone_number_page__WEBPACK_IMPORTED_MODULE_1__.ChangePhoneNumberPage]
      })], _ChangePhoneNumberPageModule);
      /***/
    },

    /***/
    54590: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePhoneNumberPage": function ChangePhoneNumberPage() {
          return (
            /* binding */
            _ChangePhoneNumberPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_change_phone_number_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./change-phone-number.page.html */
      6138);
      /* harmony import */


      var _change_phone_number_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-phone-number.page.scss */
      54766);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api-calls.service */
      80054);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      25917);

      var _ChangePhoneNumberPage = /*#__PURE__*/function () {
        function ChangePhoneNumberPage(apiServices, toastController, formBuilder, loginService) {
          _classCallCheck(this, ChangePhoneNumberPage);

          this.apiServices = apiServices;
          this.toastController = toastController;
          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.waitText = null;
          this.isError = false;
          this.verificationType = null;
          this.userDetails$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.loginService.currentUser.value);
        }

        _createClass(ChangePhoneNumberPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              intCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
              mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
            });
          }
        }, {
          key: "handleFormSubmission",
          value: function handleFormSubmission(values) {
            var _this = this;

            this.isError = false;

            if (this.form.valid) {
              var currentUser = this.loginService.currentUser.value;
              var data = {
                "id": currentUser.userDetails.id,
                "intCode": values.intCode,
                "mobileNumber": values.mobileNumber
              };
              this.apiServices.patch("update-account", data).subscribe(function (res) {
                console.log(res);
                _this.waitText = null;
              }, function (error) {
                console.log(error);
                _this.waitText = null;
              });
            } else {
              this.isError = true;
              console.log('Values are required...');
            }
          }
        }]);

        return ChangePhoneNumberPage;
      }();

      _ChangePhoneNumberPage.ctorParameters = function () {
        return [{
          type: _services_api_calls_service__WEBPACK_IMPORTED_MODULE_2__.ApiCallsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }];
      };

      _ChangePhoneNumberPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-phone-number',
        template: _raw_loader_change_phone_number_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_phone_number_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChangePhoneNumberPage);
      /***/
    },

    /***/
    54766: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  padding: 10px;\n}\n\nion-select {\n  padding-left: 10px;\n  padding-right: 8px;\n  font-size: 14px;\n}\n\nion-label {\n  font-weight: 400;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\n.txt-wrapper {\n  padding-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  border: 1px solid #d3d7da9a;\n}\n\n.select-wrapper {\n  border-radius: 4px;\n  border: 1px solid #d3d7da9a;\n}\n\nion-text p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1waG9uZS1udW1iZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUk7RUFDSSxlQUFBO0FBR1IiLCJmaWxlIjoiY2hhbmdlLXBob25lLW51bWJlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDU1MgRG9jdW1lbnRzXG5cbmlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLXNlbGVjdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnR4dC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbi5zZWxlY3Qtd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q3ZGE5YTtcbn1cbmlvbi10ZXh0IHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    6138: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title-android\">\n      Change phone no.\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"title-ios\">Change phone no.</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text class=\"ion-text-center\">\n          <p>Please enter your phone number to verify your account</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <form [formGroup]=\"form\" (ngSubmit)=\"handleFormSubmission(form.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label>Country code<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"select-wrapper\">\n            <ion-select slot=\"start\" formControlName=\"intCode\" placeholder=\"Select\">\n              <ion-select-option data-countryCode=\"GB\" value=\"44\" Selected>UK (+44)</ion-select-option>\n              <ion-select-option data-countryCode=\"US\" value=\"1\">USA (+1)</ion-select-option>\n              <!-- <ion-select-option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</ion-select-option>\n              <ion-select-option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</ion-select-option>\n              <ion-select-option data-countryCode=\"AO\" value=\"244\">Angola (+244)</ion-select-option>\n              <ion-select-option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</ion-select-option>\n              <ion-select-option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</ion-select-option>\n              <ion-select-option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</ion-select-option>\n              <ion-select-option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</ion-select-option>\n              <ion-select-option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</ion-select-option>\n              <ion-select-option data-countryCode=\"AU\" value=\"61\">Australia (+61)</ion-select-option>\n              <ion-select-option data-countryCode=\"AT\" value=\"43\">Austria (+43)</ion-select-option>\n              <ion-select-option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</ion-select-option>\n              <ion-select-option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</ion-select-option>\n              <ion-select-option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</ion-select-option>\n              <ion-select-option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</ion-select-option>\n              <ion-select-option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</ion-select-option>\n              <ion-select-option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</ion-select-option>\n              <ion-select-option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</ion-select-option>\n              <ion-select-option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</ion-select-option>\n              <ion-select-option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</ion-select-option>\n              <ion-select-option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</ion-select-option>\n              <ion-select-option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</ion-select-option>\n              <ion-select-option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</ion-select-option>\n              <ion-select-option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</ion-select-option>\n              <ion-select-option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</ion-select-option>\n              <ion-select-option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</ion-select-option>\n              <ion-select-option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</ion-select-option>\n              <ion-select-option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</ion-select-option>\n              <ion-select-option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</ion-select-option>\n              <ion-select-option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</ion-select-option>\n              <ion-select-option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</ion-select-option>\n              <ion-select-option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</ion-select-option>\n              <ion-select-option data-countryCode=\"CA\" value=\"1\">Canada (+1)</ion-select-option>\n              <ion-select-option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</ion-select-option>\n              <ion-select-option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</ion-select-option>\n              <ion-select-option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</ion-select-option>\n              <ion-select-option data-countryCode=\"CL\" value=\"56\">Chile (+56)</ion-select-option>\n              <ion-select-option data-countryCode=\"CN\" value=\"86\">China (+86)</ion-select-option>\n              <ion-select-option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</ion-select-option>\n              <ion-select-option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</ion-select-option>\n              <ion-select-option data-countryCode=\"CG\" value=\"242\">Congo (+242)</ion-select-option>\n              <ion-select-option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</ion-select-option>\n              <ion-select-option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</ion-select-option>\n              <ion-select-option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</ion-select-option>\n              <ion-select-option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</ion-select-option>\n              <ion-select-option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</ion-select-option>\n              <ion-select-option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</ion-select-option>\n              <ion-select-option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</ion-select-option>\n              <ion-select-option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</ion-select-option>\n              <ion-select-option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</ion-select-option>\n              <ion-select-option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</ion-select-option>\n              <ion-select-option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</ion-select-option>\n              <ion-select-option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</ion-select-option>\n              <ion-select-option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</ion-select-option>\n              <ion-select-option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</ion-select-option>\n              <ion-select-option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</ion-select-option>\n              <ion-select-option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</ion-select-option>\n              <ion-select-option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</ion-select-option>\n              <ion-select-option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</ion-select-option>\n              <ion-select-option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</ion-select-option>\n              <ion-select-option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</ion-select-option>\n              <ion-select-option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</ion-select-option>\n              <ion-select-option data-countryCode=\"FI\" value=\"358\">Finland (+358)</ion-select-option>\n              <ion-select-option data-countryCode=\"FR\" value=\"33\">France (+33)</ion-select-option>\n              <ion-select-option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</ion-select-option>\n              <ion-select-option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</ion-select-option>\n              <ion-select-option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</ion-select-option>\n              <ion-select-option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</ion-select-option>\n              <ion-select-option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</ion-select-option>\n              <ion-select-option data-countryCode=\"DE\" value=\"49\">Germany (+49)</ion-select-option>\n              <ion-select-option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</ion-select-option>\n              <ion-select-option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</ion-select-option>\n              <ion-select-option data-countryCode=\"GR\" value=\"30\">Greece (+30)</ion-select-option>\n              <ion-select-option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</ion-select-option>\n              <ion-select-option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</ion-select-option>\n              <ion-select-option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</ion-select-option>\n              <ion-select-option data-countryCode=\"GU\" value=\"671\">Guam (+671)</ion-select-option>\n              <ion-select-option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</ion-select-option>\n              <ion-select-option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</ion-select-option>\n              <ion-select-option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</ion-select-option>\n              <ion-select-option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</ion-select-option>\n              <ion-select-option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</ion-select-option>\n              <ion-select-option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</ion-select-option>\n              <ion-select-option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</ion-select-option>\n              <ion-select-option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</ion-select-option>\n              <ion-select-option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</ion-select-option>\n              <ion-select-option data-countryCode=\"IN\" value=\"91\">India (+91)</ion-select-option>\n              <ion-select-option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</ion-select-option>\n              <ion-select-option data-countryCode=\"IR\" value=\"98\">Iran (+98)</ion-select-option>\n              <ion-select-option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</ion-select-option>\n              <ion-select-option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</ion-select-option>\n              <ion-select-option data-countryCode=\"IL\" value=\"972\">Israel (+972)</ion-select-option>\n              <ion-select-option data-countryCode=\"IT\" value=\"39\">Italy (+39)</ion-select-option>\n              <ion-select-option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</ion-select-option>\n              <ion-select-option data-countryCode=\"JP\" value=\"81\">Japan (+81)</ion-select-option>\n              <ion-select-option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</ion-select-option>\n              <ion-select-option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</ion-select-option>\n              <ion-select-option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</ion-select-option>\n              <ion-select-option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</ion-select-option>\n              <ion-select-option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</ion-select-option>\n              <ion-select-option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</ion-select-option>\n              <ion-select-option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</ion-select-option>\n              <ion-select-option data-countryCode=\"LA\" value=\"856\">Laos (+856)</ion-select-option>\n              <ion-select-option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</ion-select-option>\n              <ion-select-option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</ion-select-option>\n              <ion-select-option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</ion-select-option>\n              <ion-select-option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</ion-select-option>\n              <ion-select-option data-countryCode=\"LY\" value=\"218\">Libya (+218)</ion-select-option>\n              <ion-select-option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</ion-select-option>\n              <ion-select-option data-countryCode=\"LT\" value=\"370\">Lithuania (+370)</ion-select-option>\n              <ion-select-option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</ion-select-option>\n              <ion-select-option data-countryCode=\"MO\" value=\"853\">Macao (+853)</ion-select-option>\n              <ion-select-option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</ion-select-option>\n              <ion-select-option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</ion-select-option>\n              <ion-select-option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</ion-select-option>\n              <ion-select-option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</ion-select-option>\n              <ion-select-option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</ion-select-option>\n              <ion-select-option data-countryCode=\"ML\" value=\"223\">Mali (+223)</ion-select-option>\n              <ion-select-option data-countryCode=\"MT\" value=\"356\">Malta (+356)</ion-select-option>\n              <ion-select-option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</ion-select-option>\n              <ion-select-option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</ion-select-option>\n              <ion-select-option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</ion-select-option>\n              <ion-select-option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</ion-select-option>\n              <ion-select-option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</ion-select-option>\n              <ion-select-option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</ion-select-option>\n              <ion-select-option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</ion-select-option>\n              <ion-select-option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</ion-select-option>\n              <ion-select-option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</ion-select-option>\n              <ion-select-option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</ion-select-option>\n              <ion-select-option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</ion-select-option>\n              <ion-select-option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</ion-select-option>\n              <ion-select-option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</ion-select-option>\n              <ion-select-option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</ion-select-option>\n              <ion-select-option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</ion-select-option>\n              <ion-select-option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</ion-select-option>\n              <ion-select-option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</ion-select-option>\n              <ion-select-option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</ion-select-option>\n              <ion-select-option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</ion-select-option>\n              <ion-select-option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</ion-select-option>\n              <ion-select-option data-countryCode=\"NE\" value=\"227\">Niger (+227)</ion-select-option>\n              <ion-select-option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</ion-select-option>\n              <ion-select-option data-countryCode=\"NU\" value=\"683\">Niue (+683)</ion-select-option>\n              <ion-select-option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</ion-select-option>\n              <ion-select-option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</ion-select-option>\n              <ion-select-option data-countryCode=\"NO\" value=\"47\">Norway (+47)</ion-select-option>\n              <ion-select-option data-countryCode=\"OM\" value=\"968\">Oman (+968)</ion-select-option>\n              <ion-select-option data-countryCode=\"PW\" value=\"680\">Palau (+680)</ion-select-option>\n              <ion-select-option data-countryCode=\"PA\" value=\"507\">Panama (+507)</ion-select-option>\n              <ion-select-option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</ion-select-option>\n              <ion-select-option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</ion-select-option>\n              <ion-select-option data-countryCode=\"PE\" value=\"51\">Peru (+51)</ion-select-option>\n              <ion-select-option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</ion-select-option>\n              <ion-select-option data-countryCode=\"PL\" value=\"48\">Poland (+48)</ion-select-option>\n              <ion-select-option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</ion-select-option>\n              <ion-select-option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</ion-select-option>\n              <ion-select-option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</ion-select-option>\n              <ion-select-option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</ion-select-option>\n              <ion-select-option data-countryCode=\"RO\" value=\"40\">Romania (+40)</ion-select-option>\n              <ion-select-option data-countryCode=\"RU\" value=\"7\">Russia (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</ion-select-option>\n              <ion-select-option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</ion-select-option>\n              <ion-select-option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</ion-select-option>\n              <ion-select-option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</ion-select-option>\n              <ion-select-option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</ion-select-option>\n              <ion-select-option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</ion-select-option>\n              <ion-select-option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</ion-select-option>\n              <ion-select-option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</ion-select-option>\n              <ion-select-option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</ion-select-option>\n              <ion-select-option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</ion-select-option>\n              <ion-select-option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</ion-select-option>\n              <ion-select-option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</ion-select-option>\n              <ion-select-option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</ion-select-option>\n              <ion-select-option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</ion-select-option>\n              <ion-select-option data-countryCode=\"ES\" value=\"34\">Spain (+34)</ion-select-option>\n              <ion-select-option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</ion-select-option>\n              <ion-select-option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</ion-select-option>\n              <ion-select-option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</ion-select-option>\n              <ion-select-option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</ion-select-option>\n              <ion-select-option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</ion-select-option>\n              <ion-select-option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</ion-select-option>\n              <ion-select-option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</ion-select-option>\n              <ion-select-option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</ion-select-option>\n              <ion-select-option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</ion-select-option>\n              <ion-select-option data-countryCode=\"SI\" value=\"963\">Syria (+963)</ion-select-option>\n              <ion-select-option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</ion-select-option>\n              <ion-select-option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</ion-select-option>\n              <ion-select-option data-countryCode=\"TG\" value=\"228\">Togo (+228)</ion-select-option>\n              <ion-select-option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</ion-select-option>\n              <ion-select-option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</ion-select-option>\n              <ion-select-option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</ion-select-option>\n              <ion-select-option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</ion-select-option>\n              <ion-select-option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</ion-select-option>\n              <ion-select-option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)\n              </ion-select-option>\n              <ion-select-option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</ion-select-option>\n              <ion-select-option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</ion-select-option>\n              <ion-select-option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</ion-select-option>\n              <ion-select-option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</ion-select-option>\n              <ion-select-option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</ion-select-option>\n              <ion-select-option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</ion-select-option>\n              <ion-select-option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</ion-select-option>\n              <ion-select-option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</ion-select-option>\n              <ion-select-option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</ion-select-option>\n              <ion-select-option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</ion-select-option>\n              <ion-select-option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</ion-select-option>\n              <ion-select-option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</ion-select-option>\n              <ion-select-option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</ion-select-option>\n              <ion-select-option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</ion-select-option>\n              <ion-select-option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</ion-select-option>\n              <ion-select-option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</ion-select-option>\n              <ion-select-option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</ion-select-option> -->\n            </ion-select>\n          </div>\n          <ion-label *ngIf=\"isError\" color=\"danger\">Country code is required</ion-label>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <ion-label>Phone number <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <div class=\"txt-wrapper\">\n            <ion-input type=\"tel\" formControlName=\"mobileNumber\"  placeholder=\"0798345687\"></ion-input>\n          </div>\n          <ion-label *ngIf=\"isError\" color=\"danger\">Phone number is required</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\">Update\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_change-phone-number_change-phone-number_module_ts-es5.js.map