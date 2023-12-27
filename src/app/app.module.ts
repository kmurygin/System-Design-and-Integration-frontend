import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { UserlistComponent } from './userlist/userlist.component';
import { NavbarComponent } from "./navbar/navbar.component";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    NavbarComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
