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
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-change-phone-number',
  templateUrl: './change-phone-number.page.html',
  styleUrls: ['./change-phone-number.page.scss'],
})
export class ChangePhoneNumberPage implements OnInit {
  waitText = null;
  form: FormGroup
  isError: boolean = false
  verificationType = null
  userDetails$: Observable<any> = of(this.loginService.currentUser.value)
  constructor(
    private apiServices: ApiCallsService,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      intCode: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [Validators.required]),
    })
  }

  handleFormSubmission(values) {
    this.isError = false
    if (this.form.valid) {
      const currentUser = this.loginService.currentUser.value;
      let data = {
        "id": currentUser.userDetails.id,
        "intCode": values.intCode,
        "mobileNumber": values.mobileNumber,
      }
      this.apiServices.patch("update-account", data).subscribe(res => {
        console.log(res)
        let user = this.loginService.currentUser.value;
        user.userDetails = res;
        this.loginService.currentUser.next(user)
        this.waitText = null
        this.router.navigate(['phone-verification']);
      }, error => {
        console.log(error)
        this.waitText = null
      })
    }
    else {
      this.isError = true;
      console.log('Values are required...')
    }
  }

}
