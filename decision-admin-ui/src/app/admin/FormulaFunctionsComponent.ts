import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../commons/ComponentBase";
import {AdminService} from "../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {IdName} from "../../data/wsdl_types";
import {Formula} from "../../data/wsdl_types";
import { wjNg2Grid } from '../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid';
import CollectionView = wijmo.collections.CollectionView;
import {BusyIndicator} from "../commons/BusyIndicator";
//import { wjNg2Input} from '../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid';

@Component({
    selector: 'formula-functions-settings',
    directives:[wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,BusyIndicator],
    template: `
    <div style="margin-left: 10px">
        <div>
                <div >
                        <h3> Formulas </h3>
                        <input type="text" [(ngModel)]="newFormula">
                        <button (click)="addFormula()">Add</button>
                        <button (click)="refresh()">Refresh</button>
                </div>
                 <busy-indicator [busy]="isWorking" [title]="'please wait'" style="width:100%; height:500px;margin-top: 10px" >
                     <wj-flex-grid #flex [allowResizing]="'Both'" style="position: absolute;width:inherit; height:inherit;margin-top: 10px"
                                          class="grid"
                                          [itemsSource]="_functionsCollectionView"
                                          [isReadOnly]="false"
                                          [allowAddNew]="true"
                                          (itemsSourceChanged)="itemsSourceChangedHandler()">
                            <wj-flex-grid-column [header]="'Name'" [binding]="'name'" [width]="'*'">
                                <template wjFlexGridCellTemplate [cellType]="'Cell'" #cell="cell">
                                   <div >
                                        <h7>{{cell.item.name}}</h7>
                                        <span *ngFor="#arg of cell.item.arguments, #i=index" >
                                            <h7>({{arg.name}})</h7>
                                            <h7>:{{arg.type}}</h7>
                                        </span>
                                   </div>
                            </template></wj-flex-grid-column>
                            <wj-flex-grid-column [header]="'Description'"  [binding]="'description'" [width]="'*'"></wj-flex-grid-column>
                    </wj-flex-grid>
                </busy-indicator>
        </div>
    </div>`
})
export class FormulaFunctionsComponent extends ComponentBase{

    private _functions : Array<Function>;

    private _functionsCollectionView:CollectionView;

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

    public init(){

        let self = this;
        this.workingCountUp('get formulas');
        this._adminService.getFormulas().subscribe((views:Array<Function>)=>
        {
            this.workingCountDown('get formulas');
            self.functions=<Array<Function>>views;
            self._functionsCollectionView = new CollectionView(self.functions);
        });
    }

    constructor(private _adminService:AdminService){
        super();
        this.title='Formula functions';
        this.init();
    }

    private refresh(){
    this.init();
    }
    private addFormula(){
        //this._adminService.addFormulaFunction().subscribe((views:Response)=> {
        //});

    }


}

