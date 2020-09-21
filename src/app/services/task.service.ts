import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TaskService {


private taskList: Array<string> = [];
private taskDone: Array<string> =[];


private taskListObs = new BehaviorSubject<Array<string>>(this.taskList);
private taskDoneObs = new BehaviorSubject<Array<string>>(this.taskDone);

constructor()
{
this.taskList = ['Zadanie 1', 'Zadanie 2', 'Zadanie3'];
this.taskListObs.next(this.taskList);
}




remove(task: string)
{
this.taskList = this.taskList.filter(e => e !== task);
this.taskListObs.next(this.taskList);

}

done(task: string)
{
  this.taskDone.push(task);
  this.remove(task);
  this.taskDoneObs.next(this.taskDone);
}

undone(task: string)
{
  this.taskDone=this.taskDone.filter(e => e !== task);
  this.taskList.push(task);
}

add(task: string)
{
  this.taskList.push(task);
  this.taskListObs.next(this.taskList);
}

getTasksListObs(): Observable<Array<string>>
{
return this.taskListObs.asObservable();
}

getTasksDoneObs(): Observable<Array<string>>
{
  return this.taskDoneObs.asObservable();
}

}
