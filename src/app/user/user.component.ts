import { Component,  EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { Card } from "../shared/card/card";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [Card],
})
export class UserComponent {

  @Input({required:true}) user!:User
  @Input() selected?:boolean
  @Output() select = new EventEmitter()
 
  get imagePath(){
    return "assets/users/" + this.user.avatar
  }
  onSelectUser (){
   this.select.emit(this.user.id)
  }
}