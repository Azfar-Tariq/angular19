import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  div1Visible: Boolean = true;

  number1: String = '';
  number2: String = '';

  hideDiv1() {
    this.div1Visible = false;
  }

  showDiv1() {
    this.div1Visible = true;
  }
}
