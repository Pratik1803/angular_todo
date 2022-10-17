import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/tasks.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Task> = new EventEmitter();
  title: string = '';
  day: string = '';
  remainder: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onTaskSubmit(): void {
    if (!this.title) {
      return alert('Add a task first!');
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: this.title,
      day: this.day,
      remainder: this.remainder,
    };

    this.onSubmit.emit(newTask);

    this.title = '';
    this.day = '';
    this.remainder = false;
  }
}
