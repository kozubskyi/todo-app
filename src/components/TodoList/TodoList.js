import './TodoList.scss';

const TodoList = ({ todos, handleTodoClick, upTodo, downTodo, handleEditBtnClick, handleDeleteBtnClick }) => {
  return (
    <ul className="todo__list">
      {todos.map(todo => {
        return (
          <li className={`todo__item ${todo.type}`} key={todo.id}>
            <input type="checkbox" id={todo.id} onChange={() => handleTodoClick(todo)} checked={todo.completed} />
            <label htmlFor={todo.id}>
              {todo.type === 'very-important' ? (
                <span className="emoji very-important" role="img">
                  ‼️ {/*! !*/}
                </span>
              ) : (
                todo.type === 'important' && (
                  <span className="emoji important" role="img">
                    ❗️ {/*!*/}
                  </span>
                )
              )}
              {todo.text}
            </label>
            <div className="move-todo-block">
              <button type="button" className="move-todo up-todo" onClick={() => upTodo(todos.indexOf(todo))}></button>
              <button
                type="button"
                className="move-todo down-todo"
                onClick={() => downTodo(todos.indexOf(todo))}
              ></button>
            </div>
            <button type="button" className="edit-todo" onClick={() => handleEditBtnClick(todo)}></button>
            <button type="button" className="delete-todo" onClick={() => handleDeleteBtnClick(todo)}></button>
          </li>
        );
      })}
    </ul>
  );
};

// const TodoList = ({ children, todos }) => {
//   return <ul className="todo__list">{children}</ul>;
// };

export default TodoList;
