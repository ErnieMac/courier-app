import { Component, OnInit } from '@angular/core';
import { BusinessPaymentService } from '../services/business-payment.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.page.html',
  styleUrls: ['./transaction-history.page.scss'],
})
export class TransactionHistoryPage implements OnInit {
  account$: Observable<any>
  transactions$: Observable<any>
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: BusinessPaymentService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.getTransactions()
  }

  getTransactions() {
    let user = this.loginService.currentUser.value
    this.transactions$ = this.apiServices.get('retrieve-all', 'id=' + user.userDetails.id).pipe(
      tap((transaction) => "transaction:" + transaction),
      catchError((err) => {
        return EMPTY;
      })
    );
  }

  timestampToDate(transactiondate) {
    let date = new Date(transactiondate.substring(0, 10));
    let time = transactiondate.substring(11, 19);
    let validDate = date.getDate().toString().padStart(2, "0") +'-' + (date.getMonth()+1).toString().padStart(2, "0") + '-' + date.getFullYear() +' '+ time;
    return validDate
  }



}
