import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';



@Injectable()
export class UserService {
    constructor(private http: Http) { }

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


    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}