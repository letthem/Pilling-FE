import React from "react";
import {
  ModalBackground,
  ModalContainer,
  ButtonContainer,
  Button,
} from "./styles";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <p>{message}</p>
        <ButtonContainer>
          <Button onClick={onCancel}>취소</Button>
          <Button onClick={onConfirm}>삭제</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ConfirmModal;
