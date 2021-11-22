import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students!:Student[];
  shouldshow=true
  idselected!: number;
  formvalue!:FormGroup;
  newstudent!:Student
  @ViewChild('close') close:any;
  isDisabled=true;
  user:{usernames:string,emails:string}={usernames:"",emails:''}
  constructor(private ss:StudentService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getstudentlist(),
    this.ar.queryParams.subscribe(queryparams=>{
      this.idselected=+queryparams.selectedid
    });
    this.formvalue=new FormGroup({
      id:new FormControl(),
      name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      address:new FormControl(),
      courseOpted:new FormControl(),
      feePaid:new FormControl(),
      feeDue:new FormControl(),
      mobNum:new FormControl(),
    })
  }
getstudentlist(){
  this.ss.getstudentlist().subscribe((resp)=>{
    this.students=resp;
    this.shouldshow=false
  },
  error=>{console.log(error.message)})
}
sendstudent(){
      //this.newstudent.id=this.formvalue.value.id;
      //this.newstudent.name=this.formvalue.value.name;
      //this.newstudent.address=this.formvalue.value.address;
      //this.newstudent.courseOpted=this.formvalue.value.courseOpted;
      //this.newstudent.feePaid=this.formvalue.value.feePaid;
     // this.newstudent.feeDue=this.formvalue.value.feeDue;
     // this.newstudent.id=this.formvalue.value.id;

      let student:Student=this.formvalue.value

  this.ss.sendstudent(student).subscribe(resp=>{
    console.log(resp);
    this.getstudentlist()
    this.close.nativeElement.click();
  })
}
updatestudent(student:Student){
  this.formvalue.controls['name'].setValue(student.name);
  this.formvalue.controls['address'].setValue(student.address);
  this.formvalue.controls['courseOpted'].setValue(student.courseOpted);
  this.formvalue.controls['feePaid'].setValue(student.feePaid);
  this.formvalue.controls['feeDue'].setValue(student.feeDue);
  this.formvalue.controls['mobNum'].setValue(student.mobNum);
  this.formvalue.controls['id'].setValue(student.id);

}
updatedstudent(){
//this.newstudent.name=this.formvalue.value.name;
//this.newstudent.address=this.formvalue.value.address;
//this.newstudent.courseOpted=this.formvalue.value.courseOpted;
//this.newstudent.feePaid=this.formvalue.value.feePaid;
//this.newstudent.feeDue=this.formvalue.value.feeDue;
//this.newstudent.mobNum=this.formvalue.value.mobNum;
this.newstudent=this.formvalue.value
this.ss.updatestudent(this.newstudent,this.newstudent.id).subscribe(resp=>{
  console.log('student has been updated');
  this.getstudentlist()
  this.close.nativeElement.click();
})

}
deletestudent(student:Student){
  confirm('are you want to Delete')
    this.ss.deletestudent(student).subscribe(resp=>{
    console.log(resp);
    this.getstudentlist();
  })
  this.close.nativeElement.click();
}
username():FormControl {
 return this.formvalue.get('name') as FormControl
}
@ViewChild("f") f:NgForm|any=""
sendform(){
  if(this.f.valid){
    console.log(this.user.usernames);
    console.log(this.user.emails)
  }
}

}
