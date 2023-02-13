import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}

  logout(){
    sessionStorage.removeItem("SCHOOL-PROJECT-token");
    this.router.navigateByUrl("/login");
  }
}
