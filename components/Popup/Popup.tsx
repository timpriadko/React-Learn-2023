import React from 'react';
import './style.css';

const Popup = (props) => {
  const { isOpen, closePopupHandler } = props;

  const isOpenStyle = isOpen ? { display: 'block' } : { display: 'none' };

  return (
    <div className="popup-wrapper" style={isOpenStyle}>
      <div className="popup-header">
        <button onClick={closePopupHandler}>close</button>
      </div>
      <div className="popup-body">{props.children}</div>
    </div>
  );
};

export default Popup;
