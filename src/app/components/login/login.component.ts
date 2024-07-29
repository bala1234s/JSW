import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { environment } from 'src/environments/environment';
declare var Swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any;
  password: any;
  data: any;
  changechar: boolean = true;
  field: boolean = true;

 
  constructor(private form: FormBuilder,private http:HttpClient,private route:Router) { }
  
  login = this.form.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]]

  })

  submit() { 
    
    console.log(this.login.value)
    this.email = this.login.controls['email'].value;
    this.password = this.login.controls['password'].value;
    this.http.get<any>('http://localhost:3000/employee').subscribe((get) => {
      
      
      sessionStorage.setItem('loginAdmin', this.email);
      this.data = get.find((login:any) => { 
        return this.email == login.Emp_mail && this.password == login.Emp_password;
      });
      
      if (this.email == environment.Admin_Email && this.password == environment.Admin_Password) {
        sessionStorage.setItem('loginAdmin', 'true');
        
        this.route.navigateByUrl("adminHome").then(() => {
          
          
          window.location.reload();
        });;
        
        
      }
      
      
     else if (this.data) {
        sessionStorage.setItem('loginEmp', 'true');
        
        sessionStorage.setItem('login', this.email);
        this.route.navigateByUrl("employee").then(() => {
          window.location.reload();
        });
        // console.log(sessionStorage.getItem('login'));
      }
      else {
        alert("not found");
        
      }

      
      
      

    })
    

    
  }
  changeicon(){
    this.changechar = !this.changechar;
    this.field = !this.field;
  }
}
