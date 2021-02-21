import React from 'react';

import './Modal.scss';

const Modal = ({ toggleModal }) => {
  return (
    <div className="backdrop" onClick={toggleModal}>
      <div className="modal"></div>
    </div>
  );
};

export default Modal;
