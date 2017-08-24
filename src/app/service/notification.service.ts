
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotificationService {

    constructor(private NotificationsService: NotificationsService) {
    }

    success(tittle: string, Message: string) {

        this.NotificationsService.success(
            tittle,
            Message,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false
                //maxLength: 10
            }
        )
    }

    error(tittle: string, Message: string) {
        this.NotificationsService.error(
            tittle,
            Message,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
               // maxLength: 10
            }
        )

    }

    alert(tittle: string, Message) {
        this.NotificationsService.alert(
            tittle,
            Message,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                //maxLength: 10
            }
        )
    }

    info(tittle: string, Message) {

        this.NotificationsService.info(
            tittle,
            Message,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            }
        )


    }
    warn(tittle: string, Message) {


        this.NotificationsService.warn(
            tittle,
            Message,
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            }
        )
    }
}