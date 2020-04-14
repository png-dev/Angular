import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    action = new Subject();
    heading: string;
    content: any;

    constructor(public modalRef: MDBModalRef) {
    }

    ngOnInit(): void {
    }

    onYesClick() {
        this.action.next(true);
        this.modalRef.hide();
    }

    onNoClick() {
        this.action.next(false);
        this.modalRef.hide();
    }


}
