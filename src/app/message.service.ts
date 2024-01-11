import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message } from "./app.component";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  chatIdUrl: string = "http://localhost:8080/chats/1/2";
  chatUrl: string = "http://localhost:8080/chats/"
  constructor(private httpClient: HttpClient) { }

  getMessages(){
    let chatId = this.httpClient.get<number>(this.chatIdUrl);
    return this.httpClient.get<Array<Message>>(this.chatUrl + 7 +'/messages');
  }

  postMessage(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post("http://localhost:8080/chats/send", formData, { headers });
  }
}
