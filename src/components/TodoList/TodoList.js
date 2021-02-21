import React from 'react';

import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <ul className="todo__list">
      {todos.map(todo => {
        return (
          <li className="todo__item" key={todo.id}>
            <input type="checkbox" id={todo.id} />
            <label htmlFor={todo.id}>{todo.text}</label>
            <button type="button" className="edit-todo"></button>
            <button type="button" className="delete-todo"></button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
