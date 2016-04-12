import {Component, Input, OnInit} from 'angular2/core';
import {MapMarker} from './map-marker';

@Component({
	selector: 'my-google-comp',
	template: `
		<div>
            <google-map latitude={{marker.lat}} longitude={{marker.long}} disableDefaultUI>
                <google-map-marker latitude={{marker.lat}} longitude={{marker.long}} title={{marker.title}} 
                    click-events="true" draggable="false"
                    (google-map-marker-click)="clickedMarker()"
                    >
                </google-map-marker>
            </google-map>
            <paper-button
                    toggles
                    class="fancy"
                    (click)="switch()"
                > Switch Places 
            </paper-button>
        </div>
	`,
    styles: [`
        google-map {
            display: block;
            height: 500px;
            width:500px;
        }

        paper-button.fancy {
            background: #ccc;
        }
    `]
})
export class GoogleMapComponent implements OnInit{
    marker: MapMarker = new MapMarker();
    
    constructor() {
        
     
    }
    
    switch() {
        if(this.marker.title=="AMIS"){
            this.marker.lat="37.779";
            this.marker.long="-122.3892";
            this.marker.title="San Franciso!";
        } else {
            this.marker.lat="52.0355031";
            this.marker.long="5.0978335";
            this.marker.title="AMIS";
        }
    }
    
    ngOnInit() {
        this.marker.lat="52.0355031";
        this.marker.long="5.0978335";
        this.marker.title="Sample Title";
    }
    
    clickedMarker(){
        this.switch();
    }
	
}