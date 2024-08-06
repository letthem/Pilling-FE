import styled from "styled-components";

// TagModalWrapper

export const TagModalContainer = styled.div`
  position: absolute;
  top: 4.0625rem;
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
  width: 1.25rem;
  height: 1.25rem;
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
  margin-top: 1.875rem;
  color: #adadad;
  font-family: "SUIT-Regular";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.2;
`;

// Tags

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin: 0.75rem 1.875rem 0 2.25rem;
  flex-grow: 1;
`;

export const TagItem = styled.div`
  padding: 0 0.97rem;
  height: 2.375rem;
  border: 0.0625rem solid
    ${({ selected }) => (selected ? "#C4F261" : "#ADADAD")};
  border-radius: 1.25rem;
  background-color: ${({ selected }) => (selected ? "#C4F261" : "white")};
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  span {
    color: ${({ selected }) => (selected ? "black" : "#adadad")};
    font-family: "SUIT-Regular";
    font-size: 0.875rem;
    line-height: 1;
  }
`;

export const TagXBtn = styled.div`
  margin-left: 0.5rem;
`;

export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 7.25rem;
  height: 3rem;
  position: absolute;
  bottom: 1.75rem;
  left: 7.0625rem;
  background: ${({ disabled }) => (disabled ? "#F7F6F9;" : "#1B1A1F")};
  border-radius: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  span {
    color: ${({ disabled }) => (disabled ? "#ccc" : "white")};
    font-family: "SUIT-Medium";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1;
  }
`;

// UserAddTagModal

export const UserAddTagModalContainer = styled.div`
  position: absolute;
  top: 10.9375rem;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
`;

export const UserAddTagModalWrapper = styled.div`
  width: 21.375rem;
  height: 17.5rem;
  display: flex;
  flex-direction: column;
`;

export const UserAddTagTopBar = styled.div`
  margin: 2.4375rem 1.75rem 0;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserAddContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAddTagTitle = styled.h2`
  text-align: center;
  line-height: 1.2;
  font-size: 1rem;
  font-family: "SUIT-SemiBold";
`;

export const UserAddTagInputBox = styled.input`
  margin-top: 2.375rem;
  width: 15.375rem;
  height: 4.5rem;
  text-align: left;
  padding: 0 1rem;
  border-radius: 1rem;
  border: 0.0625rem solid #adadad;
  outline: none;

  font-family: "SUIT-Regular";
  font-size: 0.875rem;
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
  margin-top: 2.25rem;
  width: 4.5625rem;
  height: 3rem;
  display: flex;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  background: ${({ disabled }) => (disabled ? "#F7F6F9" : "#1B1A1F")};
  color: ${({ disabled }) => (disabled ? "#CBCACD" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
