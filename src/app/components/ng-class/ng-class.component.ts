import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  div1BgColor: String = 'bg-success';
  isChecked: Boolean = false;
  div3ClassName: String = '';

  addDiv1Color(className: String) {
    this.div1BgColor = className;
  }
}
