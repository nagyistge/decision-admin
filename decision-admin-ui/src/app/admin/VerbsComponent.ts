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
            <busy-indicator [busy]="busy" [title]="'please wait'" >
                <wj-list-box #verbs_listbox  style="position: absolute; height:100%;width:100%;margin-top: 10px"
                               [selectedValue]="selectedVerb"  [itemsSource]="verbs" >
                    <template wjItemTemplate #item="item" #itemIndex="itemIndex">
                       <div class="row" >
                          <div class="col-md-2"><h7>{{item.name}}</h7></div>
                          <div class="col-md-2 closeBtn" (click)="deleteVerb(item.id)">x</div>
                          <div [attr.id]="'b'+item.id" class="col-md-2 editBtn" >i</div>
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

    private _resourceRoot :string = "/administration";
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
        this._resourceService = new ResourceService(this._resourceRoot + "/verb",this._popupManager);
        this.getAllVerbs();
    }

    private getAllVerbs(){
        let self = this;
        this.busy= true;
        this._resourceService.getEntities().subscribe((response:Response)=>
        {
            self.busy=false;
            if (response.ok) {
                self.verbs = response.json();
            }
        });
    }


    private editVerb(selectedItem:Verb,val:string)
    {
        let temp = <Verb>{};
        temp.name=val;
        temp.id = selectedItem.id;
        let self = this;
        this.busy= true;
        this._resourceService.updateEntity(temp).subscribe((response)=>{
            self.busy=false;
            if (response.ok) {
                AppComponent.popupManager.saved();
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
        this.busy= true;

        let response = this._resourceService.addEntity(verb);
        response.subscribe((response:Response)=>{
            this.busy= false;
            if (response.ok)
            {
                console.log('subscribedr 1 : ' +response.json());
                let _verb :Verb = <Verb>{};
                AppComponent.popupManager.saved();
                _verb.id = response.json();
                _verb.name = verb;
                self._verbs.push(_verb);
                self.listBox.refresh();
            }
        });
      setTimeout(()=>{
          response.subscribe((response:Response)=> {
              console.log('subscribedr 2 : '+response.json());
          });
      },2000);

    }

    deleteVerb(id:number){

        let self = this;
        let response = this._resourceService.deleteEntity(id.toString());
        this.busy= true;
        response.subscribe((response:Response)=>{
            this.busy= false;

            if (response.ok) {
                AppComponent.popupManager.saved();
                let index = self.verbs.findIndex(v=>v.id == id);
                if(index != -1) {
                    self.verbs.splice(index, 1);
                }
                self.listBox.refresh();
            }
        });

        response.subscribe((response:Response)=> {
           console.log('subscribedr 2'+response)
        });
    }
}

