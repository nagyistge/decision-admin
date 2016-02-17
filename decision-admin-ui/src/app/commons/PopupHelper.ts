import {DynamicComponentLoader} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Injector} from "angular2/core";
import {Type} from "angular2/core";
import {ComponentRef} from "angular2/core";
import PopupTrigger = wijmo.input.PopupTrigger;
import Popup = wijmo.input.Popup;

export class PopupHelper {

    public static showInfo (message:string,showTime:number = 2000) {
        PopupHelper.show(message,'info',showTime);
    }

    public static showError (message:string) {
        PopupHelper.show(message,'error');
    }

    private static show (message:string,messageType:string,showTime:number = 2000) {

        let hostEl :HTMLDivElement = document.createElement('div');
        let  popup = new wijmo.input.Popup(hostEl);
        popup.content = this.buildContent(message, messageType);

        if(messageType == 'info') {
            popup.hideTrigger = PopupTrigger.None;
            setTimeout(()=>{
                popup.hide();
            },showTime);
        }
        //TODO: PopupTrigger.Click is not working
        if(messageType == 'error')
            popup.hideTrigger = PopupTrigger.Blur;
        popup.show(false);


        let hiddenEh = () => {
            popup.hidden.removeHandler(hiddenEh);
            popup.owner = null;
            hostEl.parentElement.removeChild(hostEl);
            popup.dispose();

        }
        popup.hidden.addHandler(hiddenEh);
    };

    private static buildContent( message, messageType):HTMLElement {
        let popupContent = document.createElement('div');
        popupContent.style.padding = '10px';
        let messageElement = document.createElement('span');
        let iconElement = document.createElement('span');
        messageElement.innerHTML = message;
        messageElement.style.marginRight = '30px';
        messageElement.style.marginLeft = '30px';
        if (messageType == 'info') {
            iconElement.innerHTML = '<img src="src/app/icons/info.png">';
        }
        if (messageType == 'error') {
            iconElement.innerHTML = '<img src="src/app/icons/error.png">';
        }

        popupContent.appendChild(iconElement);
        popupContent.appendChild(messageElement);
        return popupContent;
    };


    /*
     * TODO: NOT TESTED YET !
     * Shows an Angular component in a Popup.
     *
     * @param popupOptions A hash object defining Popup property values, the same as the 'options' parameter of Popup constructor.
     * @param componentType The type of the component to show in popup.
     * @param componentProperties A hash object containing the component property value.
     * @param elementRef An ElementRef object of the component calling this function, can be acquired via component's
     *        constructor parameter.
     * @param injector An Injector object of the component calling this function, can be acquired via component's
     *        constructor parameter.
     */
    static showComponentInPopup(popupOptions: any, componentType: Type, componentProperties: any,
                                elementRef: ElementRef, injector: Injector) {

        let hostEl = document.createElement('div'),
            popup = new wijmo.input.Popup(hostEl, popupOptions),
            componentRef: ComponentRef,
            dcl = injector.get(DynamicComponentLoader);
        popup.hideTrigger=PopupTrigger.None;
        popup.content = document.createElement('div');

        dcl.loadNextToLocation(componentType, elementRef).then((cmpRef) => {
            componentRef = cmpRef;
            if (componentProperties) {
                for (let prop in componentProperties) {
                    cmpRef.instance[prop] = componentProperties[prop];
                }
            }
            let rootElements = cmpRef.hostView.rootNodes;
            for (let rootEl of rootElements) {
                popup.content.appendChild(rootEl);
            }
        });

        let hiddenEh = () => {
            popup.hidden.removeHandler(hiddenEh);
            componentRef.dispose();
            popup.owner = null;
            hostEl.parentElement.removeChild(hostEl);
            popup.dispose();
        }
        popup.hidden.addHandler(hiddenEh);
        popup.show(false);
    }
}

