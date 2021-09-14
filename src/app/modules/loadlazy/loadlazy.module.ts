import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadlazyRoutingModule } from './loadlazy-routing.module';
import { LoadlazyComponent } from './loadlazy.component';


@NgModule({
  declarations: [LoadlazyComponent],
  imports: [
    CommonModule,
    LoadlazyRoutingModule
  ]
})
export class LoadlazyModule { }
