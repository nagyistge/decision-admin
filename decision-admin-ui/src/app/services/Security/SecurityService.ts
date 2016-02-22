
import {ResourceService} from "../commons/ResourceService";
import {Injector} from "angular2/core";
import {ResourceProviderFactory} from "../commons/ResourceProviderFactory";

export class SecurityService{

    private _permissions:any[];
    private _resourceService:ResourceService;

    constructor(){
        this._resourceService = Injector.resolveAndCreate( [ResourceService,ResourceProviderFactory.UserServiceProvider]).get(ResourceService);

        this.loginCurrentUser();
    }

    public loginCurrentUser(){
        this._resourceService.getEntities().subscribe((response)=>
        {


        });
    }

    public hasPermission(permissions:string, vgId:number,isGlobalContext :boolean = true):boolean
    {
        return true;
    //    return permissions.Any(p => UserInPermission(p, vgId, isGlobalContext));
    }
}