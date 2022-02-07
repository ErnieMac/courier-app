import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelDeliveryPageRoutingModule } from './cancel-delivery-routing.module';

import { CancelDeliveryPage } from './cancel-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CancelDeliveryPageRoutingModule
  ],
  declarations: [CancelDeliveryPage]
})
export class CancelDeliveryPageModule { }
