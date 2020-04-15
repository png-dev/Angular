import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    openPageHome() {
        this.router.navigate(['/home']);
    }

    openPageEducation() {
        this.router.navigate(['/educations'], {queryParams: {limit: 10, offset: 1}});
    }

}
