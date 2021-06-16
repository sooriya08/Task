import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Cloudinary } from '@cloudinary/angular-5.x'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
 
  SelectedFile: any;

  


 constructor(private router:Router,private http: HttpClient, private cloudinary: Cloudinary) {


  
} 

  // login(){
  //   this.router.navigateByUrl('login')
  // }

  // reg(){
  //   this.router.navigateByUrl('reg')
  // }

  // table(){
  //   this.router.navigateByUrl('table')
  // }




  loginoutput: any = {};

  passvalue(get : any){
     this.loginoutput = get;
  }



  onfileselected(event : any) {
    this.SelectedFile =  event.target.files[0];
    // console.log(event);
  }

  upload() {

    console.log(this.SelectedFile);

    

  }


  //  cl = new Cloudinary({cloud_name: "ddhf39kzim", secure: true});

    

   ngOnInit() {

   
   }
 }
 
 

 






