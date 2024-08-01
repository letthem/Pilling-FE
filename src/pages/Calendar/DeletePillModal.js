import React from "react";
import { ModalBackground } from "./styles";
import {
  CancelButton,
  ConfirmButton,
  DeleteMessage,
  ButtonContainer,
  DeleteModalContainer,
} from "./AddPillModal/styles";

const DeletePillModal = ({ onConfirm, onCancel }) => {
  return (
    <ModalBackground>
      <DeleteModalContainer>
        <DeleteMessage>해당 기록을 정말 삭제하시겠습니까?</DeleteMessage>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>삭제</ConfirmButton>
        </ButtonContainer>
      </DeleteModalContainer>
    </ModalBackground>
  );
};

export default DeletePillModal;
