import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelDeliveryPage } from './cancel-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: CancelDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelDeliveryPageRoutingModule {}
