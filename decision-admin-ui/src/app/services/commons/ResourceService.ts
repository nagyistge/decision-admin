

import {PopupManager} from "../../commons/PopupManager";
import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import 'rxjs/Rx';
import {RequestOptionsArgs} from "angular2/http";
import {Http} from "angular2/http";
import {Headers} from "angular2/http";
import {Injector} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {Response} from "angular2/http";
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

    interceptRequest(response, ignoreExceptions) :Observable<Response> {
        var _this = this;
        var returnObservable = Observable.create(function (obsrv) {

            response.subscribe(function (response) {
                //TODO: check if the response if bdmsException - need to check this code!
                if (_this.isBdmsException(response)) {
                }
                response.ok = true;
                obsrv.next(response);
            }, function (errorResponse) {
                if (!ignoreExceptions || ignoreExceptions == false) {
                    PopupManager.show('There is unexpected error from the server,please check your connection.');
                }
                obsrv.next(errorResponse);
            });

        });
        return returnObservable.publish();
    };

    isBdmsException = function (response) {
        if (response.body && response.json().constructor == {}.constructor)
            return true;
        else
            return false;
    };

    public getEntity(id:string, ignoreExceptions?:boolean) :Observable<Response> {
    var response = this._http.get(this._url + this._resourceName + "/" + id, this._requestOptionsArgs).first();
    var returnObservable = this.interceptRequest(response, ignoreExceptions);
    return returnObservable.connect();
};
    public getEntities(ignoreExceptions?:boolean):Observable<Response>  {
    var response = this._http.get(this._url + this._resourceName, this._requestOptionsArgs).first();
    var returnObservable = this.interceptRequest(response, ignoreExceptions);
    return returnObservable.connect();
};
    public deleteEntity(id:string, ignoreExceptions?:boolean) {
    var response = this._http.delete(this._url + this._resourceName + "/" + id, this._requestOptionsArgs).first();
    var returnObservable = this.interceptRequest(response, ignoreExceptions);
    return returnObservable.connect();
};
    public addEntity(entity:any, ignoreExceptions?:boolean) :Observable<Response> {
    var response = this._http.post(this._url + this._resourceName, JSON.stringify(entity), this._requestOptionsArgs).first();
    var returnObservable = this.interceptRequest(response, ignoreExceptions);
    return returnObservable.connect();
};
    public updateEntity(entity:any, ignoreExceptions?:boolean) :Observable<Response> {
    var response = this._http.put(this._url + this._resourceName, JSON.stringify(entity), this._requestOptionsArgs);
    var returnObservable = this.interceptRequest(response, ignoreExceptions);
    return returnObservable.connect();
};
}