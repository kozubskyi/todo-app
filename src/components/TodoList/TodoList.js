import React, { Component } from 'react';

import './TodoList.scss';

class TodoList extends Component {
  makeMarkup = arr => {
    return arr.map(todo => {
      return (
        <li className={todo.type === 'important' ? 'todo__item todo__item__important' : 'todo__item'} key={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            onChange={() => this.props.onTodoClick(todo.id)}
            checked={todo.completed}
          />
          <label htmlFor={todo.id}>{todo.text}</label>
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
        <div className="line"></div>
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
