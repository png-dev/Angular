import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {SnackbarService} from '../services/snackbar.service';


@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(
        private snackbarService: SnackbarService
    ) {
    }

    ngOnInit(): void {
        this.subscription = this.snackbarService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        break;
                }

                this.message = message;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
