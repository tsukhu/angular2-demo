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
    <login-form (formEvent)="login($event)" *ngIf="!auth.loggedIn" [error]="error"></login-form>
    <button class="btn btn-primary" (click)="logout()" *ngIf="auth.loggedIn">Logout</button>
  `
})

export class LoginComponent {
    error: boolean = false;
    constructor(public auth: AuthService,
                public router: Router) {
    }

    login($event) {
      //  console.log($event.loginForm.username + ":" + $event.loginForm.password);
        //this.auth.login($event.loginForm.username,$event.loginForm.password);
        this.auth.login($event.loginForm.username,$event.loginForm.password)
            .subscribe(
                (token: any) => this.router.navigate(['Home']),
                () => { this.error = true; }
            );
    }

    logout() {
        this.auth.logout()
        .subscribe(
            () => this.router.navigate(['Home'])
        );
    }
    
    

}