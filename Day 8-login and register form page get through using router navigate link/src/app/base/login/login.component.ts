import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  submit (logname : string){

    if(logname != ""){
      alert ('Welcome,' + '' + logname);
      
    }
     else 
      alert ("please fill the name first")
    
  } 
  constructor() {}


   
  

    



  ngOnInit(): void {
  }

  
 
  

}
