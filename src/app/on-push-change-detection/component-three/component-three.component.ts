// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-three',
    template: `
        <a class="on-push">Cmp3</a>

        <ul>
            <li>
                <cmp-six></cmp-six>
            </li>
            <li>
                <cmp-seven></cmp-seven>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentThree implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
