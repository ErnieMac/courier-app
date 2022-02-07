import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnChanges {
  @Input() latlng: Observable<{
    pickUp: { lat: null, lng: null },
    dropOff: { lat: null, lng: null },
  }>;
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  constructor() { }

  ngOnChanges() {
    if (this.latlng) {
      this.latlng.subscribe(val => {
        this.initMap(val)
      },
        error => console.log("error")
      )
    }
  }


  initMap(location) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    // ----------------------------------------For Static Lat and Lng. TESTING PURPOSE ---------------------------------------
    // location.pickUp.lat = 51.507322;
    // location.pickUp.lng = -0.128037;
    // location.dropOff.lat = 51.507558;
    // location.dropOff.lng = -0.132854;

    // Initialize Map
    let cords = new google.maps.LatLng(location.pickUp.lat, location.pickUp.lng);
    let mapOptions: google.maps.MapOptions = {
      center: cords,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    // Pickup and drop-off locations
    const pickUp = { lat: location.pickUp.lat, lng: location.pickUp.lng };
    const dropOff = { lat: location.dropOff.lat, lng: location.dropOff.lng };
    var pickUpLocation = new google.maps.LatLng(pickUp.lat, pickUp.lng);
    var dropOffLocation = new google.maps.LatLng(dropOff.lat, dropOff.lng);
    directionsRenderer.setMap(this.map)

    // Add markers
    // var mk1 = new google.maps.Marker({ position: pickUp, map: this.map });
    //var mk2 = new google.maps.Marker({ position: dropOff, map: this.map });

    // Draw Route
    this.calculateAndDisplayRoute(directionsService, directionsRenderer, pickUp, dropOff)
  }

  calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer, pickUp, dropOff
  ) {
    var request = {
      origin: pickUp,
      destination: dropOff,
      travelMode: google.maps.TravelMode.DRIVING
    };
    // Draw Route
    directionsService.route(request, function (response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      }
    });
  }
}
