import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1FormComponent } from './components/step1-form/step1-form.component';
import { Step2FormComponent } from './components/step2-form/step2-form.component';
import { Step3FormComponent } from './components/step3-form/step3-form.component';
import { TicketOrderingRoutingModule } from './ticket-ordering.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Step1FormComponent,
    Step2FormComponent,
    Step3FormComponent
  ],
  imports: [
    CommonModule,
    TicketOrderingRoutingModule,
    ReactiveFormsModule
  ]
})
export class TicketOrderingModule { }
