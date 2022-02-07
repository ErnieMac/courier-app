import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateAccountPage } from './create-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FormsModule, ReactiveFormsModule],
})
export class CreateAccountPageRoutingModule { }
