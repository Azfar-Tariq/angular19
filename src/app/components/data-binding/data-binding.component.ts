import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: String = 'Azfar';
  rollNo: Number = 123456;
  isActive: Boolean = true;
  currentDate: Date = new Date();
  div1ClassName: String = 'bg-primary';
  selectedCity: String = '';

  constructor(private router: Router) {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
    // this.showWelcomeMessage();
  }

  showWelcomeMessage() {
    alert('Welcome to Angular');
  }

  onCityChange() {
    alert('City changed');
  }

  navigateToAdmin() {
    this.router.navigateByUrl('/admin');
  }
}
