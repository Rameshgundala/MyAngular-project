import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:{userName:string,pwd:string} = {userName:'',pwd:''};
  constructor(private ss:SharedService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
       if(this.ss.loginUser(this.user)){
        this.router.navigate(['student-list']);
       }
      }

}
