import {bootstrap}    from 'angular2/platform/browser';
import {provide, ComponentRef} from 'angular2/core';
import {ROUTER_PROVIDERS , LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from './app.component';
import {appInjectorRef} from './shared/appInjectorRef';
import {AuthService} from './auth/auth.service';


bootstrap(AppComponent,[
    AuthService,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]).then((appRef: ComponentRef) => {
        // store a reference to the application injector
        appInjectorRef(appRef.injector);
});
