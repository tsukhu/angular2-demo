import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

declare var jQuery: any;

@Component({
    selector: 'navbar',
    templateUrl: '/app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {

   	constructor(private _router: Router) {

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