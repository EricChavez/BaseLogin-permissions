import { UserService } from './../../service/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    menu = [];
    user: string;
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.menu = JSON.parse(localStorage.getItem('currentUser')).menu;
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    }




}