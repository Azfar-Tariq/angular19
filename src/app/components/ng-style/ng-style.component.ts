import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  divBgColor: String = '';
  isChecked: Boolean = false;
  myCss: any = {
    'background-color': 'yellow',
    width: '200px',
    height: '200px',
  };

  addDivColor(color: String) {
    this.divBgColor = color;
  }
}
