import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {Tabs} from "./Tabs";

@Component({
    selector: 'tab',
    template: `
    <div [hidden]="!active" >
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {

    @Input() tabTitle: string;
    @Input() active: boolean;
    constructor(tabs:Tabs) {
        tabs.addTab(this);
    }
}