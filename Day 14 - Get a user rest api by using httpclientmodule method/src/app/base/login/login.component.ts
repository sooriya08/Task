import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from 'src/app/user';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  @Output() logincheck = new EventEmitter
 
   loginvalue: any = {};

  userForm = NgForm

  constructor(private storeusers: DataService, private router: Router) { }
  ngOnInit(): void {
  }

  model = new user ('','','','','','','','','')

  // onSubmit(data: any){
  // console.log(this.userForm.)
  // }
     
  
   

  userFound: any;
  passwordFound: any;

  login(data : any){

    console.log(data.value);
   this.userFound = false;
     this.passwordFound = false;

    for(var i=0; i < this.storeusers.service.length; i++){
      if(this.model.email == this.storeusers.service[i].email){
          this.userFound = true;
          if(this.model.password == this.storeusers.service[i].password){
             this.passwordFound = true;
             this.storeusers.table = this.storeusers.service[i];
             console.log(this.storeusers.table)
            //  this.logincheck.emit(this.loginvalue)
             
             break;
          }
        
          
      }
    }
   if(this.userFound && this.passwordFound){
    alert("login successfull");
    this.router.navigateByUrl('table')
   } 
   else if(this.userFound && !this.passwordFound) {
     alert("password is incorrect")
   }
   else  {
     alert ("user is not found")
   }
   


  }

  // click(model: any){
  //   console.log(model)

  // }

    




  // ngOnInit(): void {
  // }


}

