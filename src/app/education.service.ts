import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from './education/education';

@Injectable({
    providedIn: 'root'
})
export class EducationService {
    private educationUrl = '/api/v1/education/';
    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            })
    };

    constructor(private http: HttpClient) {
    }

    getDataEducation(limit: number, offset: number, query: string) {
        const url = this.educationUrl + `?limit=${limit}&offset=${offset}` + (query ? `&query=${query}` : '');
        return this.http.get(url, this.httpOptions);
    }

    getDataEducationDetail(id: string) {
        const urlEdu = this.educationUrl + id;
        return this.http.get(urlEdu, this.httpOptions);
    }

    updateDataEducation(education: Education): Observable<any> {
        return this.http.put(
            this.educationUrl, education, this.httpOptions
        );
    }

    removeDataEducation(education: Education | string): Observable<any> {
        const id = typeof education === 'string' ? education : education.id;
        const url = `${this.educationUrl}${id}`;
        return this.http.delete<Education>(
            url, this.httpOptions
        );
    }
}
