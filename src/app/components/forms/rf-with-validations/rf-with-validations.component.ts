import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf-with-validations',
  templateUrl: './rf-with-validations.component.html',
  styleUrls: ['./rf-with-validations.component.scss']
})
export class RfWithValidationsComponent implements OnInit {

  constructor() { }
  fg!: FormGroup;
  ngOnInit(): void {
    this.fg = new FormGroup({
        userName: new FormControl('',[Validators.required,Validators.maxLength(10)]),
        location: new FormControl(),
        email: new FormControl('',[Validators.email])
    });
  }
saveData(){
  console.log("Is form valid:",this.fg.valid)
  console.log("form Data:",this.fg.value)
}
get userName():FormControl {
      return this.fg.get('userName') as FormControl;
    }
    get email():FormControl {
          return this.fg.get('email') as FormControl;
       }
}
