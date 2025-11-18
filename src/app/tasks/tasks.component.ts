import { Component, EventEmitter, input, Input, Output  } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './new-task/new-task-model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  
})
export class TasksComponent {
  @Input({required:true}) userId! : string
  @Input({required:true}) name!: string;

  isAddingTask = false
  @Output() addTask = new EventEmitter()

  
  constructor(private tasksService: TaskService){}
 
 

  get selectedUserTasks() {
   return this.tasksService.getUserTask(this.userId)
  }
 
  OnStartAddTask(){
   this.isAddingTask = true
 }

 onCloseAddTask(){
  this.isAddingTask=false
 }
 

  
}
