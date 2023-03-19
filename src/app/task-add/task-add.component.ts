import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  /**
   * Task title form field
   */
  title = new FormControl('',Validators.required);

  /**
   *  Task note form field
   */
  note = new FormControl('');

  constructor(private storage: TaskStorageService, private router: Router) {
  }

  /**
   * Create a task a redirect to the todo list
   */
  createTask() { 
    if(
      this.title.valid){
        this.storage.add(this.title.value, this.note.value);
        this.router.navigate(['/tasks'])    
      }
  }
}
