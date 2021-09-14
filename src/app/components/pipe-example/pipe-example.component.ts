import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }
  dateInfo:Date = new Date();
  courseInSmallCase:string = "angular course";
  courseInUpperCase:string = "ANGULAR COURSE";
  currencyInfo:number = 100;
  names:string[] =['Rajesh','Ramesh']; 
  ngOnInit(): void {
  }

}
