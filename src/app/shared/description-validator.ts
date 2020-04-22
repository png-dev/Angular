import {AbstractControl} from '@angular/forms';

export function forbiddenDescription(c: AbstractControl) {
    if (c.value.trim().length < 10) {
        return {invalidDescription: true};
    }
    return null;
}
