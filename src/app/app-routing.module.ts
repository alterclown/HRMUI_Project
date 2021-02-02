import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourComponent} from './tour/tour.component';
import {TourListComponent} from './tour/tour-list/tour-list.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationListComponent } from './designation/designation-list/designation-list.component';
import { DesignationComponent } from './designation/designation.component';
import { EmployeeAttendanceListComponent } from './employee-attendance/employee-attendance-list/employee-attendance-list.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeProjectListComponent } from './employee-project/employee-project-list/employee-project-list.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { EmployeeSalaryListComponent } from './employee-salary/employee-salary-list/employee-salary-list.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { GeolocationListComponent } from './geolocation/geolocation-list/geolocation-list.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { LeaveListComponent } from './leave/leave-list/leave-list.component';
import { LeaveComponent } from './leave/leave.component';
import { LoanListComponent } from './loan/loan-list/loan-list.component';
import { LoanComponent } from './loan/loan.component';
import { PayrollListComponent } from './payroll/payroll-list/payroll-list.component';
import { PayrollComponent } from './payroll/payroll.component';
import { TaxesListComponent } from './taxes/taxes-list/taxes-list.component';
import { TaxesComponent } from './taxes/taxes.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component:  TourComponent},
    { path: 'tour', pathMatch: 'full', component:  TourComponent},
    { path: 'company', pathMatch: 'full', component:  CompanyComponent},
    { path: 'company-list', pathMatch: 'full', component:  CompanyListComponent},
    { path: 'user', pathMatch: 'full', component:  UsersComponent},
    { path: 'user-list', pathMatch: 'full', component:  UsersListComponent},
    { path: 'employee', pathMatch: 'full', component:  EmployeeComponent},
    { path: 'employee-list', pathMatch: 'full', component:  EmployeeListComponent},
    { path: 'employee-attendance', pathMatch: 'full', component:  EmployeeAttendanceComponent},
    { path: 'employee-attendance-list', pathMatch: 'full', component:  EmployeeAttendanceListComponent},
    { path: 'employee-project', pathMatch: 'full', component:  EmployeeProjectComponent},
    { path: 'employee-project-list', pathMatch: 'full', component:  EmployeeProjectListComponent},
    { path: 'employee-salary', pathMatch: 'full', component:  EmployeeSalaryComponent},
    { path: 'employee-salary-list', pathMatch: 'full', component:  EmployeeSalaryListComponent},
    { path: 'leave', pathMatch: 'full', component:  LeaveComponent},
    { path: 'leave-list', pathMatch: 'full', component:  LeaveListComponent},
    { path: 'payroll', pathMatch: 'full', component:  PayrollComponent},
    { path: 'payroll-list', pathMatch: 'full', component:  PayrollListComponent},
    { path: 'tax', pathMatch: 'full', component:  TaxesComponent},
    { path: 'tax-list', pathMatch: 'full', component:  TaxesListComponent},
    { path: 'department', pathMatch: 'full', component:  DepartmentComponent},
    { path: 'department-list', pathMatch: 'full', component:  DepartmentListComponent},
    { path: 'designation', pathMatch: 'full', component:  DesignationComponent},
    { path: 'designation-list', pathMatch: 'full', component:  DesignationListComponent},
    { path: 'loan', pathMatch: 'full', component:  LoanComponent},
    { path: 'loan-list', pathMatch: 'full', component:  LoanListComponent},
    { path: 'training', pathMatch: 'full', component:  TrainingComponent},
    { path: 'training-list', pathMatch: 'full', component:  TrainingListComponent},
    { path: 'geolocation', pathMatch: 'full', component:  GeolocationComponent},
    { path: 'geolocation-list', pathMatch: 'full', component:  GeolocationListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
