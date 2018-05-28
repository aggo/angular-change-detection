// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-one',
    template: `
        <a class="on-push">Cmp1</a>

        <ul>
            <li>
                <cmp-two></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentOne implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
