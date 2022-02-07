import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeClaimPageRoutingModule } from './make-claim-routing.module';

import { MakeClaimPage } from './make-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MakeClaimPageRoutingModule
  ],
  declarations: [MakeClaimPage]
})
export class MakeClaimPageModule { }
