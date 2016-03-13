import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {AdministrationSettingsComponent} from "./admin/settings/administrationSettings/AdministrationSettings";
import {ViewChild} from "angular2/core";
import {CommunitySettingsComponent} from "./admin/community/CommunitySettings";
import {SecuritySettingsComponent} from "./admin/security/SecuritySettings";
import {AdministrationView} from "./admin/AdministrationView";
import {NgClass} from "angular2/common";

@RouteConfig([

    { path: '/settings', component: AdministrationSettingsComponent, as: 'Settings' },
    { path: '/community', component: CommunitySettingsComponent, as: 'Community' },
    { path: '/security', component: SecuritySettingsComponent, as: 'Security' }

])

@Component({
    directives: [ROUTER_DIRECTIVES,AdministrationView,NgClass],
    selector: 'app',
    template: `

    <div >
        <div class="container-fluid header">
            <img src="src/app/icons/decision.png" height="100%">
        </div>
        <div class="admin-nav-bar">
            <div class="menu-btn" (click)="toggleMenu()">
                <div>
                    <div>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </div>
                </div>
                <div>
                   <h2>Admin</h2>
                </div>
            </div>
        </div>
       <div class="admin-content">
            <div class="left-toggle-menu" [ngClass]="{collapsed: !sideMenuOpen}">
                <div>
                    <div class="icon-title-pair">
                     <img src="src/app/icons/communities.png">
                     <h4>Communities</h4>
                   </div>
                   <div class="icon-title-pair">
                     <img src="src/app/icons/security.png">
                     <h4>Security</h4>
                   </div>
                   <div class="icon-title-pair">
                     <img src="src/app/icons/settings.png">
                     <h4>Settings</h4>
                   </div>

                </div>
            </div>
            <div class="admin-tabs-container">
               <admin-view></admin-view>
            </div>
       </div>
        <!--<nav class="navbar navbar-default">-->
         <!--<div class="navbar-collapse">-->
          <!--<ul class="nav navbar-nav" >-->
              <!--<li (click)="select(route)" [ngClass]="{active: route?.selected}"  *ngFor="#route of routes">-->
                <!--<a  [routerLink]="[route?.link]">{{route.name}}</a>-->
              <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
        <!--</nav>-->
        <!--<main class="container-fluid main-content">-->
            <!--<router-outlet></router-outlet>-->
        <!--</main>-->
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
        this.routes[0].selected=true;
    }

    private sideMenuOpen :boolean = false;

    toggleMenu(){
        this.sideMenuOpen= !this.sideMenuOpen;
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

