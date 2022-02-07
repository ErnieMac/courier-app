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
  selector: 'app-recurring-payment',
  templateUrl: './recurring-payment.page.html',
  styleUrls: ['./recurring-payment.page.scss'],
})
export class RecurringPaymentPage implements OnInit {
  formGroup: FormGroup
  isError: boolean = false
  btnTxt = 'Save'
  savedCards$: Observable<any>
  savedDetails$: Observable<any>
  deleteRecurring$: Observable<any>
  local = this.loginService.currentUser.value
  showRecurringDeleteButton: boolean = false
  constructor(
    private apiServices: BusinessPaymentService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      recurring: new FormControl("", [Validators.required]),
      topUpAmount: new FormControl("", [Validators.required]),
      creditLimit: new FormControl("", [Validators.required]),
      cardId: new FormControl("", [Validators.required]),
    })
    this.getSavedCards()
  }
  get recurring() {
    return this.formGroup.get("recurring");
  }
  get topUpAmount() {
    return this.formGroup.get("topUpAmount");
  }
  get creditLimit() {
    return this.formGroup.get("creditLimit");
  }
  get cardId() {
    return this.formGroup.get("cardId");
  }

  deleteRecurring() {
    let user = this.loginService.currentUser.value
    this.apiServices.delete('remove-recurring', 'businessId=' + user.userDetails.id).subscribe(res => {
      console.log(res)
      this.savedDetails$ = of(res)
      this.router.navigate(["my-balance"]);
    })

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
    this.savedDetails$ = this.apiServices.get('retrieve-recurring', 'id=' + user.userDetails.id).pipe(
      tap((cards) => "details:" + cards),
      catchError((err) => {
        return EMPTY;
      })
    );
    this.savedDetails$.subscribe(res => {
      this.formGroup.patchValue({
        topUpAmount: res.topUpAmount,
        creditLimit: res.creditLimit,
        recurring: res.recurring ? 'yes' : 'no',
        cardId: res.cardId
      })
      this.showRecurringDeleteButton = true
    })
  }

  handleFormSubmission(values) {
    this.btnTxt = 'Please wait...'
    let payLoad = values;
    payLoad["userId"] = this.local.userDetails.id
    console.log(payLoad)
    this.isError = false
    if (this.formGroup.valid) {
      this.apiServices.post('recurring', payLoad).subscribe(res => {
        this.btnTxt = 'Save'
        console.log(res)
        this.router.navigate(["my-balance"]);
      }, error => {
        this.btnTxt = 'Save'
        console.log(error)
      })
    }
    else {
      this.btnTxt = 'Save'
      this.isError = true;
    }
  }

}
