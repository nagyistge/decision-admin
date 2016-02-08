import set = Reflect.set;
import {PopupManager} from "./PopupManager";

export  abstract class ComponentBase {

    constructor() {
        this._hashId = Math.floor(Math.random()*100000);
        this.title = this.getHashId().toString();
        this.active=false;
    }


    private _hashId:number;
    private _name:string;
    private _hidden:boolean;
    private _title : string;
    private _active : boolean;
    private _busy : boolean;

    public get busy() : boolean {
        return this._busy;
    }
    public set busy(v : boolean) {
        this._busy = v;
    }

    public get active() : boolean {
        return this._active;
    }
    public set active(v : boolean) {
        this._active = v;
    }

    public get title() : string {
         return this._title;
     }
     public set title(v : string) {
         this._title = v;
     }



    public get name():string {
        return this._name;
    }

    public set name(v:string) {
        this._name = v;
    }


    public get hidden():boolean {
        return this._hidden;
    }

    public set hidden(v:boolean) {
        this._hidden = v;
    }

    public getHashId():number {
        return this._hashId;
    }


    public init(){

    }

}
