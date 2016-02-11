import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../commons/ComponentBase";
import {AdminService} from "../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {wjNg2Input} from "../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import {ResourceService} from "../services/commons/ResourceService";
import {Observable} from "rxjs/Observable";
import Popup = wijmo.input.Popup;
import PopupTrigger = wijmo.input.PopupTrigger;
import CancelEventArgs = wijmo.CancelEventArgs;
import {Injector} from "angular2/core";
import {BusyIndicator} from "../commons/BusyIndicator";
import {AppComponent} from "../App";
import {ViewChild} from "angular2/core";
import {PopupHelper} from "../commons/PopupHelper";
import {SapResponse} from "../services/commons/SapResponse";
import {View} from "../../data/wsdl_types";
import ListBox = wijmo.input.ListBox;
import {CORE_DIRECTIVES} from "angular2/common";


@Component({
    selector: 'views-settings',
    directives:[BusyIndicator,wjNg2Input.WjComboBox,wjNg2Input.WjListBox,wjNg2Input.WjItemTemplate,wjNg2Input.WjPopup],
    template: `
    <div style="margin-left: 10px">
    <div>
            <div >
                    <h3> Views </h3>
                    <input #newView type="text" style="width: 255px">
                    <button (click)="addView(newView.value)">Add</button>
            </div>
            <busy-indicator [busy]="isWorking" [title]="'please wait'">
                <wj-list-box #views_listbox  style="position: absolute; height:100%;width:300px;margin-top: 10px"
                               [selectedValue]="selectedView"  [itemsSource]="views" >
                    <template wjItemTemplate #item="item" #itemIndex="itemIndex">
                       <div style="display: flex;flex-direction:row" >
                             <h7 style="flex-grow:1">{{item.name}}</h7>
                             <div *ngIf="views_listbox.selectedValue.id==item.id">
                                 <img  class="sap-icon" src="src/app/icons/delete.png" (click)="deleteView(item.id)">
                                 <img  class="sap-icon" src="src/app/icons/edit.png" [attr.id]="'b'+item.id" >
                                 <wj-popup owner="#b{{item.id}}" style="padding:10px"  >
                                   <span>Edit value:</span>
                                   <input type="text" [value]="item.name" #valueBox>
                                   <button class="wj-hide" (click)="editView(item,valueBox.value)">OK</button>
                                   <button class="wj-hide">Cancel</button>
                                </wj-popup>
                             </div>

                       </div>
                    </template>
                </wj-list-box>
            </busy-indicator>
    </div>

    `
})
export class ViewsComponent extends ComponentBase{

    private _views : Array<View> = [];
    private _resourceService:ResourceService;
    private _selectedView : any;

    public get views() : Array<View> {
        return this._views;
    }
    public set views(v : Array<View>) {
        this._views = v;
    }

    public get selectedView() : any {
        return this._selectedView;
    }
    public set selectedView(v : any) {
        this._selectedView = v;
    }

    constructor(){
        super();
        this.isWorking=false;
        this.title='Views';
        this.init();

    }

    @ViewChild('views_listbox') listBox :ListBox;


    public init()
    {
        this._resourceService = new ResourceService("/administration/view");
        this.getAllViews();
    }

    private getAllViews(){
        let self = this;
        this.workingCountUp('get all views');
        this._resourceService.getEntities().
        subscribe((response:SapResponse<Array<View>>)=>
        {
            this.workingCountDown('get all views');
            if (response.ok) {
                self.views = response.result;
            }
        });
    }


    private editView(selectedItem:View,val:string)
    {
        let temp = <View>{};
        temp.name=val;
        temp.id = selectedItem.id;
        let self = this;
        this.workingCountUp('editView');
        this._resourceService.updateEntity(temp).subscribe((response:SapResponse<any>)=>{
            this.workingCountDown('editView');
            if (response.ok) {
                PopupHelper.showInfo('Saved');
                let index = this.views.findIndex(v=>v.id == temp.id);
                if(index != -1) {
                    self.views[index].name = temp.name;
                }
                self.listBox.refresh();
            }
        });
    }

    private addView(view:string){
        let self = this;
        this.workingCountUp('addView');
        let response = this._resourceService.addEntity(view);
        response.subscribe((response:SapResponse<number>)=>{
            this.workingCountDown('addView');
            if (response.ok)
            {
                PopupHelper.showInfo('Added');
                console.log('subscribedr 1 : ' +response.result);
                let _view :View = <View>{};
                _view.id = response.result;
                _view.name = view;
                self._views.push(_view);
                self.listBox.refresh();
            }
        });


    }

    deleteView(id:number){

        let self = this;
        let response = this._resourceService.deleteEntity(id.toString());
        this.workingCountUp('deleteverb');
        response.subscribe((response:SapResponse<any>)=>{
            this.workingCountDown();
            if (response.ok) {
                let index = self.views.findIndex(v=>v.id == id);
                if(index != -1) {
                    self.views.splice(index, 1);
                }
                self.listBox.refresh();
            }
        });


    }
}

