import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {MessagesComponent} from "./messages/messages.component";
import {CreateChatComponent} from "./create-chat/create-chat.component";

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: '', component: LandingpageComponent},
  { path: 'messages/:chatId', component: MessagesComponent},
  { path: 'create_chat', component: CreateChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
