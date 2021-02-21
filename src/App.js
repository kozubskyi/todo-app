import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import 'reset-css';
import './App.scss';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
// import AddTodoButtonS from './components/AddTodoButtonS/AddTodoButtonS';
import AddTodoButton from './components/AddTodoButton/AddTodoButton';
import Modal from './components/Modal/Modal';
import TodoCreator from './components/TodoCreator/TodoCreator';

class App extends Component {
  state = {
    todos: [
      { id: 'dsfddgdf', text: 'Позвонить', type: 'important', checked: false },
      { id: 'dfsdfg', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'dsfdfgjhkhjgdf', text: 'Позjknkjfs nglkfjdngfjsdkn ить', type: 'standart', checked: false },
      { id: 'dfggdsgh', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'gfhkjhfgkhj', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'scvvfgc', text: 'Позвонить', type: 'important', checked: false },
      { id: 'dsfsddgdf', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'dfhdfg', text: 'Позвонить', type: 'standart', checked: false },
      {
        id: 'dsffdhdjhkhjgdf',
        text:
          'Позвонdfggfhgjkyufs nglkfjdngfjsdПозвонdfggfhgjkyufs nglkfjdngfjsdkn итьПозвонdfggfhgjkyufs nglkfjdngfjsdkn итьПозвонdfggfhgjkyufs nglkfjdngfjsdkn итьkn ить',
        type: 'standart',
        checked: false,
      },
      { id: 'dfggtygsdfh', text: 'Позвонить', type: 'important', checked: false },
      { id: 'gfhdfkjhkhj', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'scvfhvc', text: 'Позвонить', type: 'important', checked: false },
      { id: 'dsfdhjggdf', text: 'Позвонить', type: 'important', checked: false },
      { id: 'dfhgjg', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'dsfdjhjkhkhjgdf', text: 'Позвонdfgfds jknkjfs nglkfjdngfjsdkn ить', type: 'standart', checked: false },
      { id: 'dfhjjgggh', text: 'Позвонить', type: 'standart', checked: false },
      { id: 'gfhjhkjhkhj', text: 'Позвонить', type: 'standart', checked: false },
    ],
    isModalOpen: false,
  };

  // componentDidMount() {
  //   const todos = JSON.parse(localStorage.getItem('todos'));
  //   todos !== null && this.setState({ todos: todos });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   prevState.todos !== this.state.todos && localStorage.setItem('todos', JSON.stringify(this.state.todos));
  // }

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  handleTodoDelete = id => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });

  handleCheckStatus = id => {
    // const clickedTodo = this.state.todos.find(todo => todo.id === id);
    // const todoIndex = this.state.todos.indexOf(clickedTodo);
    // console.log(clickedTodo);
    // this.setState(prevState => {
    //   this.state.todos[todoIndex].checked = !prevState.todos[todoIndex].checked;
    // });
    this.setState(prevState => {
      this.state.todos[0].checked = !prevState.todos[0].checked;
      console.log(prevState.todos[0]);
    });

    console.log(this.state.todos[0]);
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="stats">
          <p className="stats__all-todos">Всего: {this.state.todos.length}</p>
          <p className="stats__important-todos">
            Важных: {this.state.todos.filter(todo => todo.type === 'important').length}
          </p>
          <p className="stats__done-todos">
            Выполненных: 0
          </p>
        </div>

        <TodoList
          todos={this.state.todos}
          handleTodoDelete={this.handleTodoDelete}
          handleTodoCompleting={this.handleTodoCompleting}
          handleCheckStatus={this.handleCheckStatus}
        />
        <TodoCreator />
        {/* <AddTodoButtonS toggleModal={this.toggleModal} /> */}
        {/* <AddTodoButton toggleModal={this.toggleModal} /> */}
        {/* {this.state.isModalOpen && <Modal toggleModal={this.toggleModal} />} */}
      </>
    );
  }
}

export default App;
