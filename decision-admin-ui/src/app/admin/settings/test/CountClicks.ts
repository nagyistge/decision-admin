import {Component} from "angular2/core";
import {HostListener} from "angular2/core";
import {Directive} from "angular2/core";

@Directive({selector: 'button[counting]'})
export class CountClicks {
    numberOfClicks = 0;
    @HostListener('click', ['$event.target'])
    onClick(btn) {
        console.log("button", btn, "number of clicks:", this.numberOfClicks++);
    }
}
