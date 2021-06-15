import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';
import { TableComponent } from './base/table/table.component';
import { HomeComponent } from './home/home.component';
import { UserGetComponent } from './user-get/user-get.component';


const routes: Routes = [

{ path:"login",component:LoginComponent},
{ path:"reg", component:RegisterComponent},
{ path:"table", component: TableComponent},
{path:'',component:HomeComponent},
{path:'userget',component:UserGetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
