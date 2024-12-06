import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3-form',
  templateUrl: './step3-form.component.html',
  styleUrls: ['./step3-form.component.css']
})
export class Step3FormComponent {
  @Output() submit = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
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
