import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { DataHolderService } from 'src/app/services/data-holder.service';

@Component({
  selector: 'app-ucthree-child',
  templateUrl: './ucthree-child.component.html',
  styleUrls: ['./ucthree-child.component.scss']
})
export class UcthreeChildComponent implements OnInit {
  user: User | undefined;
  constructor(private dhs:DataHolderService) { }

  ngOnInit(): void {
    this.user = this.dhs.getData();
  }

}
