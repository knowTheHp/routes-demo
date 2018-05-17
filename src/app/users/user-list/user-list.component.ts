import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../_services/auth.service';
import { UserService } from './../../_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.route.data.subscribe(data => {
      this.users = data['userlist'];
    });
  }
  // onNav() {
  //   this.router.navigate(['edit'], {
  //     queryParams: { allowEidt: '1' },
  //     queryParamsHandling: 'merge',
  //     preserveQueryParams: true,
  //     fragment: 'l'
  //   });
  // }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
