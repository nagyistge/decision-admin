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

@Component({
    selector: 'verbs-settings',
    directives:[wjNg2Input.WjListBox,wjNg2Input.WjItemTemplate,wjNg2Input.WjPopup],
    template: `
    <div style="margin-left: 10px">
    <div>
            <div >
                    <h3> Verbs </h3>
                    <input type="text" [(ngModel)]="newVerb" style="width: 255px">
                    <button (click)="addVerb(_newVerb)">Add</button>
            </div>
            <wj-list-box   style="height:60%;width:300px;margin-top: 10px" [selectedValue]="selectedVerb"  [(itemsSource)]="verbs" >
                <template wjItemTemplate #item="item" #itemIndex="itemIndex">
                   <div class="row" >
                      <div class="col-md-2"><h7>{{item.name}}</h7></div>
                      <div class="col-md-2 closeBtn" (click)="deleteVerb(item.id)">x</div>
                      <div [attr.id]="'b'+item.id" class="col-md-2 editBtn" >i</div>
                        <wj-popup owner="#b{{item.id}}" style="padding:10px"  >
                           <span>Edit value:</span>
                           <input type="text" #valueBox>
                           <button class="wj-hide" (click)="editVerb(item,valueBox.value)">OK</button>
                           <button class="wj-hide">Cancel</button>
                        </wj-popup>
                   </div>
                </template>
            </wj-list-box>

    </div>

    `
})
export class VerbsComponent extends ComponentBase{

    private _resourceRoot :string = "/administration";
    private _verbs : Array<Verb>;
    private _resourceService:ResourceService;


    public get verbs() : Array<Verb> {
        return this._verbs;
    }
    public set verbs(v : Array<Verb>) {
        this._verbs = v;
    }


    private _newVerb : string;

    public get newVerb() : string {
        return this._newVerb;
    }
    public set newVerb(v : string) {
        this._newVerb = v;
    }

    private _selectedVerb : any;

    public get selectedVerb() : any {
        return this._selectedVerb;
    }
    public set selectedVerb(v : any) {
        this._selectedVerb = v;
    }

    constructor(){
        super();
        this.title='Verbs';
        let self = this;
        this.init();
    }

    public init()
    {
        this._resourceService = new ResourceService(this._resourceRoot + "/verb");
        this._resourceService.getEntities().subscribe((response:Response)=>
        {
            this.verbs =response.json();
        });
    }



    private editVerb(selectedItem:Verb,val:string)
    {
        let temp = <Verb>{};
        temp.name=val;
        temp.id = selectedItem.id;

        this._resourceService.updateEntity(temp).subscribe((response)=>{
            if (response.ok) {
                let index = this.verbs.findIndex(v=>v.id == temp.id)[0];
                if(index != -1) {
                    this.verbs[index] = temp;
                }
            }
        });
    }

    private addVerb(verb:Verb){


        this._resourceService.addEntity(verb).subscribe((response:Response)=>{
            if (response.ok) {
                PopupManager.saved();
                verb.id = response.json();
                this.verbs.push(verb);
            }
        });
    }

    deleteVerb(id:string){
        let response = this._resourceService.deleteEntity(id);

        response.subscribe((response:Response)=>{
            console.log('subscribedr 1' +response)
            if (response.ok) {
                let index = this.verbs.findIndex(v=>v.id.toString() == id)[0];
                if(index != -1) {
                    this.verbs.splice(index, 1);
                }
            }
        });

        response.subscribe((response:Response)=> {
           console.log('subscribedr 2'+response)
        });
    }
}

