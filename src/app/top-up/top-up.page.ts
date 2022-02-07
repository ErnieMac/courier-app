import { Component, OnInit } from '@angular/core';
import { BusinessPaymentService } from '../services/business-payment.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, EMPTY, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})
export class TopUpPage implements OnInit {
  formGroup: FormGroup
  isError: boolean = false
  btnTxt = 'Add credit'
  account$: Observable<any>
  savedCards$: Observable<any>
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: BusinessPaymentService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      topUpAmount: new FormControl("", [Validators.required]),
      cardReference: new FormControl("", [Validators.required]),
    })
    this.getAccount()
    this.getSavedCards()
  }

  get topUpAmount() {
    return this.formGroup.get("topUpAmount");
  }
  get cardReference() {
    return this.formGroup.get("cardReference");
  }

  getSavedCards() {
    let user = this.loginService.currentUser.value
    console.log(user)
    this.savedCards$ = this.apiServices.get('retrieve-stored-card', 'businessId=' + user.userDetails.id).pipe(
      tap((cards) => "cards:" + cards),
      catchError((err) => {
        return EMPTY;
      })
    );
  }

  getAccount() {
    let user = this.loginService.currentUser.value
    this.account$ = this.apiServices.get('retrieve-account', 'id=' + user.userDetails.id).pipe(
      tap((account) => "account:" + account),
      catchError((err) => {
        return EMPTY;
      })
    );
  }

  handleFormSubmission(values) {
    this.btnTxt = 'Please wait...'
    let payLoad = values;
    payLoad["id"] = this.local.userDetails.id
    this.isError = false
    if (this.formGroup.valid) {
      this.apiServices.post('top-up', payLoad).subscribe(res => {
        this.btnTxt = 'Add credit'
        console.log(res)
        this.router.navigate(["my-balance"]);
      }, error => {
        this.btnTxt = 'Add credit'
        console.log(error)
      })
    }
    else {
      this.btnTxt = 'Add credit'
      this.isError = true;
    }
  }

}
