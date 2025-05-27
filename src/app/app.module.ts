
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [

 DashboardComponent
],
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  AppComponent  ,// import standalone component here
  LoginComponent
],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }