import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  firstName = signal('Azfar');
  lastName = signal<String>('Tariq');
  courseName = signal<String>('Angular');

  constructor() {
    console.log(this.firstName());
    setTimeout(() => {
      debugger;
      this.courseName.set('React JS');
      debugger;
    }, 5000);
  }
}
