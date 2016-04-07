import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()
export class AuthService {
    public loggedIn;
    constructor() {
        this.loggedIn = false;
    }

    public login() {
        this.loggedIn = true;
    }

    public logout() {
        this.loggedIn = false;
    }

    public check() {
        return Observable.of(this.loggedIn);
    }

}