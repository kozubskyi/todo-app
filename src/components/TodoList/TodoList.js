import React from 'react';

const TodoList = ({ todos, children }) => {
  return <ul className="todo__list">{children}</ul>;
};

export default TodoList;
