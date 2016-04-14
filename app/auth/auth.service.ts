import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Injectable} from 'angular2/core';
/* Authentication Service for
      1) Storing the current auth token (if loggedIn)
      2) Handle login and logout methods
*/
@Injectable()
export class AuthService {
    public loggedIn;
    token: string;
    
    constructor() {
        this.loggedIn = false;
        localStorage.removeItem('token');
        this.token = localStorage.getItem('token');
    }

    public login(username?: String, password?: String) {
        /*
            // sample code for a login server call

            return this.http.post('/auth/login', JSON.stringify({
                username: username,
                password: password
            }), {
                headers: new Headers({
                'Content-Type': 'application/json'
                })
            })
            .map((res : any) => {
                let data = res.json();
                this.token = data.token;
                localStorage.setItem('token', this.token);
            });

        */
        
        // simulate successfull login call
        if (username === 'test' && password === 'test') {
            this.token = 'token'; // dummy token
            localStorage.setItem('token', this.token);
            this.loggedIn = true;
            return Observable.of('token');
        }
        this.loggedIn = false;
        return Observable.throw('authentication failure');
    }

    public logout() {
        /*
            // sample code for log out api call

            return this.http.get(this.config.serverUrl + '/auth/logout', {
                headers: new Headers({
                    'x-security-token': this.token
                })
            })
            .map((res : any) => {
                this.token = undefined;
                localStorage.removeItem('token');
            });
     */
    
        this.loggedIn = false;
        this.token = undefined;
        localStorage.removeItem('token');

        return Observable.of(true);
    }

    public check() {
      //  return Observable.of(this.loggedIn);
      return Observable.of(!!localStorage.getItem('token'));
    }
    
}