import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';
import { CalenderComponent } from './calender/calender.component';


const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "reg", component: RegisterComponent },
  { path: "calendar", component: CalenderComponent }
];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
