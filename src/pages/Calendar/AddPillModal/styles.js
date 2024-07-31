import styled from "styled-components";

// AddPillModal

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 6.5625rem;
  background: white;
  max-width: 29rem;
  min-width: 20rem;
  width: 21.375rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
`;

export const SearchBox = styled.div`
  height: 3.25rem;
  margin: 1.5rem 1.5rem 0.25rem 1.5rem;
  background-color: #f7f6f9;
  border: 0.063rem solid #fff;
  border-radius: 1.875rem;
  display: flex;
  justify-content: space-between;

  input {
    flex-grow: 1;
    padding: 1rem 1.25rem;
    color: #1b1a1f;
    font-family: "SUIT-SemiBold";
    font-size: 0.875rem;
    line-height: 120%;
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: #adadad;
      font-family: "SUIT-Regular";
      font-size: 0.875rem;
      line-height: 120%;
    }
  }

  img {
    margin-right: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  margin: 0 2.25rem;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 0.25rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: #f7f6f9;
    border-radius: 1.25rem;
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background: #c4f261;
  }
`;

export const ResultItem = styled.li`
  padding: 1.25rem 0;
  border-bottom: 0.063rem solid #e5e4e6;
  font-family: "SUIT-Medium";
  font-size: 0.875rem;
  line-height: 1.2;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

// TagModal

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 2.25rem;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 0.25rem;
`;

export const TagItem = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ selected }) => (selected ? "blue" : "#ddd")};
  border-radius: 16px;
  background-color: ${({ selected }) => (selected ? "lightblue" : "white")};
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "lightblue" : "#f0f0f0")};
  }
`;

export const SaveButton = styled.button`
  display: block;
  width: calc(100% - 3rem);
  color: white;
  border: none;
  font-size: 1rem;
  margin: 1rem 1.5rem 1.5rem;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 1rem 0;
  font-size: 1.25rem;
`;

export const BackButton = styled.button`
  display: block;
  width: calc(100% - 3rem);
  padding: 0.75rem;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 1.875rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 1rem 1.5rem 0;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    outline: none;

    &:focus-within {
      border-color: #ff0; /* 형광 노란색 */
      box-shadow: 0 0 0 2px #ff0; /* 형광 노란색 */
    }
  }

  &::placeholder {
    color: #adadad;
    font-family: "SUIT-Regular";
    font-size: 0.875rem;
    line-height: 120%;
  }
`;

export const AddTagButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;

// WarningModal

export const WarningModalContainer = styled.div`
  background: white;
  max-width: 20rem;
  min-width: 15rem;
  width: calc(100% - 3rem);
  padding: 1.5rem;
  border-radius: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const CloseButton = styled.button`
  background-color: #c4f261;
  color: white;
  border: none;
  border-radius: 1.875rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

// DeleteConfirmModal

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background: #ccc;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  background: red;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Message = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: black;
`;
