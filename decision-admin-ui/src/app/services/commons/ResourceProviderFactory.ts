import {provide} from "angular2/core";
import {ResourceService} from "./ResourceService";

export class ResourceProviderFactory{


    public static VerbsServiceProvider = provide(ResourceService, {useFactory: ()=>{return new ResourceService('/administration/verb');}});
    public static ViewsServiceProvider = provide(ResourceService, {useFactory: ()=>{return new ResourceService('/administration/view');}});

}
