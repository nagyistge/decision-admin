import {Component} from "angular2/core";
import {Tab} from "./Tab";
import {ViewChild} from "angular2/core";
import {ElementRef} from "angular2/core";
import {ComponentBase} from "../commons/ComponentBase";
import {Query} from "angular2/core";
import {QueryList} from "angular2/core";

@Component({
    selector: 'tab-control',
    template: `
    <ul>
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <div>
            <h3 >{{tab.tabTitle}}</h3>
        </div>
      </li>
    </ul>
    <div  id="content" >
        <ng-content></ng-content>
    </div>
  `,
})
export class TabControl {
    tabs: Tab[] = [];

    constructor(@Query(Tab) tabs: QueryList<Tab>){

        tabs.changes.subscribe((items)=>{
            items.toArray().forEach((tab)=>{
                this.addTab(tab);
            });
        });
    }

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }


}