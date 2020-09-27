import { HttpClientModule } from '@angular/common/http';
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
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sortName.pipe';
import { HttpService } from './services/http.service';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule



  ],
  providers: [TaskService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
