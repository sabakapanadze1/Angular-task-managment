import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserTask } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})


export class Task {
 
  @Input() task!: UserTask
  private taskService = inject(TaskService)
  
  
  OnCompleteTask(){
     this.taskService.removeTask(this.task.id)
  }

}
