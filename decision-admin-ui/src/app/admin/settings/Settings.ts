import { Component } from 'angular2/core';
import {TabControl} from "../../userControls/tabControl/TabControl";
import {Tab} from "../../userControls/tabControl/Tab";
import {Views} from "./../settings/views/Views";
import {Verbs} from "./../settings/verbs/Verbs";
import {LayoutTest} from "./test/LayoutTest";

@Component({
    selector: 'settings',
    directives:[TabControl,Tab,Views,LayoutTest],
    styleUrls: ['./src/app/admin/settings/settings.css'],
    template:`

    <div>
        <tab-control >
          <tab tabTitle="Views" >
            <views-settings></views-settings>
          </tab>
           <tab tabTitle="Test" >
            <layout></layout>
          </tab>
        </tab-control>
     </div>
  `,
})
export class Settings {


}