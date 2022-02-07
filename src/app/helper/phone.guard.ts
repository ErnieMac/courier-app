import { Injectable } from "@angular/core";
import { LoginService } from "../services/login.service"
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class PhoneGuard implements CanActivate {

  constructor(private router: Router,
    private loginService: LoginService
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const local = await this.loginService.isLoggedIn().then(res => {
      return res
    })
    // const local = true;
    console.log(local)
    if (local.loggedIn) {
      if (local.loggedInUser.userDetails.verifiedMobileNumber == true) {
        this.router.navigate(["business-dashboard"], { queryParams: { returnUrl: state.url } });
        this.loginService.currentUser.next(local.loggedInUser)
        return true;
      }
      else {
        return true;
      }
    }
  }
}
