import {Component} from "angular2/core";
import {wjNg2Grid} from '../../../wijmo/scripts/wijmo.angular2/wijmo.angular2.grid';

@Component({
    directives:[wjNg2Grid.WjFlexGrid],
    selector:'dec-list',
    template:
    `
    <div>
        <div>
            <h4>{{header}}</h4>
            <h4>({{count}})</h4>
            <input [ngModel]="searchText">
        </div>
        <div>
            <wj-flex-grid [itemsSource]="itemsSource">
            </wj-flex-grid>
        </div>

    </div>

`
})
export class DecList{

constructor(){

    this.header="bla";
    this.count=11;
}
            private _itemsSource : any[];

                public get itemsSource() : any[] {
                    return this._itemsSource;
                }
                public set itemsSource(v : any[]) {
                    this._itemsSource = v;
                }

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
}

