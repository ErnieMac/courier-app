import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer, Subscription } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { TrackLocationService } from '../global/track-location.service';
import { ApiCallsService } from '../services/api-calls.service';
import { LoginService } from '../services/login.service';
import { AddressServiceService } from '../services/address-service.service';

export interface location {
  pickUp: { lat: number, lng: number },
  dropOff: { lat: number, lng: number },
};

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.page.html',
  styleUrls: ['./delivery-details.page.scss'],
})
export class DeliveryDetailsPage implements OnInit, OnDestroy {
  apiLoaded: Observable<boolean>;
  callPickup$: Observable<string>;
  callDropOff$: Observable<string>;
  collecting$: Observable<string>;
  job$: Observable<any>;
  addressSubject$ = this.addressService.addressSubject.value
  currentUser = this.loginService.currentUser.value
  subscription: Subscription;
  calling = false
  public latlng$: Observable<location>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationService: TrackLocationService,
    private apiServices: ApiCallsService,
    private loginService: LoginService,
    private addressService: AddressServiceService,
    httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAd9vZGWXanh-zvkphgh6tcLN0sqDkxgcg', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit() {
    let navParams = null;
    this.route.queryParams.subscribe(_p => {
      navParams = this.router.getCurrentNavigation().extras.state
      console.log(navParams)
      this.job$ = of(navParams.job)
      // const job = this.router.getCurrentNavigation().extras.state
    })
    let jobLocation = {
      pickUp: { lat: navParams.job.pickUpDetails.latitude, lng: navParams.job.pickUpDetails.longitude },
      dropOff: { lat: navParams.job.dropOffDetails.latitude, lng: navParams.job.dropOffDetails.longitude }
    }
    console.log(jobLocation)
    this.latlng$ = of(jobLocation)
    if (navParams.job.status === 'collected') {
      this.getCourierLocation(navParams.job.assignedCourier.courierId, navParams)
    }
  }

  getDetails(event) {
    this.job$.subscribe(res => {
      let jobLocation = {
        pickUp: { lat: res.pickUpDetails.latitude, lng: res.pickUpDetails.longitude },
        dropOff: { lat: res.dropOffDetails.latitude, lng: res.dropOffDetails.longitude }
      }
      console.log(jobLocation)
      this.latlng$ = of(jobLocation)
      if (res.status === 'collected') {
        this.getCourierLocation(res.assignedCourier.courierId, res)
      }
      event.target.complete()
    })
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  callCourier(job) {
    this.calling = true
    console.log(job, this.currentUser.userDetails)
    var data = {
      "callerintCode": this.currentUser.userDetails.intCode,
      "caller": this.currentUser.userDetails.mobileNumber,
      "callingintCode": job.assignedCourier.intCode,
      "calling": job.assignedCourier.mobileNumber,
    }
    this.apiServices.call('call?userId=' + this.currentUser.userDetails.id, data).subscribe(res => {
      console.log(res)
      this.calling = false
    }, error => {
      this.calling = false
    })
  }

  getCourierLocation(courierId, navParams) {
    this.locationService.googleAuthToken().subscribe(async res => {
      let jobLocation = {
        pickUp: { lat: navParams.job.pickUpDetails.latitude, lng: navParams.job.pickUpDetails.longitude },
        dropOff: { lat: navParams.job.dropOffDetails.latitude, lng: navParams.job.dropOffDetails.longitude }
      }
      this.latlng$ = of(jobLocation)
      this.subscription = timer(0, 20000).pipe(
        switchMap(() => this.trackLocation(courierId, res, navParams))
      ).subscribe()

    })
  }

  editJob(job) {
    let navigationExtras: NavigationExtras = {
      state: {
        job: job
      }
    };
    this.router.navigate(['edit-delivery', job.id], navigationExtras);
  }

  async trackLocation(courierId, res, navParams) {
    const courierLocation = await this.locationService.getLocation(courierId, res.message)
    courierLocation.subscribe(res => {
      console.log(res)
      let jobLocation = {
        pickUp: { lat: res.Lat, lng: res.Lng },
        dropOff: { lat: navParams.job.dropOffDetails.latitude, lng: navParams.job.dropOffDetails.longitude }
      }
      this.latlng$ = of(jobLocation)
    })
  }

  timestampToDate(pickupdate) {
    let date = new Date(pickupdate.substring(0, 10));
    let validDate = date.getDate().toString().padStart(2, "0") +'-' + (date.getMonth()+1).toString().padStart(2, "0") + '-' + date.getFullYear();
    return validDate
  }

  timestampToTime(pickuptime) {
    let time = pickuptime.substring(11, 19);
    let validTime = time;
    return validTime
  }

}
