import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor() { }

newTask: string;
@Output()
emitTask = new EventEmitter<string>();


 //Tasks adding method
  add()
{
this.emitTask.emit(this.newTask);
this.newTask = '';
}

add2(input: HTMLInputElement)
{
console.log(input.value);
}



}
