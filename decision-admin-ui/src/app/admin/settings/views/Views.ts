import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {ComponentBase} from "../../../commons/ComponentBase";
import {AdminService} from "../../../services/Admin/AdminService";
import {Response} from "angular2/http";
import {FakeAdminService} from "../../../services/Admin/FakeAdminService";
import {provide} from "angular2/core";
import {wjNg2Input} from "../../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import {ResourceService} from "../../../services/commons/ResourceService";
import {Observable} from "../../../../../node_modules/rxjs/Observable";
import {View} from "../../../../data/wsdl_types";
import Popup = wijmo.input.Popup;
import PopupTrigger = wijmo.input.PopupTrigger;
import CancelEventArgs = wijmo.CancelEventArgs;
import {PopupManager} from "../../../commons/PopupManager";
import {Injector} from "angular2/core";
import {BusyIndicator} from "../../../commons/BusyIndicator";
import {AppComponent} from "../../../App";
import {ViewChild} from "angular2/core";
import ListBox = wijmo.input.ListBox;
import {PopupHelper} from "../../../commons/PopupHelper";
import {DecResponse} from "../../../services/commons/DecResponse";
import {ResourceProviderFactory} from "../../../services/commons/ResourceProviderFactory";
import CollectionView = wijmo.collections.CollectionView;



@Component({

    selector: 'views-settings',
    providers:[ResourceProviderFactory.ViewsServiceProvider],
    directives:[wjNg2Input.WjListBox,wjNg2Input.WjItemTemplate,wjNg2Input.WjPopup,BusyIndicator],
    styleUrls: ['./src/app/admin/settings/views/Views.css'],
    template: `

    <div >
        <div >
            <div *ngFor="#item of views" style="margin: 10px;border:1px solid">
                <h3 style="margin: 10px">
                    {{item.name}}
                </h3>
            </div>
        </div>
        <!--<wj-list-box #views_listbox-->
                     <!--[selectedValue]="selectedView"-->
                     <!--[itemsSource]="_viewsCollectionView" >-->
        <!--</wj-list-box>-->
    </div>

    `
})
export class Views extends ComponentBase{

    private _views : Array<View> = [];
    private _viewsCollectionView:CollectionView;
    private _selectedView:View;

    public get views() : Array<View> {
        return this._views;
    }
    public set views(v : Array<View>) {
        this._views = v;
    }

    public get selectedView() : View{
        return this._selectedView;
    }
    public set selectedView(v : View) {
        this._selectedView = v;
    }

    constructor(private _resourceService:ResourceService){
        super();
        this.title='Views';
        this.init();
    }

    public init()
    {
        //mock data
        for(let i = 0; i<20;i++)
        {
            let v = <View>{};
            v.name= "generated " + i;
            this.views.push(v);
        }

        //real data
        //this.getAllViews();
    }

    private getAllViews(){
        let self = this;
        this.workingCountUp('get all views');
        this._resourceService.getEntities().
        subscribe((response:DecResponse<Array<View>>)=>
        {
            this.workingCountDown('get all views');
            if (response.ok) {
                self.views = response.result;
                self._viewsCollectionView = new CollectionView(self.views);
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
        this._resourceService.updateEntity(temp).subscribe((response:DecResponse<any>)=>{
            this.workingCountDown('editView');
            if (response.ok) {
                PopupHelper.showInfo('Saved');
                let index = this.views.findIndex(v=>v.id == temp.id);
                if(index != -1) {
                    self.views[index].name = temp.name;
                }
                self._viewsCollectionView.refresh();
            }
        });
    }

    private addView(view:string){
        let self = this;
        this.workingCountUp('addView');
        let response = this._resourceService.addEntity(view);
        response.subscribe((response:DecResponse<number>)=>{
            this.workingCountDown('addView');
            if (response.ok)
            {
                PopupHelper.showInfo('Added');
                console.log('subscribedr 1 : ' +response.result);
                let _view :View = <View>{};
                _view.id = response.result;
                _view.name = view;
                self._views.push(_view);
                self._viewsCollectionView.refresh();
            }
        });


    }

    private deleteView(id:number){

        let self = this;
        let response = this._resourceService.deleteEntity(id.toString());
        this.workingCountUp('deleteView');
        response.subscribe((response:DecResponse<any>)=>{
            this.workingCountDown();
            if (response.ok) {
                let index = self.views.findIndex(v=>v.id == id);
                if(index != -1) {
                    self.views.splice(index, 1);
                }
                self._viewsCollectionView.refresh();
            }
        });


    }
}

