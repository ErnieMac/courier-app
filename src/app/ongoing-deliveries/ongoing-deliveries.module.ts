import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingDeliveriesPageRoutingModule } from './ongoing-deliveries-routing.module';

import { OngoingDeliveriesPage } from './ongoing-deliveries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingDeliveriesPageRoutingModule
  ],
  declarations: [OngoingDeliveriesPage]
})
export class OngoingDeliveriesPageModule {}
