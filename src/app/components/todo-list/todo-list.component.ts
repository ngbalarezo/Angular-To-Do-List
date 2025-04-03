import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'todo-list',
  imports: [FormsModule, NgFor],
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

  // method toggles completed status if checkbox is activated
  toggleCompleted(index: number): void {
    this.items[index].completed = !this.items[index].completed;
  }

}
