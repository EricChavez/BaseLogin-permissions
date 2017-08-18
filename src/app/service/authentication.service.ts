import { NotificationsService } from 'angular2-notifications';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http,
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
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
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

            }, err => {


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
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}