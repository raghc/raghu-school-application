import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _router:Router ,private _loginService:LoginService){}
public studentforms:FormGroup = new FormGroup(
  {
    email:new FormControl(),
    password:new FormControl()
  }
)

  login(){
  console.log(this.studentforms.value);
  this._loginService.login(this.studentforms.value).subscribe(
      (data:any)=>{
            this._router.navigateByUrl("/dashboard");
            sessionStorage.setItem("SCHOOL-PROJECT-token",data.token);
      },
      (err:any)=>{
          alert("Enter  valid credentials");
      }
  )


  }
}