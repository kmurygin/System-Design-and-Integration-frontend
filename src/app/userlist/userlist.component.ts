import { Component } from '@angular/core';
import {User} from "../app.component";
import {UserService} from "../user.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users: Array<User> = []
  constructor(private userService: UserService) {
    this.updateUserList()
  }

  updateUserList() {
    this.userService.getUserList().subscribe({
      next: (response) => this.users = response,
      error: () => console.error("Not able to get user list.")
    })
  }
}
