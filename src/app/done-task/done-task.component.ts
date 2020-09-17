import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent  {

  constructor() { }

 @Input()
taskDone: Array<string> = [];

@Output()
emitUndone = new EventEmitter<string>();

undone(task: string)
{
  this.emitUndone.emit(task);
  this.taskDone=this.taskDone.filter(e => e !== task);

}

}
