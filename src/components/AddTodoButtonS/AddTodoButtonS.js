import React from 'react';

import './AddTodoButtonS.scss';

const AddTodoButtonS = ({ toggleModal }) => {
  return (
    <button type="button" className="add-todo-btn-small" onClick={toggleModal}>
      +
    </button>
  );
};

export default AddTodoButtonS;
