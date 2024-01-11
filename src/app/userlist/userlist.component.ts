import { Component } from '@angular/core';
import { User } from "../app.component";
import { Chat } from "../app.component";
import { Message } from "../app.component";
import { UserService } from "../user.service";
import { ChatService } from "../chat.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users: Array<User> = [];
  userWithChats: Array<{ user: User, message: Message, from: string }> = [];

  constructor(private userService: UserService, private chatService: ChatService, private messageService: MessageService) {
    this.updateUserList();
  }

  updateUserList() {
    this.userService.getUserList().subscribe({
      next: (response) => {
        this.users = response;
        this.checkChatsForUser();
      },
      error: () => console.error("Not able to get user list.")
    });
  }

  checkChatsForUser() {
    const user1Id = 1;

    this.users.forEach((user) => {
      if (user.id !== user1Id) {
        this.chatService.getChatForUsers(user1Id, user.id).subscribe({
          next: (chat: Chat) => {
            if (chat) {
              this.addLastMessage(user, chat.id);
            }
          },
          error: () => console.error(`Not able to get chat for users ${user1Id} and ${user.id}.`)
        });
        this.chatService.getChatForUsers(user.id, user1Id).subscribe({
          next: (chat: Chat) => {
            if (chat) {
              this.addLastMessage(user, chat.id);
            }
          },
          error: () => console.error(`Not able to get chat for users ${user.id} and ${user1Id}.`)
        });
      }
    });
  }

  addLastMessage(user: User, chatId: number) {
    this.messageService.getLastMessage(chatId).subscribe((message) => {
      if (message) {
        const from = (message.userId === user.id) ? user.name : 'Ty';
        this.userWithChats.push({ user, message, from });
      } else {
        const emptyMes: Message = {
          userId: user.id,
          content: '',
          timestamp: ''
        };
        this.userWithChats.push({ user, message: emptyMes, from: user.name });
      }
    });
  }
}
