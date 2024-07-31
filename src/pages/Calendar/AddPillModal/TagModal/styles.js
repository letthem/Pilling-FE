import styled from "styled-components";

// TagModalWrapper

export const TagModalContainer = styled.div`
  position: absolute;
  top: 65px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
`;

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
  margin-left: 28px;
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

// UserAddTagModal

export const UserAddTagModalContainer = styled.div`
  position: absolute;
  top: 175px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
`;

export const UserAddTagModalWrapper = styled.div`
  width: 342px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAddTagTopBar = styled.div`
  margin: 39px 28px 0;
  width: 100%;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserAddTagTitle = styled.h2`
  text-align: center;
  line-height: 1.2;
  font-size: 1rem;
  font-family: "SUIT-SemiBold";
`;

export const UserAddTagInputBox = styled.input`
  margin-top: 38px;
  width: 246px;
  height: 72px;
  text-align: left;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid #adadad;
  outline: none;

  font-family: "SUIT-Regular";
  font-size: 14px;
  line-height: 1.2;
  color: #1b1a1f;

  &:focus-within {
    border-color: #c4f261;
  }

  &::placeholder {
    color: #adadad;
    font-family: "SUIT-Regular";
    font-size: 0.875rem;
    line-height: 1.2;
    color: #adadad;
  }
`;

export const AddTagButton = styled.div`
  margin-top: 36px;
  width: 73px;
  height: 48px;
  display: flex;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${({ disabled }) => (disabled ? "#F7F6F9" : "#1B1A1F")};
  color: ${({ disabled }) => (disabled ? "#CBCACD" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
