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
import {wjNg2Grid} from "../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid";
import {DecList} from "./test/DecList";
import SelectionMode = wijmo.grid.SelectionMode;
import {Tab} from "../../userControls/Tab";
import {Host} from "angular2/core";

@Component({

    selector: 'verbs-settings',
    providers:[ResourceProviderFactory.VerbsServiceProvider],
    directives:[wjNg2Input.WjListBox,wjNg2Input.WjItemTemplate,wjNg2Input.WjPopup,BusyIndicator,DecList,wjNg2Grid.WjFlexGrid,
        wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,wjNg2Input.WjContextMenu,wjNg2Input.WjMenu,wjNg2Input.WjMenuItem,
        wjNg2Input.WjPopup,BusyIndicator],
    template: `

    <div style="margin-left: 10px" >

       <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default" (click)="addVerb(searchText)">Add</button>
          <button type="button" class="btn btn-default" (click)="editSelectedVerb()">Edit</button>
          <button type="button" class="btn btn-default" (click)="deleteSelectedVerbs()">Delete</button>
          <button type="button" class="btn btn-default" (click)="duplicateSelectedVerbs()">Duplicate</button>

        </div>
         <div style="margin-top:10px">
                <label>{{title}} ({{_verbsCollectionView?.items?.length}})</label>
                <input #newVerb (keyup.enter)="addVerb(newVerb.value)" [(ngModel)]="searchText" type="text" style="width: 255px">
                <button #addBtn (click)="addVerb(newVerb.value)">Add</button>
         </div>
        <busy-indicator [busy]="isWorking" [title]="'please wait'" style="width:300px;flex-grow: 1;position: relative;height: 500px;margin-top: 10px">
             <wj-flex-grid style="width: 250px"  #grid
                                                   [headersVisibility]="'None'"
                                                   (selectionChanged)="selectionChanged(grid.selectedItems)"
                                                   [selectedItems]="selectedVerbs"
                                                   [isReadOnly]="true"
                                                   [(itemsSource)]="_verbsCollectionView">
                    <wj-flex-grid-column [width]="'*'"  [header]="'Name'"  [binding]="'name'" >
                        <template wjFlexGridCellTemplate [cellType]="'Cell'" #item="item" #itemIndex="itemIndex">
                           <div style="display: flex;flex-direction:row" >
                                 <h7 style="flex-grow:1">{{item.name}}</h7>
                                 <div *ngIf="showSingleSelectionMenu(item)">
                                     <img  class="dec-icon" src="src/app/icons/delete.png" (click)="deleteVerb(item.id)">
                                     <img  class="dec-icon" src="src/app/icons/edit.png"   [attr.id]="'b'+item.id">
                                     <wj-popup owner="#b{{item.id}}" style="padding:10px"  >
                                       <span>Edit value:</span>
                                       <input type="text" [value]="item.name" #valueBox>
                                       <button class="wj-hide" (click)="editVerb(item,valueBox.value)">OK</button>
                                       <button class="wj-hide">Cancel</button>
                                    </wj-popup>
                                 </div>

                           </div>
                    </template>
                    </wj-flex-grid-column>
             </wj-flex-grid>


        </busy-indicator>
    </div>
    `
})
export class VerbsComponent extends ComponentBase {

    @ViewChild('grid') wjFlexGrid :any;

    private _verbs : Array<Verb> = [];
    private _verbsCollectionView:CollectionView ;
    private _selectedVerbs :any;
    private _searchText : string;
    private _duplicatesCounter:number=0;

    public get verbs() : Array<Verb> {
        return this._verbs;
    }
    public set verbs(v : Array<Verb>) {
        this._verbs = v;
    }

    public get selectedVerbs() :any {
        return this._selectedVerbs;
    }
    public set selectedVerbs(v : any) {
        this._selectedVerbs = v;
    }

    public get searchText() : string {
        return this._searchText;
    }
    public set searchText(v : string) {
        this._searchText = v;
        this.applySelection(this.searchText);
        //this.applyFilter();
    }

    private deleteSelectedVerbs(){

        this.selectedVerbs.forEach((v)=>{
           this.deleteVerb(v.id);
        });
    }

    private editSelectedVerb(){
        if(this.selectedVerbs.length ==1){
            this.editVerb(this.selectedVerbs[0]);
        }
    }

    private duplicateSelectedVerbs(){
        this.selectedVerbs.forEach((v)=>{
           this.addVerb(v.name+"_"+ this._duplicatesCounter++);
        });
    }

    private showSingleSelectionMenu (item):boolean{
        return  this._selectedVerbs && this._selectedVerbs.length == 1 &&  this._selectedVerbs[0].id==item.id;
    }

