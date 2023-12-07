import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserList(){
    return this.httpClient.get<Array<User>>("http://192.168.162.223:8080/users");
  }
}
