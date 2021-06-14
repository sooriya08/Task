import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userForm : FormGroup;

  
   gender : Array<any> = ["Male","Female"]
  state: Array<any> = ["TamilNadu","Delhi","Mumbai","Kerala"]

  constructor(private users: FormBuilder, private data: DataService) {

  this.userForm = this.users.group({
    
    firstname: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
    lastname: ["",[Validators.required,Validators.minLength(5)]],
    password: ["",[Validators.required,Validators.pattern('^[0-9]{7}$'),Validators.maxLength(7)]],
    email: ["",[Validators.required,Validators.email]],
    address: ["",Validators.required],
    gender: ["",Validators.required],
    city: ["",Validators.required],
    state: ["",Validators.required],
    zip: ["",[Validators.required,Validators.pattern('^[0-9]{6}$')]],

  })
  
  
   }
      
  //  register(){
  //   console.log(this.userForm.value);
  //   this.userForm.
    
  //  }

   get f(){
     return this.userForm.controls
   }

   
   
 click(data: any){
    console.log(data.value);
    
     this.data.service.push(data.value);
    this.userForm.reset();
  }
  
  reset(){
    this.userForm.reset();
  }

  // getdata(){
  //   this.data.getdataserver().subscribe( res => {
  //     console.log(res)
  //   })
  // }


  

  ngOnInit(): void {

    // this.getdata
   
  }

}
