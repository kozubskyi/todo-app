import React from 'react';

const TodoList = ({ children }) => {
  return <ul className="todo__list">{children}</ul>;
};

export default TodoList;
