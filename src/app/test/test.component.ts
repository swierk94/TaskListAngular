import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  constructor()
  {}



taskList: Array<string> = [];
taskDone: Array<string> =[];



remove(task: string)
{
this.taskList = this.taskList.filter(e => e !== task);
}

done(task: string)
{
  this.taskDone.push(task);
  this.remove(task);
}

undone(task: string)
{
  this.taskDone=this.taskDone.filter(e => e !== task);
  this.taskList.push(task);
}

add(task: string)
{
  this.taskList.push(task);
}


ngOnInit():void
{
this.taskList = ['Zadanie 1', 'Zadanie 2', 'Zadanie3'];

}


}
