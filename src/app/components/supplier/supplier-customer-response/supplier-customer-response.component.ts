import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-customer-response',
  templateUrl: './supplier-customer-response.component.html',
  styleUrls: ['./supplier-customer-response.component.css']
})
export class SupplierCustomerResponseComponent {

  review: any;
  getReview: any;
  constructor(private route : Router) { 
    this.review = sessionStorage.getItem('empResponse');
    this.getReview = JSON.parse(this.review);
    console.log(this.getReview);
  }
  accept() {
    this.route.navigate(['/supplier-action-plan']);
  }
  reject() {
  
  }

}
