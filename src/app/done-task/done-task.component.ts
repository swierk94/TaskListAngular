import { TaskService } from './../services/task.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent  {

  tasksDone: Array<string> = [];

  constructor(private tasksService: TaskService)
   {
     this.tasksService.getTasksDoneObs().subscribe(
     (tasks: Array<string> )=>
    {
     this.tasksDone = tasks;
    });
}

}
