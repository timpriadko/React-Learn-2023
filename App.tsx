import * as React from 'react';
import { useState, useRef } from 'react';
import TextComponent from './components/TextComponent/TextComponent';
import TextComponentPortal from './components/TextComponentPortal/TextComponentPortal';
import Popup from './components/Popup/Popup';
import './style.css';

export default function App() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const innerModalContainer = useRef(null);

  function openModal() {
    setPopupIsOpen(true);
  }

  function closeModal() {
    setPopupIsOpen(false);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <TextComponent />

      <TextComponentPortal element={innerModalContainer.current}>
        <TextComponent />
      </TextComponentPortal>
      <button onClick={openModal}>Open Modal</button>
      <Popup isOpen={popupIsOpen} closePopupHandler={closeModal}>
        <h3>Modal title</h3>

        <div ref={innerModalContainer}></div>
      </Popup>
    </div>
  );
}
