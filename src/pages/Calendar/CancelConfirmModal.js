import React from "react";
import { ModalBackground } from "./styles";
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  DeleteMessage,
  DeleteModalContainer,
} from "./AddPillModal/styles";

const CancelConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <DeleteModalContainer>
        <DeleteMessage>검색을 취소하시겠습니까?</DeleteMessage>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>아니오</CancelButton>
          <ConfirmButton onClick={onConfirm}>예</ConfirmButton>
        </ButtonContainer>
      </DeleteModalContainer>
    </ModalBackground>
  );
};

export default CancelConfirmModal;
