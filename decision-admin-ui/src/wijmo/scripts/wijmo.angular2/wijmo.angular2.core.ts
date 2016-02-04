import { Component, View, ElementRef, Injector, Optional, forwardRef, Inject, Input, DynamicComponentLoader } from 'angular2/core';
import * as ngCore from 'angular2/core';
import { wj as wjNg2BaseRoot, WjComponent, WjDirectiveBehavior } from './wijmo.angular2.directiveBase';

export module wj.angular2 {
    'use strict';

    @WjComponent({
        wjIsDirective: true,
        wjMetadataId: wijmo.Tooltip,
        selector: '[wjTooltip]',
    })
    export class WjTooltip implements ngCore.OnDestroy {
        private static _toolTip: wijmo.Tooltip;

        private _toolTipText: string;

        constructor( @Inject(ElementRef) private elRef: ElementRef, @Inject(Injector) injector: Injector) {
            WjDirectiveBehavior.attach(this, elRef, injector);
            if (!WjTooltip._toolTip) {
                WjTooltip._toolTip = new wijmo.Tooltip();
            }
        }

        @Input()
        get wjTooltip(): string {
            return this._toolTipText;
        }
        set wjTooltip(value: string) {
            if (this._toolTipText != value) {
                this._toolTipText != value;
                WjTooltip._toolTip.setTooltip(this.elRef.nativeElement, value);
            }
        }

        ngOnDestroy() {
            this.wjTooltip = null;
        }
    }

    @Component({
        selector: 'wj-component-loader',
        template: `<div #anchor></div>`,
        inputs: ['component', 'properties']
    })
    export class WjComponentLoader  {
        private _component: any;
        private _properties: Object;
        private _cmpRef: ngCore.ComponentRef;

        constructor( @Inject(DynamicComponentLoader) private _dcl: DynamicComponentLoader,
            @Inject(ElementRef) private _elementRef: ElementRef) {
        }

        get component(): any {
            return this._component;
        }
        set component(value: any) {
            if (this._component !== value) {
                if (this._cmpRef) {
                    this._cmpRef.dispose();
                    this._cmpRef = null;
                }
                this._component = value;
                if (value) {
                    this._dcl.loadIntoLocation(value, this._elementRef, 'anchor').then((cmpRef) => {
                        this._cmpRef = cmpRef;
                        this._updateProperties();
                    });
                }
            }
        }

        get properties(): Object {
            return this._properties;
        }
        set properties(value: Object) {
            this._properties = value;
            this._updateProperties();
        }

        private _updateProperties() {
            let cmp = this._cmpRef && this._cmpRef.instance,
            properties = this.properties;
            if (cmp && properties) {
                let propNames = Object.getOwnPropertyNames(properties);
                for (var pName of propNames) {
                    cmp[pName] = properties[pName];
                }
            }
        }
    }

}

export var wjNg2Core = wj.angular2;
