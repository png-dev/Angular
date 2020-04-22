import {AbstractControl} from '@angular/forms';

export function forbiddenUsername(c: AbstractControl) {
    if (c.value.trim().length < 7) {
        return {invalidusername: true};
    }
    return null;
}
