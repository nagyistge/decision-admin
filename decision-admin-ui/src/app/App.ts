﻿import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ViewsComponent} from "./admin/ViewsComponent";
import {AdministrationSettingsComponent} from "./admin/AdministrationSettings";
import {PopupManager} from "./commons/PopupManager";
import {ViewChild} from "angular2/core";
import {TestTabs} from "./admin/TestTabs";

@RouteConfig([

    { path: '/admin', component: AdministrationSettingsComponent, as: 'Administration' }

])

@Component({
    directives: [PopupManager,ROUTER_DIRECTIVES,TestTabs],
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


<popup-manager #popup_manager ></popup-manager>
</div>
`
})
export class AppComponent {
    constructor() {

    }
    ngAfterViewInit() {
        AppComponent.popupManager = this.popup;
    }
    static popupManager:PopupManager;
    @ViewChild('popup_manager') popup: any;
}

