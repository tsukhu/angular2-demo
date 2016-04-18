import {Injector} from 'angular2/core';
import {Router, ComponentInstruction} from 'angular2/router';

import {appInjectorRef} from '../shared/appInjectorRef';
import {AuthService} from './auth.service';

export const isLoggedIn = (next: ComponentInstruction, prev: ComponentInstruction) => {
    let injector: Injector = appInjectorRef(); // reference app injector reference
    let auth: AuthService = injector.get(AuthService);
    let router: Router = injector.get(Router);

    // return a boolean or a promise that returns a boolean
    return new Promise((resolve) => {
        auth.check()
            .subscribe((result) => {
                if (result) {
                    resolve(true);
                }
                else {
                    resolve(false);
                    router.navigate(['Login']);
                }
            });
    });

};