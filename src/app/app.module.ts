import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from "@angular/common/http";
import { ErrorInterceptor } from "./helper/error.interceptor";
import { JwtInterceptor } from "./helper/jwt.interceptor";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AutoCompletePlacesComponent } from './shared/google/auto-complete-places/auto-complete-places.component';
import { FCM } from '@ionic-native/fcm/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()],
  providers: [
    FCM,
    Geolocation,
    NativeGeocoder,
    BackgroundGeolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
