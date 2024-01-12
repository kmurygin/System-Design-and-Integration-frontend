import { Component } from '@angular/core';
import {currentUserId, Message, User} from "../app.component";
import {MessageService} from "../message.service";
import {interval} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.css']
})
export class CreateChatComponent {
  users: Array<User> = []
  formData: any = {};
  constructor(private messageService: MessageService, private userService: UserService) {}

  onSubmit() {
    console.log(this.formData.user_name);

    this.userService.getUserByLogin(this.formData.user_name).subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.error("Error fetching user by login:", error);
      }
    });

    console.log(this.users);

    const jsonPayload = {
      user1Id: 1,
      user2Id: this.users[0].id
    };

    this.messageService.postChat(jsonPayload).subscribe({
      next: (response: any) => console.log('Post request successful:', response),
      error: (error) => console.error('Error making post request:', error)
    })

    this.formData = {
      user_name: null
    };
  }
}
