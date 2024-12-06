import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() formData: any;
  @Input() onBack: () => void = () => {
    this.router.navigate(['/ticket-ordering/step-3'])
  };

  constructor(private router: Router) {}

}
