import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiCallsService } from '../services/api-calls.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.page.html",
  styleUrls: ["./change-password.page.scss"],
})
export class ChangePasswordPage implements OnInit {
  local = this.loginService.currentUser.value
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private apiServices: ApiCallsService,
    private loginService: LoginService,
  ) { }
  formGroup: FormGroup
  isError: boolean = false
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      existingPassword: new FormControl("", [Validators.required]),
      newPassword: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
    })
  }

  get existingPassword() {
    return this.formGroup.get("existingPassword");
  }
  get newPassword() {
    return this.formGroup.get("newPassword");
  }
  get confirmPassword() {
    return this.formGroup.get("confirmPassword");
  }

  handleFormSubmission(formValues) {
    if (this.formGroup.valid) {
      this.isError = false;
      formValues['id'] = this.local.userDetails.id
      console.log(formValues)
      if (formValues['confirmPassword'] == formValues['newPassword']) {
        delete formValues['confirmPassword']

        this.apiServices.patch('password', formValues).subscribe(async res => {
          console.log(res)
          const toast = await this.toastController.create({
            message: 'Password reset successfully!',
            duration: 3000,
            position: 'bottom',
            color: 'success'
          });
          toast.present();
          this.router.navigate(["business-dashboard"])
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
        alert('Password doesn\'t match.')
      }
    }
    else {
      this.isError = true;
    }
  }

}
