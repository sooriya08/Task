import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input() registerdata: any = {};

  constructor(private btn:Router) { }


  
  login() {
    this.btn.navigateByUrl('/login')
  }

  reg() {
    this.btn.navigateByUrl('reg');
  }

  table() {
    this.btn.navigateByUrl('table')
  }

  loginoutput: any = {};

  passvalue(get : any){
     this.loginoutput = get;
  }
  

  ngOnInit(): void {
  }

}
