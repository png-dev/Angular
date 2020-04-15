import {FormControl} from '@angular/forms';

export class TitleValidators {
    static validTitle(formControl: FormControl) {
        if (formControl.value.toLowerCase() === '123') {
            return {validTitle: true};
        } else {
            return null;
        }
    }
}
