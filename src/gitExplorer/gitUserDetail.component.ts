import {Component, Injector} from 'angular2/core';
import {Http} from 'angular2/http';
import {ROUTER_DIRECTIVES, Router, RouteParams, RouteConfig} from 'angular2/router';
import {GitUserFollowersComponent} from './GitUserFollowers.component';


@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './gitExplorer/gitUserDetail.component.html',
    styles: [` 
     img { width: 100px; margin-bottom: 10px; } 
   `]
})
@RouteConfig([
    { path: '/followers', component: GitUserFollowersComponent, name: 'GitUserFollowers' }
])
export class GitUserDetailComponent {
    params: RouteParams;
    userLogin: string;
    userData: Object = {};


    constructor(public http: Http, params: RouteParams, injector: Injector, private _router: Router) {
        this.params = injector.parent.parent.get(RouteParams);
        this.userLogin = this.params.get('userLogin');
    }


    ngOnInit() {
        this.http.get(`http://api.github.com/users/${this.userLogin}`)
            .map(response => response.json())
            .subscribe(
            data => this.userData = data,
            err => console.log(err)
            );
    }


    getFollowers() {
        this._router.navigate(['GitUserFollowers', { userLogin: this.userLogin }]);
    }
} 
