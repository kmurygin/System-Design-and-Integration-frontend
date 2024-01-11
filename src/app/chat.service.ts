import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chat} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatIdUrl: string = "http://localhost:8080/chats/";
  constructor(private httpClient: HttpClient) { }

  getChatForUsers(user1id: number, user2id: number){
    return this.httpClient.get<Chat>(this.chatIdUrl+ user1id + "/" + user2id);
  }
}
