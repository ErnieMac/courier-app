import { Injectable } from "@angular/core";
import { LoginService } from "../services/login.service"
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {

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
        this.loginService.currentUser.next(local.loggedInUser)
        return true;
      }
      else {
        this.router.navigate(["phone-verification"], { queryParams: { returnUrl: state.url } });
        return false;
      }
      return true
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
