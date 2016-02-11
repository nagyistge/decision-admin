import {ComponentBase} from "./ComponentBase";
import {Component,Injectable,provide} from "angular2/core";
import {
    TestComponentBuilder,
    beforeEach,
    describe,
    expect,
    inject,
    fakeAsync,tick,
    injectAsync,
    ComponentFixture,
    beforeEachProviders,
    it
} from 'angular2/testing';


export function main() {
    //describe('ComponentBase', () => {
    //    beforeEachProviders(() =>
    //        [
    //            provide(TestComponent, { useClass: TestComponent })
    //        ]
    //    );
    //    it('Should have hashId', inject([TestComponent], (cmpbase:ComponentBase) => {
    //        expect(cmpbase.getHashId()).toBeDefined();
    //        expect(cmpbase.getHashId()).not.toBe(null);
    //
    //
    //    }));
    //});

}

@Injectable()
export  class TestComponent extends ComponentBase
{
}


