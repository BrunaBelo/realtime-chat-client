import React, { ReactNode, useState } from "react";
import { Container } from "./style";

type Props = {
  children: ReactNode,
  show: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({children, show, setShowModal} : Props) {

  return(
    show ?
    <Container>
      <div className="up-bar">
        <button id='close-modal-btt' onClick={() => setShowModal(false)}>X</button>
      </div>
      <div className="children-content">
        { children }
      </div>
    </Container>
    :
    <></>
  )
};

export default Modal;
