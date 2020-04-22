import {AbstractControl} from '@angular/forms';

export function forbiddenUsername(c: AbstractControl) {
    if (c.value.trim().length < 10) {
        return {invalidusername: true};
    }
    return null;
}
