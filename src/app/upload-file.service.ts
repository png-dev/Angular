import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {
    private fileList: string[] = new Array<string>();
    private fileList$: Subject<string[]> = new Subject<string[]>();

    constructor() {
    }

    public upload(fileName: string, fileContent: string): void {
        this.fileList.push(fileName);
        this.fileList$.next(this.fileList);
    }

    public download(fileName: string): void {

    }

    public remove(fileName): void {
        this.fileList.splice(this.fileList.findIndex(name => name === fileName), 1);
        this.fileList$.next(this.fileList);
    }

    public list(): Observable<string[]> {
        return this.fileList$;
    }

    private addFileToList(fileName: string): void {
        this.fileList.push(fileName);
        this.fileList$.next(this.fileList);
    }

}
