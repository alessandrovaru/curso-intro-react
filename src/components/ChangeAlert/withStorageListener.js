import React, { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props){
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener("storage", (change)=>{
      if (change.key === "TODOS_V1") {
        console.log("We got changes");
        setStorageChange(true)
      }
    });
    const toggleShow = ()=>{
      props.sincronizeTodos();
      setStorageChange(false)
    }
    return (
    <WrappedComponent 
      show={storageChange} 
      toggleShow={toggleShow}
    />);
  }
}

export { withStorageListener }