import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modal/user';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  idValue!: number;
  studentDetailInfo!: Student;

  constructor(private activeRoute:ActivatedRoute,private ss:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(paramsInfo=>{
      this.idValue = +paramsInfo.studentId;
      this.ss.getStudentDetailsUsingApi(this.idValue).subscribe(studentInfo=>{
        this.studentDetailInfo = studentInfo;
      });
    });
  }
  goToStudentList(){
    this.router.navigate(['student-list'],{queryParams:{selectedId:this.idValue}});  //http://localhost:4200/student-list?selectedId=2
  }
}
