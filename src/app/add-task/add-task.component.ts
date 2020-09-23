import { Task } from './../model/task';
import { TaskService } from './../services/task.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private tasksService: TaskService) { }

newTask: string;


  add()
{
const task: Task = { name: this.newTask, created: new Date()};
this.tasksService.add(task);
this.newTask = '';
}

add2(input: HTMLInputElement)
{
console.log(input.value);
}



}
