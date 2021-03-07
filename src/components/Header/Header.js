import React from 'react';

import './Header.scss';

const Header = ({ todos }) => {
  return (
    <header>
      <div className="stats">
        <button className="stats__btn stats__all-todos">{todos.length}</button>
        <button className="stats__btn stats__undone-todos">{todos.filter(todo => !todo.completed).length}</button>
        {/* <button className="stats__btn stats__important-todos">
          {todos.filter(todo => todo.type === 'important' && !todo.completed).length}
        </button> */}
        <button className="stats__btn stats__done-todos">{todos.filter(todo => todo.completed).length}</button>
      </div>
    </header>
  );
};

export default Header;
