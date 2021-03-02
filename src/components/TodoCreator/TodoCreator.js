import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './TodoCreator.scss';

const TodoCreator = ({ todos, handleFormSubmit }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('standart');
  const [placeholders, setPlaceholders] = useState([
    'Сходить на футбол',
    'Купить продукты',
    'Навестить родственников',
    'Купить подарок',
    'Помыть посуду',
    'Прибраться в доме',
    'Починить что-то в доме',
    'Сьездить в отпуск',
    'Отправиться в путешествие',
    'Вынести мусор',
    'Купить вкусняшек',
  ]);

  const onFormSubmit = event => {
    event.preventDefault();
    const todo = { id: uuidv4(), text, type, completed: false };
    todo.text !== '' && handleFormSubmit(todo);
    formReset();
  };

  const formReset = () => setText('');

  const changeInputValue = event => setText(event.target.value);

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const changeTodoType = event => {
    event.target.value === 'standart' && setType('important');
    event.target.value === 'important' && setType('very-important');
    event.target.value === 'very-important' && setType('standart');
  };

  return (
    <form className="todo-creator__form" onSubmit={onFormSubmit}>
      <button className="todo-type-btn" type="button" value={type} onClick={changeTodoType}></button>
      <input
        type="text"
        value={text}
        onChange={changeInputValue}
        autoComplete="off"
        placeholder={placeholders[getRandomInRange(0, placeholders.length - 1)]}
      />
      <button className="add-todo-btn" type="submit"></button>
    </form>
  );
};

export default TodoCreator;
