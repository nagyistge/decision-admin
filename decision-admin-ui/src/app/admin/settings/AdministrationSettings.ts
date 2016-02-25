import { Component } from 'angular2/core';
import {NgFor} from "angular2/common";
import {TabControl} from "../../userControls/TabControl";
import {Tab} from "../../userControls/Tab";
import {ViewsComponent}  from "./ViewsComponent";
import {VerbsComponent}  from "./VerbsComponent";
import {FormulaFunctionsComponent}  from "./FormulaFunctionsComponent";
import {DecList} from "./DecList";

@Component({
    selector: 'administration-settings',
    directives:[TabControl,Tab,ViewsComponent,VerbsComponent,FormulaFunctionsComponent,NgFor,DecList],
    template:`

    <div >
        <tab-control >

        <tab  tabTitle="test" >
            <dev-list></dev-list>
        </tab>
          <tab tabTitle="verb"  >
            <verbs-settings></verbs-settings>
          </tab>
          <tab tabTitle="views" >
            <views-settings></views-settings>
          </tab>
           <tab tabTitle="formula functions">
            <formula-functions-settings></formula-functions-settings>
          </tab>


        </tab-control>

     </div>
  `,
})
export class AdministrationSettingsComponent {


}