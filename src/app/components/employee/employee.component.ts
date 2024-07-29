import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var Swal: any;

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
  Emp_name: any;
  Emp_department: any;
  Emp_number: any;
  id: any;
  home_images: any;
  index: any;
  images: any;
  

  constructor(private http: HttpClient,private route:Router) {




    this.home_images = ['../../assets/home/jsw-home.jpg', '../../assets/home/jsw-home-2.jpg', '../../assets/home/jsw-home-3.jpg'];
    // this.index = 0;

    // setInterval(() => {
    //   this.index++;
    //   this.images = document.getElementById('image')
    //   this.images.src = this.home_images[this.index];
    //   if (this.index == 2) { 
    //     this.index = -1;
    //   }
      
    // }, 3000)

    
    
    this.login_mail = sessionStorage.getItem('login');
    http.get<any>('http://localhost:3000/employee').subscribe((get) => {
      console.log(get);
      
      const emp = get.find((getEmp: any) => { 
        const empDetails = {
          id: getEmp.id,
          empName: getEmp.Emp_name,
          empDepartment: getEmp.Emp_department,
          empNumber: getEmp.Emp_number,
          empGrade: getEmp.Emp_grade,
          empMail: getEmp.Emp_mail,
          empCode: getEmp.Emp_code,
          empCustomer: getEmp.Emp_customer,
          empQuestion: getEmp.Emp_question,
          empAnswer: getEmp.Emp_answer
        }
        sessionStorage.setItem('empData', JSON.stringify(empDetails));

        this.Emp_name = getEmp.Emp_name;
        this.Emp_department = getEmp.Emp_department;
        this.Emp_number = getEmp.Emp_number;
        this.Emp_mail = getEmp.Emp_mail;
        this.id = getEmp.id;

        return this.Emp_mail == this.login_mail;
      })

      // if (emp) {
      //   // console.log();
      //   this.Emp = this.data[this.id];
      //   this.Emp_name = this.Emp.Emp_name;
      //   this.Emp_number = this.Emp.Emp_number
      //   this.Emp_department = this.Emp.Emp_department;
      //   console.log(this.Emp);

      // }
      // else { 
      //   console.log("not logged");
      // }
      

      

    })
    
    
    
   
  }

  back() { 
 
    this.index++;

    this.images = document.getElementById('image');
    // this.imageStyle = document.getElementById('img')?.style;
    // this.imageStyle.marginTop = `${100}px`;
    
    this.images.src = this.home_images[this.index];
    if (this.index == 2) { 
      this.index = -1;
    }
  }
  forward() { 
 
    this.index++;

    this.images = document.getElementById('image')
    this.images.src = this.home_images[this.index];
    if (this.index == 2) { 
      this.index = -1;
    }
  }

  supplier() { 
    this.route.navigate(['/login']);
    
  }

  changeRole(role: any) { 
    if (role == "customer") {
      this.route.navigate(['/customer-home']);
    }
    else if (role == "supplier") {
      this.route.navigate(['/supplier-home']);
    }
    

  }

  
}
