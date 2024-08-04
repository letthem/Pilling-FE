import styled from "styled-components";

export const ProfileImg = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 0;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const NickNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 1.875rem;
  width: calc(100% - 3rem);
  display: flex;
  justify-content: space-between;
`;

export const NickNameInput = styled.input`
  width: 100%;
  height: 2rem;
  background-color: #f7f6f9;
  border-radius: 1rem;
  border: none;
  box-shadow: inset 0rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
  padding: 1rem 3.125rem 1rem 1.25rem;
  color: #1b1a1f;
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
  line-height: 1.2;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adadad;
    font-family: "SUIT-Regular";
    font-size: 0.875rem;
    line-height: 1.2;
    color: #adadad;
  }
`;

export const EditBtn = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);

  img {
    cursor: pointer;
  }

  span {
    font-family: "SUIT-Regular";
    font-size: 0.875rem;
    line-height: 1.2;
    color: ${({ disabled }) => (disabled ? "#adadad" : "black")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const SettingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0.875rem;
  display: flex;
  justify-content: space-evenly;
`;

export const BottomBox = styled.span`
  color: #adadad;
  font-family: "SUIT-Medium";
  font-size: 0.75rem;
  line-height: 1;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const BottomLine = styled.span`
  color: #adadad;
  font-size: 0.75rem;
  width: 0.0625rem;
`;
