import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './base/table/table.component';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { UserGetComponent } from './user-get/user-get.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';





@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    HomeComponent,
    UserGetComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dhf39kzim',upload_preset: 'm2h0p4yq'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
