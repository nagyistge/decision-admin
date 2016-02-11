import {Component} from "angular2/core";
import {Input} from "angular2/core";

@Component({
    selector: 'busy-indicator',
    template: `
    <div style="height: 100%;width: 100%;position: absolute" >
          <ng-content style="height: 100%;width: 100%;position: absolute" ></ng-content>
          <div *ngIf="busy" style="background-color: whitesmoke;height: 100%;width: 100%;position:absolute;opacity: 0.8;">
            <div style="margin-top:100%;margin-left: 25%">
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