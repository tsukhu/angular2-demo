import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MapsAPILoader,
	NoOpMapsAPILoader,
	MouseEvent,ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

//import {GoogleMapComponent} from '../shared/google-map.component';
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
	selector: 'my-home',
	directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES], // this loads all angular2-google-maps directives in this component
	// the following line sets the height of the map - Important: if you don't set a height, you won't see a map!!
	styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
  `],
	template: `
    <h1>My first angular-google-maps app!</h1>

    <!-- this creates a google map on the page with the given lat/lng from the component as the initial center of the map: -->

  <sebm-google-map 
		[latitude]="lat" 
		[longitude]="lng"
		[zoom]="zoom"
        [disableDefaultUI]="false"
      	(mapClick)="mapClicked($event)"
		>
	 <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	  <sebm-google-map-info-window [disableAutoPan]="true">
         Hi, this is the content of the <strong>info window</strong>
       </sebm-google-map-info-window> 
     </sebm-google-map-marker>
	 
	 <sebm-google-map-marker 
        *ngFor="#m of markers; #i = index"
        (markerClick)="clickedMarker(m.label, i)"
        [latitude]="m.lat"
        [longitude]="m.lng"
        [label]="m.label"
        [markerDraggable]="m.draggable"
        (dragEnd)="markerDragEnd(m, $event)"></sebm-google-map-marker>

    </sebm-google-map>
  `
})
export class HomeComponent {
	lat: number = 51.678418;
	lng: number = 7.809007;
	zoom: number = 8;
	
	clickedMarker(label: string, index: number) {
		window.alert(`clicked the marker: ${label || index}`)
		this.markers.splice(index, 1);
	}


	markerDragEnd(m: marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}
	
	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A',
			draggable: true
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: 'B',
			draggable: false
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: 'C',
			draggable: true
		}
	]
	
	mapClicked($event: MouseEvent) {
		this.markers.push({
			lat: $event.coords.lat,
			lng: $event.coords.lng,
			draggable: false
		});
	}

}