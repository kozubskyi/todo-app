import React, { Component } from 'react';

import './TodoCreator.scss';

class TodoCreator extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <form className="todo-creator__form">
        <input type="text" />
        <button type="submit"></button>
      </form>
    );
  }
}

export default TodoCreator;
