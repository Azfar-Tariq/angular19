import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: String[] = ['Islamabad', 'Rawalpindi', 'Lahore'];
  employeeArray: any[] = [
    { empId: 123, name: 'Azfar', age: 30, city: 'Islamabad' },
    { empId: 124, name: 'Rahul', age: 25, city: 'Rawalpindi' },
    { empId: 125, name: 'Shahzad', age: 40, city: 'Lahore' },
  ];
}
