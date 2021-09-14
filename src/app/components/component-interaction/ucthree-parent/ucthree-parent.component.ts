import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modal/user';
import { DataHolderService } from 'src/app/services/data-holder.service';

@Component({
  selector: 'app-ucthree-parent',
  templateUrl: './ucthree-parent.component.html',
  styleUrls: ['./ucthree-parent.component.scss']
})
export class UcthreeParentComponent implements OnInit {

  constructor(private dhs:DataHolderService, private router:Router) { }
  user: User = {name:'',email:'',location:''};
  ngOnInit(): void {
  }
  saveData(){
    this.dhs.saveData(this.user);
    this.router.navigate(['ucthree-child']);
   }
}
