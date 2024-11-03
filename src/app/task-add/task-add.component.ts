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

  title = new FormControl('',Validators.required);

  note = new FormControl('');
  status = new FormControl('Incomplete');


  constructor(private storage: TaskStorageService, private router: Router) {
  }

  /**
   * Create a task a redirect to the todo list
   */
  createTask() { 
    debugger
    if(
      this.title.valid){
        this.storage.add(this.title.value, this.note.value, this.status.value);
        this.router.navigate(['/tasks'])    
      }
  }
}
