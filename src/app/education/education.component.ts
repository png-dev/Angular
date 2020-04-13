import {Component, OnInit} from '@angular/core';
import {EducationService} from '../education.service';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../modal/modal.component';
import {Education} from './education';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    modalRef: MDBModalRef;

    educations: any = [];

    constructor(
        private educationService: EducationService,
        private modalService: MDBModalService
    ) {
    }


    ngOnInit(): void {
        this.getEducations();
    }

    async getEducations() {
        await this.educationService.getDataEducation().subscribe((res: any) => {
            // this.educations = JSON.stringify(res.data);
        });

    }

    updateEducation() {
        console.log();
    }

    remove(id
               :
               string
    ) {
        console.log(id);
    }

    add() {
        console.log();
    }

    openModal(educationId
                  :
                  string
    ) {
        this.modalRef = this.modalService.show(ModalComponent);
    }
}
