import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewFormComponent } from './new-form/new-form.component';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalenderComponent } from './calender/calender.component'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppViewComponent } from './app-view/app-view.component';
import { AdministrationComponent } from './administration/administration.component';





FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    CalenderComponent,
    AppViewComponent,
    AdministrationComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
