import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf-with-formarray',
  templateUrl: './rf-with-formarray.component.html',
  styleUrls: ['./rf-with-formarray.component.scss']
})
export class RfWithFormarrayComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  fg!:FormGroup;
  ngOnInit(): void {
   this.fg = this.fb.group({
      userName:this.fb.control(''),
      email:this.fb.control(''),
      address:this.fb.array([])
    }); 
  }
  get addressFormArray():FormArray {
    return this.fg.get('address') as FormArray;
  }

  get addressFaControls():FormGroup[] {
    const addrFa = this.addressFormArray;
     return addrFa.controls as FormGroup[];
  }
  addAddress(){
    this.addressFormArray.push(this.fb.group({
      streetName:this.fb.control(''),
      location:this.fb.control('')
    }));
  }
  saveData(){
    console.log(this.fg.value);
  }
}
