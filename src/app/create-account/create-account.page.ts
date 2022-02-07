import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { Router } from '@angular/router';
import { ToastController } from "@ionic/angular";
import { Storage } from '@ionic/storage-angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  signUpForm: FormGroup
  isError: boolean = false
  constructor(
    private apiServices: ApiCallsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      businessName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
      confirmEmail: new FormControl("", [Validators.required]),
      intCode: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [Validators.required]),
      industry: new FormControl("", [Validators.required]),
    })
  }

  get firstname() {
    return this.signUpForm.get("firstname");
  }
  get lastname() {
    return this.signUpForm.get("lastname");
  }
  get businessName() {
    return this.signUpForm.get("businessName");
  }
  get email() {
    return this.signUpForm.get("email");
  }
  get confirmEmail() {
    return this.signUpForm.get("confirmEmail");
  }
  get password() {
    return this.signUpForm.get("password");
  }
  get confirmPassword() {
    return this.signUpForm.get("confirmPassword");
  }
  get intCode() {
    return this.signUpForm.get("intCode");
  }
  get mobileNumber() {
    return this.signUpForm.get("mobileNumber");
  }
  get industry() {
    return this.signUpForm.get("industry");
  }

  handleFormSubmission(formValues) {
    if (this.signUpForm.valid) {
      this.isError = false;
      console.log(formValues)
      this.apiServices.post('create-account', formValues).subscribe(async (res) => {
        const toast = await this.toastController.create({
          message: res.message,
          color: 'success',
          duration: 2000,
        });
        toast.present();
        if (res.message == 'success') {
          this.storage.clear()
          this.router.navigate(["/login"])
        }
      }, async (error) => {
        if (Array.isArray(error.error.validationErrors)) {
          error.error.validationErrors.forEach(async (val) => {
            const res = val.error[0];

            const toast = await this.toastController.create({
              message: `${val.fieldName} has error : ${res}`,
              color: 'danger',
              duration: 2000,
            });
            if (res) {
              toast.present();
            }
          });
        } else {
          const toast = await this.toastController.create({
            message: error,
            color: 'danger',
            duration: 2000,
          });
          toast.present();
        }
        console.log(error)
      })
    }
    else {
      this.isError = true;
      console.log('All Fields Are Required')
    }
  }

}
