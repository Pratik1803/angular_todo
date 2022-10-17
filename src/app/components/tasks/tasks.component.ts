import { Component, OnInit } from '@angular/core';
import { TASK } from 'src/app/mock-tasks';
import { Task } from 'src/app/tasks.interface';
import { TaskService } from 'src/app/services/task.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASK;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(task: Task) {
    this.taskService
      .deletTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.remainder = !task.remainder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
