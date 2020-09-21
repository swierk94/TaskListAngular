import { TaskService } from './services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
