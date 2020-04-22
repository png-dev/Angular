import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EducationComponent} from './education/education.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {EducationDetailComponent} from './education-detail/education-detail.component';
import {ContactComponent} from './contact/contact.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UploadFileComponent} from './upload-file/upload-file.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'educations', component: EducationComponent, data: {shouldDetach: true}},
    {path: 'educations/:education_id', component: EducationDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'upload', component: UploadFileComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class AppRoutingModule {
}
