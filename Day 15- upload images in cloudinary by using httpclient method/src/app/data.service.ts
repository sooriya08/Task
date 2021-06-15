import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 
  constructor(private http: HttpClient) { }

  service : any = [];

   table: any = {};

getdataserver(): Observable<any> {

   let url
  return this.http.get("https://jsonplaceholder.typicode.com/users")
  
}








 

}
