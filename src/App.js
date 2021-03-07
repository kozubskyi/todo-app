import { useState, useEffect } from 'react';
import 'reset-css';
import './App.scss';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';
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
  const [todoToUpdateText, setTodoToUpdateText] = useState('');
  const [todoToUpdateType, setTodoToUpdateType] = useState('');
  const [todoToUpdateId, setTodoToUpdateId] = useState('');
  const [isTodoEditing, setIsTodoEditing] = useState(false);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    localStorageTodos && setTodos(localStorageTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // localStorage.clear();
  }, [todos]);

  const handleTodoCreating = todo => {
    setTodos(sortTodos([todo, ...todos]));
  };

  const handleTodoClick = id => {
    setTodos(prevTodos =>
      sortTodos(prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))),
    );
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

  const handleEditBtnClick = (text, type, id) => {
    setTodoToUpdateText(text);
    setTodoToUpdateType(type);
    setTodoToUpdateId(id);
    setIsTodoEditing(true);
  };

  const handleTodoEdit = (text, type) => {
    setTodos(prevTodos => sortTodos(prevTodos.map(todo => (todo.id === todoToUpdateId ? { ...todo, text, type } : todo))));
  };

  const closeEditingForm = () => {
    setIsTodoEditing(false);
  };

  const handleDeleteBtnClick = id => {
    setTodos(sortTodos(todos.filter(todo => todo.id !== id)));
  };

  const sortTodos = todos => {
    const veryImportantTodos = todos.filter(todo => todo.type === 'very-important' && !todo.completed);
    const importantTodos = todos.filter(todo => todo.type === 'important' && !todo.completed);
    const standartTodos = todos.filter(todo => todo.type === 'standart' && !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);
    return [...veryImportantTodos, ...importantTodos, ...standartTodos, ...completedTodos];
  };

  return (
    <>
      <Header todos={todos} /* sortTodos={sortTodos} */ />
      <TodoList todos={todos}>
        <Todo
          todos={todos}
          handleTodoClick={handleTodoClick}
          upTodo={upTodo}
          downTodo={downTodo}
          handleEditBtnClick={handleEditBtnClick}
          handleDeleteBtnClick={handleDeleteBtnClick}
        />
      </TodoList>
      {!isTodoEditing ? (
        <TodoCreator handleTodoCreating={handleTodoCreating} />
      ) : (
        <TodoEditor
          todoText={todoToUpdateText}
          todoType={todoToUpdateType}
          handleTodoEdit={handleTodoEdit}
          closeEditingForm={closeEditingForm}
        />
      )}
    </>
  );
};

export default App;
