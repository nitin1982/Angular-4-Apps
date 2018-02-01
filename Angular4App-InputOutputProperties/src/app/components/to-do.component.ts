import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'to-do',
  template: `<div class="w3-container" style="width:700px"><div class="w3-panel w3-card"><h3>To Do</h3>
             <p>{{todo.title}} created on {{todo.createdDate | date:'fullDate'}}</p>
             <p [hidden]="!todo.displayDetail">{{todo.detail}}</p>
             <p><button class="w3-button w3-blue w3-round-large" (click)="todo.displayDetail = !todo.displayDetail" >
                  {{ todo.displayDetail ? "Hide Detail" : "Show Detail"}}
                </button>
             </p>
             </div></div>`
})
export class ToDoComponent implements OnInit {
  @Input('todoDisplay')todo: ToDo;

  constructor() {

  }


  ngOnInit() {
    //this.todo = { title: 'Interview Prep', detail: 'Angular4, Web API, EF etc', createdDate: new Date() };
  }


}
