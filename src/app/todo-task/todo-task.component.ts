import { TaskService } from './../services/task.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent  {

  taskList = [];

  constructor(private tasksService: TaskService)
  {

this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) =>{
this.taskList = tasks;
}
);

  }


done(task: string)
{
  this.tasksService.done(task);
}

remove(task: string)
{
  this.tasksService.remove(task);

}

getColor(): string
{
  return this.taskList.length >= 5 ? 'red' : 'green';
}



}
