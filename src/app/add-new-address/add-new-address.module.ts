import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewAddressPageRoutingModule } from './add-new-address-routing.module';

import { AddNewAddressPage } from './add-new-address.page';
import { AutoCompletePlacesComponent } from '../shared/google/auto-complete-places/auto-complete-places.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GoogleMapsModule,
    AddNewAddressPageRoutingModule
  ],
  declarations: [AddNewAddressPage, AutoCompletePlacesComponent]
})
export class AddNewAddressPageModule { }
