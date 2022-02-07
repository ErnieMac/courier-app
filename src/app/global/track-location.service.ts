import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription, timer, throwError, of, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoginService } from '../services/login.service'

@Injectable({
  providedIn: 'root'
})
export class TrackLocationService {
  private Url = environment.jobs_api;
  tracker: any;
  private googleToken: BehaviorSubject<any> = new BehaviorSubject(null);
  additionalDetails: Observable<any> = new BehaviorSubject(null);
  vehicleType: BehaviorSubject<any> = new BehaviorSubject(null);
  subscription: Subscription;
  currentUser = this.loginService.currentUser.value
  firebaseURL = "https://delivermate-app-default-rtdb.firebaseio.com/";
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
    private geolocation: Geolocation,

  ) { }

  googleAuthToken(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.currentUser.token}`
      }),
    };
    return this.httpClient.get<any>(this.Url + "firebase-api/create-google-cred?customerNumber=00000&id=00000", options)
  }

  async getLocation(courier, token) {
    var location = new Subject<any>();
    await this.httpClient
      .get<any>(this.firebaseURL + "couriers/" + courier + ".json?access_token=" + token)
      .subscribe(
        data => { location.next(data) },
        error => console.log('oops', error)
      );
    return location.asObservable()
  }
}
