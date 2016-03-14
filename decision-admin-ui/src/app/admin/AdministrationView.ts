import { Component } from 'angular2/core';
import {TabControl} from "../userControls/TabControl";
import {Tab} from "../userControls/Tab";
import {Views} from "./settings/views/Views";
import {Verbs} from "./settings/verbs/Verbs";

@Component({
    selector: 'admin-view',
    directives:[TabControl,Tab,Views,Verbs],
    template:`

    <div class="content" >
        <tab-control >
          <tab tabTitle="Views" >
            <views-settings></views-settings>
          </tab>

          <!--
              <tab tabTitle="sub 2" >
              </tab>
               <tab tabTitle="sub 3">
              </tab>
          -->
        </tab-control>

     </div>
  `,
})
export class AdministrationView {


}