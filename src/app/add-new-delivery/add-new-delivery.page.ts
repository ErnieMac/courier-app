import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusinessBookingService } from '../services/business-booking.service';
import { ApiCallsService } from '../services/api-calls.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, EMPTY, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-new-delivery',
  templateUrl: './add-new-delivery.page.html',
  styleUrls: ['./add-new-delivery.page.scss'],
})
export class AddNewDeliveryPage implements OnInit {
  formGroup: FormGroup
  isError: boolean = false
  btnTxt = 'Add Delivery'
  pickUpAddress$: Observable<any>
  dropOffAddress$: Observable<any>
  selectedDOA$: Observable<any>
  selectedPUA$: Observable<any>
  savedCards$: Observable<any>
  btnDisabled = true;

  loading: Observable<boolean>
  addressesLoaded$ = false;
  public storageInstance = null;
  local = this.loginService.currentUser.value
  constructor(
    private apiServices: ApiCallsService,
    private businessServices: BusinessBookingService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private storage: Storage
  ) {
    console.log(this.local)
  }

  async ngOnInit() {
    this.formGroup = this.formBuilder.group({
      deliveryType: new FormControl("", [Validators.required]),
      scheduleDate: new FormControl("", [Validators.required]),
      scheduleTime: new FormControl("", [Validators.required]),
      dropOffId: new FormControl("", [Validators.required]),
      pickUpId: new FormControl("", [Validators.required]),
      parcelSize: new FormControl("", [Validators.required]),
      jobType: new FormControl("", [Validators.required]),
      estimatedCost: new FormControl(""),
      estimatedDistance: new FormControl(""),
      jobDescription: new FormControl(""),
    })
    this.addressesLoaded$ = false

  }

  ionViewWillLeave() {
    this.addressesLoaded$ = false
  }

  ionViewWillEnter() {
    this.getAddresses()
  }

  get deliveryType() {
    return this.formGroup.get("deliveryType");
  }
  get scheduleDate() {
    return this.formGroup.get("scheduleDate");
  }
  get scheduleTime() {
    return this.formGroup.get("scheduleTime");
  }
  get dropOffId() {
    return this.formGroup.get("dropOffId");
  }
  get pickUpId() {
    return this.formGroup.get("pickUpId");
  }
  get parcelSize() {
    return this.formGroup.get("parcelSize");
  }
  get jobType() {
    return this.formGroup.get("jobType");
  }
  get estimatedCost() {
    return this.formGroup.get("estimatedCost");
  }
  get estimatedDistance() {
    return this.formGroup.get("estimatedDistance");
  }
  // get mediaType() {
  //   return this.formGroup.get("mediaType");
  // }
  // get browserType() {
  //   return this.formGroup.get("browserType");
  // }
  // get deliverySkillSet() {
  //   return this.formGroup.get("deliverySkillSet");
  // }
  // get cashRequired() {
  //   return this.formGroup.get("cashRequired");
  // }
  // get jobDescription() {
  //   return this.formGroup.get("jobDescription");
  // }

  async getAddresses() {
    let user = this.loginService.currentUser.value
    let addresses = null

    // const storageInstance = await this.storage.create();
    const unsavedAddress = await this.storage.get('unsaved-addresses')
    this.apiServices.get('store-address', 'businessId=' + user.userDetails.id).subscribe(res => {
      addresses = res
      if (unsavedAddress) {
        unsavedAddress.forEach(address => {
          addresses.push(address)
        })
      }
      console.log(addresses)
      this.pickUpAddress$ = of(addresses.filter(address => address.type == 'Pick Up Only' || address.type == 'Both'))
      this.dropOffAddress$ = of(addresses.filter(address => address.type == 'Drop Off Only' || address.type == 'Both'))
      this.addressesLoaded$ = true
    })
  }

  handleonChange(event) {
    this.btnDisabled = true;
    let dropOffAddresses = null;
    this.dropOffAddress$.subscribe(res => {
      dropOffAddresses = res
    })
    let dropOff = dropOffAddresses.filter(address => address.id == this.formGroup.get('dropOffId').value)

    let pickUpAddresses = null;
    this.pickUpAddress$.subscribe(res => {
      pickUpAddresses = res
    })
    let pickUp = pickUpAddresses.filter(address => address.id == this.formGroup.get('pickUpId').value)
    dropOff = dropOff[0]
    pickUp = pickUp[0]

    let selected = dropOffAddresses.filter(address => address.id == this.formGroup.get('dropOffId').value)
    this.selectedDOA$ = of(selected[0])

    let selectedPU = pickUpAddresses.filter(address => address.id == this.formGroup.get('pickUpId').value)
    this.selectedPUA$ = of(selectedPU[0])

    if (this.formGroup.valid) {
      this.loading = of(true)
      let data = {
        "userId": this.local.userDetails.id,
        "parcelSize": this.formGroup.get('parcelSize').value,
        "dropOffDetails": {
          "postcode": dropOff.postcode,
        },
        "pickUpDetails": {
          "postcode": pickUp.postcode,
        }
      }
      console.log(data)
      this.businessServices.post('estimate-price', data).subscribe(res => {
        console.log(res)
        this.formGroup.patchValue({
          estimatedCost: res.estimatedCost.toFixed(2),
          estimatedDistance: res.estimatedDistance.toFixed(2)
        })
        this.loading = of(false)
        this.btnDisabled = false;
      }, error => {
        console.log(error)
        this.loading = of(false)
      })
      console.log(data)
    }
  }

