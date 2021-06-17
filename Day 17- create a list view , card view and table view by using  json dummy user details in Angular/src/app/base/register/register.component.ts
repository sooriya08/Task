import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {




  schema: any = [];
  datas: any = [];
  card: any = [];
  cardheader: any;
  cardfields: any = [];
  listview: any;


  constructor(private userService: UserService) { }

  regsubmit() {
    console.log()
  }


  ngOnInit(): void {
    this.getschema();
    this.getdata();

  }

  regbtn() {

    this.userService.users.push()

  }

  getschema() {
    this.userService.getschema().subscribe(res => {
      this.schema = res.columns;
      this.card = res.cardView;
      this.cardheader = res.cardView.header;
      this.cardfields = res.cardView.fields;
      this.listview = res.listView.lines[0].fields;

      // console.log(this.cardheader)
      // console.log(this.card)
      // console.log(this.cardfields)
      // console.log(this.schema);
      console.log(res);


    })
  }

  getdata() {
    this.userService.getdata().subscribe(res => {
      this.datas = res;
      console.log(res);
    })
  }

  cards() {

    this.card = this.getschema
    return this.card
  }







}
