import {Component} from "angular2/core";
import {Input} from "angular2/core";

@Component({
    selector: 'busy-indicator',
    template: `
    <div style="height: 70%;width: 300px;position: absolute" >
          <ng-content style="height: 100%;width: 100%;position: absolute" ></ng-content>
          <div *ngIf="busy" style="background-color: whitesmoke;height: 100%;width: 100%;position:absolute;opacity: 0.8;">
            <h5 style="margin-top:100%;margin-left: 25%">{{title}}</h5>
          </div>
    </div>
    `
})
export class BusyIndicator{

    @Input() busy:boolean = true;
    @Input() title:string= 'Loading';

    public static show () {

    };
    //[ngClass]="{active: busy, disabled: not-busy}"
}