import {Component, OnInit} from '@angular/core';
import {EducationService} from '../education.service';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {ModalComponent} from '../modal/modal.component';
import {Education} from './education';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {query} from "@angular/animations";

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
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.limit = params?.limit || 10;
            this.offset = params?.offset || 1;
            this.searchText = params?.query;
            this.getEducations(this.limit, this.offset);
        });
    }

    getEducations(limit: number, offset: number) {
        this.educationService.getDataEducation(limit, offset, this.searchText).subscribe((res: any) => {
            this.educations = res?.data;

        }, (error: any) => {
            this.error = error.error.message;
        });
    }

    openPageUpdateData(education: Education) {
        this.router.navigate(['/educations', education.id],);
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
        this.location.go('educations', `limit=${this.limit}&offset=${this.offset}`);
        this.getEducations(this.limit, this.offset);
    }

    searchDataEducation() {
        this.offset = 1;
        let query = `limit=${this.limit}&offset=${this.offset}`;
        if (this.searchText) {
            query = query + `&query=${this.searchText}`;
        }
        this.location.go('educations', query);
        this.getEducations(this.limit, this.offset);
    }

    openCreateEducation() {
        console.log('add');
    }
}
