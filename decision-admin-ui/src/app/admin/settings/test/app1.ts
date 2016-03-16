import {Component} from "angular2/core";
import {HostListener} from "angular2/core";
import {Directive} from "angular2/core";
import {CountClicks} from "./CountClicks";

@Component({
    selector: 'app1',
    template:
        `
        <div>
           <div class="box"></div>
           <div class="box"></div>
           <div class="box"></div>
           <div class="box"></div>
           <div class="box"></div>
           <div class="box"></div>

        </div>
        `,
    directives: [CountClicks]
})
export class App1{}

