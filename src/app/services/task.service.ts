import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TaskService {


private taskList: Array<Task> = [];
private taskDone: Array<Task> = [];


private taskListObs = new BehaviorSubject<Array<Task>>([]);
private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

constructor()
{
this.taskList = [{name: 'Zadanie 1', created: new Date()},
 {name: 'Zadanie 2', created: new Date()},
 {name: 'Zadanie3', created: new Date()}];
this.taskListObs.next(this.taskList);
}




remove(task: Task)
{
this.taskList = this.taskList.filter(e => e !== task);
this.taskListObs.next(this.taskList);

}

done(task: Task)
{
  this.taskDone.push(task);
  this.remove(task);
  this.taskDoneObs.next(this.taskDone);
}

undone(task: Task)
{
  this.taskDone=this.taskDone.filter(e => e !== task);
  this.taskList.push(task);
}

add(task: Task)
{
  this.taskList.push(task);
  this.taskListObs.next(this.taskList);
}

getTasksListObs(): Observable<Array<Task>>
{
return this.taskListObs.asObservable();
}

getTasksDoneObs(): Observable<Array<Task>>
{
  return this.taskDoneObs.asObservable();
}

}
