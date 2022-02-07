import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { BusinessBookingService } from '../services/business-booking.service';
import { ToastController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LoginService } from '../services/login.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancel-delivery',
  templateUrl: './cancel-delivery.page.html',
  styleUrls: ['./cancel-delivery.page.scss'],
})
export class CancelDeliveryPage implements OnInit {
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: ApiCallsService,
    private bookingService: BusinessBookingService,
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
      cancelReason: new FormControl("", [Validators.required]),
      cancelNotes: new FormControl(""),
    })

  }

  get cancelReason() {
    return this.formGroup.get("cancelReason");
  }
  // get claimNotes() {
  //   return this.formGroup.get("claimNotes");
  // }

  async handleFormSubmission(formValues) {
    var data = {
      'userId': this.local.userDetails.id,
      'cancelReason': formValues.cancelReason,
      'cancelNotes': formValues.cancelNotes,
      "jobId": this.router.snapshot.paramMap.get("id")
    }
    if (this.formGroup.valid) {
      this.isError = false;
      console.log(data)
      this.bookingService.patch('cancel-job', data).subscribe(async res => {
        console.log(res)
        const toast = await this.toastController.create({
          message: res.message,
          duration: 3000,
          position: 'bottom',
          color: 'success'
        });
        toast.present();
        this.route.navigateByUrl('ongoing-deliveries')
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
