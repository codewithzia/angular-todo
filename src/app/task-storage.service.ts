import {Injectable} from '@angular/core';

import {init_tasks} from '../assets/todo-list.json';
import {Task} from "../app/shared/models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  tasks: Task[] = [];

  initialized: boolean = false;

  constructor() {
  }

  getTasks(): Task[] {
    this.init();
    return this.tasks;
  }


  delete(id) {
    let remaining_tasks: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      var current_task = this.tasks[i];

      // we found the task to remove, we do not include it in our new array
      if (id == current_task.id) {
        console.log('Skipping tash[' + current_task.title + ']');
        continue;
      }

      remaining_tasks.push(this.tasks[i]);
    }
    this.tasks = remaining_tasks;
    return true;
  }


  get(id): Task {

    this.init();

    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      // we found the task to remove, we do not include it in our new array
      if (task.id != id) {
        continue;
      }
      return task;
    }

    return null;
  }

  add(title, note,status) {
    let task = new Task(title, note, this.getHighestId() + 1,status);
    this.tasks.push(task);
  }


  update(id, title: string, note: string): Task {

    let task = this.get(id);
    task.title = title;
    task.note = note;

    return task;
  }

  init() {
    if (this.initialized) {
      console.log('Already initialized');
      return;
    }
    console.log('Loading data from json file');

    for (let i = 0; i < init_tasks.length; i++) {
      this.tasks.push(
        new Task(
          init_tasks[i]['title'],
          init_tasks[i]['note'],
          init_tasks[i]['id'],
          init_tasks[i]['status'])
      );
    }

    this.initialized = true;
  }


  getHighestId(): number {
    let highest: number = 0;
    this.init();
    this.tasks.forEach(function (current_task: Task) {

      if (current_task.id < highest) {
        return;
      }

      highest = current_task.id;
    });

    return highest;
  }
}
