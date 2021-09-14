import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ucone-parent',
  templateUrl: './ucone-parent.component.html',
  styleUrls: ['./ucone-parent.component.scss']
})
export class UconeParentComponent implements OnInit {

  constructor() { }
  courses:string[] |undefined;
  ngOnInit(): void {
    this.courses=['Angular','typeScript','HTML','CSS','REACT'];
  }
  logInformation(isCoursesSaved:boolean){
        if(isCoursesSaved){
          console.log("Courses are saved successfully")
        } else {
          console.log("Courses are not saved successfully")
        }
        
      }
}
