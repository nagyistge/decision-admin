import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../commons/ComponentBase";
import {AdminService} from "../services/AdminService";
import {IdNamePair} from "../commons/IdNamePair";
import {Response} from "angular2/http";

@Component({
    selector: 'views',
    template: `
    <div style="margin-left: 10px">

        <div >
                <h3> {{title}} </h3>
                <input type="text" value="{{newView}}">
        </div>
        <ul style="height: 80%;padding-left: 0px;margin-top: 10px">
            <div *ngFor="#view of views, #i=index" class="row" >
                <div class="col-md-3"><h7>{{view.name}}</h7></div>
                <div class="col-md-9 closeBtn">x</div>
            </div>
            <li *ngFor="#view of views, #i=index"  [value]="view"></li>
        </ul>



    </div>`
})
export class ViewsComponent extends ComponentBase{

    private _views : Array<IdNamePair>;

    public get views() : Array<IdNamePair> {
        return this._views;
    }
    public set views(v : Array<IdNamePair>) {
        this._views = v;
    }

    private _newView : string;

    public get newView() : string {
        return this._newView;
    }
    public set newView(v : string) {
        this._newView = v;
    }

    constructor(private adminService:AdminService){
        super();
        this.title='Views';
        adminService.getViews().subscribe((views:Response)=>
        {
            this.views=<IdName>views.json();
        });
    }

}
