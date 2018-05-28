export function toggleClass(el, zone, className = 'checked') {
    const a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    zone.runOutsideAngular(() => {
        setTimeout(() => {
            a.classList.remove(className);
        }, 2000);
    });
}

export function toggleClass2(el, zone, className = 'checked2') {
    const a = el.nativeElement.querySelector('a');
    a.classList.add(className);
    zone.runOutsideAngular(() => {
        setTimeout(() => {
            a.classList.remove(className);
        }, 2000);
    });
}
