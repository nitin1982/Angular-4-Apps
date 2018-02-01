import { Component, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
  selector: 'to-do-form',
  template: `<div class="w3-card-4  w3-margin" style="width:670px">

  <div class="w3-container w3-blue w3-margin">
    <h2>To Do Form</h2>
  </div>
  <div class="w3-container w3-border w3-margin">
                <label>Title</label>
                <input class="w3-input" type="text" #title>
                <label>Detail</label>
                <input class="w3-input" type="text" #detail>
                <label>Display Detail</label>
                <input class="w3-check" type="checkbox" #displaydetail>
                <p>
                <button class="w3-button w3-blue w3-round-large"
                  (click)="AddToDo(title.value, detail.value, displaydetail.checked)">
                Save
                </button>
                </p>
            </div></div>`
})
export class ToDoFormComponent {

  @Output() todocreated = new EventEmitter<ToDo>();

  AddToDo(title: string, detail: string, display: boolean) {
    console.log(`To Do Created:Title:${title}, Detail:${detail}, ShouldDisplay:${display}`);
    let todo: ToDo;
    todo = {
      title: title,
      detail: detail,
      createdDate: new Date(),
      displayDetail: display
    };

    this.todocreated.emit(todo);
  }
}
