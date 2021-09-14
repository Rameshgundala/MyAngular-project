import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-events',
  templateUrl: './lifecycle-events.component.html',
  styleUrls: ['./lifecycle-events.component.scss']
})
export class LifecycleEventsComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,
                AfterContentInit,AfterContentChecked,OnDestroy{
  @Input() msg:string ="life cycle events component";
  constructor() {
    console.log("1. constructor calling..")
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("2. ngOnChanges calling..")
  }

  ngOnInit(): void {
    console.log("3. ngOnInit calling..")
  }
  ngDoCheck(): void {
    console.log("4. ngDoCheck calling..")
  }
  ngAfterViewInit(): void {
    console.log("5. ngAfterContentInit calling..")
  }
  ngAfterViewChecked(): void {
    console.log("6. ngAfterContentChecked calling..")
  }
  ngAfterContentInit(): void {
    console.log("7. ngAfterViewInit calling..")
  }
  ngAfterContentChecked(): void {
    console.log("8. ngAfterViewChecked calling..")
  }
  ngOnDestroy(): void {
    console.log("9. ngOnDestroy calling..")
  }
}
