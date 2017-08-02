import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';

@Injectable()
export class RoleService {

  constructor(private http: Http) { }
  GetRoleList() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    headers.append('Authorization', `Token ${token}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    return this.http.get('http://localhost:50/api/role/GetRoleList', options)
      .map(res => res.json());
  }



}
