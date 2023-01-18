import ReactDOM from 'react-dom';

const Modal = ({children}) => {
  const modal = ReactDOM.createPortal(children, document.getElementById('modal'));
  return modal
}

export { Modal }