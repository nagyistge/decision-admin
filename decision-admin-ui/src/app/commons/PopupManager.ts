

import {Component} from "angular2/core";
import Popup = wijmo.input.Popup;
import {wjNg2Input} from "../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import PopupTrigger = wijmo.input.PopupTrigger;
import {DynamicComponentLoader} from "angular2/core";

@Component({
    directives:[wjNg2Input.WjPopup],
    selector: 'popup-manager',
    template: `
    <div >

       <div  id="popup_message" style="padding: 5px;margin-top: -200px;visibility: collapse">
          <p *ngFor="#msg of messages" >{{msg}}</p>
      </div>

    </div>
    `
})
export class PopupManager {

    popupSave ;
    popupMessage:Popup;

    messages:Array<string> = [];
    constructor(){
    }

    ngOnInit(){


        this.popupMessage = new Popup('#popup_message');
        this.popupMessage.hideTrigger = PopupTrigger.None;
    }

    public show (message:string,showTime:number = 2000) {

        //let hostEl = document.createElement('div');
        //this.popupMessage = new Popup(hostEl);
        //this.popupMessage.content = document.createElement('div');
        //this.popupMessage.content.innerHTML = '<p>lalalal</p>';

        let self = this;
        this.messages.push(message);
        if(!this.popupMessage.isVisible)
            this.popupMessage.show();
        setTimeout(()=>{
            self.messages.pop();
            if(self.messages.length == 0)
                this.popupMessage.hide();
        },showTime);



    };

    public  saved(){
      this.show("saved");
    }
}
