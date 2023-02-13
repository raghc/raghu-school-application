import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student-form',
  templateUrl: './create-student-form.component.html',
  styleUrls: ['./create-student-form.component.css']
})
export class CreateStudentFormComponent {

  public isEdit:boolean=false;
  public id:number=0;
  constructor(private studentservice:StudentService,private activatedRoute:ActivatedRoute,private router:Router){

    activatedRoute.params.subscribe(
      (data:any)=>{
       if(data.id){
        this.isEdit=true;
        this.id=data.id;

        this.studentservice.studentdetailswithid(data.id).subscribe(
           (data:any)=>{

            data.marks.forEach((value:any)=>{
              this.add();
            });

            this.studentform.patchValue(data);
           }
        )
        


       }
        
      }
    )




  }

public studentform:FormGroup = new FormGroup(
  {
    name:new FormControl("",[Validators.required,Validators.maxLength(15),Validators.minLength(4)]),
    class:new FormControl("",[Validators.min(0)]),
    avatar:new FormControl(),
    fatherName:new FormControl("",[Validators.required,Validators.maxLength(15)]),
    email:new FormControl(),
    dob:new FormControl(),
    createdAt:new FormControl(),
    address:new FormGroup(
      {
        addressLine:new FormControl(),
        city:new FormControl("",[Validators.required]),
        state:new FormControl("",[Validators.required]),
        pincode:new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
      }
    ),
    type:new FormControl("",[Validators.required]),
    busfee:new FormControl(),
    hostelfee:new FormControl(),
    marks:new FormArray([]),
    

  }
)

get marksFormArray(){
  return this.studentform.get('marks') as FormArray
}

add(){
this.marksFormArray.push(

 new FormGroup(
  {
    class:new FormControl("",[Validators.required]),
    year:new FormControl(),
    percentage:new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)])
  }
 )
)
}

submit(){

  this.studentform.markAllAsTouched();
  
 if(this.isEdit){
  
this.studentservice.updatedata(this.studentform.value,this.id).subscribe(
(data:any)=>{
  alert("Updated Successfull");
},
(err:any)=>{
alert("Internal Server Error");
}
)
 }

 else{
  this.studentservice.studentform(this.studentform.value).subscribe(
    (data:any)=>{
      alert("Created successfully");
    },
    (err:any)=>{
     alert("Internal Server Error");
    }
   )
 }

 this.router.navigateByUrl("/dashboard/student-data");

}
delete(i:any){
this.marksFormArray.removeAt(i);
}

}
