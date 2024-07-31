import React from "react";
import { ModalBackground, ModalContainer, Message, ButtonContainer, CancelButton, ConfirmButton } from "./styles";

const DeleteConfirmModal = ({ message, onCancel, onConfirm }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        <Message>{message}</Message>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>삭제</ConfirmButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default DeleteConfirmModal;
