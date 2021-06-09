import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  userForm : FormGroup;

  
   gender : Array<any> = ["Male","Female"]
  state: Array<any> = ["TamilNadu","Delhi","Mumbai","Kerala"]

  constructor(private users:FormBuilder) {

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

   get f(){
     return this.userForm.controls
   }

   
 submit(){
    console.log(this.userForm.value)
    this.userForm.reset();
  }

 reset(){
    return this.userForm.reset();
 }

 


  ngOnInit(): void {
  }

}
