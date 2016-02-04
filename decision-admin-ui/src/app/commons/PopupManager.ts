

import {Component} from "angular2/core";
import Popup = wijmo.input.Popup;
import {wjNg2Input} from "../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";

@Component({
    directives:[wjNg2Input.WjPopup],
    selector: 'popup-manager',
    template: `
    <div >
      <div  id="saved" style="padding: 5px;margin-top: -200px">
          <p>Saved</p>
      </div>

       <div  id="message" style="padding: 5px;margin-top: -200px">
          <p>{{message}}</p>
      </div>

    </div>
    `
})
export class PopupManager{

    static popupSave ;
    static popupMessage;

    public static show (message) {
       //TODO: need to work on this ,  need to be able to open multi message popups

        alert(message);
        //if(!this.popupMessage)
        //    this.popupMessage = new Popup('#message');
        //
        //this.popupMessage.show();
        //setTimeout(()=>{
        //    this.popupMessage.hide();
        //
        //},2000);


    };

    public static saved(){
        if(!this.popupSave)
          this.popupSave = new Popup('#saved');

            this.popupSave.show();
            setTimeout(()=>{
                this.popupSave.hide();

            },2000);

    }
}