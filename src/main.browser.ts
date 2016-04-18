/*
 * Providers provided by Angular
 */
import {bootstrap}    from 'angular2/platform/browser';
import {provide, ComponentRef} from 'angular2/core';
import {ROUTER_PROVIDERS , LocationStrategy, PathLocationStrategy } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

/*
* Platform and Environment
* our providers/directives/pipes
*/
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';

import {AppComponent} from './app.component';
import {appInjectorRef} from './shared/appInjectorRef';
import {AuthService} from './auth/auth.service';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

/*
bootstrap(AppComponent,[
    AuthService,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy })
    ]).then((appRef: ComponentRef) => {
        // store a reference to the application injector
        appInjectorRef(appRef.injector);
});


/*
* App Component
* our top level component that holds all of our components
*/
//import {App, APP_PROVIDERS} from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(AppComponent, [
    AuthService,
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
//    ...APP_PROVIDERS,
    ANGULAR2_GOOGLE_MAPS_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy })
    ]).then((appRef: ComponentRef) => {
        // store a reference to the application injector
        appInjectorRef(appRef.injector);
    })
    .catch(err => console.error(err));

}





/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when documetn is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
