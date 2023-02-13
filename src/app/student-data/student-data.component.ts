import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {

  public students:any =[];
  public term:any=[];
  public colomn:any="";
  public order:any="";
  public limit:number=5;
  public totalpages:number=0;


  
  

  constructor(private studentService:StudentService,private router:Router){
    this.studentService.AllStudents().subscribe(
      (data:any)=>{
            this.students=data;
      },
      (err:any)=>{
          alert("Internal server Error");
      }
    )
  }

  filter(){
      this.studentService.filterdata(this.term).subscribe(
          (data:any)=>{
            this.students=data;
          },
          (err:any)=>{
            alert("Internal server Error");
        }
      )
  }

  sort(){
    this.studentService.sortthedata(this.colomn,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal server Error");
    }
    )
  }
  pagination(pageNo:number){
     this.studentService.pagenation(this.limit,pageNo).subscribe(
          (data:any)=>{
            this.students=data;
          },
          (err:any)=>{
            alert("Internal server error");
          }
     )
  }

  calcTotalnumber(){
    this.totalpages= Math.ceil(40/this.limit);
}
delete(id:number){
  this.studentService.delete(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
          alert("internal server error");
      }
  )
}

view(id:number){
this.router.navigateByUrl("/dashboard/student-details/"+id);

}

edit(id:number){
this.router.navigateByUrl("/dashboard/edit-student/"+id);
}

}
