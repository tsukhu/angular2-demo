import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {PhoneService} from "./phone.service";
import {Phone} from './phone';


@Component({
    templateUrl: 'app/phones/phone.component.html',
    providers: [PhoneService]

})
export class PhoneComponent implements OnInit {

    title: string;
    phone= new Phone();
    img: string;

    constructor(private _router: Router,
        private _routeParams: RouteParams,
        private _phoneService: PhoneService
    ) {
    }

    ngOnInit() {
        var id = this._routeParams.get("id");

        this._phoneService.getPhone(id)
            .subscribe(
            phone => {
                  this.phone = phone;
                  this.img = phone.images[0];
            },
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
                console.log("ERR:"+response);
            }

            );
    }
}