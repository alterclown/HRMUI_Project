import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {
  NzButtonModule,
  NzDividerModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzPopconfirmModule, NzRadioModule, NzSwitchModule,
  NzTableModule,
  NzToolTipModule
} from 'ng-zorro-antd';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeAttendanceListComponent } from './employee-attendance/employee-attendance-list/employee-attendance-list.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { EmployeeProjectListComponent } from './employee-project/employee-project-list/employee-project-list.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeeSalaryListComponent } from './employee-salary/employee-salary-list/employee-salary-list.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveListComponent } from './leave/leave-list/leave-list.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PayrollListComponent } from './payroll/payroll-list/payroll-list.component';
import { TaxesComponent } from './taxes/taxes.component';
import { TaxesListComponent } from './taxes/taxes-list/taxes-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DesignationComponent } from './designation/designation.component';
import { DesignationListComponent } from './designation/designation-list/designation-list.component';
import { LoanComponent } from './loan/loan.component';
import { LoanListComponent } from './loan/loan-list/loan-list.component';
import { TrainingComponent } from './training/training.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { GeolocationListComponent } from './geolocation/geolocation-list/geolocation-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    TourListComponent,
    CompanyComponent,
    CompanyListComponent,
    UsersComponent,
    UsersListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAttendanceComponent,
    EmployeeAttendanceListComponent,
    EmployeeProjectComponent,
    EmployeeProjectListComponent,
    EmployeeSalaryComponent,
    EmployeeSalaryListComponent,
    LeaveComponent,
    LeaveListComponent,
    PayrollComponent,
    PayrollListComponent,
    TaxesComponent,
    TaxesListComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DesignationComponent,
    DesignationListComponent,
    LoanComponent,
    LoanListComponent,
    TrainingComponent,
    TrainingListComponent,
    GeolocationComponent,
    GeolocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzDividerModule,
    NzInputModule,
    NzFormModule,
    NzToolTipModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzRadioModule,
    NzSwitchModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
