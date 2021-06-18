import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {


  app: any = [];
  menuGroup: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getapp();

  }


  getapp() {

    this.userService.getapps().subscribe(res => {
      this.app = res;
      this.menuGroup = res

      console.log(this.app)

    });
  }

}
