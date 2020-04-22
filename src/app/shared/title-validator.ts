import {AbstractControl} from '@angular/forms';

export function forbiddenTitle(c: AbstractControl) {
    if (c.value.trim().length < 7) {
        return {invalidTitle: true};
    }
    return null;
}
