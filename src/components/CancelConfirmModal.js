import React from "react";
import styled from "styled-components";

const CancelConfirmModal = ({ onConfirm, onCancel, message }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <Message>{message}</Message>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>아니오</CancelButton>
          <ConfirmButton onClick={onConfirm}>예</ConfirmButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CancelConfirmModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 18.875rem;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  width: 21.375rem;
  height: 9.5rem;
  align-items: center;
`;

const Message = styled.div`
  margin-top: 1.875rem;
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 1rem;
  line-height: 1;
  text-align: left;
  width: 17.625rem;
  height: 0.75rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 1.5rem;
`;

const CancelButton = styled.div`
  width: 8.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.0375rem solid #d9d9d9;
  background: white;
  border-radius: 1.25rem;
  color: #1b1a1f;
  cursor: pointer;
`;

const ConfirmButton = styled.div`
  width: 8.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1a1f;
  border-radius: 1.25rem;
  color: white;
  cursor: pointer;
`;
