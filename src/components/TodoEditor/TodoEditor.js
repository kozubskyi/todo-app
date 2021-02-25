import React, { useState } from 'react';

import './TodoEditor.scss';

const TodoEditor = ({ todoText, handleTodoTextEdit, closeEditingForm }) => {
  const [text, setText] = useState(todoText);

  const onFormSubmit = event => {
    event.preventDefault();
    handleTodoTextEdit(text);
    closeEditingForm();
  };

  const changeInputValue = event => setText(event.target.value);

  return (
    <form className="todo-editor__form" onSubmit={onFormSubmit}>
      <input type="text" value={text} onChange={changeInputValue} autoComplete="off" autoFocus />
      <button type="submit">Редактировать</button>
    </form>
  );
};

export default TodoEditor;
