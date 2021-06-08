
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {



  
  constructor() { }

  // age : any= []
  // name: any = []
  // Address : any = []
  // marks : any = []
  user: any = [

    {
      "name": "sundar",
      "Age": 23,
      "Address": "VNR",
      "marks": [
        { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
      ]
    },
    {
      "name": "sooriya",
      "Age": 24,
      "Address": "VN",
      "marks": [
        { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
      ]
    },
    {
      "name": "prakash",
      "Age": 25,
      "Address": "VNU",
      "marks": [
        { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
        { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
      ]
    }

  ]

  
  
  // semester: Array<any>=["sem1","sem2","sem3","sem4"]

  // sem1: Array<any> = [{"eng":"","tam":"",math:""}]
  

  

  

//  onSubmit(data: any){
//    console.log(data);
//  }


//    addItem (value: any) : void {
//   this.user.push(value)
//   this.userForm.reset();
//   console.log(this.userForm.value);
// }
  
  PersonFound = false

Search(value: any) {
  for (var i = 0; i < this.user.length; i++) {
    if (value == this.user[i].name || value == this.user[i].Age || value == this.user[i].Address) {
      this.PersonFound = true
      console.log(this.user[i]);
     
      break;
    }

  }
  if (this.PersonFound) alert('welcome,' + ''  + this.user[i].name )
  else if (!this.PersonFound) alert("Invalid data")
}




  ngOnInit(): void {

     
    
    
  }

}
