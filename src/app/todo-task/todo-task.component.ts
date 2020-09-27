import { Task } from './../model/task';
import { TaskService } from './../services/task.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent  {

  taskList: Array<Task> = [];

  constructor(private tasksService: TaskService)
  {

this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
this.taskList = tasks.filter(t=> t.isDone === false);
}
);

  }


done(task: Task)
{
  this.tasksService.done(task);
}

remove(task: Task)
{
  this.tasksService.remove(task);

}

getColor(): string
{
  return this.taskList.length >= 5 ? 'red' : 'green';
}



}
