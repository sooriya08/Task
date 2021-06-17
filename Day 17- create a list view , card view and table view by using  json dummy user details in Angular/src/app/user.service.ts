import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpC: HttpClientModule, private http: HttpClient) { }

  users: any = [];


  getschema(): Observable<any> {

    return this.http.get('assets/schema.json');

  }

  getdata() {
    return this.http.get('assets/data.json')
  }

}
