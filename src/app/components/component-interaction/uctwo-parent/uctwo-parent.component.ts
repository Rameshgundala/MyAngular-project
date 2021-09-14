import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UctwoChildComponent } from '../uctwo-child/uctwo-child.component';

@Component({
  selector: 'app-uctwo-parent',
  templateUrl: './uctwo-parent.component.html',
  styleUrls: ['./uctwo-parent.component.scss']
})
export class UctwoParentComponent implements OnInit {
  @ViewChild('childcmp',{static:true}) childcomponent:UctwoChildComponent|undefined;
  constructor() { }
  counter:number= 0; 
  ngOnInit(): void {
  }
  increment(){
    this.childcomponent?.incrementCounter();
  } 
  decrement(){
    this.childcomponent?.decrementCounter();
  } 
  getCounter(){
    return this.childcomponent?.counter;
  }
}
