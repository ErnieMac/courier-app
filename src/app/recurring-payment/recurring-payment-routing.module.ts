import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecurringPaymentPage } from './recurring-payment.page';

const routes: Routes = [
  {
    path: '',
    component: RecurringPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecurringPaymentPageRoutingModule {}
