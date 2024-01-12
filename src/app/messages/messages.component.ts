import { Component } from '@angular/core';
import { Message } from "../app.component";
import { MessageService } from "../message.service";
import { interval } from 'rxjs';
import { currentUserId } from "../app.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: Array<Message> = []
  formData: any = {};
  updateInterval = 2000;
  private chatId: number = 0;

  constructor(private messageService: MessageService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.chatId = +params['chatId'];
    });
    this.updateMessages();
  }

  ngOnInit() {
    this.startPeriodicUpdates();
  }

  startPeriodicUpdates() {
    const intervalSubscription = interval(this.updateInterval).subscribe(() => {
      this.updateMessages();
    });
  }

  updateMessages() {
    this.messageService.getMessages(this.chatId).subscribe({
      next: (response) => this.messages = response,
      error: () => console.error("Not able to get messages.")
    })
  }

  onSubmit() {
    const jsonPayload = {
      chatId: this.chatId,
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
