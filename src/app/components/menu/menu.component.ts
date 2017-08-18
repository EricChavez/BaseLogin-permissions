import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu = [];
  user: string;
  constructor() { }

  ngOnInit() {
    this.menu = JSON.parse(localStorage.getItem('currentUser')).menu;
    this.user = JSON.parse(localStorage.getItem('currentUser')).user;
  }

}
