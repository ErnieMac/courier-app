import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { ToastController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LoginService } from '../services/login.service'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BusinessBookingService } from '../services/business-booking.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-make-claim',
  templateUrl: './make-claim.page.html',
  styleUrls: ['./make-claim.page.scss'],
})
export class MakeClaimPage implements OnInit {
  submitText: Observable<any>
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: BusinessBookingService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: ActivatedRoute,
    private route: Router,
    private loginService: LoginService
  ) { this.submitText = of('Submit') }

  formGroup: FormGroup
  isError: boolean = false
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      claimReason: new FormControl("", [Validators.required]),
      claimNotes: new FormControl(""),
    })

  }

  get claimReason() {
    return this.formGroup.get("claimReason");
  }
  // get claimNotes() {
  //   return this.formGroup.get("claimNotes");
  // }

  async handleFormSubmission(formValues) {
    this.submitText = of('Please wait...')
    var data = {
      'userId': this.local.userDetails.id,
      'claimNotes': formValues.claimNotes,
      'claimReason': formValues.claimReason,
      "jobId": this.router.snapshot.paramMap.get("id")
    }
    if (this.formGroup.valid) {
      this.isError = false;
      console.log(data)
      this.apiServices.patch('claim-job', data).subscribe(res => {
        this.submitText = of('Submit')
        console.log(res)

        let navigationExtras: NavigationExtras = {
          state: {
            job: res
          }
        };
        this.route.navigate(['delivery-details'], navigationExtras);

      }, async error => {
        this.submitText = of('Submit')
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
