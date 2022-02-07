import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewDeliveryPageRoutingModule } from './add-new-delivery-routing.module';

import { AddNewDeliveryPage } from './add-new-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddNewDeliveryPageRoutingModule
  ],
  declarations: [AddNewDeliveryPage]
})
export class AddNewDeliveryPageModule { }
