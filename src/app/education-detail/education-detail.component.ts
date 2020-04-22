import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EducationService} from '../services/education.service';
import {Education} from '../education/education';
import {Location} from '@angular/common';
import {SnackbarService} from '../services/snackbar.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {forbiddenTitle} from '../shared/title-validator';
import {forbiddenDescription} from '../shared/description-validator';

@Component({
    selector: 'app-education-detail',
    templateUrl: './education-detail.component.html',
    styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {
    @Input() education: Education;
    error = '';
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private educationService: EducationService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private snackbarService: SnackbarService
    ) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            title: ['', [Validators.required, forbiddenTitle]],
            description: ['', [Validators.required, forbiddenDescription]],
        });
        this.getDataEducationDetail();

    }

    getDataEducationDetail() {
        const id = this.activatedRoute.snapshot
            .paramMap.get('education_id');
        this.educationService.getDataEducationDetail(id)
            .subscribe((res: any) => {
                this.education = res?.data;
            }, (error: any) => {
                this.error = error;
            });
    }

    updateEducation(education) {
        console.log(education);
        // this.educationService.updateDataEducation(education)
        //     .subscribe((res: any) => {
        //         if (res?.status === 200) {
        //             this.snackbarService.success('Cập nhập thành công', true);
        //             this.goBack();
        //         }
        //     });
    }

    goBack(): void {
        this.location.back();
    }

}
