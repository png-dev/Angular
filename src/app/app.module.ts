import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {EducationComponent} from './education/education.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {EducationDetailComponent} from './education-detail/education-detail.component';
import {ModalComponent} from './modal/modal.component';
import {FilterEducationPipe} from './filter-education.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        EducationComponent,
        NotFoundComponent,
        HomeComponent,
        EducationDetailComponent,
        FilterEducationPipe,
        SnackBarComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule
    ],
    entryComponents: [ModalComponent],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}
