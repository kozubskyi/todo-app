import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './TodoCreator.scss';

class TodoCreator extends Component {
  state = {
    text: '',
  };

  onFormSubmit = event => {
    event.preventDefault();
    const todo = { id: uuidv4(), text: this.state.text, type: 'standart', completed: false };
    todo.text !== '' && this.props.handleFormSubmit(todo);
    this.formReset();
  };

  formReset = () => this.setState({ text: '' });

  changeInputValue = event => this.setState({ text: event.target.value });

  render() {
    return (
      <form className="todo-creator__form" onSubmit={this.onFormSubmit}>
        <input type="text" value={this.state.text} onChange={this.changeInputValue} autoComplete="off" />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default TodoCreator;
