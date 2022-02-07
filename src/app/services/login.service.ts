import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable, of, from, BehaviorSubject } from 'rxjs';

export interface RootUser {
  token: Token;
  userDetails: User;
}
export interface Token {
  refreshToken: string;
  token: string;
}
export interface User {
  businessName: string,
  primaryBusiness: boolean,
  industry: string,
  email: string;
  firstname: string;
  id: string;
  intCode: string;
  lastname: string;
  mobileNumber: string;
  verifiedEmail: boolean;
  verifiedMobileNumber: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public _storage: Storage | null = null;
  public storageInstance = null;
  public currentUser: BehaviorSubject<RootUser> = new BehaviorSubject(null)
  constructor(private storage: Storage) { this.createStorage() }

  async createStorage() {
    this.storageInstance = await this.storage.create();
  }

  async isLoggedIn() {
    const storageInstance = await this.storage.create();
    const loggedIn = await storageInstance.get('loggedIn')
    const loggedInUser = await storageInstance.get('userDetails')
    return { loggedIn: loggedIn, loggedInUser: loggedInUser }
  }




}
