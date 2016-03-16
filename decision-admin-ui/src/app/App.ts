import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES,ComponentInstruction} from 'angular2/router';
import {Settings} from "./admin/settings/Settings";
import {ViewChild} from "angular2/core";
import {CommunitySettings} from "./admin/community/CommunitySettings";
import {SecuritySettings} from "./admin/security/SecuritySettings";
import {NgClass} from "angular2/common";
import {ElementRef} from "angular2/core";
import {QueryList} from "angular2/core";
import {Query} from "angular2/core";

@RouteConfig([

    { path: '/settings', component: Settings, as: 'Settings' },
    { path: '/communities', component: CommunitySettings, as: 'Communities' },
    { path: '/security', component: SecuritySettings, as: 'Security' }

])

@Component({
    providers:[ElementRef],
    directives: [ROUTER_DIRECTIVES,Settings,NgClass],
    selector: 'app',
    template: `

    <div  [ngClass]="{stickToTop : stickNavHeader}">
        <div class="container-fluid header block" >
            <img src="src/app/icons/decision.png" >
        </div>
        <div class="palce-holder"></div>
        <div class="admin-nav-bar" >
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
            <h2 >{{currentRouteName}}</h2>
        </div>
       <div class="admin-content">
            <div class="left-toggle-menu" [ngClass]="{collapsed: !sideMenuOpen}">
                <div>
                    <div class="icon-title-pair" (click)="navigateTo('Communities')">
                     <img src="src/app/icons/communities.png">
                     <a [routerLink]="['Communities']">
                        <h4>Communities</h4>
                     </a>

                   </div>
                   <div class="icon-title-pair" (click)="navigateTo('Security')">
                     <img src="src/app/icons/security.png">
                     <a [routerLink]="['Security']">
                        <h4>Security</h4>
                     </a>
                   </div>
                   <div class="icon-title-pair" (click)="navigateTo('Settings')">
                     <img src="src/app/icons/settings.png">
                     <a [routerLink]="['Settings']">
                        <h4>Settings</h4>
                     </a>
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

    private _stickNavHeader : boolean;

    public get stickNavHeader() : boolean {
        return this._stickNavHeader;
    }
    public set stickNavHeader(v : boolean) {
        this._stickNavHeader = v;
    }

    private _headerHeight:number;
    private _header :ElementRef;
    constructor(private _router: Router,elementRef:ElementRef) {

        //TODO: need to take this number from the header element
        this._headerHeight=80;
    }

    private navigateTo(target:string){
        this._router.navigate([target]);
        this.currentRouteName = target;
    }

    onScroll(event) {

           //
           //
           //let yOffset:number=0;
           //
           // //if chrome
           // yOffset = event.parh[0].pageYOffset;
           // //if IE
           // yOffset = event.view.pageYOffset;
           //
           // if(yOffset > this._headerHeight)
           // {
           //     this.stickNavHeader = true;
           // }
           // else {
           //     this.stickNavHeader = false;
           // }

    }


    ngOnInit()
    {
        let self =this;
        this.currentRouteName = this._router.lastNavigationAttempt.slice(1);
        window.addEventListener('scroll',($event)=>self.onScroll($event));

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


}

