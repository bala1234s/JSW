import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminSurveyComponent } from './admin-survey/admin-survey.component';
import { AdminSurveyStatusComponent } from './admin-survey-status/admin-survey-status.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminActionPlanComponent } from './admin-action-plan/admin-action-plan.component';




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
    AdminActionPlanComponent
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
