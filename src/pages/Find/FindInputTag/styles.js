import styled from "styled-components";

export const FileInputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-right: 1.5rem;

    .search{
        position: absolute;
        top: 1.125rem;
        left: 1.25rem;

    }

    .delete{
        position: absolute;
        top: 1.25rem;
        right: 0%;
    }
`

export const FindForm = styled.form`

`

export const FindInputBox = styled.input`
  z-index: 1;
  display: flex;
  align-items: center;
  width: 90%;
  height: 3.25rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid #fff;
  background: #F7F6F9;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #1B1A1F;
  padding-left: 3.25rem;
  box-shadow:
    inset 0 0.2625rem 0.3125rem -0.375rem #adadad,
    inset -0.3125rem 0 0.3125rem -0.5rem #adadad,
    inset 0.3125rem 0 0.3125rem -0.5rem #adadad;

    &:focus{
        outline: none;
    }

    ::placeholder{
      color: #ADADAD;
    }

`