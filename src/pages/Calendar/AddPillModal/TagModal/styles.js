import styled from "styled-components";

// TagModalWrapper

export const TagModalWrapper = styled.div`
  width: 21.375rem;
  height: 32.5rem;
  position: relative;
`;

// TopBar

export const TopBar = styled.div`
  margin: 2.25rem 1.5rem 0;
  width: auto;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  line-height: 1.2;
  font-size: 1.0625rem;
  font-family: "SUIT-SemiBold";
`;

export const ReasonText = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: #adadad;
  font-family: "SUIT-Regular";
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
`;

// Tags

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 12px 30px 0;
  flex-grow: 1;
`;

export const TagItem = styled.div`
  padding: 0 12px;
  height: 38px;
  border: 0.5px solid ${({ selected }) => (selected ? "#C4F261" : "#ADADAD")};
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? "#C4F261" : "white")};
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#C4F261" : "#f0f0f0")};
  }
  display: flex;
  align-items: center;

  span {
    color: ${({ selected }) => (selected ? "black" : "#adadad")};
    font-family: "SUIT-Regular";
    font-size: 14px;
    line-height: 1;
  }
`;

export const TagXBtn = styled.div`
  margin-left: 8px;
`;

export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 116px;
  height: 48px;
  position: absolute;
  bottom: 28px;
  left: 113px;
  background: ${({ disabled }) => (disabled ? "#F7F6F9;" : "#1B1A1F")};
  border-radius: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  span {
    color: ${({ disabled }) => (disabled ? "#ccc" : "white")};
    font-family: "SUIT-Medium";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1;
  }
`;

// -----------------

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
