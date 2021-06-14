import { Component,  Input,  OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // @Input() registerdata : any = {};

  
   


  constructor( private gettable: DataService, private location:Location,private router: Router) { }

  
     local: any = this.gettable.table;

     userchange : any ;

     


    goBack() {
      this.router.navigateByUrl('login');
    }
  
    editInfo() {
      this.userchange = this.local;
    }
    updInfo() {
      this.location.back();
      alert("Successfully Updated...");
      console.log(this.gettable.service);
    }

       getreg(){
         return this.gettable = this.local
       }

       cmgdata: any = [];

       getdata(){
        this.gettable.getdataserver().subscribe( res => {
          this.cmgdata = res;
          console.log(res)
        })
        
      }





  


  

  



  // Search(gettable: any) {
    
  //   for (var i = 0; i < this.table.length; i++) {
  //     if (gettable == this.table[i].email || gettable == this.table[i].password) {
  //       // this.userFound = true;
  //       return this.table
  //       // console.log(this.table[i]);
  //       break;
  //     }

  //   }
  // }

  ngOnInit(): void {

  // this.getdata();

    
  }

}
