import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../types/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: Task = {
    id: 0,
    title: '',
    priority: 'Low',
    completed: false,
  };

  constructor(private router: Router) {}

  addTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: this.newTask.title,
      priority: this.newTask.priority,
      completed: this.newTask.completed,
    };
    this.tasks.push(newTask);
    // reset the form
    this.newTask = {
      id: 0,
      title: '',
      priority: 'Low',
      completed: false,
    };
  }

  deleteTask(id: Number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  viewTask(id: Number) {
    this.router.navigate(['task-list', id]);
  }
}
