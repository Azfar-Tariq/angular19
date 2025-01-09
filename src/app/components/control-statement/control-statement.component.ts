import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
})
export class ControlStatementComponent {
  div1Visible: Boolean = true;
  checkBox: Boolean = false;
  cityList: String[] = ['Islamabad', 'Rawalpindi', 'Lahore'];
  employeeArray: any[] = [
    { empId: 123, name: 'Azfar', age: 30, city: 'Islamabad' },
    { empId: 124, name: 'Rahul', age: 25, city: 'Rawalpindi' },
    { empId: 125, name: 'Shahzad', age: 40, city: 'Lahore' },
  ];

  hideShowDiv1(isVisible: Boolean) {
    this.div1Visible = isVisible;
  }
}
