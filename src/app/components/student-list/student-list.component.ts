import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/modal/user';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students!:Student[];
  newStudent!:Student;
  idSelected!: number;
  isUpdateStudent: boolean = false;
  constructor(private ss:SharedService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.students = this.ss.getStudentsList();
    this.ss.getStudentsListUsingApi().subscribe(resp=>{
      this.students = resp;
    });
    this.activeRoute.queryParams.subscribe(qureryParams=>{
      this.idSelected = +qureryParams.selectedId;
    });
    this.newStudent = {id:-1,name:'',courseOpted:'',feeDue:-1,feePaid:-1,address:'',mobNum:99};
  }
  saveOrUpdateStudent(){
    this.ss.createOrUpdateStudent(this.newStudent,this.isUpdateStudent).subscribe(resp=>{
      console.log(resp);
      this.ss.getStudentsListUsingApi().subscribe(resp=>{
        this.students = resp;
      });
    })
  }
  updateStudent(student:Student){
    this.newStudent = student;
    this.isUpdateStudent = true;
  }
  deleteStudent(student:Student){
    this.ss.deleteStudent(student).subscribe(resp=>{
      console.log(resp);
      this.ss.getStudentsListUsingApi().subscribe(resp=>{
        this.students = resp;
      });
    })
  }
}
