import {Component} from "angular2/core";
import {NgClass} from "angular2/common";

@Component({
    directives:[NgClass],
    selector : 'layout',
    styleUrls: ['./src/app/admin/settings/test/layout1.css'],
    template:`
        <div class="layout" >
            <div class="top" >
            </div>
            <div class="middleContainer">
                <div (click)="toggleLeftBar()" [ngClass]="{left: !leftBarCollapsed , leftCollapsed: leftBarCollapsed}">
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                </div>

                <div [ngClass]="{middle: !leftBarCollapsed , middleStretched: leftBarCollapsed}">


                       <div class="contentA">
                        <div class="box2">
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>

                        </div>
                        <div class="box2">
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                             <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            <div class="box3"></div>
                            </div>
                       </div>

                </div>

                <div (click)="toggleRightBar()" [ngClass]="{right: !rightBarCollapsed , rightCollapsed: rightBarCollapsed}">
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                       <div class="box"></div>
                </div>
            </div>
            <div class="bottom" ></div>
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
