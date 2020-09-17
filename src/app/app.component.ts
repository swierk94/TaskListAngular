import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-kurs';

  taskListex = ['pierwsze', 'drugie'];

ngOnInit():void
{
this.taskListex = ['Zadanie 1', 'Zadanie 2', 'Zadanie3'];

}

selected(task: string): void
{
 console.log(task);
}


}
