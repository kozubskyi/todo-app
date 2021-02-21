import React, { Component } from 'react';

import 'reset-css';
import './App.scss';

// import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';
import TodoList from './components/TodoList/TodoList';
// import AddTodoButtonS from './components/AddTodoButtonS/AddTodoButtonS';
// import AddTodoButton from './components/AddTodoButton/AddTodoButton';
// import Modal from './components/Modal/Modal';
import TodoCreator from './components/TodoCreator/TodoCreator';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Test todo - standart version', type: 'standart', completed: false },
      { id: 'id-2', text: 'Test todo - important version', type: 'important', completed: false },
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

  handleTodoDelete = id => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });

  handleCompletedStatus = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <Stats todos={this.state.todos} />
        <TodoList
          todos={this.state.todos}
          handleTodoDelete={this.handleTodoDelete}
          handleTodoCompleting={this.handleTodoCompleting}
          handleCompletedStatus={this.handleCompletedStatus}
        />
        <TodoCreator todos={this.state.todos} handleFormSubmit={this.handleFormSubmit} />
      </>
    );
  }
}

export default App;
