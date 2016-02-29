import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
    selector: 'tab',
    template: `
    <div [hidden]="!active" class="block">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {

    @Input('active') private _active : boolean;

    public get active() : boolean {
        return this._active;
    }
    public set active(v : boolean) {
        this._active = v;
        this.activeChanged.emit(v);
    }
    @Input() tabTitle: string;
    @Output() activeChanged = new EventEmitter();
}