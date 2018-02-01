import { Component, OnInit } from '@angular/core';
import { ToDo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todos: ToDo[];
  OnToDoCreated(data) {
    console.log(data);

    this.todos.unshift(data);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.todos = [{ title: 'Interview Prep', detail: 'Angular4, Web API, EF etc', createdDate: new Date(), displayDetail: true },
    { title: 'Interview Prep2', detail: 'Angular4, Web API, EF etc2', createdDate: new Date(), displayDetail: true }];
  }

}
