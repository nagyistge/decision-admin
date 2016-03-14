import { Component } from 'angular2/core';
import {TabControl} from "../../userControls/tabControl/TabControl";
import {Tab} from "../../userControls/tabControl/Tab";


@Component({
    selector: 'community-settings',
    directives:[TabControl,Tab],
    template:`

    <div >
        <tab-control >
          <tab tabTitle="1"  >
          </tab>
          <tab tabTitle="2" >
          </tab>
           <tab tabTitle="3">
          </tab>

        </tab-control>

     </div>
  `,
})
export class CommunitySettings {


}