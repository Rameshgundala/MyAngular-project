import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rf-with-formcontrol',
  templateUrl: './rf-with-formcontrol.component.html',
  styleUrls: ['./rf-with-formcontrol.component.scss']
})
export class RfWithFormcontrolComponent implements OnInit {
  userName!:FormControl;
  location!: FormControl;
  email!: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.userName = new FormControl();
    this.location = new FormControl();
    this.email = new FormControl();
  }
  saveData(){
    console.log("UserName:",this.userName.value);
    console.log("Location:",this.location.value);
    console.log("Email:",this.email.value);
  }
  updateName(){
    //this.userName.patchValue("rameshGundala");
    this.userName.setValue('mahesh')
  }
}
