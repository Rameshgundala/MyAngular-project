import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UcthreeChildComponent } from './components/component-interaction/ucthree-child/ucthree-child.component';
import { UcthreeParentComponent } from './components/component-interaction/ucthree-parent/ucthree-parent.component';
import { ComponentsExampleComponent } from './components/components-example/components-example.component';
import { DirectivesExampleComponent } from './components/directives-example/directives-example.component';
import { RfWithFormarrayComponent } from './components/forms/rf-with-formarray/rf-with-formarray.component';
import { RfWithFormcontrolComponent } from './components/forms/rf-with-formcontrol/rf-with-formcontrol.component';
import { RfWithFormgroupComponent } from './components/forms/rf-with-formgroup/rf-with-formgroup.component';
import { RfWithValidationsComponent } from './components/forms/rf-with-validations/rf-with-validations.component';
import { TfExampleComponent } from './components/forms/tf-example/tf-example.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { RedirectTOoginGuard } from './guards/redirect-toogin.guard';

const routes: Routes = [{ path: 'lazy-module', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule) },
{path:'component-example',component:ComponentsExampleComponent},
{path:'ucthree-parent',component:UcthreeParentComponent},
{path:'ucthree-child',component:UcthreeChildComponent},
{path:'pipes-example',component:PipeExampleComponent},
{path:'directives-example',component:DirectivesExampleComponent},
{path:'rf-with-formcontrol',component:RfWithFormcontrolComponent},
{path:'app-rf-with-formgroup',component:RfWithFormgroupComponent},
{path:'rf-with-formarray',component:RfWithFormarrayComponent},
{path:'app-rf-with-validations',component:RfWithValidationsComponent},
{path:'tf-example',component:TfExampleComponent, children:[{path:'childOne',component:UcthreeParentComponent},
{path:'childTwo',component:UcthreeChildComponent}]}, 
{path:'student-list',component:StudentListComponent,canActivate:[RedirectTOoginGuard]},
{path:'student-details/:studentId',component:StudentDetailsComponent},
{path:'login',component:LoginComponent},
{path:'',pathMatch:'full',redirectTo:'login'},
{ path: 'ram', loadChildren: () => import('./modules/loadlazy/loadlazy.module').then(m => m.LoadlazyModule) },
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
