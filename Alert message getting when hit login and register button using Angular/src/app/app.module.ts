import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewFormComponent } from './new-form/new-form.component';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
