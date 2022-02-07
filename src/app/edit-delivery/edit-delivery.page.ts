import { Component, OnInit } from '@angular/core';
import { BusinessBookingService } from '../services/business-booking.service';
import { ToastController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LoginService } from '../services/login.service'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.page.html',
  styleUrls: ['./edit-delivery.page.scss'],
})
export class EditDeliveryPage implements OnInit {
  local = this.loginService.currentUser.value
  job$: Observable<any>
  constructor(
    private apiServices: BusinessBookingService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: ActivatedRoute,
    private route: Router,
    private loginService: LoginService
  ) { }

  formGroup: FormGroup
  isError: boolean = false
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      pickUpName: new FormControl("", [Validators.required]),
      pickUpNumber: new FormControl("", [Validators.required]),
      dropOffName: new FormControl("", [Validators.required]),
      dropOffNumber: new FormControl("", [Validators.required]),
      pickUpIntCode: new FormControl("44", [Validators.required]),
      dropOffIntCode: new FormControl("44", [Validators.required]),
    })
    this.router.queryParams.subscribe(_p => {
      let navParams = this.route.getCurrentNavigation().extras.state
      console.log(navParams.job)
      this.job$ = of(navParams.job)
      this.formGroup.patchValue({
        pickUpName: navParams.job.pickUpDetails.name,
        pickUpNumber: navParams.job.pickUpDetails.number,
        dropOffName: navParams.job.dropOffDetails.name,
        dropOffNumber: navParams.job.dropOffDetails.number,
        pickUpIntCode: navParams.job.pickUpDetails.intcode,
        dropOffIntCode: navParams.job.dropOffDetails.intcode,
      });
    })
  }

  get pickUpName() {
    return this.formGroup.get("pickUpName");
  }
  get pickUpNumber() {
    return this.formGroup.get("pickUpNumber");
  }
  get dropOffName() {
    return this.formGroup.get("dropOffName");
  }
  get dropOffNumber() {
    return this.formGroup.get("dropOffNumber");
  }
  get pickUpIntCode() {
    return this.formGroup.get("pickUpIntCode");
  }
  get dropOffIntCode() {
    return this.formGroup.get("dropOffIntCode");
  }

  async handleFormSubmission(formValues) {
    var data = {
      'userId': this.local.userDetails.id,
      'pickUpName': formValues.pickUpName,
      'pickUpNumber': formValues.pickUpNumber,
      "dropOffName": formValues.dropOffName,
      "dropOffNumber": formValues.dropOffNumber,
      "pickUpIntCode": formValues.pickUpIntCode,
      "dropOffIntCode": formValues.dropOffIntCode,
      "jobId": this.router.snapshot.paramMap.get("id")
    }
    if (this.formGroup.valid) {
      this.isError = false;
      console.log(data)
      this.apiServices.patch('update-job', data).subscribe(res => {
        console.log(res)
      }, async error => {
        console.log(error)
        const toast = await this.toastController.create({
          message: error.error.message,
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
      })
    }
    else {
      this.isError = true;
      console.log('All Fields Are Required')
    }
  }

}
