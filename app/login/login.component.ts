import {Component} from 'angular2/core';

import {AuthService} from '../auth/auth.service';


@Component({

    selector: 'login',
    template: `
    Logged in: {{ auth.loggedIn }}<br>
    <button (click)="login()" *ngIf="!auth.loggedIn">Login</button>
    <button (click)="logout()" *ngIf="auth.loggedIn">Logout</button>
  `
})

export class LoginComponent {
    
    constructor(public auth: AuthService) {
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }
    
    

}