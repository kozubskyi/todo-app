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

  return (
    <form className="todo-creator__form" onSubmit={onFormSubmit}>
      <input
        type="text"
        value={text}
        onChange={changeInputValue}
        autoComplete="off"
        placeholder={placeholders[getRandomInRange(0, placeholders.length - 1)]}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

//* TodoCreator написанный классом

// class TodoCreator extends Component {
//   static defaultProps = {
//     text: '',
//     type: 'standart',
//   };

//   state = {
//     text: this.props.text,
//     type: this.props.type,
//     placeholders: [
//       'Сходить на футбол',
//       'Купить продукты',
//       'Навестить родственников',
//       'Купить подарок',
//       'Помыть посуду',
//       'Прибраться в доме',
//       'Починить что-то в доме',
//       'Сьездить в отпуск',
//       'Отправиться в путешествие',
//       'Вынести мусор',
//       'Купить вкусняшек',
//     ],
//     // placeholder: '',
//   };

//   onFormSubmit = event => {
//     event.preventDefault();
//     const todo = { id: uuidv4(), text: this.state.text, type: this.state.type, completed: false };
//     todo.text !== '' && this.props.handleFormSubmit(todo);
//     this.formReset();
//   };

//   formReset = () => this.setState({ text: '' });

//   changeInputValue = event => this.setState({ text: event.target.value });

//   getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   render() {
//     return (
//       <form className="todo-creator__form" onSubmit={this.onFormSubmit}>
//         <input
//           type="text"
//           value={this.state.text}
//           onChange={this.changeInputValue}
//           autoComplete="off"
//           placeholder={this.state.placeholders[this.getRandomInRange(0, this.state.placeholders.length - 1)]}
//         />
//         <button type="submit">Добавить</button>
//       </form>
//     );
//   }
// }

export default TodoCreator;
