import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Observable,Scheduler} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {AuthService} from '../auth/auth.service';
import {MenuItem} from './menu-item';

declare var jQuery: any;


@Component({
    selector: 'navbar',
    templateUrl: './nav-bar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent implements OnInit {
    menuItems: MenuItem[]= [
        new MenuItem("users","Users","Users"),
        new MenuItem("posts","Posts","Posts"),
        new MenuItem("phones","Phones","Phones"),
        new MenuItem("git-explorer","GitExplorer","Git User Explorer")
        
    ];
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