import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(
    private userServ: UserService
  ) {
    this.getUserList();
  }

  trackByFn(index, item) {
    return item.id; // unique id corresponding to the item
  }

  getUserList() {
    this.userServ.getUsers()
      .subscribe(
        data => {
          this.users = data;
        }
      )
  }

  ngOnInit() {

  }

}
