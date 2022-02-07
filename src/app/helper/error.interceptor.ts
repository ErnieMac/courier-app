import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
// import { LoginService } from "../login/shared/login.service";
import { ToastController } from "@ionic/angular";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    // private loginService: LoginService,
    private toastController: ToastController
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // catchError((err) => {
      //   if (err.status === 401) {
      //     // auto logout if 401 response returned from api
      //     this.loginService.logout();
      //     window.location.reload;
      //   }
      //   if (err.status === 400) {
      //     const validationErrors = err.error.validationErrors;
      //     return throwError(validationErrors);
      //   }
      //   const error = err.error.message || err.statusText;
      //   return throwError(error);
      // })
    );
  }
}
