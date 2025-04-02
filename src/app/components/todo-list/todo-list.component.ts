import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  newTask: string = '';
  items: TodoItem[] = [];

  // method adds task if form input is not empty, text disappears after task is added
  addTask(): void {
    const newID = Date.now().toString();

    if (this.newTask.trim() !== '') {
      const newItem: TodoItem = {
        id: newID,
        content: this.newTask,
        completed: false
      };

      this.items.push(newItem);
    }
    
    this.newTask = '';
  }

}
