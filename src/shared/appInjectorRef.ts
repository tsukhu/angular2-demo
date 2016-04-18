import {Injector} from 'angular2/core';

let _appInjectorRef: Injector;

export const appInjectorRef = (injector?: Injector):Injector => {
   
   if(injector) {
        _appInjectorRef = injector;
   }
    
   return _appInjectorRef;  
};