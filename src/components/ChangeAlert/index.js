import React from 'react'
import { withStorageListener } from './withStorageListener'

const ChangeAlert = ({show, toggleShow}) => {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={()=>toggleShow(false)}>Volver a cargar</button>
      </div>
    )
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}