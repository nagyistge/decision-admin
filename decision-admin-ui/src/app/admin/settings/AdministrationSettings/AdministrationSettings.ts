import { Component } from 'angular2/core';
import {NgFor} from "angular2/common";
import {TabControl} from "../../../userControls/tabControl/TabControl";
import {Tab} from "../../../userControls/tabControl/Tab";
import {Views}  from "./../views/Views";
import {Verbs}  from "./../verbs/Verbs";
import {FormulaFunctions}  from "./../formulaFunctions/FormulaFunctions";
import {DecList} from "./../test/DecList";
import {TestList} from "./../test/TestList";
import {LayoutTest} from "../test/LayoutTest";

@Component({
    selector: 'settings',
    directives:[TabControl,Tab,Views,Verbs,FormulaFunctions,NgFor,TestList,LayoutTest],
    template:`
     <div class="tab-content">
        <tab-control >
         <tab  tabTitle="test" >
           <layout></layout>
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
export class SettingsComponent {


}