import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2-form',
  templateUrl: './step2-form.component.html',
  styleUrls: ['./step2-form.component.css']
})
export class Step2FormComponent {
  @Output() submit = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email, // Validates proper email format
        ],
      ],
      phone: [
        '',
        [
          Validators.required, // Ensures the phone field is not empty
        ],
      ],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted Successfully:', this.form.value);
      this.submit.emit(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onBack() {
    this.back.emit();
  }

}
