import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../commons/ComponentBase";
import {AdminService} from "../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {IdName} from "../../data/wsdl_types";

@Component({
    selector: 'views-settings',
    template: `
    <div style="margin-left: 10px">
    <div>
            <div >
                    <h3> Views </h3>
                    <input type="text" [(ngModel)]="newView">
                    <button (click)="addView()">Add</button>
            </div>
            <ul style="padding-left: 0px;margin-top: 10px">
                <div *ngFor="#view of views, #i=index" class="row" >
                    <div class="col-md-3"><h7>{{view.name}}</h7></div>
                    <!--<div class="col-md-9 closeBtn">x</div>-->
                </div>
                <li *ngFor="#view of views, #i=index"  [value]="view"></li>
            </ul>

    </div>

    </div>`
})
export class ViewsComponent extends ComponentBase{

    private _views : Array<IdName>;

    public get views() : Array<IdName> {
        return this._views;
    }
    public set views(v : Array<IdName>) {
        this._views = v;
    }

    private _newView : string;

    public get newView() : string {
        return this._newView;
    }
    public set newView(v : string) {
        this._newView = v;
    }

    constructor(private _adminService:AdminService){
        super();
        this.title='Views';

        let self = this;
        _adminService.getViews().subscribe((views:Array<IdName>)=>
        {
            self.views =views;

        });

    }


    private addView(){
        this._adminService.addView(this._newView).subscribe((response)=>{

        });
    }

}

