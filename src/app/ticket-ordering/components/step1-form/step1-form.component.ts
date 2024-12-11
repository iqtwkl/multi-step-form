import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketOrdering } from '../../ticket-ordering.model';

@Component({
  selector: 'app-step1-form',
  templateUrl: './step1-form.component.html',
  styleUrls: ['./step1-form.component.css']
})
export class Step1FormComponent {
  form: FormGroup;
  @Input() formData: TicketOrdering = new TicketOrdering();
  @Output() submit = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();
  @Output() isFormValid = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
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

  ngOnChanges() {
    this.patchValue();
  }

  patchValue(): void {
     if (this.formData) {
      this.form.patchValue({
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        age: this.formData.age,
      });
    }
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
    const isValid = this.form.valid;
    if (isValid) {
      this.submit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched(); // Memastikan semua field yang invalid ditandai
    }
  
    // Emit event isFormValid
    this.isFormValid.emit(isValid);
  }
  

  onBack() {
    this.back.emit();
  }

}
