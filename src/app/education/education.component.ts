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
    offset = 1;
    limit = 10;
    error: string;
    searchText: string;
    educations: Education[];

    constructor(
        private educationService: EducationService,
        private modalService: MDBModalService,
    ) {
    }

    ngOnInit(): void {
        if (sessionStorage.getItem('offset')) {
            this.offset = parseInt(sessionStorage.getItem('offset'));
        }
        this.getEducations(this.limit, this.offset);
    }

    getEducations(limit: number, offset: number) {
        console.log(this.searchText);
        this.educationService.getDataEducation(limit, offset, this.searchText).subscribe((res: any) => {
            this.educations = res?.data;

        }, (error: any) => {
            this.error = error.error.message;
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
                        this.getEducations(this.limit, this.offset);
                    }
                }, (error: any) => {
                    console.log(error);
                });
            }
        });
    }

    getDataByPage(isIncre: boolean) {
        isIncre ? this.offset++ : (this.offset > 1 ? this.offset-- : this.offset);
        this.getEducations(this.limit, this.offset);
        sessionStorage.setItem('offset', this.offset.toString());
    }

    searchDataEducation() {
        this.getEducations(this.limit, this.offset);
    }
}
