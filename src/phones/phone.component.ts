import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {PhoneService} from "./phone.service";
import {Phone} from './phone';
import {CarouselComponent} from '../carousel/carousel.component';
import {CheckmarkPipe} from '../shared/checkmark.pipe';


@Component({
    templateUrl: './phones/phone.component.html',
    providers: [PhoneService],
    directives: [CarouselComponent],
    pipes: [CheckmarkPipe]

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
       console.log("here we aRRR");
        var id = this._routeParams.get("id");

        this._phoneService.getPhone(id)
            .subscribe(
            phone => {
                  this.phone = phone;
                  console.log(phone.images);
                  this.img = phone.images[0];
                  console.log(this.img);
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