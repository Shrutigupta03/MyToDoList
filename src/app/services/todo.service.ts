import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav = [];
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Coding',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-11-2023')
    },
    {
      id: 2,
      title: 'Lab Work',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-11-2023')
    },
    {
      id: 3,
      title: 'Assignments',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-11-2023')
    }
  ];

  constructor(private deletePopup: ToastrService) { }

  deleteTodo(item: any) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

    // this.deletePopup.success(`Todo ${item.id} Deleted!`);
  }

  addTodo(title : any) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite') ||'[]');
  }
}
