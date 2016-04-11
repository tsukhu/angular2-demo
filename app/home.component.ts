import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {GoogleMapComponent} from './shared/google-map.component';

@Component({
	template:` Home
        <my-google-comp></my-google-comp>
	`,
	providers: [HTTP_PROVIDERS],
    directives: [GoogleMapComponent]
})
export class HomeComponent {


}