import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() formData: any;
  @Output() back = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }

}
