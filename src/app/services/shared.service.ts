import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  isUserLoggedIn:boolean = false;
  constructor(private http:HttpClient) { }
  getStudentsList():Student[]{
       const students:Student[] = [
         {id:1,name:'Ramesh',address:'Hyderabad',courseOpted:'Angular',feePaid:10000,feeDue:5000,mobNum:999999999},
        {id:2,name:'Rajesh',address:'Hyderabad',courseOpted:'Angular',feePaid:10000,feeDue:5000,mobNum:888888888},
         {id:3,name:'Dharshith',address:'Hyderabad',courseOpted:'Java',feePaid:10000,feeDue:5000,mobNum:777777777},
         {id:4,name:'Sathvika',address:'Hyderabad',courseOpted:'Spring',feePaid:10000,feeDue:5000,mobNum:77755555},
         {id:5,name:'Hanu',address:'Hyderabad',courseOpted:'React',feePaid:10000,feeDue:5000,mobNum:66666666666}
        ];
       return students;
      }
      getStudentDetails(id:number):Student{
            return this.getStudentsList().filter(student=>student.id===id)[0];
          }
        loginUser(user:{userName:string,pwd:string}){
                if(user.userName==='admin'&&user.pwd==='admin'){
                  this.isUserLoggedIn = true;
                }
                return this.isUserLoggedIn;
        }
        getStudentsListUsingApi():Observable<Student[]>{
          return this.http.get<Student[]>('http://localhost:3000/students');
        }
        createOrUpdateStudent(newStudent: Student,isUpdateStudent:boolean):Observable<any> {
          if(isUpdateStudent){
            return this.http.put(`http://localhost:3000/students/${newStudent.id}`,newStudent);
          }
          return this.http.post('http://localhost:3000/students',newStudent);
        }
        getStudentDetailsUsingApi(id:number):Observable<Student>{
          return this.http.get<Student>(`http://localhost:3000/students/${id}`);
        }
        deleteStudent(student:Student){
          return this.http.delete(`http://localhost:3000/students/${student.id}`);
        }
}