import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from './auth/auth.service';

declare var jQuery: any;

@Component({
    selector: 'navbar',
    templateUrl: '/app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {
    resolve;
    logStatus;
   	constructor(private _router: Router,
                public auth: AuthService) {
       auth.check()
            .subscribe((result) => {
                if (result)
                    this.logStatus="Log Out";
                else
                    this.logStatus="Log In";
            });
             
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