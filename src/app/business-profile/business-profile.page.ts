import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { LoginService } from "../services/login.service";
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.page.html',
  styleUrls: ['./business-profile.page.scss'],
})
export class BusinessProfilePage implements OnInit {
  userDetails$: Observable<any> = of(this.loginService.currentUser.value)
  constructor(
    private loginService: LoginService,
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.loginService.currentUser.value)

  }

  async logout() {
    const cleared = await this.storage.clear()
    this.router.navigate(["login"])
  }

}
