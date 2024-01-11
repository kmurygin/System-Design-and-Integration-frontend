import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatHub';
}

export interface User{
  id: number,
  login: string,
  name: string,
  surname: string,
  age: number
}

export interface Message {
  userId: number,
  content: string,
  timestamp: string
}
