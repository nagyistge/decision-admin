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
import {Verb} from "../../data/wsdl_types";
import Popup = wijmo.input.Popup;
import PopupTrigger = wijmo.input.PopupTrigger;
import CancelEventArgs = wijmo.CancelEventArgs;
import {PopupManager} from "../commons/PopupManager";
import {Injector} from "angular2/core";
import {BusyIndicator} from "../commons/BusyIndicator";
import {AppComponent} from "../App";
import {ViewChild} from "angular2/core";
import ListBox = wijmo.input.ListBox;
import {PopupHelper} from "../commons/PopupHelper";
import {SapResponse} from "../services/commons/SapResponse";

@Component({
    selector: 'verbs-settings',
    directives:[wjNg2Input.WjListBox,wjNg2Input.WjItemTemplate,wjNg2Input.WjPopup,BusyIndicator],
    template: `
    <div style="margin-left: 10px">
    <div>
            <div >
                    <h3> Verbs </h3>
                    <input #newVerb type="text" style="width: 255px">
                    <button (click)="addVerb(newVerb.value)">Add</button>
            </div>
            <busy-indicator [busy]="isWorking" [title]="'please wait'" >
                <wj-list-box #verbs_listbox  style="position: absolute; height:100%;width:100%;margin-top: 10px"
                               [selectedValue]="selectedVerb"  [itemsSource]="verbs" >
                    <template wjItemTemplate #item="item" #itemIndex="itemIndex">
                       <div style="display: flex;flex-direction:row" >
                             <h7 style="flex-grow:1">{{item.name}}</h7>
                             <div *ngIf="verbs_listbox.selectedValue.id==item.id">
                                 <img  class="sap-icon" src="src/app/icons/delete.png" (click)="deleteVerb(item.id)">
                                 <img  class="sap-icon" src="src/app/icons/edit.png" [attr.id]="'b'+item.id" >
                             </div>
                             <wj-popup owner="#b{{item.id}}" style="padding:10px"  >
                               <span>Edit value:</span>
                               <input type="text" [value]="item.name" #valueBox>
                               <button class="wj-hide" (click)="editVerb(item,valueBox.value)">OK</button>
                               <button class="wj-hide">Cancel</button>
                            </wj-popup>
                       </div>
                    </template>
                </wj-list-box>
            </busy-indicator>
    </div>

    `
})
export class VerbsComponent extends ComponentBase{

    private _verbs : Array<Verb> = [];
    private _resourceService:ResourceService;
    private _selectedVerb : any;

    public get verbs() : Array<Verb> {
        return this._verbs;
    }
    public set verbs(v : Array<Verb>) {
        this._verbs = v;
    }

    public get selectedVerb() : any {
        return this._selectedVerb;
    }
    public set selectedVerb(v : any) {
        this._selectedVerb = v;
    }

    constructor(private _popupManager:PopupManager){
        super();
        this.title='Verbs';
        this.init();
    }

    @ViewChild('verbs_listbox') listBox :ListBox;


    public init()
    {
        this._resourceService = new ResourceService("/administration/verb");
        this.getAllVerbs();
    }

    private getAllVerbs(){
        let self = this;
        this.workingCountUp('get all verbs');
        this._resourceService.getEntities().
        subscribe((response:SapResponse<Array<Verb>>)=>
        {
            this.workingCountDown('get all verbs');
            if (response.ok) {
                self.verbs = response.result;
            }
        });
    }


    private editVerb(selectedItem:Verb,val:string)
    {
        let temp = <Verb>{};
        temp.name=val;
        temp.id = selectedItem.id;
        let self = this;
        this.workingCountUp('editVerb');
        this._resourceService.updateEntity(temp).subscribe((response:SapResponse<any>)=>{
            this.workingCountDown('editVerb');
            if (response.ok) {
                PopupHelper.showInfo('Saved');
                let index = this.verbs.findIndex(v=>v.id == temp.id);
                if(index != -1) {
                    self.verbs[index].name = temp.name;
                }
                self.listBox.refresh();
            }
        });
    }

    private addVerb(verb:string){
        let self = this;
        this.workingCountUp('addVerb');
        let response = this._resourceService.addEntity(verb);
        response.subscribe((response:SapResponse<number>)=>{
            this.workingCountDown('addVerb');
            if (response.ok)
            {
                PopupHelper.showInfo('Added');
                console.log('subscribedr 1 : ' +response.result);
                let _verb :Verb = <Verb>{};
                _verb.id = response.result;
                _verb.name = verb;
                self._verbs.push(_verb);
                self.listBox.refresh();
            }
        });


    }

    deleteVerb(id:number){

        let self = this;
        let response = this._resourceService.deleteEntity(id.toString());
        this.workingCountUp('deleteVerb');
        response.subscribe((response:SapResponse<any>)=>{
            this.workingCountDown();
            if (response.ok) {
                let index = self.verbs.findIndex(v=>v.id == id);
                if(index != -1) {
                    self.verbs.splice(index, 1);
                }
                self.listBox.refresh();
            }
        });


    }
}

