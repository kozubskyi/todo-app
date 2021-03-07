import React, { Component } from 'react';

import 'reset-css';
import './App.scss';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';
import TodoCreator from './components/TodoCreator/TodoCreator';
import Backdrop from './components/Backdrop/Backdrop';
import TodoEditor from './components/TodoEditor/TodoEditor';

class App extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        text: 'Это очень важная Todo. Очень важные Todo выделены ярко-голубым цветом и двумя знаками восклицания.',
        type: 'very-important',
        completed: false,
      },
      {
        id: 'id-2',
        text: 'Это важная Todo. Важные Todo выделены тускло-голубым цветом и одним знаком восклицания.',
        type: 'important',
        completed: false,
      },
      {
        id: 'id-3',
        text: 'Это стандартная Todo. Стандартные Todo выделены серым цветом.',
        type: 'standart',
        completed: false,
      },
      {
        id: 'id-4',
        text: 'Это выполненная Todo. Выполненные Todo подсвечиваются зеленым цветом и помечены галочкой.',
        type: 'standart',
        completed: true,
      },
    ],
    todoToUpdateText: '',
    todoToUpdateType: '',
    todoToUpdateId: '',
    isTodoEditing: false,
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

  upTodo = index => {
    if (index !== 0) {
      const newTodos = this.state.todos;
      const clickedTodo = newTodos[index];
      newTodos.splice(index, 1);
      newTodos.splice(index - 1, 0, clickedTodo);
      console.log(newTodos);

      this.setState({ todos: newTodos });
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  downTodo = index => {
    if (index !== this.state.todos.length - 1) {
      const newTodos = this.state.todos;
      const clickedTodo = newTodos[index];
      newTodos.splice(index, 1);
      newTodos.splice(index + 1, 0, clickedTodo);
      console.log(newTodos);

      this.setState({ todos: newTodos });
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  handleTodoEdit = (text, type, id) =>
    this.setState({ todoToUpdateText: text, todoToUpdateType: type, todoToUpdateId: id, isTodoEditing: true });

  handleTodoTextEdit = (text, type) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === this.state.todoToUpdateId ? { ...todo, text, type } : todo)),
    }));
  };

  closeEditingForm = () => this.setState({ isTodoEditing: false });

  handleTodoDelete = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  onTodoClick = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    }));
  };

  filterTodos = () => {
    const veryImportantTodos = this.state.todos.filter(
      todo => todo.type === 'very-important' && todo.completed === false,
    );
    const importantTodos = this.state.todos.filter(todo => todo.type === 'important' && todo.completed === false);
    const standartTodos = this.state.todos.filter(todo => todo.type === 'standart' && todo.completed === false);
    const completedTodos = this.state.todos.filter(todo => todo.completed === true);
    this.setState({ todos: [...veryImportantTodos, ...importantTodos, ...standartTodos, ...completedTodos] });
  };

  render() {
    return (
      <>
        <Header todos={this.state.todos} filterTodos={this.filterTodos} />
        <TodoList todos={this.state.todos}>
          <Todo
            todos={this.state.todos}
            upTodo={this.upTodo}
            downTodo={this.downTodo}
            handleTodoEdit={this.handleTodoEdit}
            handleTodoDelete={this.handleTodoDelete}
            onTodoClick={this.onTodoClick}
          />
        </TodoList>
        {!this.state.isTodoEditing ? (
          <TodoCreator todos={this.state.todos} handleFormSubmit={this.handleFormSubmit} />
        ) : (
          <TodoEditor
            todoText={this.state.todoToUpdateText}
            todoType={this.state.todoToUpdateType}
            handleTodoTextEdit={this.handleTodoTextEdit}
            closeEditingForm={this.closeEditingForm}
          />
        )}
      </>
    );
  }
}

export default App;
