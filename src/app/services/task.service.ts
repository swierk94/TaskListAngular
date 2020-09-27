import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormArray } from '@angular/forms';

@Injectable()
export class TaskService {

private taskListObs = new BehaviorSubject<Array<Task>>([]);


constructor()
{
 const taskList = [{name: 'Zadanie 1', created: new Date().toLocaleString(), isDone: false},
 {name: 'Zadanie 2', created: new Date().toLocaleString(),  isDone: false},
 {name: 'Zadanie3', created: new Date().toLocaleString(),  isDone: false},
 {name: 'Zadanie 2', created: new Date().toLocaleString(), end:new Date().toLocaleString(), isDone: true}];
this.taskListObs.next(taskList);
}




remove(task: Task)
{
const list = this.taskListObs.getValue().filter(e => e !== task);
this.taskListObs.next(list);

}

done(task: Task)
{
  task.end = new Date().toLocaleString();
  task.isDone = true;
  const list = this.taskListObs.getValue();
  this.taskListObs.next(list);

}



add(task: Task)
{
  const list = this.taskListObs.getValue();
  list.push(task);
  this.taskListObs.next(list);


}

getTasksListObs(): Observable<Array<Task>>
{
return this.taskListObs.asObservable();
}

// getTasksDoneObs(): Observable<Array<Task>>
// {
//   return this.taskDoneObs.asObservable();
// }

}
