import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { Observable, of } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.page.html',
  styleUrls: ['./saved-addresses.page.scss'],
})
export class SavedAddressesPage implements OnInit {
  addresses$: Observable<any>
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: ApiCallsService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.apiServices.get('store-address', 'businessId=' + this.local.userDetails.id).subscribe(res => {
      this.addresses$ = of(res)
      console.log(res)
    })
  }

  handleAddressDeletion(addressId) {
    var data = {
      'businessId': this.local.userDetails.id,
      'addressId': addressId
    }
    this.apiServices.delete('delete-address', 'businessId=' + this.local.userDetails.id + '&addressId=' + addressId).subscribe(res => {
      this.addresses$ = of(res)
      console.log(res)
    })
  }

}
