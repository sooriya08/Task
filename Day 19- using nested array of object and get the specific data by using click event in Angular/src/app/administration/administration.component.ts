import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  nav: any = [];
  menuGroup: any;

  jsondata: any = [];
  jsonmenuGroup: any = [];
  title: any;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.navbar();
    this.update();
  }


  navbar() {
    this.userService.getapps().subscribe(res => {
      this.nav = res;
      this.menuGroup = res;
      console.log(res)
    })

  }




  update() {
    this.jsondata = this.userService.jsonName;
    this.jsonmenuGroup = this.jsondata.menuGroup;
    this.title = this.jsondata.title;
    console.log(this.jsondata);

  }



}
