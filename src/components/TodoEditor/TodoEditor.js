import React, { useState } from 'react';
import './TodoEditor.scss';
import Backdrop from './Backdrop/Backdrop';

const TodoEditor = ({ todoText, todoType, handleTodoEdit, closeEditingForm }) => {
  const [text, setText] = useState(todoText);
  const [type, setType] = useState(todoType);

  const changeInputValue = event => setText(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    handleTodoEdit(text, type);
    closeEditingForm();
  };

  const changeTodoType = event => {
    event.target.value === 'standart' && setType('important');
    event.target.value === 'important' && setType('very-important');
    event.target.value === 'very-important' && setType('standart');
  };

  return (
    <>
      <Backdrop closeEditingForm={closeEditingForm} />
      <form className="todo-editor__form" onSubmit={onFormSubmit}>
        <button className="todo-type-btn" type="button" value={type} onClick={changeTodoType}>
          {type === 'very-important' ? '!!' : type === 'important' && '!'}
        </button>
        <input type="text" value={text} onChange={changeInputValue} autoComplete="off" autoFocus />
        <button className="edit-todo-btn" type="submit"></button>
      </form>
    </>
  );
};

export default TodoEditor;
