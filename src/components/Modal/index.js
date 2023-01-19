import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Modal({ setOpenModal, children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
      <button 
        className='CloseModal'
        onClick={()=>{setOpenModal(false)}}>
        x
      </button>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };