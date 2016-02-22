import {provide} from "angular2/core";
import {ResourceService} from "./ResourceService";

export class ResourceProviderFactory{


    public static VerbsServiceProvider = provide(ResourceService, {useFactory: ()=>{return new ResourceService('/app/administration/verb');}});
    public static ViewsServiceProvider = provide(ResourceService, {useFactory: ()=>{return new ResourceService('/app/administration/view');}});
    public static FunctionsServiceProvider = provide(ResourceService, {useFactory: ()=>{return new ResourceService('/app/administration/function');}});
    public static UserServiceProvider = provide(ResourceService, {useFactory: ()=>{return new ResourceService('/security/current-user');}});

}
