import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeClaimPage } from './make-claim.page';

const routes: Routes = [
  {
    path: '',
    component: MakeClaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeClaimPageRoutingModule {}
