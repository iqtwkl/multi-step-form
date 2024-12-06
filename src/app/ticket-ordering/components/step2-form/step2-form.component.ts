import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketOrdering } from '../../ticket-ordering.model';

@Component({
  selector: 'app-step2-form',
  templateUrl: './step2-form.component.html',
  styleUrls: ['./step2-form.component.css']
})
export class Step2FormComponent {
  @Output() submit = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();
  @Output() isFormValid = new EventEmitter<boolean>();
  @Input() formData: TicketOrdering = new TicketOrdering();
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

  ngOnChanges() {
    this.patchValue();
  }

  patchValue(): void {
     if (this.formData) {
      this.form.patchValue({
        email: this.formData.email,
        phone: this.formData.phone,
      });
    }
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
      this.isFormValid.emit(true);
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
      this.isFormValid.emit(false);
    }
  }

  onBack() {
    this.back.emit();
  }

}
