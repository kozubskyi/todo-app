import React, { Component } from 'react';

import './TodoList.scss';

class TodoList extends Component {
  render() {
    return (
      <ul className="todo__list">
        {/* {this.props.todos.map(todo => {
          return (
            <li
              className="todo__item"
              style={{ backgroundColor: todo.type === 'important' && 'rgb(255, 175, 175)' }}
              key={todo.id}
            >
              <input type="checkbox" id={todo.id} />
              <label htmlFor={todo.id} onClick={() => this.props.handleCheckStatus(todo.id)}>
                {todo.text}
              </label>
              <button type="button" className="edit-todo"></button>
              <button
                type="button"
                className="delete-todo"
                onClick={() => this.props.handleTodoDelete(todo.id)}
              ></button>
            </li>
          );
        })} */}
        {this.props.todos
          .filter(todo => todo.type === 'important')
          .map(todo => {
            return (
              <li className="todo__item todo__item__important" key={todo.id}>
                <input type="checkbox" id={todo.id} />
                <label htmlFor={todo.id}>{todo.text}</label>
                <button type="button" className="edit-todo"></button>
                <button
                  type="button"
                  className="delete-todo"
                  onClick={() => this.props.handleTodoDelete(todo.id)}
                ></button>
              </li>
            );
          })}
        <div className="line"></div>
        {this.props.todos
          .filter(todo => todo.type === 'standart')
          .map(todo => {
            return (
              <li className="todo__item" key={todo.id}>
                <input type="checkbox" id={todo.id} />
                <label htmlFor={todo.id}>{todo.text}</label>
                <button type="button" className="edit-todo"></button>
                <button
                  type="button"
                  className="delete-todo"
                  onClick={() => this.props.handleTodoDelete(todo.id)}
                ></button>
              </li>
            );
          })}
        <div className="line"></div>
        {/* {this.props.todos
          .filter(todo => todo.checked)
          .map(todo => {
            return (
              <li className="todo__item" key={todo.id}>
                <input type="checkbox" id={todo.id} />
                <label htmlFor={todo.id}>{todo.text}</label>
                <button type="button" className="edit-todo"></button>
                <button
                  type="button"
                  className="delete-todo"
                  onClick={() => this.props.handleTodoDelete(todo.id)}
                ></button>
              </li>
            );
          })} */}
      </ul>
    );
  }
}

export default TodoList;
