import React, { useState } from 'react'

const useStorageListener = (sincronizeTodos) => {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener("storage", (change)=>{
      if (change.key === "TODOS_V1") {
        console.log("We got changes");
        setStorageChange(true)
      }
    });
    const toggleShow = ()=>{
      sincronizeTodos();
      setStorageChange(false)
    }
    return {
      show: storageChange,
      toggleShow,
    };
  }

export { useStorageListener }