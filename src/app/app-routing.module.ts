import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EducationComponent} from './education/education.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {EducationDetailComponent} from './education-detail/education-detail.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'educations', component: EducationComponent},
    {path: 'educations/:education_id', component: EducationDetailComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
