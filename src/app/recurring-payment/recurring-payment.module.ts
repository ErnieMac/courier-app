import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecurringPaymentPageRoutingModule } from './recurring-payment-routing.module';

import { RecurringPaymentPage } from './recurring-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecurringPaymentPageRoutingModule
  ],
  declarations: [RecurringPaymentPage]
})
export class RecurringPaymentPageModule { }
