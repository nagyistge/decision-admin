import {Component} from "angular2/core";
import {wjNg2Grid} from "../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid";
import {ComponentBase} from "../commons/ComponentBase";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {Input} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Function,AbstractEntity} from "../../data/wsdl_types";
import {PrimitiveDataType} from "../../data/wsdl_types";
import CollectionView = wijmo.collections.CollectionView;
import {wjNg2Input} from "../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import {NgModel} from "angular2/common";

@Component({
    directives:[wjNg2Input.WjComboBox,wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,NgModel],
    selector: 'formula-function-view',
    template:
    `
    <div style="height: 600px;width: 700px;padding: 20px;">
        <h4 class="modal-header">{{title}}</h4>
        <div style="display:flex;flex-direction: row;margin-bottom: 5px">
            <p style="width: 200px">Name:</p>
            <input style="flex-grow: 1"  [(ngModel)]="model.name">
        </div>
        <div style="display:flex;flex-direction: row;margin-bottom: 5px">
            <p style="width: 200px">Description:</p>
            <input style="flex-grow: 1" [(ngModel)]="model.description">
        </div>
        <div style="display:flex;flex-direction: row;margin-bottom: 5px">
            <p style="width: 200px">Return Type:</p>
            <wj-combo-box  [itemsSource]="targetTypeList" [(selectedItem)]="model.returnType" style="flex-grow: 1;height:30px" ></wj-combo-box>
        </div>
        <div style="display:flex;flex-direction: row;margin-bottom: 5px">
            <p style="width: 200px">Is Enabled</p>
            <input  type="checkbox">
        </div>

        <div>
            <button>Add Parameter</button>
            <button>Remove Parameter</button>
        </div>

        <div style="height: 260px">
             <wj-flex-grid #flex [allowResizing]="'Both'" style="width:650px; margin-top: 10px"
                                              class="grid"
                                              [itemsSource]="model.arguments"
                                              [isReadOnly]="false"
                                              [allowAddNew]="true"
                                             >
                                <wj-flex-grid-column [header]="'Name'" [binding]="'name'" [width]="'*'"></wj-flex-grid-column>
                                <wj-flex-grid-column [header]="'Type'"  [binding]="'type'" [width]="'*'"></wj-flex-grid-column>
                                <wj-flex-grid-column [header]="'List'"  [binding]="'list'" [width]="'*'"></wj-flex-grid-column>
                                <wj-flex-grid-column [header]="'Infinite'"  [binding]="'infinite'" [width]="'*'"></wj-flex-grid-column>
             </wj-flex-grid>
        </div>
         <div class="modal-footer" style="margin-top: 25px;">
            <button class="btn btn-primary" (click)="onSubmit(true)">OK</button>
            <button class="btn btn-danger" (click)="onSubmit(false)">Cancel</button>
         </div>

    </div>

    `
})
export class FormulaFunctionView extends ComponentBase{

    @Input() model: any; // cant declare it as Function

    private targetTypeList : CollectionView;

    private _selectedType : string;

    public get selectedType() : string {
        return this._selectedType;
    }
    public set selectedType(v : string) {
        this._selectedType = v;
        if(this.model)
            this.model.returnType=PrimitiveDataType[v];
    }

    private fillTypesList() {
        let tempList : string[]=[];
        tempList.push(PrimitiveDataType[PrimitiveDataType.DATE]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.DATE_TIME]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.NUMERIC]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.TEXT]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.BASIS_POINTS]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.MONTH_YEAR]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.ENUMERATOR]);
        tempList.push(PrimitiveDataType[PrimitiveDataType.INTEGER]);
        this.targetTypeList =new CollectionView(tempList);
    }
    constructor(){
     super();
     this.title = "Formula Function";
    this.fillTypesList();
    }

    @Output() submit = new EventEmitter();

    onSubmit(confirm: boolean) {
        this.submit.emit(confirm);
    }



}
