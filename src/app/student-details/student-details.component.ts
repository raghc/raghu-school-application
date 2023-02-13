import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  public student:any=[];

  constructor(private studentService:StudentService,private activatedRoute:ActivatedRoute){

    activatedRoute.params.subscribe(
      (data:any)=>{
          this.studentService.studentdetailswithid(data.id).subscribe(
            (data:any)=>{
                  this.student=data;

            },
            (err:any)=>{
              alert("Internal Server Error");
            }
          )
      }
    )

  }



}
