import React from "react";
import { ModalBackground, ModalContainer, Message } from "./styles";

const WarningModal = ({ message, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        <Message>{message}</Message>
      </ModalContainer>
    </ModalBackground>
  );
};

export default WarningModal;
