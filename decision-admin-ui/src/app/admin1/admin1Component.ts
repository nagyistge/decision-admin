import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';

@Component({
    selector: 'admin1',
    template: `
    <div>
        <h1> {{title}} </h1>



    </div>`
})
export class admin1Component {
    constructor() {
    }
    name = 'Admin 1';
    
    public getName():string{
        return this.name;
    }
}
