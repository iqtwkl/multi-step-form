import { Component, OnInit } from '@angular/core';
import { TicketOrdering } from '../../ticket-ordering.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {
  currentStep = 1;
  formData: TicketOrdering = new TicketOrdering();

  goToNextStep(stepData: Partial<TicketOrdering>) {
    this.formData = { ...this.formData, ...stepData };
    this.currentStep++;
  }

  goToPreviousStep() {
    this.currentStep--;
  }
}
