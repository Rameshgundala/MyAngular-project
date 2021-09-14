import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.scss']
})
export class DirectivesExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
  }
  shouldBorderApplied:boolean=true;
  coursesAvailable:string[] =['Angular','CSS','HTML','REACT','JAVA','SPRING'];
 courseSelected:string = 'Angular';

}
