import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../../commons/ComponentBase";
import {AdminService} from "../../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {wjNg2Input} from "../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import {ResourceService} from "../../services/commons/ResourceService";
import {Observable} from "rxjs/Observable";
import {Verb} from "../../../data/wsdl_types";
import Popup = wijmo.input.Popup;
import PopupTrigger = wijmo.input.PopupTrigger;
import CancelEventArgs = wijmo.CancelEventArgs;
import {PopupManager} from "../../commons/PopupManager";
import {Injector} from "angular2/core";
import {BusyIndicator} from "../../commons/BusyIndicator";
import {AppComponent} from "../../App";
import {ViewChild} from "angular2/core";
import ListBox = wijmo.input.ListBox;
import {PopupHelper} from "../../commons/PopupHelper";
import {DecResponse} from "../../services/commons/DecResponse";
import {ResourceProviderFactory} from "../../services/commons/ResourceProviderFactory";
import CollectionView = wijmo.collections.CollectionView;
import {SecurityService} from "../../services/Security/SecurityService";
import {DecList} from "./DecList";
import {wjNg2Grid} from "../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid";

@Component({

    selector: 'tests',
    directives:[wjNg2Input.WjListBox,wjNg2Input.WjItemTemplate,wjNg2Input.WjPopup,BusyIndicator,DecList,wjNg2Grid.WjFlexGrid,
                wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,wjNg2Input.WjContextMenu,wjNg2Input.WjMenu,wjNg2Input.WjMenuItem],
    template: `

    <div style="margin-left: 10px" >
            <dec-list >
               <wj-flex-grid style="width: 250px"  [wjContextMenu]="ctxMenu"
                                             #grid [allowAddNew]="true"
                                                   [headersVisibility]="'None'"
                                                   [selectedValue]="selectedVerb"
                                                   [itemsSource]="_verbsCollectionView"
                                                   (cellEditEnded)="onEditEnded($event)"
                                                   (rowAdded)="onRowAdded($event)" >
                    <wj-flex-grid-column [width]="'*'"  [header]="'Name'"  [binding]="'name'" ></wj-flex-grid-column>
                    <wj-menu #ctxMenu style="display:none" (itemClicked)="contextMenuItemClicked(ctxMenu, $event)">
                        <wj-menu-item [value]="'Add'">Add</wj-menu-item>
                        <wj-menu-item [value]="'Delete'">Delete</wj-menu-item>
                        <wj-menu-item [value]="'Edit'">Edit</wj-menu-item>
                        <wj-menu-item [value]="'Duplicate'">Duplicate</wj-menu-item>
                    </wj-menu>
               </wj-flex-grid>


            </dec-list>
    </div>
    `
})
export class TestList  {

    private _verbs : Array<Verb> = [];
    private _verbsCollectionView:CollectionView;

    public get verbs() : Array<Verb> {
        return this._verbs;
    }
    public set verbs(v : Array<Verb>) {
        this._verbs = v;
    }

    constructor(){
        this.init();
    }

    private onEditEnded(event){
        //handle cell chagnes
    }

    private onRowAdded(event){
        let newVerb = <Verb>this._verbs[this._verbs.length-1];
        newVerb.name="new verb";
    }

    public init()
    {
        for(let i =0;i<10;i++)
        {
            let v = <Verb>{};
            v.name = 'verb '+i;
            this._verbs.push(v);
        }
     this._verbsCollectionView = new CollectionView(this._verbs);
    }


    public contextMenuItemClicked(menu4, event){
        console.log(event);
    }
}


