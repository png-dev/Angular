import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadFileService} from '../upload-file.service';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
    progress: number;
    infoMessage: any;
    isUploading = false;
    file: File;

    imageUrl: string | ArrayBuffer = 'https://bulma.io/images/placeholders/480x480.png';
    fileName = 'No file selected';

    constructor(private uploader: UploadFileService) {
    }

    onChange(file: File) {
        if (file) {
            this.fileName = file.name;
            this.file = file;

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = event => {
                this.imageUrl = reader.result;
            };
        }
    }

    onUpload() {
        this.infoMessage = null;
        this.progress = 0;
        this.isUploading = true;

        // this.uploader.upload(this.file).subscribe(message => {
        //     this.isUploading = false;
        //     this.infoMessage = message;
        // });
    }
}
