import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserList(){
    return this.httpClient.get<Array<User>>("http://localhost:8080/users");
  }
}
