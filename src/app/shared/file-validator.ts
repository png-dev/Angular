import {AbstractControl} from '@angular/forms';

export function forbiddenFile(c: AbstractControl) {
    if (c.value?.trim().length > 0) {
        return null;
    }
    return {invalidFile: true};
}
