import { Component, OnInit } from '@angular/core';
import { ToastController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiCallsService } from '../services/api-calls.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private apiServices: ApiCallsService
  ) { }
  formGroup: FormGroup
  isError: boolean = false
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl("", [Validators.required]),
    })
  }

  get email() {
    return this.formGroup.get("email");
  }

  handleFormSubmission(formValues) {
    if (this.formGroup.valid) {
      this.isError = false;
      console.log(formValues)
      this.apiServices.post('forgotten-password', formValues).subscribe(async res => {
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Password reset link has been sent. Pleas check your email',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
      }, async error => {
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
      console.log('Email is Required')
    }
  }

}
