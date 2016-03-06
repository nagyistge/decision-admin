import { Component } from 'angular2/core';
import {NgFor} from "angular2/common";
import {TabControl} from "../../../userControls/TabControl";
import {Tab} from "../../../userControls/Tab";
import {Views}  from "./../views/Views";
import {Verbs}  from "./../verbs/Verbs";
import {FormulaFunctions}  from "./../formulaFunctions/FormulaFunctions";
import {DecList} from "./../test/DecList";
import {TestList} from "./../test/TestList";

@Component({
    selector: 'administration-settings',
    directives:[TabControl,Tab,Views,Verbs,FormulaFunctions,NgFor,TestList],
    template:`

     <div class="tab-content">
        <tab-control >
        <tab  tabTitle="test" >
            <tests></tests>
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