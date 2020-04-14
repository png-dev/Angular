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

    educations: Education[];

    constructor(
        private educationService: EducationService,
        private modalService: MDBModalService
    ) {
    }


    ngOnInit(): void {
        this.getEducations();
    }

    getEducations() {
        this.educationService.getDataEducation().subscribe((res: any) => {
            this.educations = res?.data;

        }, (error: any) => {
            console.log(error);
        });
    }

    openModal(educationId: string) {
        this.modalRef = this.modalService.show(ModalComponent,
            {
                backdrop: true,
                keyboard: true,
                focus: true,
                show: false,
                ignoreBackdropClick: false,
                class: '',
                containerClass: '',
                animated: true,
                data: {
                    heading: 'Bạn có chắc chắn muốn xóa ?',
                    content: {heading: '', description: ''}
                }
            });
        this.modalRef.content.action.subscribe((result: any) => {
            if (result === true) {
                this.educationService.removeDataEducation(educationId).subscribe((res: any) => {
                    if (res.result === 1) {
                        this.getEducations();
                    }
                }, (error: any) => {
                    console.log(error);
                });
            }
        });
    }
}
