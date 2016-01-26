import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ViewsComponent} from "./admin1/ViewsComponent";

@RouteConfig([

    { path: '/views', component: ViewsComponent, as: 'Views' }

])

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'app',
    template: `

    <div>

    <h1>Decision App</h1>
    <nav>
        <a  [routerLink]="['/Views']">Admin1</a>
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

