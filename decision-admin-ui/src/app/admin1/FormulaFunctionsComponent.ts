import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../commons/ComponentBase";
import {AdminService} from "../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {IdName} from "../../data/wsdl_types";
import {Formula} from "../../data/wsdl_types";

@Component({
    selector: 'formula-functions-settings',
    template: `
    <div style="margin-left: 10px">
    <div>
            <div >
                    <h3> Formulas </h3>
                    <input type="text" [(ngModel)]="newFormula">
                    <button (click)="addFormula()">Add</button>
            </div>
            <ul style="padding-left: 0px;margin-top: 10px">
                <div *ngFor="#function of functions, #i=index" class="row" >
                    <div class="col-md-6">
                        <h7>{{function.name }}</h7>
                        <span *ngFor="#arg of function.arguments, #i=index" >
                            <h7>({{arg.name}})</h7>
                            <h7>:{{arg.type}}</h7>
                        </span>

                    </div>
                    <div class="col-md-6"><h7>{{function.description}}</h7></div>
                </div>
                <li *ngFor="#function of functions, #i=index"  [value]="function"></li>
            </ul>

    </div>


    </div>`
})
export class FormulaFunctionsComponent extends ComponentBase{

    private _functions : Array<Function>;



    public get functions() : Array<Function> {
        return this._functions;
    }
    public set functions(v : Array<Function>) {
        this._functions = v;
    }

    private _newFunction : Function;

    public get newFunction() : Function {
        return this._newFunction;
    }
    public set newFunction(v : Function) {
        this._newFunction = v;
    }


    constructor(private _adminService:AdminService){
        super();
        this.title='Formula functions';

        let self = this;
        _adminService.getFormulas().subscribe((views:Response)=>
        {
            self.functions=<Array<Function>>views.json();

        });


    }

    private addFormula(){
        //this._adminService.addFormulaFunction().subscribe((views:Response)=> {
        //});

    }


}

