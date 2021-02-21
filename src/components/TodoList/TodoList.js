import React, { Component } from 'react';

import './TodoList.scss';

class TodoList extends Component {
  render() {
    return (
      <>
        <div className="line"></div>
        <ul className="todo__list">
          {/* {this.props.todos.map(todo => {
            return (
              <li
                className="todo__item"
                style={{ backgroundColor: todo.type === 'important' && 'rgb(255, 175, 175)' }}
                key={todo.id}
              >
                <input type="checkbox" id={todo.id} checked={todo.completed} />
                <label htmlFor={todo.id} onClick={() => this.props.handleCompletedStatus(todo.id)}>
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
            .filter(todo => todo.type === 'important' && !todo.completed)
            .map(todo => {
              return (
                <li className="todo__item todo__item__important" key={todo.id}>
                  <input type="checkbox" id={todo.id} checked={todo.completed} />
                  <label htmlFor={todo.id} onClick={() => this.props.handleCompletedStatus(todo.id)}>
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
            })}
          <div className="line"></div>
          {this.props.todos
            .filter(todo => todo.type === 'standart' && !todo.completed)
            .map(todo => {
              return (
                <li className="todo__item" key={todo.id}>
                  <input type="checkbox" id={todo.id} checked={todo.completed} />
                  <label htmlFor={todo.id} onClick={() => this.props.handleCompletedStatus(todo.id)}>
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
            })}
          <div className="line"></div>
          {this.props.todos
            .filter(todo => todo.completed)
            .map(todo => {
              return (
                <li className="todo__item" key={todo.id}>
                  <input type="checkbox" id={todo.id} checked={todo.completed} />
                  <label htmlFor={todo.id} onClick={() => this.props.handleCompletedStatus(todo.id)}>
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
            })}
        </ul>
      </>
    );
  }
}

export default TodoList;
