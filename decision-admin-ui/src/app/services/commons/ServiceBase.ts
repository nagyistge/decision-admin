

import {Http} from "angular2/http";
import {URLSearchParams} from "angular2/http";
import {Headers} from "angular2/http";
import {RequestOptionsArgs} from "angular2/http";
import {WebMethodEnum} from "./WebMethodEnum";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {AppComponent} from "../../App";
import {PopupHelper} from "../../commons/PopupHelper";
import {DecResponse} from "./DecResponse";
import {ConnectableObservable} from "rxjs/Rx";
import {Injector} from "angular2/core";

export class ServiceBase{

    _url :string = "http://localhost:9080/ws/rs/";
    _requestOptionsArgs:RequestOptionsArgs;
    _http:Http;

    constructor(){
        this._http = Injector.resolveAndCreate([Http]).get(Http);
        this._requestOptionsArgs = <RequestOptionsArgs>{};
        this._requestOptionsArgs.headers = new Headers();
        this._requestOptionsArgs.headers.append( 'Content-Type', 'application/json');
        this._requestOptionsArgs.headers.append( 'iv-user', 'admin');
        this._requestOptionsArgs.headers.append(  'bdms-locale', 'en');

    }

    private interceptRequest(response, ignoreExceptions) :ConnectableObservable<DecResponse<any>> {
        var _this = this;
        var returnObservable = Observable.create(function (obsrv) {
            var decResponse:DecResponse<any> = new DecResponse<any>();
            response.subscribe(function (response) {
                if(response.status != 204)
                    decResponse.result= response.json();

                decResponse.status = response.status;
                decResponse.ok = response.ok;
                decResponse.statusText= response.statusText;
                decResponse.type = response.type;

                //TODO: check if the response if bdmsException - need to check this code!
                if (_this.isBdmsException(response)) {
                }
                decResponse.ok = true;
                //TODO: this is for testing the busy indicator,delete it when you done.
                setTimeout(()=>{
                    obsrv.next(decResponse);
                },1000);
                //obsrv.next(response);
            }, function (errorResponse) {
                if (!ignoreExceptions || ignoreExceptions == false) {
                    PopupHelper.showError('There is unexpected error from the server,please check your connection.');
                }
                decResponse.status = errorResponse.status;
                decResponse.ok = errorResponse.ok;
                decResponse.statusText= errorResponse.statusText;
                decResponse.type = errorResponse.type;

                //TODO: this is for testing the busy indicator,delete it when you done.
                setTimeout(()=>{
                    obsrv.next(decResponse);
                },1000);
                //obsrv.next(errorResponse);
            });

        });
        return returnObservable.publish().connect();
    };

    public post(url:string,searchParams:URLSearchParams,body:any,ignoreExceptions:boolean)
    {
        this.invoke(WebMethodEnum.POST,url,searchParams,body,ignoreExceptions);
    }

    private invoke(method:WebMethodEnum,url:String,searchParams:URLSearchParams,body:any,ignoreExceptions:boolean):Observable<DecResponse<any>>
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

        return this.interceptRequest(response, ignoreExceptions);
    }

    private isBdmsException(response) {
        if (response.json().constructor == {}.constructor)
            return true;
        else
            return false;
    };
}