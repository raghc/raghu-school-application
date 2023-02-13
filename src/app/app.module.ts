import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudentDataComponent } from './student-data/student-data.component';
import { CreateStudentFormComponent } from './create-student-form/create-student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PricePipe } from './price.pipe';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    DashboardComponent,
    StudentDataComponent,
    CreateStudentFormComponent,
    StudentDetailsComponent,
    PricePipe,
    PercentagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