    constructor(private _resourceService:ResourceService,private _securityService:SecurityService,@Host() tab:Tab){
        super();
        this.title='Verbs';
        this.init();
        let self = this;
        //TODO: this is for fixing wijmo bug that the control is not refreshed when selecting its host tab
        tab.activeChanged.subscribe((visible)=>{
            if(visible && self._verbsCollectionView)
                self._verbsCollectionView.refresh();
        });
    }

    private ngAfterViewInit() {
        this.wjFlexGrid.selectionMode = <SelectionMode>SelectionMode.ListBox;
    }

    private selectionChanged(verbs:Verb[]){
        this.selectedVerbs = verbs;
    }

    public init(){
        this.getAllVerbs();
    }

    private getAllVerbs(){
        let self = this;
        this.workingCountUp('get all verbs');
        this._resourceService.getEntities().
        subscribe((response:DecResponse<Array<Verb>>)=>
        {
            this.workingCountDown('get all verbs');
            if (response.ok) {
                self.verbs = response.result;
                self._verbsCollectionView = new CollectionView(self.verbs);
                self.selectedVerbs = [self.verbs[0]];
            }
        });
    }

    private editVerb(selectedItem:Verb){
        let temp = <Verb>{};
        temp.name=selectedItem.name;
        temp.id = selectedItem.id;
        let self = this;
        this.workingCountUp('editVerb');
        this._resourceService.updateEntity(temp).subscribe((response:DecResponse<any>)=>{
            this.workingCountDown('editVerb');
            if (response.ok) {
                let index = this.verbs.findIndex(v=>v.id == temp.id);
                if(index != -1) {
                    self.verbs[index].name = temp.name;
                }
                self._verbsCollectionView.refresh();
            }
        });
    }

    private addVerb(verb:string){
        if (((!verb)||(verb.length == 0)) || (this.verbs.map(v=>v.name).indexOf(verb) >=0 )) return;
        let self = this;
        this.workingCountUp('addVerb');
        let response = this._resourceService.addEntity(verb);
        response.subscribe((response:DecResponse<number>)=>{
            this.workingCountDown('addVerb');
            if (response.ok)
            {
                console.log('subscribedr 1 : ' +response.result);
                self.searchText="";
                let _verb :Verb = <Verb>{};
                _verb.id = response.result;
                _verb.name = verb;
                self._verbs.push(_verb);
                self._verbsCollectionView.refresh();
                self.applySelection(_verb.name);
            }
        });


    }

    private deleteVerb(id:number){

        let self = this;
        let response = this._resourceService.deleteEntity(id.toString());
        this.workingCountUp('deleteVerb');
        response.subscribe((response:DecResponse<any>)=>{
            this.workingCountDown();
            if (response.ok) {
                let index = self.verbs.findIndex(v=>v.id == id);
                if(index != -1) {
                    self.verbs.splice(index, 1);
                }
                self._verbsCollectionView.refresh();
            }
        });


    }

    private applySelection(value:string) {

        if (this.wjFlexGrid) {
            let filtered = this._verbsCollectionView.items.filter((item)=>item.name.indexOf(value)> -1);

            if((filtered.length != this._verbsCollectionView.items.length))
            {
                this.wjFlexGrid.selectedItems= filtered;
            }
            else {
                this.wjFlexGrid.selectedItems=null;
            }
        } else {
            this._verbsCollectionView.refresh();
        }
    }


//TODO: the remarked functions filters the typed text instead of selecting it.
    /*

    private toFilter:any;
    private thisFilterFunction: wijmo.collections.IPredicate;

    private filterFunction(item) {
        var f = this.searchText;
        if (f && item) {

            // split string into terms to enable multi-field searches such as 'us gadget red'
            var terms = f.toUpperCase().split(' ');

            // look for any term in any string field
            for (var i = 0; i < terms.length; i++) {
                var termFound = false;
                for (var key in item) {
                    var value = item[key];
                    if (wijmo.isString(value) && value.toUpperCase().indexOf(terms[i]) > -1) {
                        termFound = true;
                        break;
                    }
                }

                // fail if any of the terms is not found
                if (!termFound) {
                    return false;
                }
            }
        }

        // include item in view
        return true;
    }

    private applyFilter() {
        if (this.toFilter) {
            clearTimeout(this.toFilter);
        }
        var self = this;
        this.toFilter = setTimeout(function () {
            self.toFilter = null;
            var cv = self._verbsCollectionView;
            if (cv) {
                if (cv.filter != self.thisFilterFunction) {
                    cv.filter = self.thisFilterFunction;
                } else {
                    cv.refresh();
                }
            }
        }, 200);
    }

*/



}

