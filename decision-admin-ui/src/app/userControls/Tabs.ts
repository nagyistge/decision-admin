import {Component} from "angular2/core";
import {Tab} from "./Tab";

@Component({
    selector: 'tabs',
    template: `
    <ul class="nav nav-tabs" >
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a>
            <h5 >{{tab.tabTitle}}</h5>
        </a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
})
export class Tabs {
    tabs: Tab[] = [];

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