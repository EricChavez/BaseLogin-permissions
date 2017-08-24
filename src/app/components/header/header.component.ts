import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
 user: string
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser')).user;
     console.log(JSON.parse(localStorage.getItem('currentUser')).user);
  }

}
