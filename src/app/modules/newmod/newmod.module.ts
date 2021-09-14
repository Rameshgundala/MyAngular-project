import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmodRoutingModule } from './newmod-routing.module';
import { NewcompComponent } from './newcomp/newcomp.component';


@NgModule({
  declarations: [NewcompComponent],
  imports: [
    CommonModule,
    NewmodRoutingModule
  ],
  exports:[NewcompComponent]
})
export class NewmodModule { }
