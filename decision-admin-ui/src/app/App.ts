import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {AdministrationSettingsComponent} from "./admin/settings/AdministrationSettings";
import {ViewChild} from "angular2/core";
import {CommunitySettingsComponent} from "./admin/community/CommunitySettings";
import {SecuritySettingsComponent} from "./admin/security/SecuritySettings";

@RouteConfig([

    { path: '/settings', component: AdministrationSettingsComponent, as: 'Settings' },
    { path: '/community', component: CommunitySettingsComponent, as: 'Community' },
    { path: '/security', component: SecuritySettingsComponent, as: 'Security' }

])

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: 'app',
    template: `

    <div>
        <h1>Decision Admin</h1>
        <nav class="navbar navbar-default">
        <div class="container-fluid">
         <div class="navbar-collapse">
          <ul class="nav navbar-nav" >
              <li (click)="select(route)" [ngClass]="{active: route?.selected}"  *ngFor="#route of routes">
                <a  [routerLink]="[route?.link]">{{route.name}}</a>
              </li>
          </ul>
          </div>
        </div>
        </nav>
        <main style="margin-top: 20px;height: 800px">
            <router-outlet></router-outlet>
        </main>
    </div>
`
})
export class AppComponent {

    routes:Route[]=[];
    constructor() {
        let settings = new Route("/Settings","Settings");
        this.routes.push(settings);
        let security = new Route("/Security","Security");
        this.routes.push(security);
        let community = new Route("/Community","Community");
        this.routes.push(community);
    }

    private select(route){
        this.routes.forEach((r)=>{
           r.selected=false;
        });
        route.selected=true;
    }

}

class Route{
    constructor(link,name)
    {
        this.link = link;
        this.name=name;
    }
    name:string;
    selected:boolean;
    link:string;
}

