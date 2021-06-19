import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { AppViewComponent } from './app-view/app-view.component';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';
import { CalenderComponent } from './calender/calender.component';



const routes: Routes = [
  { path: '', component: AppViewComponent },
  { path: "login", component: LoginComponent },
  { path: "reg", component: RegisterComponent },
  { path: "calendar", component: CalenderComponent },
  { path: "admin", component: AdministrationComponent },

];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
