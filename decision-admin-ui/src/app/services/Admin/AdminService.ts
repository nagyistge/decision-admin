import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from 'rxjs/Observable';
import {Response} from "angular2/http";
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {Verb} from "../../../data/wsdl_types";
import {View} from "../../../data/wsdl_types";
import {Function} from "../../../data/wsdl_types";
import {IdName} from "../../../data/wsdl_types";
import 'rxjs/add/operator/map'
import {ServiceBase} from "../commons/ServiceBase";
import {DecResponse} from "../commons/DecResponse";
import {ConnectableObservable} from "rxjs/Rx";


@Injectable()
export class AdminService {

    private _headers:Headers;

    constructor(private _serviceBase:ServiceBase){
        this._headers = new Headers();
        this._headers.append( 'Content-Type', 'application/json');
        this._headers.append( 'iv-user', 'admin');
        this._headers.append(  'bdms-locale', 'en');

    }


    public getViews():ConnectableObservable<DecResponse<any>>{
        //return this._serviceBase.post(...
        return null;
    }

}
