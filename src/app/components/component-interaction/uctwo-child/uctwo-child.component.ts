import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uctwo-child',
  templateUrl: './uctwo-child.component.html',
  styleUrls: ['./uctwo-child.component.scss']
})
export class UctwoChildComponent implements OnInit {
  counter:number =0;
  constructor() { }
  ngOnInit(): void {
    this.counter = 0;
  }
  incrementCounter(){
       this.counter = this.counter + 1;
      }
  decrementCounter(){
        if(this.counter>0){
          this.counter = this.counter-1;
        }
    }
}
