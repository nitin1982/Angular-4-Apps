import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'to-do-list',
  template: `<to-do *ngFor="let todo of todos" [todoDisplay]="todo"></to-do>`
})
export class ToDoListComponent implements OnInit {
  @Input()todos: ToDo[];

  constructor() {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }
}
