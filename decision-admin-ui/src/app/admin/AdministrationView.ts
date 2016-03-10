import { Component } from 'angular2/core';
import {TabControl} from "../userControls/TabControl";
import {Tab} from "../userControls/Tab";
import {Views} from "./settings/views/Views";

@Component({
    selector: 'admin-view',
    directives:[TabControl,Tab,Views],
    template:`

    <div class="container-fluid content" >
        <tab-control >
          <tab tabTitle="sub 1"  >
            <views-settings></views-settings>
          </tab>
          <tab tabTitle="sub 2" >
          </tab>
           <tab tabTitle="sub 3">
          </tab>

        </tab-control>

     </div>
  `,
})
export class AdministrationView {


}