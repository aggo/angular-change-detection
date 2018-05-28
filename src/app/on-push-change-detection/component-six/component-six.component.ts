// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass, toggleClass2} from '../../toggle-class.service';

@Component({
    selector: 'cmp-six',
    template: `
        <a *ngIf="isLoaded()" class="on-push">Cmp6</a>
        <ul>
            <li>
                <cmp-twelve></cmp-twelve>
            </li>
            <li>
                <cmp-thirteen></cmp-thirteen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSix implements AfterViewChecked, AfterViewInit {

    constructor(private zone: NgZone, private el: ElementRef,
                private cd: ChangeDetectorRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

    ngAfterViewInit() {
        console.log('aft-view-init-6');
        this.cd.detectChanges();
        toggleClass2(this.el, this.zone);
    }

    isLoaded() {
        return true;
    }

}
