import { CSSTransition } from 'react-transition-group';
import './Backdrop.scss';

const Backdrop = ({ closeEditingForm, isTodoEditing }) => {
  const body = document.querySelector('body');

  return (
    <CSSTransition in={isTodoEditing} timeout={500} classNames="backdrop" unmountOnExit>
      <div className="backdrop" style={{ height: body.scrollHeight }} onClick={closeEditingForm}></div>
    </CSSTransition>
  );
};

export default Backdrop;
