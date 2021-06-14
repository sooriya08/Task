import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  constructor(private gettable:DataService) { }

  
  cmgdata: any = [];

  getdata(){
   this.gettable.getdataserver().subscribe( res => {
     this.cmgdata = res;
     console.log(res)
   })
   
 }

  ngOnInit(): void {
  }

}
