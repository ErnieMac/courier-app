import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AddressServiceService } from '../../../services/address-service.service';

declare var google;


@Component({
  selector: 'app-auto-complete-places',
  templateUrl: './auto-complete-places.component.html',
  styleUrls: ['./auto-complete-places.component.scss'],
})
export class AutoCompletePlacesComponent implements OnInit {
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  @ViewChild("places")
  public places: ElementRef;

  autocompleteInput: string;
  queryWait: boolean;
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  lat: string;
  long: string;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  hideList = false
  autocompletep: google.maps.places.Autocomplete;
  address1Field: HTMLInputElement;
  address2Field: HTMLInputElement;
  postalField: HTMLInputElement;
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    public addressService: AddressServiceService
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  ngOnInit() {
    this.loadMap();

  }


  loadMap() {


    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
      // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      // this.map.addListener('tilesloaded', () => {
      //   console.log('accuracy', this.map, this.map.center.lat());
      //   this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      //   this.lat = this.map.center.lat()
      //   this.long = this.map.center.lng()
      // });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });
  }


  UpdateSearchResults() {
    this.hideList = false
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({
      input: this.autocomplete.input,
      componentRestrictions: { country: 'uk' },
      fields: ["address_components", "geometry"],
    },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });

  }

  initAutocomplete() {
    // let address1Field = document.querySelector("#ship-address") as HTMLInputElement;
    // let address1Field = document.getElementById('ship-address')
    // address2Field = document.querySelector("#address2") as HTMLInputElement;
    // postalField = document.querySelector("#postcode") as HTMLInputElement;

    // Create the autocomplete object, restricting the search predictions to
    // addresses in the US and Canada.
    this.autocompletep = new google.maps.places.Autocomplete(this.places.nativeElement);
    // address1Field.focus();

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    // this.autocompletep.addListener("place_changed", this.fillInAddress);
  }

  SelectSearchResult(item: any) {
    this.geoCode(item.place_id)
    this.hideList = true
    this.placeid = item.place_id
  }

  geoCode(placeid) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ placeId: placeid }, (results, status) => {
      console.log(results)
      let addressObject = {
        "street_number": '',
        "route": ''
      }
      for (const component of results[0].address_components as google.maps.GeocoderAddressComponent[]) {
        const componentType = component.types[0];

        switch (componentType) {
          case "street_number": {
            // address1 = `${component.long_name} ${address1}`;
            addressObject['street_number'] = component.long_name
            console.log('Street Number:', component.long_name)
            break;
          }

          case "route": {
            // address1 += component.short_name;
            addressObject['route'] = component.long_name
            console.log('Route:', component.short_name)
            break;
          }

          case "postal_code": {
            // postcode = `${component.long_name}${postcode}`;
            addressObject['postal_code'] = component.long_name
            console.log('Postal Code:', component.long_name)
            break;
          }

          case "postal_town": {
            // postcode = `${component.long_name}${postcode}`;
            addressObject['postal_town'] = component.long_name
            console.log('County:', component.long_name)
            break;
          }

          case "postal_code_suffix": {
            // postcode = `${postcode}-${component.long_name}`;
            addressObject['postal_code_suffix'] = component.long_name
            console.log('Postal Code Suffix:', component.long_name)
            break;
          }

          case "locality":
            // (document.querySelector("#locality") as HTMLInputElement).value =
            //   component.long_name;
            addressObject['locality'] = component.long_name
            console.log('Locality:', component.long_name)
            break;

          case "administrative_area_level_1": {
            // (document.querySelector("#state") as HTMLInputElement).value =
            //   component.short_name;
            addressObject['administrative_area_level_1'] = component.short_name
            console.log('Administrative Area:', component.short_name)
            break;
          }

          case "country":
            // (document.querySelector("#country") as HTMLInputElement).value =
            //   component.long_name;
            addressObject['country'] = component.long_name
            console.log('Country:', component.long_name)
            break;
        }
      }
      addressObject['address_line'] = addressObject.street_number+ ' ' + addressObject.route
      this.addressService.addressSubject.next(addressObject)
    });
  }

  ClearAutocomplete() {
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }


  GoTo() {
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
  }

}
