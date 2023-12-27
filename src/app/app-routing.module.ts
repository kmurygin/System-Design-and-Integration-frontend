import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import {LandingpageComponent} from "./landingpage/landingpage.component";

const routes: Routes = [
  { path: 'userlist', component: UserlistComponent },
  { path: '', component: LandingpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
