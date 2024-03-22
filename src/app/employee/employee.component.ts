import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  data: any;
  code: any
  Emp_mail: any;
  login_mail: any;
  Emp: any;
  id: any;

  constructor(private http: HttpClient) {
    
    this.login_mail = sessionStorage.getItem('login');
    http.get<any>('http://localhost:3000/employee').subscribe((get) => {
      this.data = get;
      const emp = get.find((getEmp:any) => { 
        this.Emp_mail = getEmp.Emp_mail;
        this.id = getEmp.id;

        return this.Emp_mail == this.login_mail;
      })

      if (emp) {
        // console.log();
        this.Emp = this.data[this.id];
      }
      else { 
        console.log("not logged");
      }

      

    })
    
    
    
   
  }
  
}
