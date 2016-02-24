import { Component } from 'angular2/core';
import {TabControl} from "../../userControls/TabControl";
import {Tab} from "../../userControls/Tab";


@Component({
    selector: 'security-settings',
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
export class SecuritySettingsComponent {


}