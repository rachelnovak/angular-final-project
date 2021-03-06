import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/../../../import';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  localStorage = localStorage;
  JSON = JSON;
  constructor(private userService: UserService, private router: Router) {
  }
  ngOnInit() {
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/bookStore/home']);

  }
}
