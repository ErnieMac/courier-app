// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: "https://testrestapi.delivermateapp.com:8085/deliver-mate/backend/api/business/",
  businessPayment: "https://testrestapi.delivermateapp.com:8085/deliver-mate/backend/api/business-payment/",
  businessCommunication: "https://testrestapi.delivermateapp.com:8085/deliver-mate/backend/api/booking-communication/",
  businessBooking: "https://testrestapi.delivermateapp.com:8085/deliver-mate/backend/api/business-booking/",
  jobs_api: "https://testrestapi.delivermateapp.com:8085/deliver-mate/backend/api/",
  firebaseApi: "https://testrestapi.delivermateapp.com:8085/deliver-mate/backend/api/firebase-api/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
