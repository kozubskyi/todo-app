import React, { Component } from 'react';

import 'reset-css';
import './App.scss';

import Stats from './components/Stats/Stats';
import TodoList from './components/TodoList/TodoList';
import TodoCreator from './components/TodoCreator/TodoCreator';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Test todo - important version', type: 'important', completed: false },
      { id: 'id-2', text: 'Test todo - standart version', type: 'standart', completed: false },
      {
        id: 'id-3',
        text: 'Пока есть функционал только для создания стандарной версии Todo и пока невозможно редактирование',
        type: 'standart',
        completed: false,
      },
    ],
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos !== null && this.setState({ todos: todos });
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.todos !== this.state.todos && localStorage.setItem('todos', JSON.stringify(this.state.todos));
    // localStorage.clear();
  }

  handleFormSubmit = todo => this.setState({ todos: [todo, ...this.state.todos] });

  onTodoDelete = id => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });

  onTodoClick = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));
  };

  render() {
    return (
      <>
        <Stats todos={this.state.todos} />
        <TodoList
          todos={this.state.todos}
          onTodoDelete={this.onTodoDelete}
          handleTodoCompleting={this.handleTodoCompleting}
          onTodoClick={this.onTodoClick}
        />
        <TodoCreator todos={this.state.todos} handleFormSubmit={this.handleFormSubmit} />
      </>
    );
  }
}

export default App;
