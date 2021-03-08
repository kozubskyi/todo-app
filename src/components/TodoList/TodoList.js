import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TodoList.scss';

const TodoList = ({ todos, handleTodoClick, upTodo, downTodo, handleEditBtnClick, handleDeleteBtnClick }) => {
  return (
    <TransitionGroup component="ul" className="todo__list">
      {todos.map((todo, index) => {
        return (
          <CSSTransition key={todo.id} timeout={500} classNames="todo" unmountOnExit>
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
              <span className="todo-number">{index + 1}</span>
              <div className="move-todo-block">
                <button
                  type="button"
                  className="move-todo up-todo"
                  onClick={() => upTodo(todos.indexOf(todo))}
                ></button>
                <button
                  type="button"
                  className="move-todo down-todo"
                  onClick={() => downTodo(todos.indexOf(todo))}
                ></button>
              </div>
              <button type="button" className="edit-todo" onClick={() => handleEditBtnClick(todo)}></button>
              <button type="button" className="delete-todo" onClick={() => handleDeleteBtnClick(todo)}></button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default TodoList;
