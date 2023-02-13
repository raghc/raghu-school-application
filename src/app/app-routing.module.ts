import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CreateStudentFormComponent } from './create-student-form/create-student-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'student-data',component:StudentDataComponent},
    {path:'create-student-form',component:CreateStudentFormComponent,canDeactivate:[NotifyGuard]},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'edit-student/:id',component:CreateStudentFormComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
