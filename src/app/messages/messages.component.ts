import { Component } from '@angular/core';
import { Message } from "../app.component";
import { MessageService } from "../message.service";
import { interval } from 'rxjs';

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
      senderId: 27,
      recipientId: 28,
      content: this.formData.content,
      timestamp: "2028-01-02T14:30:00"
    };

    this.messageService.postMessage(jsonPayload).subscribe({
      next: (response: any) => console.log('Post request successful:', response),
      error: (error) => console.error('Error making post request:', error)
    })
  }
}
