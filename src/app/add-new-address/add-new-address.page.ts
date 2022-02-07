import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Storage } from '@ionic/storage-angular';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AddressServiceService } from '../services/address-service.service';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.page.html',
  styleUrls: ['./add-new-address.page.scss'],
})
export class AddNewAddressPage implements OnInit {
  apiLoaded: Observable<boolean>;
  formGroup: FormGroup
  local = this.loginService.currentUser.value
  isError: boolean = false
  addressSubject$ = null
  btnTxt = 'Save'
  public _storage: Storage | null = null;
  public storageInstance = null;
  constructor(
    private apiServices: ApiCallsService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private storage: Storage,
    private addressService: AddressServiceService,
    httpClient: HttpClient
  ) {
    console.log(this.addressSubject$)
    this.addressService.addressSubject.subscribe(res => {
      this.addressSubject$ = res
    })
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyAd9vZGWXanh-zvkphgh6tcLN0sqDkxgcg', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }



  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      addressIdentifierName: new FormControl("", [Validators.required]),
      // name: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      addressLineOne: new FormControl("", [Validators.required]),
      addressLineTwo: new FormControl(""),
      county: new FormControl("", [Validators.required]),
      intCode: new FormControl("+44", [Validators.required]),
      postcode: new FormControl("", [Validators.required]),
      number: new FormControl("", [Validators.required]),
      additionalNotes: new FormControl(""),
      saveAddress: new FormControl(false),

    })
    // this.clearStorage()
  }

  async clearStorage() {
    this.storageInstance = await this.storage.create();
    this.storageInstance.clear('unsaved-address-pickup')
    this.storageInstance.clear('unsaved-address-dropoff')
    this.storageInstance.clear('unsaved-address-body')
  }

  get addressIdentifierName() {
    return this.formGroup.get("addressIdentifierName");
  }
  //add name  --------------------------------------------------------------------
  get type() {
    return this.formGroup.get("type");
  }
  get addressLineOne() {
    return this.formGroup.get("addressLineOne");
  }
  get addressLineTwo() {
    return this.formGroup.get("addressLineTwo");
  }

  get intCode() {
    return this.formGroup.get("intCode");
  }
  //add int code Set Country to England --------------------------------------------------------------------
  // get country() {
  //   return this.formGroup.get("country");

  // }
  get county() {
    return this.formGroup.get("county");
  }
  get postcode() {
    return this.formGroup.get("postcode");
  }
  get number() {
    return this.formGroup.get("number");
  }
  get additionalNotes() {
    return this.formGroup.get("additionalNotes");
  }

  async handleFormSubmission(values) {
    let payLoad = values;
    this.btnTxt = 'Please wait...'
    payLoad["userId"] = this.local.userDetails.id
    this.isError = false
    console.log(payLoad)
    payLoad['name'] = payLoad['addressIdentifierName']
    payLoad['country'] = 'England'
    if (this.formGroup.valid) {
      if (payLoad['saveAddress']) {
        delete payLoad['saveAddress']
        this.apiServices.post('store-address', payLoad).subscribe(res => {
          console.log(res)
          this.btnTxt = 'Save'
          this.router.navigate(['add-new-delivery'])
        }, error => {
          this.btnTxt = 'Save'
          console.log(error)
        })
      }
      else {
        delete payLoad['saveAddress']
        // this.storageInstance = await this.storage.create();
        payLoad['id'] = Math.random().toString(36).substr(2, 10);
        let unSavedAddress = [];
        let localAddresses = await this.storage.get('unsaved-addresses');
        console.log('localAddresses', localAddresses)
        if (localAddresses != null) {
          localAddresses.forEach(address => {
            unSavedAddress.push(address)
          })
        }
        unSavedAddress.push(payLoad)
        console.log(unSavedAddress)
        this.storage.set('unsaved-addresses', unSavedAddress)
        this.btnTxt = 'Save'
        this.router.navigate(['add-new-delivery'])
      }
    }
    else {
      this.btnTxt = 'Save'
      this.isError = true;
    }
  }

}
