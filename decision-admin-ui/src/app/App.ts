import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ViewsComponent} from "./admin/ViewsComponent";
import {AdministrationSettingsComponent} from "./admin/AdministrationSettings";
import {PopupManager} from "./commons/PopupManager";
import {ViewChild} from "angular2/core";

@RouteConfig([

    { path: '/admin', component: AdministrationSettingsComponent, as: 'Administration' }

])

@Component({
    directives: [PopupManager,ROUTER_DIRECTIVES],
    selector: 'app',
    template: `

    <div>

    <h1>Decision App</h1>



    <nav>
        <a  [routerLink]="['/Administration']">Admin1</a>
        <span> | </span>

    </nav>

    <main style="margin-top: 20px">
        <router-outlet></router-outlet>
    </main>

</div>
`
})
export class AppComponent {
    constructor() {

    }
}

