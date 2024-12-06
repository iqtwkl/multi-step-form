import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3-form',
  templateUrl: './step3-form.component.html',
  styleUrls: ['./step3-form.component.css']
})
export class Step3FormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      seat: ['', Validators.required],
      food: ['', Validators.required],
      allergies: ['', Validators.required],
    });
  }

  get seat() {
    return this.form.get('seat');
  }

  get food() {
    return this.form.get('food');
  }

  get allergies() {
    return this.form.get('allergies');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.router.navigate(['/ticket-ordering/results']);
    } else {
      console.log('Form is invalid');
    }
  }

  onBack() {
    console.log('Back button clicked');
    this.router.navigate(['/ticket-ordering/step-2']);
  }

}
