import {Component} from "angular2/core";
import {Input} from "angular2/core";

@Component({
    selector: 'busy-indicator',
    template: `
    <div style="height: inherit;width: inherit;position: absolute" >
          <ng-content style="height: inherit;width: inherit;position: absolute" ></ng-content>
          <div *ngIf="busy" style="background-color: whitesmoke;height: 100%;width: 100%;position:absolute;opacity: 0.8;">
            <div style="top:50%;left: 25%;position:absolute;">
                <div class="ball"></div>
                <h5 >{{title}}</h5>
            </div>
          </div>
    </div>
    `
})
export class BusyIndicator{

    @Input() busy:boolean = true;
    @Input() title:string= 'Loading';


    //[ngClass]="{active: busy, disabled: not-busy}"
}