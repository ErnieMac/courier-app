import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { Storage } from '@ionic/storage-angular';
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
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.page.html',
  styleUrls: ['./phone-verification.page.scss'],
})
export class PhoneVerificationPage implements OnInit {
  waitText = null;
  codeForm: FormGroup
  isError: boolean = false
  verificationType = null
  userDetails$: Observable<any> = of(this.loginService.currentUser.value)
  constructor(
    private apiServices: ApiCallsService,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private storage: Storage,
    private router: Router
  ) {
    // this.userDetails$.subscribe(res => { console.log(res) })
  }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      verificationNumber: new FormControl("", [Validators.required]),
    })
    // this.getUser()
  }

  async getUser() {
    let user = await this.loginService.isLoggedIn()
    this.userDetails$ = of(user)
  }

  generateVerificationCode(type) {
    this.verificationType = type
    let currentUser = this.loginService.currentUser.value;
    // this.userDetails$.subscribe(res => {
    //   currentUser = res.loggedInUser
    //   console.log(res)
    // })
    let data = {
      "id": currentUser.userDetails.id,
      "reason": "business verification",
      "userType": "business",
    }
    if (type == 'TEXT') {
      this.waitText = 'sending'
      data['verificationType'] = "mobile";
      console.log(data)
      this.apiServices.post("generate-verification-code", data).subscribe(res => {
        console.log(res)
        this.waitText = null
      }, error => {
        console.log(error)
        this.waitText = null
      })
    }
  }

  verifyVerificationCode(formValues) {
    this.waitText = 'Please wait...'
    if (this.codeForm.valid) {
      const currentUser = this.loginService.currentUser.value;
      let data = {
        "userId": currentUser.userDetails.id,
        "verificationNumber": formValues.verificationNumber
      }
      // if (this.verificationType == 'SMS') {
      data['type'] = "mobile";
      console.log(data)
      this.apiServices.post("verify-verification-code", data).subscribe(res => {
        console.log(res)
        let user = this.loginService.currentUser.value
        user.userDetails.verifiedMobileNumber = true;
        this.loginService.currentUser.next(user)
        this.storage.set('userDetails', user);
        this.waitText = null
        // if (currentUser.userDetails.verifiedMobileNumber == true ) {
        //   this.router.navigate(["business-dashboard"]);
        // }

        // else {
        //   this.router.navigate(["login"]);
        // }
        this.router.navigate(['business-dashboard']);
      }, error => {
        console.log(error)
        this.waitText = null
      })
      // }

    }
    else {
      this.waitText = null
      console.log('Please Enter Code..')
    }
  }

}
