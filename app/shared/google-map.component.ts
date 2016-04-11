import {Component, Input} from 'angular2/core';


@Component({
	selector: 'my-google-comp',
	template: `
		<div>
            <google-map latitude={{lat}} longitude={{long}} disableDefaultUI>
                <google-map-marker 
                    latitude={{lat}}
                    longitude={{long}}
                    title={{title}}
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
	`
})
export class GoogleMapComponent {
    lat: string;
    long: string;
    title: string;
    
    constructor() {
        this.lat="52.0355031";
        this.long="5.0978335";
        this.title="AMIS";
    }
    
    switch() {
        if(this.title=="AMIS"){
            this.lat="37.779";
            this.long="-122.3892";
            this.title="San Franciso!";
        } else {
            this.lat="52.0355031";
            this.long="5.0978335";
            this.title="AMIS";
        }
    }
	
}