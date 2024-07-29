import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent {
  getData: any;
  empData: any;
  empResponse: any;
  constructor(private route : Router) { 
    this.getData = sessionStorage.getItem('empData');
    this.empData = JSON.parse(this.getData)
    console.log(this.empData);
    this.empResponse = this.empData.empAnswer;
    
    console.log(this.empResponse)


  }

  viewReview(data:any) { 
    sessionStorage.setItem('empResponse', JSON.stringify(data));
    sessionStorage.setItem('isEmpResponse', 'true');
    this.route.navigate(['/supplier-customer-response']);

  }

  actionPlan() { 
    this.route.navigate(['/response-filter']);
  }
  

}
