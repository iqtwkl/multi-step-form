import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {
  currentStep = 1;
  formData: any = {};

  goToNextStep(stepData: any) {
    this.formData = { ...this.formData, ...stepData };
    this.currentStep++;
  }

  goToPreviousStep() {
    this.currentStep--;
  }
}
