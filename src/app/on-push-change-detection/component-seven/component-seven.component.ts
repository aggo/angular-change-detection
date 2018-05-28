// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-seven',
    template: `
        <a class="on-push">Cmp7</a>

        <ul>
            <li>
                <cmp-fourteen></cmp-fourteen>
            </li>
            <li>
                <cmp-fiveteen></cmp-fiveteen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeven implements AfterViewChecked {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
