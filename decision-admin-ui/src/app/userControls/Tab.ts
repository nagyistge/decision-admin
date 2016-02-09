import {Component} from "angular2/core";
import {Input} from "angular2/core";

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

}