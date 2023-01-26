import React from 'react';
import { useStorageListener } from './useStorageListener';
import './index.css';

const ChangeAlert = ({sincronizeTodos}) => {
  const { show, toggleShow } = useStorageListener(sincronizeTodos);
  if (show) {
    return (
      <div className='ChangeAlertContainer'>
        <h3>Hubo cambios, mi capitán.</h3>
        <button onClick={()=>toggleShow(false)}>Volver a cargar la ventana</button>
      </div>
    )
  }
}


export { ChangeAlert }