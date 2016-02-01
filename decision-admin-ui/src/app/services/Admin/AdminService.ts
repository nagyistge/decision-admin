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


@Injectable()
export class AdminService {

    _url :string = "http://localhost:9080/ws/rs/administration";
    _headers:Headers;

    constructor(private _http:Http){
        this._headers = new Headers();
        this._headers.append( 'Content-Type', 'application/json');
        this._headers.append( 'iv-user', 'admin');
        this._headers.append(  'bdms-locale', 'en');

    }


    getViews():Observable<Array<IdName>>{
        return this._http.post(this._url+'/views/r','',{headers: this._headers }).map(a=><Array<IdName>>a.json());

    }

    addView(val:string):Observable<number>
    {
        let view : View = <View>{};
        view.name = val;
        return this._http.post(this._url+'/views/c',JSON.stringify(view),{headers: this._headers }).map(a=><number>a.json());
    }

    getVerbs():Observable<Array<IdName>>{
        return this._http.post(this._url+'/verbs/r','',{headers: this._headers }).map(a=><Array<IdName>>a.json());
    }

    addVerb(val:string):Observable<number>
    {
        let view:Verb = <Verb>{};
        view.name = val;
        return this._http.post(this._url+'/verbs/c',JSON.stringify(view),{headers: this._headers }).map(a=><number>a.json());;
    }

    addFormulaFunction():Observable<number>
    {
        let function1 :Function = <Function>{};
        function1.name="f1";
        function1.description = "test1";

        return this._http.post(this._url+'/functions/c',JSON.stringify(function1),{headers: this._headers }).map(a=><number>a.json());;;
    }

    getFormulas():Observable<Array<Function>>
    {
        return this._http.post(this._url+'/functions/r','',{headers: this._headers }).map(a=><Array<Function>>a.json());;
    }
}
