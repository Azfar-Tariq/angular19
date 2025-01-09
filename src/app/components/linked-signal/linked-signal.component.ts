import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  firstName = signal<String>('Azfar');
  lastName = signal<String>('Tariq');

  fullName = linkedSignal(() => `${this.firstName()} ${this.lastName()}`);

  changeName() {
    this.firstName.set('John');
  }
}
