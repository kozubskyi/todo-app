import React, { Component } from 'react';

import './TodoList.scss';

class TodoList extends Component {
  makeMarkup = array => {
    return array.map(todo => {
      return (
        <li className={todo.type === 'important' ? 'todo__item todo__item__important' : 'todo__item'} key={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            onChange={() => this.props.onTodoClick(todo.id)}
            checked={todo.completed}
          />
          <label htmlFor={todo.id}>{todo.text}</label>
          <div className="move-todo-block">
            <button
              type="button"
              className="move-todo up-todo"
              onClick={() => this.props.upTodo(array.indexOf(todo))}
            ></button>
            <button
              type="button"
              className="move-todo down-todo"
              onClick={() => this.props.downTodo(array.indexOf(todo))}
            ></button>
          </div>
          <button type="button" className="edit-todo"></button>
          <button type="button" className="delete-todo" onClick={() => this.props.onTodoDelete(todo.id)}></button>
        </li>
      );
    });
  };

  render() {
    const importantTodos = this.props.todos.filter(todo => todo.type === 'important' && !todo.completed);
    const standartTodos = this.props.todos.filter(todo => todo.type === 'standart' && !todo.completed);
    const completedTodos = this.props.todos.filter(todo => todo.completed);

    return (
      <>
        
        <ul className="todo__list">
          {this.makeMarkup(this.props.todos)}
          {/* {this.makeMarkup(importantTodos)}
          {this.makeMarkup(standartTodos)}
          {this.makeMarkup(completedTodos)} */}
        </ul>
      </>
    );
  }
}

export default TodoList;