  handleFormSubmission(values) {
    this.btnTxt = 'Please wait...'
    let payLoad = values;
    payLoad["businessId"] = this.local.userDetails.id
    let dropOffAddresses = null;
    this.dropOffAddress$.subscribe(res => {
      dropOffAddresses = res
    })
    let dropOff = dropOffAddresses.filter(address => address.id == values.dropOffId)
    delete dropOff[0]['id']
    delete dropOff[0]['addressIdentifierName']
    delete dropOff[0]['userId']
    delete dropOff[0]['type']
    dropOff[0]['email'] = 'some@some.com'
    dropOff[0]['showAddress'] = true
    dropOff[0]['county'] = dropOff[0]['county']
    dropOff[0]['intcode'] = dropOff[0]['intcode']
    dropOff[0]['country'] = "England"
    payLoad['dropOffDetails'] = dropOff[0]
    payLoad['dropOffId'] = null;
    payLoad['status'] = 'available';



    let pickUpAddresses = null;
    this.pickUpAddress$.subscribe(res => {
      pickUpAddresses = res
    })
    let pickUp = pickUpAddresses.filter(address => address.id == values.pickUpId)
    delete pickUp[0]['id']
    delete pickUp[0]['addressIdentifierName']
    delete pickUp[0]['userId']
    delete pickUp[0]['type']
    pickUp[0]['email'] = 'some@some.com'
    pickUp[0]['showAddress'] = true
    pickUp[0]['county'] = pickUp[0]['county']
    pickUp[0]['intcode'] = pickUp[0]['intcode']
    pickUp[0]['country'] = "England"
    payLoad['scheduleTime'] = this.convertToDateTime(values.scheduleDate, values.scheduleTime)
    console.log(payLoad['scheduleTime'])
    payLoad['pickUpDetails'] = pickUp[0]
    payLoad['pickUpId'] = null;
    //If delivery add secure code
    if (values.deliveryType == 'delivery') {
      payLoad['requestSecureCode'] = true;
    } else {
      payLoad['requestSecureCode'] = false;
    }
    //Jobtype should determine the delivery skillset required
    //jobDescription should be pulled from the form
    //------------------------------------------------------------------------------------------------------
    payLoad['additionalDetails'] = {
      "parcelSize": values.parcelSize,
      "jobType": values.jobType,
      "mediaType": "app",
      "browserType": "ionic",
      "deliverySkillSet": [values.jobType],
      "cashRequired": false,
      "jobDescription": values.jobDescription
    }
    console.log(payLoad)
    delete payLoad['parcelSize']
    delete payLoad['jobType']
    delete payLoad['jobDescription']
    delete payLoad['scheduleDate']
    delete payLoad['estimatedCost']
    delete payLoad['estimatedDistance']
    delete payLoad['dropOffDetails']['intCode']
    delete payLoad['pickUpDetails']['intCode']
    this.isError = false
    // payLoad = {
    //   "businessId": "B200013",
    //   "requestSecureCode": false,
    //   "deliveryType": "delivery",
    //   "scheduleTime": "2021-11-1 14:18:18",
    //   "dropOffId": null,
    //   "dropOffDetails": {
    //     "name": "John Smith",
    //     "email": "john@smith.com",
    //     "number": "077777777777",
    //     "addressLineOne": "14 Tiger Ln",
    //     "addressLineTwo": "",
    //     "county": "Bromley",
    //     "country": "England",
    //     "postcode": "BR2 9JG",
    //     "additionalNotes": "",
    //     "showAddress": true
    //   },
    //   "pickUpId": null,
    //   "pickUpDetails": {
    //     "name": "Test comapny",
    //     "email": "blue@smith.com",
    //     "number": "077777777772",
    //     "addressLineOne": "6 St Mark's Square",
    //     "addressLineTwo": "",
    //     "county": "Bromley",
    //     "country": "England",
    //     "postcode": "BR2 9UY",
    //     "additionalNotes": "",
    //     "showAddress": true
    //   },
    //   "additionalDetails": {
    //     "parcelSize": "m",
    //     "jobType": "food",
    //     "mediaType": "Portal",
    //     "browserType": "Chrome",
    //     "deliverySkillSet": ["food"],
    //     "cashRequired": false,
    //     "jobDescription": "This is the job description"
    //   }
    // }
    if (this.formGroup.valid) {
      this.businessServices.post('create-job', payLoad).subscribe(res => {
        this.btnTxt = 'Add Delivery'
        console.log(res)
        this.router.navigate(["business-dashboard"]);
      }, error => {
        this.btnTxt = 'Add Delivery'
        console.log(error.error.message)
        console.log(error)
      })
    }
    else {
      this.btnTxt = 'Add Delivery'
      this.isError = true;
    }
  }

  convertToDateTime(pickUpDate, timeString) {
    let unix_timestamp = timeString
    var date = new Date(unix_timestamp);
    var pickupDate = new Date(pickUpDate)
    // alert(pickupDate.getFullYear())
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var dateTime = pickupDate.getFullYear() + '-' + (pickupDate.getMonth() + 1) + '-' + pickupDate.getDate() + ' ' + formattedTime;
    return dateTime;
  }

}
