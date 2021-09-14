import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadlazyComponent } from './loadlazy.component';

const routes: Routes = [{ path: '', component: LoadlazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadlazyRoutingModule { }
