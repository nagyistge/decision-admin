import { Component } from 'angular2/core';
import {NgFor} from "angular2/common";
import {Tabs} from "../userControls/Tabs";
import {Tab} from "../userControls/Tab";
import {ViewsComponent}  from "./ViewsComponent";
import {VerbsComponent}  from "./VerbsComponent";
import {FormulaFunctionsComponent}  from "./FormulaFunctionsComponent";

@Component({
    selector: 'administration-settings',
    directives:[Tabs,Tab,ViewsComponent,VerbsComponent,FormulaFunctionsComponent,NgFor],
    template:`

    <div >
        <tabs >
          <tab tabTitle="verb" >
            <verbs-settings></verbs-settings>
          </tab>
          <tab tabTitle="views">
            <views-settings></views-settings>
          </tab>

          <tab tabTitle="formula functions">
            <formula-functions-settings></formula-functions-settings>
          </tab>
        </tabs>

     </div>
  `,
})
export class AdministrationSettingsComponent {


}