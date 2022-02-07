import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BusinessBookingService {
  private Url = environment.businessBooking;
  constructor(private http: HttpClient) { }

  post(endpoint, payload): Observable<any> {
    return this.http
      .post<any>(this.Url + endpoint, payload)
      .pipe(
        tap((data) => true)
      );
  }

  get(endpoint, payload): Observable<any> {
    return this.http
      .get<any>(this.Url + endpoint + '?' + payload)
      .pipe(
        tap((data) => true)
      );
  }

  patch(endpoint, payload): Observable<any> {
    return this.http
      .patch<any>(this.Url + endpoint, payload)
      .pipe(
        tap((data) => true)
      );
  }

  delete(endpoint, payload): Observable<any> {
    return this.http
      .delete<any>(this.Url + endpoint + '?' + payload)
      .pipe(
        tap((data) => true)
      );
  }

}
