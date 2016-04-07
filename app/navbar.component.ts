import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Observable,Scheduler} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {AuthService} from './auth/auth.service';

declare var jQuery: any;

@Component({
    selector: 'navbar',
    templateUrl: '/app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent implements OnInit {
   	constructor(private _router: Router,
                public auth: AuthService) {
    }
    
    ngOnInit() {

    }
    
    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    // collapse Navbar once clicked
    clicked() {
        jQuery('.navbar-collapse.in').collapse('hide');
    }

}