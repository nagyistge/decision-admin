import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {ContentChild} from "angular2/core";
import {wjNg2Grid} from "../../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid";
import {wjNg2Input} from "../../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.input";
import CollectionView = wijmo.collections.CollectionView;
import "rxjs/Rx";
import SelectionMode = wijmo.grid.SelectionMode;

@Component({
    directives:[wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate],
    selector:'dec-list',
    styleUrls: ['./src/app/admin/settings/test/DecList.css'],
    template:
    `
        <div class="block" class="cmp-main">
            <div >
                <label>{{header}} ({{itemsSource?.items?.length}})</label>
                <input [(ngModel)]="searchText">
            </div>
            <div >
                <ng-content></ng-content>
            </div>
        </div>

`
})
export class DecList{

constructor(){

    this.header="Tests";
    this.count=11;
    this.thisFilterFunction = this.filterFunction.bind(this);

}
    @ContentChild('grid') wjFlexGrid :any;

    ngAfterContentInit() {
        this.itemsSource=this.wjFlexGrid.itemsSource;
        this.selectedValue = this.wjFlexGrid.selectedValue;
        this.wjFlexGrid.selectionMode = <SelectionMode>SelectionMode.ListBox;
    }


      @Input() selectedValue : any;
      @Input()  itemsSource : CollectionView;

        private _header : string;

            public get header() : string {
                return this._header;
            }
            public set header(v : string) {
                this._header = v;
            }

        private _count : number;

            public get count() : number {
                return this._count;
            }
            public set count(v : number) {
                this._count = v;
            }

        private _searchText : string;

            public get searchText() : string {
                return this._searchText;
            }
            public set searchText(v : string) {
                this._searchText = v;
                this.applySelection();
                //this.applyFilter();
            }

    private toFilter:any;
    private thisFilterFunction: wijmo.collections.IPredicate;

    private filterFunction(item) {
        var f = this.searchText;
        if (f && item) {

            // split string into terms to enable multi-field searches such as 'us gadget red'
            var terms = f.toUpperCase().split(' ');

            // look for any term in any string field
            for (var i = 0; i < terms.length; i++) {
                var termFound = false;
                for (var key in item) {
                    var value = item[key];
                    if (wijmo.isString(value) && value.toUpperCase().indexOf(terms[i]) > -1) {
                        termFound = true;
                        break;
                    }
                }

                // fail if any of the terms is not found
                if (!termFound) {
                    return false;
                }
            }
        }

        // include item in view
        return true;
    }

    private applyFilter() {
        if (this.toFilter) {
            clearTimeout(this.toFilter);
        }
        var self = this;
        this.toFilter = setTimeout(function () {
            self.toFilter = null;
                var cv = self.itemsSource;
                if (cv) {
                    if (cv.filter != self.thisFilterFunction) {
                        cv.filter = self.thisFilterFunction;
                    } else {
                        cv.refresh();
                    }
                }
        }, 200);
    }


    private applySelection() {

        if (this.wjFlexGrid) {
            this.wjFlexGrid.selectedItems= this.itemsSource.items.filter((item)=>item.name.indexOf(this.searchText)> -1);
            } else {
                this.itemsSource.refresh();
            }
    }

}

