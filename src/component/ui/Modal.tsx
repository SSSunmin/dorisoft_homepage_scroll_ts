import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from './Modal.module.css';
import Card from './Card';

const BackDrop = () => {
  return <div className={styled.BackDrop} />;
};

interface MadalState {
  OffPopup: () => void;
  children: ReactNode;
}

const ModalOverlay: React.FC<MadalState> = (props) => {
  return (
    <div className={styled.ModalBackground} onClick={props.OffPopup}>
      <div className={styled.Modal}>{props.children}</div>
    </div>
  );
};

const Modal: React.FC<MadalState> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay OffPopup={props.OffPopup}>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};
export default Modal;
