import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-example',
  templateUrl: './components-example.component.html',
  //template:`<p>components-example works! ramesh</p>`,
  styleUrls: ['./components-example.component.scss']
})
export class ComponentsExampleComponent implements OnInit {
 @Input() greetingInfo:string = "welcome to angular course";
  coursesAvailable:string[] = ['Angular','React','JavaScript','HTML','CSS','JAVA'];
  imagePath:string = 'assets/angular.png';
  shouldApplyClass:boolean= false;
  elementColor:string = 'red';
  constructor() { }

  ngOnInit(): void {
  }
  updateGreetingInfo(){
     this.greetingInfo = "Welcome to React Course";
     }
}
