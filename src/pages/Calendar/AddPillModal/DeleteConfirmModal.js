import React from "react";
import { ModalBackground, ButtonContainer, CancelButton, ConfirmButton, DeleteModalContainer, DeleteMessage } from "./styles";

const DeleteConfirmModal = ({ message, onCancel, onConfirm }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <DeleteModalContainer>
        <DeleteMessage>{message}</DeleteMessage>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>삭제</ConfirmButton>
        </ButtonContainer>
      </DeleteModalContainer>
    </ModalBackground>
  );
};

export default DeleteConfirmModal;
