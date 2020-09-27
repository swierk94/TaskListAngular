import { Task } from './../model/task';
import { TaskService } from './../services/task.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent  {

  tasksDone: Array<Task> = [];

  constructor(private tasksService: TaskService)
   {
     this.tasksService.getTasksListObs().subscribe(
     (tasks: Array<Task> )=>
    {
     this.tasksDone = tasks.filter(t => t.isDone === true);
    });
}

}
