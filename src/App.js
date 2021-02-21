import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import 'reset-css';
import './App.scss';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
// import AddTodoButtonS from './components/AddTodoButtonS/AddTodoButtonS';
import AddTodoButton from './components/AddTodoButton/AddTodoButton';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    todos: [
      { id: 'dsfddgdf', text: 'Позвонить' },
      { id: 'dfsdfg', text: 'Позвонить' },
      { id: 'dsfdfgjhkhjgdf', text: 'Позjknkjfs nglkfjdngfjsdkn ить' },
      { id: 'dfggdsgh', text: 'Позвонить' },
      { id: 'gfhkjhfgkhj', text: 'Позвонить' },
      { id: 'scvvfgc', text: 'Позвонить' },
      { id: 'dsfsddgdf', text: 'Позвонить' },
      { id: 'dfhdfg', text: 'Позвонить' },
      {
        id: 'dsffdhdjhkhjgdf',
        text:
          'Позвонdfggfhgjkyufs nglkfjdngfjsdПозвонdfggfhgjkyufs nglkfjdngfjsdkn итьПозвонdfggfhgjkyufs nglkfjdngfjsdkn итьПозвонdfggfhgjkyufs nglkfjdngfjsdkn итьkn ить',
      },
      { id: 'dfggtygsdfh', text: 'Позвонить' },
      { id: 'gfhdfkjhkhj', text: 'Позвонить' },
      { id: 'scvfhvc', text: 'Позвонить' },
      { id: 'dsfdhjggdf', text: 'Позвонить' },
      { id: 'dfhgjg', text: 'Позвонить' },
      { id: 'dsfdjhjkhkhjgdf', text: 'Позвонdfgfds jknkjfs nglkfjdngfjsdkn ить' },
      { id: 'dfhjjgggh', text: 'Позвонить' },
      { id: 'gfhjhkjhkhj', text: 'Позвонить' },
    ],
    isModalOpen: false,
  };

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    const { todos, isModalOpen } = this.state;

    return (
      <>
        <Header />
        <TodoList todos={todos} />
        {/* <AddTodoButtonS toggleModal={this.toggleModal} /> */}
        <AddTodoButton toggleModal={this.toggleModal} />
        {isModalOpen && <Modal toggleModal={this.toggleModal} />}
      </>
    );
  }
}

export default App;
