import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {
  empData: any;
  getData: any;
  constructor(private route :Router) { 
    this.getData = sessionStorage.getItem('empData');
    this.empData = JSON.parse(this.getData);
    console.log(this.empData);
    
  }
  survey(data: any) { 
    // console.log(data); 
    sessionStorage.setItem('takeSurvey', JSON.stringify(data));
    this.route.navigate(['/customer-take-survey']);
  }

}
