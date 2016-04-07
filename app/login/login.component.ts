import {Component} from 'angular2/core';

import {AuthService} from '../auth/auth.service';
import {LoginFormComponent} from "../login-form/login-form.component";
import {Router} from 'angular2/router';

@Component({

    selector: 'login',
    directives: [LoginFormComponent],
    template: `
   <!-- Logged in: {{ auth.loggedIn }}<br> -->
    <br>
    <login-form (formEvent)="login($event)" *ngIf="!auth.loggedIn"></login-form>
    <button class="btn btn-primary" (click)="logout()" *ngIf="auth.loggedIn">Logout</button>
  `
})

export class LoginComponent {
    
    constructor(public auth: AuthService,
                private _router: Router) {
    }

    login($event) {
        console.log($event);
        this.auth.login();
        this._router.navigate(['Home']);
    }

    logout() {
        this.auth.logout();
    }
    
    

}