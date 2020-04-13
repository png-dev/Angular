import {Component, } from '@angular/core';
import {EducationService} from '../education.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  editField: string;
  personList: Array<any> = [
    {id: 1, url: 'Aurelia Vega', title: 'Deepends', description: 'Spain'},
    {id: 2, url: 'Guerra Cortez', title: 'Insectus', description: 'USA'},
    {id: 3, url: 'Guadalupe House', title: 'Isotronic', description: 'Germany'},
    {id: 4, url: 'Aurelia Vega', title: 'Deepends', description: 'Spain'},
    {id: 5, url: 'Elisa Gallagher', title: 'Portica', description: 'United Kingdom'},
    {id: 5, url: 'Elisa Gallagher', title: 'Portica', description: 'United Kingdom'},
    {id: 5, url: 'Elisa Gallagher', title: 'Portica', description: 'United Kingdom'},
    {id: 5, url: 'Elisa Gallagher', title: 'Portica', description: 'United Kingdom'},
    {id: 5, url: 'Elisa Gallagher', title: 'Portica', description: 'United Kingdom'},
    {id: 5, url: 'Elisa Gallagher', title: 'Portica', description: 'United Kingdom'},
  ];

  constructor(
    private educationService: EducationService,
  ) {
  }


  updateEducation() {
    console.log();
  }

  remove(id: string) {
    console.log(id);
  }

  add() {
    console.log()
  }
}
