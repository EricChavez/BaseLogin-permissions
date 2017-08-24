import { NotificationService } from './notification.service';
import { NotificationsService } from 'angular2-notifications';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http,
        private NotificationService_: NotificationService
    ) { }

    login(username: string, password: string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const data = {
            email: username,
            pass: password
        };
        const body = JSON.stringify(data);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this.http.post('http://localhost:50/api/authenticate',
            JSON.stringify(data), options)
            .map((response: Response) => {
                const user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    recover(email) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const data = { email: email };
        const body = JSON.stringify(data);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this.http.post('http://localhost:50/api/recover',
            JSON.stringify(data), options)
            .map(res => {
                res.json();
            },
            error => {
                const message = error.json()
                this.NotificationService_.error('Error', message.message)
            });
    }

    reset(token, password) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const data = { token: token, password: password };
        const body = JSON.stringify(data);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this.http.post('http://localhost:50/api/reset',
            JSON.stringify(data), options)
            .map(res => {
                res.json();
            },
            error => {
                const message = error.json()
                this.NotificationService_.error('Error', message.message)
            });

    }


    validateToken(token) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const data = { token: token };
        const body = JSON.stringify(data);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this.http.post('http://localhost:50/api/validate-token',
            JSON.stringify(data), options)
            .map(res => res.json());

    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}