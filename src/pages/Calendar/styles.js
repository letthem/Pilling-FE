import styled from "styled-components";
import checkboxNo from "./../../assets/Calendar/checkbox-no.svg";
import checkboxYes from "./../../assets/Calendar/checkbox-yes.svg";

export const CalendarWrapper = styled.div`
  margin: 0 1.5rem;
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  margin-top: 12px;
  border-radius: 1.875rem;
  background-color: #f7f6f9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlusBtn = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.125rem dashed #c4f261;
  margin-top: 30px;
  cursor: pointer;
`;

export const Add = styled.img`
  width: 1.875rem;
  margin: 0;
`;

export const Ment = styled.p`
  margin-top: 14px;
  color: black;
  font-family: "SUIT-Regular";
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 6.25rem;
`;

// ItemList

export const ItemList = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 0.25rem;
`;

export const Item = styled.li`
  position: relative;
  margin: 0 0.75rem;
  width: calc(100% - 1.5rem);
  height: 5.25rem;
  display: flex;
  align-items: center;
  background: white;
  margin-bottom: 0.75rem;
  border-radius: 1.5rem;
`;

// checkBox

export const CheckboxContainer = styled.div`
  position: absolute;
  top: 1.8125rem;
  left: 0.875rem;
  background-color: white;
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.0625rem;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.625rem;
  height: 1.625rem;
  background: url(${(props) => (props.checked ? checkboxYes : checkboxNo)});
  transition: all 150ms;
`;

// PillName

export const PillName = styled.p`
  position: absolute;
  top: 1.1875rem;
  left: 3.375rem;
  color: #1b1a1f;
  font-family: "SUIT-SemiBold";
  font-size: 0.875rem;
  line-height: 1;
`;

// Tag

export const TagListBox = styled.div`
  display: flex;
  position: absolute;
  top: 2.8125rem;
  left: 3.25rem;
  overflow-x: auto;
  white-space: nowrap;
  max-width: calc(100% - 4.0625rem);
  border-radius: 0.625rem;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
`;

export const TagItemBox = styled.div`
  width: auto;
  height: 1.5625rem;
  padding: 0 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: #c4f261;
  border-radius: 1.25rem;

  span {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1b1a1f;
    font-family: SUIT;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    padding: 0.25rem 0 0.125rem 0;
    line-height: 1.2;
  }
  & + & {
    margin-left: 0.375rem;
  }
`;

// DeleteButton

export const DeleteButton = styled.div`
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
  top: 0.875rem;
  right: 0.875rem;
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
  z-index: 1000;
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
