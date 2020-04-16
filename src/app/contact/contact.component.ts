import {Component, OnInit} from '@angular/core';
import {SnackbarService} from '../services/snackbar.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


    constructor(
        private snackbarService: SnackbarService
    ) {
    }

    ngOnInit(): void {
    }


    openToast() {
        this.snackbarService.success('Submit thành công', false);
    }

}
