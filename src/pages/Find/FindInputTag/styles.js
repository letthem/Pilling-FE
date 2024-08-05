import styled from "styled-components";

export const FileInputWrapper = styled.div`
  width: calc(100% - 57px);
  position: relative;
  .search {
    position: absolute;
    top: 1.125rem;
    left: 1.25rem;
  }
  .delete {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }
`;

export const FindForm = styled.form`
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 3.25rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid #fff;
  background: #f7f6f9;

  box-shadow:
    inset 0 0.2625rem 0.3125rem -0.375rem #adadad,
    inset -0.3125rem 0 0.3125rem -0.5rem #adadad,
    inset 0.3125rem 0 0.3125rem -0.5rem #adadad;
`;

export const FindInputBox = styled.input`
  width: caclc(100% -3.25rem);
  margin-left: 3.25rem;
  border: none;
  background: #f7f6f9;
  text-align: left;
  font-size: 0.875rem;
  font-family: "SUIT-Regular";

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adadad;
  }
`;
