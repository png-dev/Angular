import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';
import {EducationComponent} from './education/education.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {EducationDetailComponent} from './education-detail/education-detail.component';
import {AppRoutingCache} from './app-routing-cache';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'educations', component: EducationComponent,  data: {shouldDetach: true}},
    {path: 'educations/:education_id', component: EducationDetailComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [
        {provide: RouteReuseStrategy, useClass: AppRoutingCache}
    ]
})
export class AppRoutingModule {
}
