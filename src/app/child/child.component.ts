import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()
  taskListexChild;
  @Output()
  eventTask = new EventEmitter<string>();

  select(task)
  {
  this.eventTask.emit(task);
  }



  ngOnInit():void
  {
  this.taskListexChild = ['Zadanie 1', 'Zadanie 2', 'Zadanie3'];

  }

}
