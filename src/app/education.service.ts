import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) {
  }

  getDataEducation() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };
    // @ts-ignore
    return this.http.get('http://0.0.0.0:5000/api/v1/education', requestOptions)
  }
}
