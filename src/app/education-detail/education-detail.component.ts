import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EducationService} from '../education.service';
import {Education} from '../education/education';
import {Location} from '@angular/common';


@Component({
    selector: 'app-education-detail',
    templateUrl: './education-detail.component.html',
    styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {
    @Input() education: Education;
    error = '';

    constructor(
        private educationService: EducationService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
    ) {
    }

    ngOnInit(): void {
        this.getDataEducationDetail();
    }

    getDataEducationDetail() {
        const id = this.activatedRoute.snapshot.paramMap.get('education_id');
        this.educationService.getDataEducationDetail(id)
            .subscribe((res: any) => {
                this.education = res?.data;
            }, (error: any) => {
                if (error.status === 454) {
                    this.error = error.error.message;
                }
            });
    }

    updateEducation(education) {
        this.educationService.updateDataEducation(education).subscribe((res: any) => {
            if (res?.result === 1) {
                this.goBack();
            }
        }, (error: any) => {
            if (error.status === 400) {
                console.log(error.error);
            }
        });
    }

    goBack(): void {
        this.location.back();
    }

}
