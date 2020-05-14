import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Education} from '../education/education';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EducationService {
    private educationUrl = '/api/v1/education';
    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
            })
    };
    constructor(private http: HttpClient) {
    }

    getDataEducation(limit: number, offset: number, query: string) {
        const url = this.educationUrl + `?limit=${limit}&offset=${offset}` + (query ? `&query=${query}` : '');
        return this.http.get(url, this.httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    getDataEducationDetail(id: string) {
        const urlEdu = this.educationUrl + '/' + id;
        return this.http.get(urlEdu, this.httpOptions)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    updateDataEducation(education: Education): Observable<any> {

        const formData = new FormData();
        formData.append('title', education.title);
        formData.append('description', education.description);
        formData.append('file', education.file);
        return this.http.put(this.educationUrl + '/' + education.id, formData)
            .pipe(
                catchError(this.handleError)
            );
    }

    removeDataEducation(education: Education | string): Observable<any> {
        const id = typeof education === 'string' ? education : education.id;
        const url = `${this.educationUrl}/${id}`;
        return this.http.delete<Education>(url, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred : ', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}` +
                `Body  was: ${error.error.message}`);
        }
        return throwError(error.error.message);
    }
}
