import set = Reflect.set;
import {Input,Output} from "angular2/core";
import {Injectable} from "angular2/core";
import {EventEmitter} from "angular2/core";


@Injectable()
export  class ComponentBase{

    constructor() {
        this._hashId = Date.now();
        this.title = this.getHashId().toString();
        this.active=false;
    }


    private _hashId:number;
    private _name:string;
    private _hidden:boolean;
    private _title : string;
    private _active : boolean;
    private _workingCount :number= 0;
    private _isWorking : boolean;
    private _model : any;

    public get model() : any {
        return this._model;
    }
    public set model(v : any) {
        this._model = v;
    }

    public get isWorking() : boolean {
        return this._isWorking;
    }
    public set isWorking(v : boolean) {
        this._isWorking = v;
    }

    public workingCountUp(from :string = "")
    {
        //TODO: try to get calling method name
        this._workingCount++;
        console.log(" UP --->" + this._workingCount + " " + from);
        this.isWorking = true;
    }



    public workingCountDown(from :string = "")
    {
        //TODO: try to get calling method name
        this._workingCount--;
        console.log(" Down --->" + this._workingCount + " " + from);

        if (this._workingCount == 0)
            this.isWorking = false;
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

    public clone(obj:any): any {
        var cloneObj = new obj.constructor();
        for (var attribut in obj) {
            if (typeof obj[attribut] === "object") {
                cloneObj[attribut] = this.clone(obj[attribut]);
            } else {
                cloneObj[attribut] = obj[attribut];
            }
        }
        return cloneObj;
    }

    @Output() modelChanged = new EventEmitter();

}
