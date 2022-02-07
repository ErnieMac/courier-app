import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./helper/auth.guard";
import { LoggedInGuard } from './helper/loggedIn.guard';
import { PhoneGuard } from './helper/phone.guard';

const authRoutes: Routes = [
  {
    path: 'change-phone-number',
    loadChildren: () => import('./change-phone-number/change-phone-number.module').then(m => m.ChangePhoneNumberPageModule)
  },
  // {
  //   path: 'phone-verification',
  //   loadChildren: () => import('./phone-verification/phone-verification.module').then(m => m.PhoneVerificationPageModule)
  // },
  {
    path: 'business-profile',
    loadChildren: () => import('./business-profile/business-profile.module').then(m => m.BusinessProfilePageModule)
  },
  {
    path: 'business-dashboard',
    loadChildren: () => import('./business-dashboard/business-dashboard.module').then(m => m.BusinessDashboardPageModule)
  },
  {
    path: 'chat-history',
    loadChildren: () => import('./chat-history/chat-history.module').then(m => m.ChatHistoryPageModule)
  },
  {
    path: 'chat-details',
    loadChildren: () => import('./chat-details/chat-details.module').then(m => m.ChatDetailsPageModule)
  },
  {
    path: "change-password",
    loadChildren: () => import("./change-password/change-password.module").then((m) => m.ChangePasswordPageModule),
  },
  {
    path: 'help-support',
    loadChildren: () => import('./help-support/help-support.module').then(m => m.HelpSupportPageModule)
  },
  {
    path: 'my-balance',
    loadChildren: () => import('./my-balance/my-balance.module').then(m => m.MyBalancePageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./transaction-history/transaction-history.module').then(m => m.TransactionHistoryPageModule)
  },
  {
    path: 'edit-delivery/:id',
    loadChildren: () => import('./edit-delivery/edit-delivery.module').then(m => m.EditDeliveryPageModule)
  },
  {
    path: 'cancel-delivery/:id',
    loadChildren: () => import('./cancel-delivery/cancel-delivery.module').then(m => m.CancelDeliveryPageModule)
  },
  {
    path: 'make-claim/:id',
    loadChildren: () => import('./make-claim/make-claim.module').then(m => m.MakeClaimPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./add-card/add-card.module').then(m => m.AddCardPageModule)
  },
  {
    path: 'top-up',
    loadChildren: () => import('./top-up/top-up.module').then(m => m.TopUpPageModule)
  },
  {
    path: 'recurring-payment',
    loadChildren: () => import('./recurring-payment/recurring-payment.module').then(m => m.RecurringPaymentPageModule)
  },
  {
    path: 'business-address',
    loadChildren: () => import('./business-address/business-address.module').then(m => m.BusinessAddressPageModule)
  },
  {
    path: 'saved-addresses',
    loadChildren: () => import('./saved-addresses/saved-addresses.module').then(m => m.SavedAddressesPageModule)
  },
  {
    path: 'add-new-address',
    loadChildren: () => import('./add-new-address/add-new-address.module').then(m => m.AddNewAddressPageModule)
  },
  {
    path: 'add-new-delivery',
    loadChildren: () => import('./add-new-delivery/add-new-delivery.module').then(m => m.AddNewDeliveryPageModule)
  },
  // {
  //   path: 'completed-deliveries',
  //   loadChildren: () => import('./completed-deliveries/completed-deliveries.module').then(m => m.CompletedDeliveriesPageModule)
  // },
  {
    path: 'delivery-details',
    loadChildren: () => import('./delivery-details/delivery-details.module').then(m => m.DeliveryDetailsPageModule)
  },
  {
    path: 'ongoing-deliveries',
    loadChildren: () => import('./ongoing-deliveries/ongoing-deliveries.module').then(m => m.OngoingDeliveriesPageModule)
  },
  // {
  //   path: 'scheduled-deliveries',
  //   loadChildren: () => import('./scheduled-deliveries/scheduled-deliveries.module').then(m => m.ScheduledDeliveriesPageModule)
  // },

];
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: authRoutes
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'phone-verification',
    loadChildren: () => import('./phone-verification/phone-verification.module').then(m => m.PhoneVerificationPageModule),
    canActivate: [PhoneGuard]
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then(m => m.CreateAccountPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
