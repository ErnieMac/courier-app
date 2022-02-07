import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable({ providedIn: "root" })
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const local = await this.loginService.isLoggedIn().then(res => {
      return res
    })
    if (local.loggedIn) {
      this.loginService.currentUser.next(local.loggedInUser)
      console.log(local)
      this.router.navigate(["/business-dashboard"]);
      return false;
    }
    return true;
  }
}
