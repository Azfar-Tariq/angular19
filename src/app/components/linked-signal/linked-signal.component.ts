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
  user = signal({
    id: 123,
    nickName: 'azfaro',
  });

  fullName = linkedSignal(() => `${this.firstName()} ${this.lastName()}`);

  email = linkedSignal(
    () => `${this.user().nickName + this.user().id}@gmail.com`
  );

  changeName() {
    this.firstName.set('John');
  }

  changeNickName() {
    this.user.set({ id: 321, nickName: 'john' });
  }
}
