
import {Component} from "angular2/core";
import {TabControl} from "../userControls/TabControl";
import {Tab} from "../userControls/Tab";

@Component({
    selector: 'test-tabs',
    directives: [Tab,TabControl],
    template:
        `
           <tabs>
               <tab tabTitle="1">1</tab>
               <tab tabTitle="2">2</tab>
               <tab tabTitle="3">3</tab>
           </tabs>


        `
})
export class TestTabs{


}
