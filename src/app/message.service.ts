import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message } from "./app.component";
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  chatIdUrl: string = "http://localhost:8080/chats/1/2";
  chatUrl: string = "http://localhost:8080/chats/"
  constructor(private httpClient: HttpClient) { }

  getMessages(chatId: number){
    // let chatId = this.httpClient.get<number>(this.chatIdUrl);
    return this.httpClient.get<Array<Message>>(this.chatUrl + chatId +'/messages');
  }

  getLastMessage(chatId: number) {
    return this.httpClient.get<Array<Message>>(this.chatUrl + chatId + '/messages').pipe(
      map(messages => messages.shift())
    );
  }

  postMessage(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post("http://localhost:8080/chats/send", formData, { headers });
  }

  postChat(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post("http://localhost:8080/chats/create", formData, { headers });
  }
}
