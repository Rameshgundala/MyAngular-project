import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tf-example',
  templateUrl: './tf-example.component.html',
  styleUrls: ['./tf-example.component.scss']
})
export class TfExampleComponent implements OnInit {

  userName!:string;
  location!:string;
  email!:string;
  shouldInfoDisplayed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  logData(){
    this.shouldInfoDisplayed = true;
  }
}
