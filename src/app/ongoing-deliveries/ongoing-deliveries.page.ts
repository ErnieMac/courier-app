import { Component, OnInit } from '@angular/core';
import { BusinessBookingService } from '../services/business-booking.service';
import { Observable, of } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-ongoing-deliveries',
  templateUrl: './ongoing-deliveries.page.html',
  styleUrls: ['./ongoing-deliveries.page.scss'],
})
export class OngoingDeliveriesPage implements OnInit {

  selectedTab = 'Ongoing';
  ongoingJobs$: Observable<any>
  scheduledJobs$: Observable<any>
  completedJobs$: Observable<any>
  currentUser = this.loginService.currentUser.value
  constructor(
    private loginService: LoginService,
    private apiCalls: BusinessBookingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOngoingJobs()
  }

  getOngoingJobs() {
    // this.apiCalls.get('active/retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=m&jobType=food,e-commerce&status=').subscribe(res => {
    this.apiCalls.get('active/retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=&jobType=&status=').subscribe(res => {
      this.ongoingJobs$ = of(res)
    })
  }

  doRefresh(event) {
    this.ongoingJobs$ = null
    setTimeout(() => {
      this.getOngoingJobs()
      event.target.complete();
    }, 2000);
  }

  getScheduledJobs() {
    this.apiCalls.get('scheduled/retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=&jobType=&status=available').subscribe(res => {
      this.scheduledJobs$ = of(res)
    })
  }

  getCompletedJobs() {
    this.apiCalls.get('retrieve-all', 'id=' + this.currentUser.userDetails.id + '&parcelSize=&transportationType=&jobType=&status=').subscribe(res => {
      this.completedJobs$ = of(res)
    })
  }


  viewJob(job) {
    let navigationExtras: NavigationExtras = {
      state: {
        job: job
      }
    };
    this.router.navigate(['delivery-details'], navigationExtras);
  }

  viewScheduledJob(job) {
    let navigationExtras: NavigationExtras = {
      state: {
        job: job
      }
    };
    this.router.navigate(['delivery-details'], navigationExtras);
  }


}
