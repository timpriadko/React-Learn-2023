import * as React from 'react';
import { useState, useRef } from 'react';
import TextComponent from './components/TextComponent/TextComponent';
import Modal from 'react-modal';
import './style.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const innerModalContainer = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <TextComponent />
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
      >
        <button onClick={closeModal}>close</button>
        <h3>Modal title</h3>
        <div ref={innerModalContainer}></div>
      </Modal>
    </div>
  );
}
