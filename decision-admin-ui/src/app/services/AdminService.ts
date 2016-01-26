import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from 'rxjs/Observable';
import {IdNamePair} from "../commons/IdNamePair";
import {Response} from "angular2/http";

@Injectable()
export class AdminService{

    constructor(private _http:Http){
    }

    getViews():Observable<Response>{
        return this._http.get(`src/data/mock-views.json`);
        //return s.map((res)=> res.json());
    }


}
