import { Component } from '@angular/core';
import { Message } from "../app.component";
import { MessageService } from "../message.service";
import { interval } from 'rxjs';
import { currentUserId } from "../app.component";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: Array<Message> = []
  formData: any = {};
  updateInterval = 2000;
  constructor(private messageService: MessageService) {
    this.updateMessages()
  }

  startPeriodicUpdates() {
    const intervalSubscription = interval(this.updateInterval).subscribe(() => {
      this.updateMessages();
    });
  }
  ngOnInit() {
    this.startPeriodicUpdates();
  }

  updateMessages() {
    this.messageService.getMessages().subscribe({
      next: (response) => this.messages = response,
      error: () => console.error("Not able to get messages.")
    })
  }

  onSubmit() {
    const jsonPayload = {
      chatId: 7,
      userId: currentUserId,
      content: this.formData.content,
    };

    this.messageService.postMessage(jsonPayload).subscribe({
      next: (response: any) => console.log('Post request successful:', response),
      error: (error) => console.error('Error making post request:', error)
    })

    this.formData = {
      content: null
    };
  }
}
