import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../helper/auth.guard';
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

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private auth: AuthGuard,
    private apiServices: ApiCallsService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private loginService: LoginService) { }
  loginForm: FormGroup
  isError: boolean = false
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })

  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  handleFormSubmission(formValues) {
    if (this.loginForm.valid) {
      this.isError = false;
      console.log(formValues)
      this.apiServices.post('login', formValues).subscribe(res => {
        console.log(res)
        this.handleLogin(res)
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
      console.log('All Fields Are Required')
    }
  }

  async handleLogin(response) {
    await this.loginService.createStorage()
    await this.loginService.storageInstance.set('loggedIn', true)
    await this.loginService.storageInstance.set('userDetails', response)
    this.loginService.currentUser.next(response)
    const toast = await this.toastController.create({
      message: `Welcome ${response.userDetails.firstname} ${response.userDetails.lastname}`,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
    toast.present();
    if (response.userDetails.verifiedMobileNumber == false) {
      this.router.navigate(["phone-verification"]);
    }
    if (response.userDetails.verifiedMobileNumber == true) {
      this.router.navigate(["business-dashboard"]);
    }
  }

}
