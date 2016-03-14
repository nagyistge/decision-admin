import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES,ComponentInstruction} from 'angular2/router';
import {Settings} from "./admin/settings/Settings";
import {ViewChild} from "angular2/core";
import {CommunitySettings} from "./admin/community/CommunitySettings";
import {SecuritySettings} from "./admin/security/SecuritySettings";
import {NgClass} from "angular2/common";

@RouteConfig([

    { path: '/settings', component: Settings, as: 'Settings' },
    { path: '/community', component: CommunitySettings, as: 'Community' },
    { path: '/security', component: SecuritySettings, as: 'Security' }

])

@Component({
    directives: [ROUTER_DIRECTIVES,Settings,NgClass],
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
            <h2 class="routeHeader">{{currentRouteName}}</h2>
        </div>
       <div class="admin-content">
            <div class="left-toggle-menu" [ngClass]="{collapsed: !sideMenuOpen}">
                <div>
                    <div class="icon-title-pair" (click)="navigateTo('Community')">
                     <img src="src/app/icons/communities.png">
                     <h4>Communities</h4>
                   </div>
                   <div class="icon-title-pair" (click)="navigateTo('Security')">
                     <img src="src/app/icons/security.png">
                     <h4>Security</h4>
                   </div>
                   <div class="icon-title-pair" (click)="navigateTo('Settings')">
                     <img src="src/app/icons/settings.png">
                     <h4>Settings</h4>
                   </div>

                </div>
            </div>
            <div class="admin-tabs-container">
                <div>
                 <router-outlet></router-outlet>
               </div>
            </div>
       </div>

    </div>
`
})
export class AppComponent  {

    routes:Route[]=[];
    constructor(private _router: Router) {
        let settings = new Route("/Settings","Settings");
        this.routes.push(settings);
        let security = new Route("/Security","Security");
        this.routes.push(security);
        let community = new Route("/Community","Community");
        this.routes.push(community);
        this.routes[0].selected=true;
    }

    private navigateTo(target:string){
        this._router.navigate([target]);
        this.currentRouteName = target;
    }

    ngOnInit()
    {
        this.currentRouteName = this._router.lastNavigationAttempt.slice(1);
    }
    private _currentRouteName : string;

    public get currentRouteName() : string {
        return this._currentRouteName;
    }
    public set currentRouteName(v : string) {
        this._currentRouteName = v;
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

