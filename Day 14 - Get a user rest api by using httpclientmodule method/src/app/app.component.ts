import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

 constructor(private router:Router) {}

  login(){
    this.router.navigateByUrl('login')
  }

  reg(){
    this.router.navigateByUrl('reg')
  }

  table(){
    this.router.navigateByUrl('table')
  }




  loginoutput: any = {};

  passvalue(get : any){
     this.loginoutput = get;
  }

 





}
