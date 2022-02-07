import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewDeliveryPage } from './add-new-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewDeliveryPageRoutingModule {}
