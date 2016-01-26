import {provide,enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from './App';
import {AdminService} from "./services/AdminService";



const APP_BINDINGS = [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS, 
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    AdminService
];
//enableProdMode();
bootstrap(AppComponent,APP_BINDINGS);

//asd
