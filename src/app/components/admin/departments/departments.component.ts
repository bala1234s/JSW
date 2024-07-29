import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  data: any;
  constructor(private http: HttpClient) {
    
    http.get<any>('http://localhost:3000/employee').subscribe((get) => { 
      this.data = get;
    })

   }
}
