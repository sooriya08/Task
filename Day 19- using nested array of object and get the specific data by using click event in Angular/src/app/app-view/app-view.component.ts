import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {


  app: any = [];
  menuGroup: any = [];
  style: any;
  json: any = [];
  title: any;
  constructor(private userService: UserService, private router: Router) { }



  ngOnInit(): void {
    this.getapp();

  }


  getapp() {

    this.userService.getapps().subscribe(res => {
      this.app = res;
      this.menuGroup = res;
      this.style = res


      console.log(this.app)



    });

    if (this.menuGroup = this.menuGroup) {
      return this.menuGroup
    }
  }

  admin() {
    this.router.navigateByUrl('admin');
  }

  display(data: any) {
    this.json = data;
    this.userService.jsonName = this.json;
    this.title = this.userService.jsonName.title
  }


}
