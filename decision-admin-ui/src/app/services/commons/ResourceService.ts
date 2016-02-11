import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {RequestOptionsArgs} from "angular2/http";
import {Http} from "angular2/http";
import {Headers} from "angular2/http";
import {Injector} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {Response} from "angular2/http";
import {ConnectableObservable} from "rxjs/Rx";
import {AppComponent} from "../../App";
import {PopupHelper} from "../../commons/PopupHelper";
import {SapResponse} from "./SapResponse";
@Injectable()
export class ResourceService{

    _url :string = "http://localhost:9080/ws/rs/app";
    _requestOptionsArgs:RequestOptionsArgs;
    _http:Http;

    constructor(private _resourceName:string){
        this._http = Injector.resolveAndCreate([Http,HTTP_PROVIDERS]).get(Http);
        this._requestOptionsArgs = <RequestOptionsArgs>{};
        this._requestOptionsArgs.headers = new Headers();
        this._requestOptionsArgs.headers.append( 'Content-Type', 'application/json');
        this._requestOptionsArgs.headers.append( 'iv-user', 'admin');
        this._requestOptionsArgs.headers.append(  'bdms-locale', 'en');

    }

    interceptRequest(response, ignoreExceptions) :ConnectableObservable<SapResponse<any>> {
        var _this = this;
        var returnObservable = Observable.create(function (obsrv) {
        var sapResponse:SapResponse<any> = new SapResponse<any>();
            response.subscribe(function (response) {
                if(response.status != 204)
                    sapResponse.result= response.json();

                sapResponse.status = response.status;
                sapResponse.ok = response.ok;
                sapResponse.statusText= response.statusText;
                sapResponse.type = response.type;

                //TODO: check if the response if bdmsException - need to check this code!
                if (_this.isBdmsException(response)) {
                }
                sapResponse.ok = true;
                //TODO: this is for testing the busy indicator,delete it when you done.
                setTimeout(()=>{
                    obsrv.next(sapResponse);
                },1000);
                //obsrv.next(response);
            }, function (errorResponse) {
                if (!ignoreExceptions || ignoreExceptions == false) {
                    PopupHelper.showError('There is unexpected error from the server,please check your connection.');
                }
                sapResponse.status = errorResponse.status;
                sapResponse.ok = errorResponse.ok;
                sapResponse.statusText= errorResponse.statusText;
                sapResponse.type = errorResponse.type;

                //TODO: this is for testing the busy indicator,delete it when you done.
                setTimeout(()=>{
                    obsrv.next(sapResponse);
                },1000);
                //obsrv.next(errorResponse);
            });

        });
        return returnObservable.publish().connect();
    };

    isBdmsException = function (response) {
        if (response.body && response.json().constructor == {}.constructor)
            return true;
        else
            return false;
    };

    public getEntity(id:string, ignoreExceptions?:boolean) :Observable<SapResponse<any>> {
        var response = this._http.get(this._url + this._resourceName + "/" + id, this._requestOptionsArgs).first();
        return this.interceptRequest(response, ignoreExceptions);
};
    public getEntities(ignoreExceptions?:boolean):Observable<SapResponse<any>>  {
        var response = this._http.get(this._url + this._resourceName, this._requestOptionsArgs).first();
        return this.interceptRequest(response, ignoreExceptions);
};
    public deleteEntity(id:string, ignoreExceptions?:boolean) :Observable<SapResponse<any>>  {
        var response = this._http.delete(this._url + this._resourceName + "/" + id, this._requestOptionsArgs).first();
        return this.interceptRequest(response, ignoreExceptions);

};
    public addEntity(entity:any, ignoreExceptions?:boolean) :Observable<SapResponse<any>> {
        var response = this._http.post(this._url + this._resourceName, JSON.stringify(entity), this._requestOptionsArgs).first();
        return this.interceptRequest(response, ignoreExceptions);
};
    public updateEntity(entity:any, ignoreExceptions?:boolean) :Observable<SapResponse<any>> {
        var response = this._http.put(this._url + this._resourceName, JSON.stringify(entity), this._requestOptionsArgs);
        return this.interceptRequest(response, ignoreExceptions);
};
}