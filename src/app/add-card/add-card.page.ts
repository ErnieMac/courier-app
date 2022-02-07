import { Component, OnInit } from '@angular/core';
import { BusinessPaymentService } from '../services/business-payment.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastController } from "@ionic/angular";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  formGroup: FormGroup
  isError: boolean = false
  btnTxt = 'Add card'
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: BusinessPaymentService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      cardReference: new FormControl("", [Validators.required]),
      cardNumber: new FormControl("", [Validators.required]),
      cardHolderName: new FormControl("", [Validators.required]),
      expiryDate: new FormControl("", [Validators.required]),
      cvv: new FormControl("", [Validators.required]),
    })
  }

  get cardReference() {
    return this.formGroup.get("cardReference");
  }
  get cardNumber() {
    return this.formGroup.get("cardNumber");
  }
  get cardHolderName() {
    return this.formGroup.get("cardHolderName");
  }
  get expiryDate() {
    return this.formGroup.get("expiryDate");
  }
  get cvv() {
    return this.formGroup.get("cvv");
  }

  async handleFormSubmission(values) {
    this.btnTxt = 'Please wait...'
    let payLoad = values;
    console.log(this.loginService.currentUser.value)
    payLoad["userId"] = this.local.userDetails.id
    this.isError = false
    if (this.formGroup.valid) {
      this.apiServices.post('stored-card', payLoad).subscribe(async res =>  {
        this.btnTxt = 'Add card'
        const toast = await this.toastController.create({
          message: 'Card Added',
          duration: 3000,
          position: 'bottom',
          color: 'primary'
        });
        toast.present();
        console.log(res)
        this.router.navigate(["my-balance"]);
      }, async error => {
        this.btnTxt = 'Add card'
        console.log(error)
        const toast = await this.toastController.create({
          message: 'Invalid Card Details',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        toast.present();
      })
    }
    else {
      this.btnTxt = 'Add card'
      this.isError = true;
    }
  }

}
