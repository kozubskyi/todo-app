import React from 'react';

import './Backdrop.scss';

const Backdrop = ({ closeEditingForm }) => {
  const body = document.querySelector('body');

  return <div className="backdrop" style={{ height: body.scrollHeight }} onClick={closeEditingForm}></div>;
};

export default Backdrop;
