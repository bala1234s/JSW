import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { adminGuardGuard } from './guard/admin-guard.guard';
import { EmployeeComponent } from './components/employee/employee.component';
import { employeeGuardGuard } from './employee-guard.guard';
import { AdminSurveyComponent } from './components/admin/admin-survey/admin-survey.component';
import { AdminSurveyStatusComponent } from './components/admin/admin-survey-status/admin-survey-status.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminActionPlanComponent } from './components/admin/admin-action-plan/admin-action-plan.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { SupplierHomeComponent } from './components/supplier/supplier-home/supplier-home.component';
import { SupplierCustomerResponseComponent } from './components/supplier/supplier-customer-response/supplier-customer-response.component';
import { SupplierActionPlanComponent } from './components/supplier/supplier-action-plan/supplier-action-plan.component';
import { CustomerTakeSureyComponent } from './components/customer/customer-take-surey/customer-take-surey.component';
import { ResponseFilterComponent } from './components/supplier/response-filter/response-filter.component';
import { DepartmentsComponent } from './components/admin/departments/departments.component';

const routes: Routes = [

// Home and Login Start

  {
    path: "",
    component: HomeComponent,
    title:"home"
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login"
  },

  // Home and Login End

  // Admin path start
  {
    path: "adminHome",
    component: AdminHomeComponent,canActivate:[adminGuardGuard],
    title:"Admin Home Page"
  },
  {
    path: "adminSurvey",
    component: AdminSurveyComponent,
    title:"admin customer survey form"
  },
  {
    path: "adminSurveyStatus",
    component: AdminSurveyStatusComponent,
    title:"Admin Survey Status"
  },
  {
    path: "adminDashboard",
    component: AdminDashboardComponent,
    title:"Admin ICS Dashboard"
  },
  {
    path: "adminActionPlan",
    component: AdminActionPlanComponent,
    title:"Admin Action Plan"
  },
  {
    path: "allDepartment",
    component: DepartmentsComponent,
    title:"All department view in Admin page"
  },

  // Admin path end


  // Employee Start


  {
    path: "employee",
    component: EmployeeComponent, canActivate: [employeeGuardGuard],
    title:"Employee Home"
    
  },
  {
    path: "customer-home",
    component: CustomerHomeComponent,
    title:"Customer Home page"
  },
  {
    path: "customer-take-survey",
    component: CustomerTakeSureyComponent,
    title:"Customer taking survey page"
  },
  {

    path: "supplier-home",
    component: SupplierHomeComponent,
    title:"Supplier Home page"

  },
  {
    path: "supplier-customer-response",
    component: SupplierCustomerResponseComponent,
    title:"Supplier recevied response"
  },
  {
    path: "supplier-action-plan",
    component: SupplierActionPlanComponent,
    title:"Supplier Action Plan Page"
  },
  {
    path: "response-filter",
    component: ResponseFilterComponent,
    title:"Customer responded answer filter page"
  }


  // Employee End
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
