import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: '', component: LandingpageComponent},
  { path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
