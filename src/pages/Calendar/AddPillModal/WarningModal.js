import React from "react";
import {
  ModalBackground,
  WarningModalContainer,
  WarningMessage,
} from "./styles";

const WarningModal = ({ message, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <WarningModalContainer>
        <WarningMessage>{message}</WarningMessage>
      </WarningModalContainer>
    </ModalBackground>
  );
};

export default WarningModal;
