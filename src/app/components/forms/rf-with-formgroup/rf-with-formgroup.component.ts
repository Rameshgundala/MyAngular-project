import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf-with-formgroup',
  templateUrl: './rf-with-formgroup.component.html',
  styleUrls: ['./rf-with-formgroup.component.scss']
})
export class RfWithFormgroupComponent implements OnInit {

  constructor() { }
  fg!: FormGroup;
  ngOnInit(): void {
    this.fg = new FormGroup({
        userName: new FormControl(),
        location: new FormControl(),
        email: new FormControl()
    });
  }
saveData(){
  console.log("form Data:",this.fg.value)
}
}
