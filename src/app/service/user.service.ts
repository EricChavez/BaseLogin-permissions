import { NotificationService } from './notification.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';



@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private NotificationService_: NotificationService
    ) { }

    validateEmail(email) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const token = JSON.parse(localStorage.getItem('currentUser')).token;
        headers.append('Authorization', `Token ${token}`);
        const data = { email: email };
        const body = JSON.stringify(data);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this.http.post('http://localhost:50/api/email-validation',
            JSON.stringify(data), options)
            .map(res => res.json());
    }

    CreateUser(user: User) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const token = JSON.parse(localStorage.getItem('currentUser')).token;
        headers.append('Authorization', `Token ${token}`);
        const body = JSON.stringify(user);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this.http.post('http://localhost:50/api/user/createuser', body, options)
            .map(res => res.json(),
            err => this.NotificationService_.error('Error', err.message)
            );
    }

    GetUsers() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        const token = JSON.parse(localStorage.getItem('currentUser')).token;
        headers.append('Authorization', `Token ${token}`);
        const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
        return this.http.get('http://localhost:50/api/user/getusers', options)
            .map(res => res.json(),
            err => this.NotificationService_.error('Error', err.message)
            );
    }
}
