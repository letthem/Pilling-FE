import styled from "styled-components";

export const CalendarWrapper = styled.div`
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0.5rem;
  border-radius: 1.875rem;
  background-color: #f7f6f9;
  width: 21.375rem;
`;

export const PlusBtn = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.125rem dashed #c4f261;
  margin-top: 2.75rem;
  cursor: pointer;
`;

export const Add = styled.img`
  width: 1.875rem;
  margin: 0;
`;

export const Ment = styled.p`
  margin-top: 1.125rem;
  color: #737b98;
  font-family: "SUIT-Regular";
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

export const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

// ConfirmModal

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Message = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
  &:nth-child(2) {
    background: red;
    &:hover {
      background: darkred;
    }
  }
`;

// CheckBox

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;
