import React from "react";
import { ModalBackground, ModalContainer, Message, Button, ButtonContainer } from "./styles";

const CancelConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <Message>검색을 취소하시겠습니까?</Message>
        <ButtonContainer>
          <Button onClick={onCancel}>아니오</Button>
          <Button onClick={onConfirm}>예</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CancelConfirmModal;
