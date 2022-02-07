import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has("skip")) {
      request = request.clone({
        headers: request.headers.delete("skip"),
      });
    } else {
      // add authorization header with jwt token if available
      let currentUser = this.loginService.currentUser.value;
      // const user = this.loginService.storageInstance
      if (currentUser && currentUser.token.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token.token}`,
          },
        });
      }
    }

    return next.handle(request);
  }

}
