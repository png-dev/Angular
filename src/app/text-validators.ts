import {Directive} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[textValidateDirective]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: TextValidators,
        multi: true
    }]
})

export class TextValidators implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        if (control.value && control.value.length < 10) {
            return {textInvalid: true};
        }
        return null;
    }

}
