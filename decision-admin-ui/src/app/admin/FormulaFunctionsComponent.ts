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
import {ResourceService} from "../services/commons/ResourceService";
import {ResourceProviderFactory} from "../services/commons/ResourceProviderFactory";
import {SapResponse} from "../services/commons/SapResponse";
import {PopupHelper} from "../commons/PopupHelper";
import {FormulaFunctionView} from "./FormulaFunctionView";
import {ElementRef} from "angular2/core";
import {Injector} from "angular2/core";
import {wjNg2Input} from "../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import Popup = wijmo.input.Popup;
import PopupTrigger = wijmo.input.PopupTrigger;
import {Input} from "angular2/core";
import {QueryList} from "angular2/core";
import {Query} from "angular2/core";
import {VerbsComponent} from "./VerbsComponent";
import {ViewChild} from "angular2/core";
import {Function} from "../../data/wsdl_types";
import {DataType} from "../../data/wsdl_types";
import {PrimitiveDataType} from "../../data/wsdl_types";
import {Tab} from "../userControls/Tab";
import {Host} from "angular2/core";
import {HostListener} from "angular2/core";
import {ContentChild} from "angular2/core";
import {Subscriber} from "rxjs/Subscriber";



@Component({
    selector: 'formula-functions-settings',
    providers:[ResourceProviderFactory.FunctionsServiceProvider],
    directives:[wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,BusyIndicator,wjNg2Input.WjPopup,FormulaFunctionView],
    template: `
    <div style="margin-left: 10px">
        <div>
                <div >
                        <h3> Formulas </h3>
                        <input type="text" [(ngModel)]="newFormula">
                        <button (click)="addFormulaFunction(functionView)">Add</button>
                        <button (click)="editFormulaFunction(ffGrid.selectedItems,functionView)">Edit</button>
                        <button (click)="refresh()">Refresh</button>
                </div>
                 <busy-indicator [busy]="isWorking" [title]="'please wait'" style="width:100%; height:500px;margin-top: 10px" >
                     <wj-flex-grid #ffGrid [allowResizing]="'Both'" style="position: absolute;width:inherit; height:inherit;margin-top: 10px"
                                          class="grid"
                                          [itemsSource]="_functionsCollectionView"
                                          [isReadOnly]="true"
                                          [allowAddNew]="false"
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
                  <wj-popup  style="padding:10px" #functionView >
                    <formula-function-view [(model)]="_currentFormulaFunction" (submit)="functionView.hide()"></formula-function-view>
                  </wj-popup>

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

    @ViewChild(FormulaFunctionView) formulaFunctionView:FormulaFunctionView;


    public init(){

        let self = this;
        this.workingCountUp('get formulas');
        this._resourceService.getEntities().subscribe((response:SapResponse<Array<Function>>)=>
        {
            this.workingCountDown('get formulas');
            if (response.ok) {
                self.functions=<Array<Function>>response.result;
                self._functionsCollectionView = new CollectionView(self.functions);
            }

        });
    }

    constructor(private _resourceService:ResourceService,private _elementRef:ElementRef,private _injector:Injector,@Host() tab:Tab){
        super();
        this.title='Formula functions';
        this.init();
        let self = this;
        tab.activeChanged.subscribe((visible)=>{
            if(visible && self._functionsCollectionView)
                self._functionsCollectionView.refresh();
        });
    }

    private refresh()
    {
        this.init();
    }


    private _currentFormulaFunction : Function= <Function>{};


    private editFormulaFunction(formulaFunction:Function[],popup:Popup)
    {
        this._currentFormulaFunction=formulaFunction[0];

        let self = this;
        popup.hideTrigger=PopupTrigger.None;
        popup.show(true);


        let popupCallback = (confirmed)=>{
            self.formulaFunctionView.submit.remove(popupCallback);
            if(confirmed)
                self._functionsCollectionView.refresh();
            };

        let subscriber= this.formulaFunctionView.submit.subscribe(popupCallback);

    }



    private addFormulaFunction(popup:Popup){
        this._currentFormulaFunction= <Function>{};
        let self = this;
        popup.hideTrigger=PopupTrigger.None;
        popup.show(true);

        let popupCallback = (confirmed)=>{
            self.formulaFunctionView.submit.remove(popupCallback);
            if(confirmed)
            {
                self.functions.push(self._currentFormulaFunction);
                self._functionsCollectionView.refresh();
            }
        };

        this.formulaFunctionView.submit.subscribe(popupCallback);


    }


}

