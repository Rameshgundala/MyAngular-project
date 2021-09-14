import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { ComponentsExampleComponent } from './components/components-example/components-example.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LifecycleEventsComponent } from './components/lifecycle-events/lifecycle-events.component';
import { UconeParentComponent } from './components/component-intaraction/ucone-parent/ucone-parent.component';
import { UconeChildComponent } from './components/component-intaraction/ucone-child/ucone-child.component';
import { UctwoChildComponent } from './components/component-interaction/uctwo-child/uctwo-child.component';
import { UctwoParentComponent } from './components/component-interaction/uctwo-parent/uctwo-parent.component';
import { UcthreeParentComponent } from './components/component-interaction/ucthree-parent/ucthree-parent.component';
import { UcthreeChildComponent } from './components/component-interaction/ucthree-child/ucthree-child.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { CustomPipe } from './pipes/custom.pipe';
import { DirectivesExampleComponent } from './components/directives-example/directives-example.component';
import { HighlightingDirective } from './directives/highlighting.directive';
import { RfWithFormcontrolComponent } from './components/forms/rf-with-formcontrol/rf-with-formcontrol.component';
import { RfWithFormgroupComponent } from './components/forms/rf-with-formgroup/rf-with-formgroup.component';
import { RfWithFormarrayComponent } from './components/forms/rf-with-formarray/rf-with-formarray.component';
import { RfWithValidationsComponent } from './components/forms/rf-with-validations/rf-with-validations.component';
import { TfExampleComponent } from './components/forms/tf-example/tf-example.component';
import { TfCustomValidatorDirective } from './validators/tf-custom-validator.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { NewmodModule } from './modules/newmod/newmod.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsExampleComponent,
    LifecycleEventsComponent,
    UconeParentComponent,
    UconeChildComponent,
    UctwoChildComponent,
    UctwoParentComponent,
    UcthreeParentComponent,
    UcthreeChildComponent,
    PipeExampleComponent,
    CustomPipe,
    DirectivesExampleComponent,
    RfWithFormcontrolComponent,
    RfWithFormgroupComponent,
    RfWithFormarrayComponent,
    RfWithValidationsComponent,
    TfExampleComponent,
    TfCustomValidatorDirective,
    PageNotFoundComponent,
    StudentListComponent,
    StudentDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NewmodModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
