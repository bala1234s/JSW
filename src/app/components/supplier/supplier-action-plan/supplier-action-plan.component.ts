import { Component } from '@angular/core';
declare var Swal: any;
@Component({
  selector: 'app-supplier-action-plan',
  templateUrl: './supplier-action-plan.component.html',
  styleUrls: ['./supplier-action-plan.component.css']
})
export class SupplierActionPlanComponent {
  send() {
    Swal.fire({
      title: 'Done',
      text: 'Action plan successfully send',
      icon: 'success',
      confirmButtonText: 'okay'
    });
  }

}
