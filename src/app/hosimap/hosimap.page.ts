import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var google;

@Component({
  selector: 'app-hosimap',
  templateUrl: './hosimap.page.html',
  styleUrls: ['./hosimap.page.scss'],
})
export class HosimapPage implements OnInit {
  @ViewChild('mapElement',{static: false}) mapNativeElement: ElementRef;
directionsService = new google.maps.DirectionsService;
directionsDisplay = new google.maps.DirectionsRenderer;
directionForm: FormGroup;
currentLocation: any = {
  lat: 0,
  lng: 0
};
  geolocation: any;
  latitude: any;
  longitude: any;

  constructor(private fb: FormBuilder) {
    this.createDirectionForm();
   }

  ngOnInit() {
  }
  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
      
    });
    this.directionsDisplay.setMap(map);
  });
}
  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
