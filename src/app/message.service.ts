import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message } from "./app.component";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  apiUrl: string = "http://localhost:8080/messages/all/27/28";
  constructor(private httpClient: HttpClient) { }

  getMessages(){
    return this.httpClient.get<Array<Message>>(this.apiUrl);
  }

  postMessage(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post("http://localhost:8080/messages/create", formData, { headers });
  }
}
