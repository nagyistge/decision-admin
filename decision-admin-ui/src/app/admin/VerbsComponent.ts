import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../commons/ComponentBase";
import {AdminService} from "../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {IdName} from "../../data/wsdl_types";

@Component({
    selector: 'verbs-settings',
    template: `
    <div style="margin-left: 10px">
    <div>
            <div >
                    <h3> Verbs </h3>
                    <input type="text" [(ngModel)]="newVerb">
                    <button (click)="addVerb()">Add</button>
            </div>
            <ul style="padding-left: 0px;margin-top: 10px">
                <div *ngFor="#verb of verbs, #i=index" class="row" >
                    <div class="col-md-3"><h7>{{verb.name}}</h7></div>
                    <!--<div  class="closeBtn">x</div>-->
                </div>
                <li *ngFor="#verb of verbs, #i=index"  [value]="verb"></li>
            </ul>

    </div>

    </div>`
})
export class VerbsComponent extends ComponentBase{

    private _verbs : Array<IdName>;

    public get verbs() : Array<IdName> {
        return this._verbs;
    }
    public set verbs(v : Array<IdName>) {
        this._verbs = v;
    }


    private _newVerb : string;

    public get newVerb() : string {
        return this._newVerb;
    }
    public set newVerb(v : string) {
        this._newVerb = v;
    }


    constructor(private _adminService:AdminService){
        super();
        this.title='Verbs';

        let self = this;

        _adminService.getVerbs().subscribe((verbs:Array<IdName>)=>
        {
            self.verbs =verbs;

        });
    }


    private addVerb(){
        this._adminService.addVerb(this._newVerb).subscribe((response)=>{

        });
    }
}

