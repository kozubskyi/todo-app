import { useState, useEffect } from 'react';
import 'reset-css';
import './App.scss';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import LocalStorageInfo from './components/LocalStorageInfo/LocalStorageInfo';
import Backdrop from './components/Backdrop/Backdrop';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoEditor from './components/TodoEditor/TodoEditor';

// const defaultTodos = [
//   {
//     id: 'id-1',
//     text: 'Это очень важная Todo. Очень важные Todo выделены ярко-голубым цветом и двумя знаками восклицания.',
//     type: 'very-important',
//     completed: false,
//   },
//   {
//     id: 'id-2',
//     text: 'Это важная Todo. Важные Todo выделены тускло-голубым цветом и одним знаком восклицания.',
//     type: 'important',
//     completed: false,
//   },
//   {
//     id: 'id-3',
//     text: 'Это стандартная Todo. Стандартные Todo выделены серым цветом.',
//     type: 'standart',
//     completed: false,
//   },
//   {
//     id: 'id-4',
//     text: 'Это выполненная Todo. Выполненные Todo подсвечиваются зеленым цветом и помечены галочкой.',
//     type: 'standart',
//     completed: true,
//   },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState({});
  const [isTodoEditing, setIsTodoEditing] = useState(false);

  // componentDidMount()
  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    localStorageTodos && setTodos(localStorageTodos);
  }, []);

  // componentDidUpdate(prevProps, prevState = todos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // localStorage.clear();
  }, [todos]);

  const sortTodos = allTodos => {
    const veryImportantTodos = allTodos.filter(todo => todo.type === 'very-important' && !todo.completed);
    const importantTodos = allTodos.filter(todo => todo.type === 'important' && !todo.completed);
    const standartTodos = allTodos.filter(todo => todo.type === 'standart' && !todo.completed);
    const completedTodos = allTodos.filter(todo => todo.completed);
    return [...veryImportantTodos, ...importantTodos, ...standartTodos, ...completedTodos];
  };

  const handleTodoCreating = createdTodo => {
    setTodos(sortTodos([createdTodo, ...todos]));
  };

  const handleTodoClick = clickedTodo => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(todo =>
        todo.id === clickedTodo.id ? { ...clickedTodo, completed: !clickedTodo.completed } : todo,
      );
      return sortTodos(newTodos);
    });
  };

  const upTodo = index => {
    if (index !== 0) {
      const newTodos = todos;
      const clickedTodo = newTodos[index];
      newTodos.splice(index, 1);
      newTodos.splice(index - 1, 0, clickedTodo);
      // console.log(newTodos);
      setTodos(sortTodos([...newTodos]));
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  const downTodo = index => {
    if (index !== todos.length - 1) {
      const newTodos = todos;
      const clickedTodo = newTodos[index];
      newTodos.splice(index, 1);
      newTodos.splice(index + 1, 0, clickedTodo);
      // console.log(newTodos);
      setTodos(sortTodos([...newTodos]));
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  const handleEditBtnClick = todoToUpdate => {
    setIsTodoEditing(true);
    setEditingTodo(todoToUpdate);
  };

  const handleTodoEdit = updatedTodo => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
      return sortTodos(newTodos);
    });
    closeEditingForm();
  };

  const closeEditingForm = () => {
    setIsTodoEditing(false);
  };

  const handleDeleteBtnClick = todoToDelete => {
    const newTodos = todos.filter(todo => todo.id !== todoToDelete.id);
    setTodos(sortTodos(newTodos));
  };

  return (
    <>
      <Header todos={todos} />
      <TodoList
        todos={todos}
        handleTodoClick={handleTodoClick}
        upTodo={upTodo}
        downTodo={downTodo}
        handleEditBtnClick={handleEditBtnClick}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
      <LocalStorageInfo />
      <Backdrop isTodoEditing={isTodoEditing} closeEditingForm={closeEditingForm} />
      {!isTodoEditing ? (
        <TodoCreator handleTodoCreating={handleTodoCreating} />
      ) : (
        <TodoEditor editingTodo={editingTodo} handleTodoEdit={handleTodoEdit} />
      )}
    </>
  );
};

export default App;
