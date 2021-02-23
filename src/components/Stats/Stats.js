import React from 'react';

import './Stats.scss';

const Stats = ({ todos }) => {
  return (
    <>
      <div className="stats">
        <p className="stats__all-todos">Всего: {todos.length}</p>
        <p className="stats__important-todos">
          Важных: {todos.filter(todo => todo.type === 'important' && !todo.completed).length}
        </p>
        <p className="stats__done-todos">Выполненных: {todos.filter(todo => todo.completed).length}</p>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Stats;
