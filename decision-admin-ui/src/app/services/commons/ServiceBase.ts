

import {Http} from "angular2/http";
import {URLSearchParams} from "angular2/http";
import {Headers} from "angular2/http";
import {RequestOptionsArgs} from "angular2/http";
import {WebMethodEnum} from "./WebMethodEnum";
import {Response} from "angular2/http";
import {PopupManager} from "../../commons/PopupManager";
import {Observable} from "rxjs/Observable";
import {AppComponent} from "../../App";
import {PopupHelper} from "../../commons/PopupHelper";

export class ServiceBase{

    _url :string = "http://localhost:9080/ws/rs/administration";
    _requestOptionsArgs:RequestOptionsArgs;

    constructor(private _http:Http,private _popupManager:PopupManager){
        this._requestOptionsArgs = <RequestOptionsArgs>{};
        this._requestOptionsArgs.headers = new Headers();
        this._requestOptionsArgs.headers.append( 'Content-Type', 'application/json');
        this._requestOptionsArgs.headers.append( 'iv-user', 'admin');
        this._requestOptionsArgs.headers.append(  'bdms-locale', 'en');

    }



    private invoke(method:WebMethodEnum,url:String,searchParams:URLSearchParams,body:any,ignoreExceptions:boolean)
    {
        let self = this;
        this._requestOptionsArgs.search=searchParams;
        let fullUrl= this._url+url;
        let stringifiedBody:string;
        let response:Observable<Response>;
        if(body)
        stringifiedBody = JSON.stringify(body);
        switch (method)
        {
            case WebMethodEnum.POST:
                response = this._http.post(fullUrl, stringifiedBody, this._requestOptionsArgs);
                break;
            case WebMethodEnum.GET:
                response = this._http.get(fullUrl, this._requestOptionsArgs);
                break;
            case WebMethodEnum.DELETE:
                response = this._http.delete(fullUrl, this._requestOptionsArgs);
                break;
            case WebMethodEnum.PUT:
                response = this._http.put(fullUrl, stringifiedBody, this._requestOptionsArgs);
                break;
            default:
                throw new Error("web method " + method + " not supported");

        }
        let returnObservable = Observable.create(function (obsrv) {
            response.subscribe(function (response) {
                //TODO: check if the response if bdmsException - need to check this code!
                if (this.isBdmsException(response)) {
                }
                obsrv.next(response);
            }, function (errorResponse) {
                if (!ignoreExceptions || ignoreExceptions == false) {
                    PopupHelper.showError('There is unexpected error from the server,please check your connection.');
                }
                obsrv.next(errorResponse);
            });
        });
        return returnObservable;
    }

    isBdmsException(response) {
        if (response.json().constructor == {}.constructor)
            return true;
        else
            return false;
    };
}