import React, { Component } from 'react';

import './Todo.scss';

//* Todo как обычная функция (переписанная на хуки)

const Todo = ({ todos, upTodo, downTodo, handleTodoEdit, handleTodoDelete, onTodoClick }) => {
  const makeMarkup = array => {
    return array.map(todo => {
      return (
        <li className={`todo__item ${todo.type}`} key={todo.id}>
          <input type="checkbox" id={todo.id} onChange={() => onTodoClick(todo.id)} checked={todo.completed} />
          <label htmlFor={todo.id}>
            {todo.type === 'very-important' ? (
              <span className="emoji very-important" role="img">
                ‼️
              </span>
            ) : (
              todo.type === 'important' && (
                <span className="emoji important" role="img">
                  ❗️
                </span>
              )
            )}
            {todo.text}
          </label>
          <div className="move-todo-block">
            <button type="button" className="move-todo up-todo" onClick={() => upTodo(array.indexOf(todo))}></button>
            <button
              type="button"
              className="move-todo down-todo"
              onClick={() => downTodo(array.indexOf(todo))}
            ></button>
          </div>
          <button
            type="button"
            className="edit-todo"
            onClick={() => handleTodoEdit(todo.text, todo.type, todo.id)}
          ></button>
          <button type="button" className="delete-todo" onClick={() => handleTodoDelete(todo.id)}></button>
        </li>
      );
    });
  };

  // const importantTodos = todos.filter(todo => todo.type === 'important' && !todo.completed);
  // const standartTodos = todos.filter(todo => todo.type === 'standart' && !todo.completed);
  // const completedTodos = todos.filter(todo => todo.completed);

  return (
    <>
      {makeMarkup(todos)}
      {/* {makeMarkup(importantTodos)}
          {makeMarkup(standartTodos)}
          {makeMarkup(completedTodos)} */}
    </>
  );
};

export default Todo;
