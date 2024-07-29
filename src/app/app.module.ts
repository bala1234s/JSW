import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { EmployeeComponent } from './components/employee/employee.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    AdminHomeComponent,
    EmployeeComponent,
    AdminSurveyComponent,
    AdminSurveyStatusComponent,
    AdminDashboardComponent,
    AdminActionPlanComponent,
    CustomerHomeComponent,
    SupplierHomeComponent,
    SupplierCustomerResponseComponent,
    SupplierActionPlanComponent,
    CustomerTakeSureyComponent,
    ResponseFilterComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
