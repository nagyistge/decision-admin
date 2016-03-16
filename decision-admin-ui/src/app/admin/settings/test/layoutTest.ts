import {Component} from "angular2/core";
import {NgClass} from "angular2/common";
import {Directive} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {NgModel} from "angular2/common";
import {HostBinding,HostListener} from "angular2/core";
import {App1} from "./app1";

@Component({
    directives:[NgClass,App1],
    selector : 'layout',
    styleUrls: ['./src/app/admin/settings/test/layout1.css'],
    template:`
        <div class="layout" >
            <div class="top" >
            </div>
            <div class="middleContainer">
               <app1></app1>
            </div>
        </div>
    `
})
export class LayoutTest{

    leftBarCollapsed:boolean=false;
    rightBarCollapsed:boolean=false;

    toggleLeftBar(){
        this.leftBarCollapsed = !this.leftBarCollapsed;
    }
    toggleRightBar(){
        this.rightBarCollapsed = !this.rightBarCollapsed;
    }
}


