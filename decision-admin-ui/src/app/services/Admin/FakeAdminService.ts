import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from 'rxjs/Observable';
import {Response} from "angular2/http";
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";


@Injectable()
export class FakeAdminService  {

    constructor(private _http:Http){
    }


    getViews():Observable<Response>{
        return this._http.get(`src/data/mock-views.json`);
    }



}
