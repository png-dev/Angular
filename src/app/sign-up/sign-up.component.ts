import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {forbiddenUsername} from '../shared/user-name-validators';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            username: ['', [Validators.required, forbiddenUsername]],
            pw: this.fb.group({
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required]
            })
        });
    }

    onSubmit() {
        console.log(this.form);
    }

}

export function comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
        passwordnotmatch: true
    };
}


