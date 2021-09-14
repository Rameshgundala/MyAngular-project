import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ucone-child',
  templateUrl: './ucone-child.component.html',
  styleUrls: ['./ucone-child.component.scss']
})
export class UconeChildComponent implements OnInit {
  @Input() coursesAvailable:string[] | undefined;
  @Output() coursesSaved: EventEmitter<boolean> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  saveCourses(){
        console.log("Saving the couress");
        this.coursesSaved.emit(true);
      }
}
