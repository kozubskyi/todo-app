import React from 'react';

import './AddTodoButton.scss';

const AddTodoButton = ({ toggleModal }) => {
  return (
    <button type="button" className="add-todo-btn" onClick={toggleModal}>
      +
    </button>
  );
};

export default AddTodoButton;
