import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './TodoCreator.scss';

const TodoCreator = ({ handleTodoCreating }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('standart');
  const [placeholders, _] = useState([
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

  const changeInputValue = event => setText(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    const todo = { id: uuidv4(), text, type, completed: false };
    todo.text && handleTodoCreating(todo);
    formReset();
  };

  const formReset = () => {
    setText('');
    setType('standart');
  };

  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const changeTodoType = event => {
    event.target.value === 'standart' && setType('important');
    event.target.value === 'important' && setType('very-important');
    event.target.value === 'very-important' && setType('standart');
  };

  return (
    <form className="todo-creator__form" onSubmit={onFormSubmit}>
      <button className="todo-type-btn" type="button" value={type} onClick={changeTodoType}>
        {type === 'very-important' ? '!!' : type === 'important' && '!'}
      </button>
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
