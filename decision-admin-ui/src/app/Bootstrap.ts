import {provide,enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from './App';
import {AdminService} from "./services/Admin/AdminService";
import {PopupManager} from "./commons/PopupManager";
import {ComponentRef} from "angular2/core";
import {ElementRef} from "angular2/core";
import {QueryList} from "angular2/core";
import {SecurityService} from "./services/Security/SecurityService";



const APP_BINDINGS = [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS, 
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    PopupManager,AdminService,ComponentRef,ElementRef,QueryList,SecurityService
];
//enableProdMode();
bootstrap(AppComponent,APP_BINDINGS);
