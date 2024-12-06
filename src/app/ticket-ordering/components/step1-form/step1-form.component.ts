import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1-form',
  templateUrl: './step1-form.component.html',
  styleUrls: ['./step1-form.component.css']
})
export class Step1FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'), // Only letters
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'), // Only letters
        ],
      ],
      age: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'), // Only numbers
          Validators.min(1), // Positive number
        ],
      ],
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get age() {
    return this.form.get('age');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted Successfully:', this.form.value);
      this.router.navigate(['/ticket-ordering/step-2']);
    } else {
      console.log('Form is invalid');
    }
  }

}
