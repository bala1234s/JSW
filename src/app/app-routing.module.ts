import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { adminGuardGuard } from './admin-guard.guard';
import { EmployeeComponent } from './employee/employee.component';
import { employeeGuardGuard } from './employee-guard.guard';
import { AdminSurveyComponent } from './admin-survey/admin-survey.component';
import { AdminSurveyStatusComponent } from './admin-survey-status/admin-survey-status.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminActionPlanComponent } from './admin-action-plan/admin-action-plan.component';

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

  // Admin path end


  // Employee Start


  {
    path: "employee",
    component: EmployeeComponent, canActivate: [employeeGuardGuard],
    title:"Employee Home"
    
  }

  // Employee End
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
