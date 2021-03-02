import React, { Component, useState, useEffect } from 'react';

import 'reset-css';
import './App.scss';

import Stats from './components/Stats/Stats';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';
import TodoCreator from './components/TodoCreator/TodoCreator';
import Backdrop from './components/Backdrop/Backdrop';
import TodoEditor from './components/TodoEditor/TodoEditor';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Это важная Todo', type: 'important', completed: false },
      { id: 'id-2', text: 'Важные Todo выделены красным цветом', type: 'important', completed: false },
      { id: 'id-3', text: 'А это стандартная Todo', type: 'standart', completed: false },
      {
        id: 'id-4',
        text:
          'Что-бы добавить свою Todo необходимо в графе ниже ввести текст и нажать на кнопку Добавить, после чего новая Todo появится первой в списке',
        type: 'standart',
        completed: false,
      },
      {
        id: 'id-5',
        text:
          'Todo можно двигать выше и ниже при помощи стрелочек, что позволяет пользователю хранить Todo как ему больше нравится (например важные поднять повыше, а выполненные отправить вниз)',
        type: 'standart',
        completed: false,
      },
      {
        id: 'id-6',
        text: 'Карандашик позже будет давать возможность редактировать Todo',
        type: 'standart',
        completed: false,
      },
      {
        id: 'id-7',
        text: 'Крестик полностью удаляет Todo из списка',
        type: 'standart',
        completed: false,
      },
      {
        id: 'id-8',
        text: 'А вот так вот выглядит выполненная Todo',
        type: 'standart',
        completed: true,
      },
      {
        id: 'id-9',
        text: 'Чем больше выполненных Todo тем лучше ✅',
        type: 'standart',
        completed: true,
      },
      {
        id: 'id-10',
        text: 'Теперь можно удалять все эти Todo и добавлять свои 😊',
        type: 'standart',
        completed: true,
      },
    ],
    todoToUpdateText: '',
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

  handleTodoEdit = (text, id) => this.setState({ todoToUpdateText: text, todoToUpdateId: id, isTodoEditing: true });

  handleTodoTextEdit = text => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === this.state.todoToUpdateId ? { ...todo, text } : todo)),
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
    const importantTodos = this.state.todos.filter(todo => todo.type === 'important' && todo.completed === false);
    const standartTodos = this.state.todos.filter(todo => todo.type === 'standart' && todo.completed === false);
    const completedTodos = this.state.todos.filter(todo => todo.completed === true);
    this.setState({ todos: [...importantTodos, ...standartTodos, ...completedTodos] });
  };

  render() {
    return (
      <>
        <Stats todos={this.state.todos} filterTodos={this.filterTodos} />
        <TodoList>
          <Todo
            todos={this.state.todos}
            upTodo={this.upTodo}
            downTodo={this.downTodo}
            handleTodoEdit={this.handleTodoEdit}
            handleTodoDelete={this.handleTodoDelete}
            isTodoDeleting={this.state.isTodoDeleting}
            onTodoClick={this.onTodoClick}
          />
        </TodoList>
        {!this.state.isTodoEditing && <TodoCreator todos={this.state.todos} handleFormSubmit={this.handleFormSubmit} />}
        {this.state.isTodoEditing && <Backdrop closeEditingForm={this.closeEditingForm} />}
        {this.state.isTodoEditing && (
          <TodoEditor
            todoText={this.state.todoToUpdateText}
            handleTodoTextEdit={this.handleTodoTextEdit}
            closeEditingForm={this.closeEditingForm}
          />
        )}
      </>
    );
  }
}

export default App;
