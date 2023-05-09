import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'dv-header',
  templateUrl: './dv-header.component.html',
  styleUrls: ['./dv-header.component.scss']
})
export class DvHeaderComponent implements OnInit {

  user: IUser = {};

  constructor() { }

  ngOnInit(): void {
   this.buildHeader();
   this.checkUserIsLogged();
  }

  buildHeader() {
    if(this.checkUserIsLogged()) {
      this.user.name = localStorage.getItem("user.name") || '';
      this.user.role = localStorage.getItem("role") || '';
    }
  }

  checkUserIsLogged(): boolean {
    return localStorage.getItem("user.name") != null && localStorage.getItem("role") != null;
  }

}
