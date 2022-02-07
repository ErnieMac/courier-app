import { Component, OnInit } from '@angular/core';
import { BusinessPaymentService } from '../services/business-payment.service';
import { LoginService } from '../services/login.service';
import { Observable, EMPTY, of } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { tap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-my-balance',
  templateUrl: './my-balance.page.html',
  styleUrls: ['./my-balance.page.scss'],
})
export class MyBalancePage implements OnInit {
  savedCards$: Observable<any>
  account$: Observable<any>
  user = this.loginService.currentUser.value
  constructor(
    private apiServices: BusinessPaymentService,
    private loginService: LoginService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    let user = this.loginService.currentUser.value
    this.savedCards$ = this.apiServices.get('retrieve-stored-card', 'businessId=' + user.userDetails.id).pipe(
      tap((cards) => "cards:" + cards),
      catchError((err) => {
        return EMPTY;
      })
    );
  }

  ionViewWillEnter() {
    let user = this.loginService.currentUser.value
    this.savedCards$ = this.apiServices.get('retrieve-stored-card', 'businessId=' + user.userDetails.id).pipe(
      tap((cards) => "cards:" + cards),
      catchError((err) => {
        return EMPTY;
      })
    );
    this.savedCards$.subscribe(res => {
      console.log(res)
    })
    this.getAccount()
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

  handleCardDeletion(cardId) {
    this.confirmDeletionAlert(cardId)
  }

  async confirmDeletionAlert(cardId) {
    console.log(this.user.userDetails.id, cardId)
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header: 'Confirm Deletion!',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('No');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.apiServices.delete('remove-stored-card', 'businessId=' + this.user.userDetails.id + '&cardId=' + cardId).subscribe(res => {
              console.log(res)
              this.savedCards$ = of(res)
            }, error => {
              console.log(error)
            })
          }
        }
      ]
    });

    await alert.present();
  }

}
