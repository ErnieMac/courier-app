import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {
  address = {
    'postal_code': null,
    'postal_town': null,
    'address_line': null
  }
  public addressSubject: BehaviorSubject<any> = new BehaviorSubject(this.address);
  constructor() { }
}
