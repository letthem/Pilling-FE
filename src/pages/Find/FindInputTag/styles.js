import styled from "styled-components";

export const FileInputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-right: 24px;

    .search{
        position: absolute;
        top: 18px;
        left: 20px;

    }

    .delete{
        position: absolute;
        top: 20px;
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
  height: 52px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: #F7F6F9;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #1B1A1F;
  padding-left: 52px;
  box-shadow:
    inset 0 4.2px 5px -6px #adadad,
    inset -5px 0 5px -8px #adadad,
    inset 5px 0 5px -8px #adadad;

    &:focus{
        outline: none;
    }

    ::placeholder{
      color: #ADADAD;
    }

`