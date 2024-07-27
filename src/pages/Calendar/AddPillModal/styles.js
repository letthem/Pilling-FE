import styled from "styled-components";

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
  max-width: 29rem;
  min-width: 20rem;
  height: 416px;
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  width: 100%;
`;

export const SearchBox = styled.div`
  height: 52px;
  margin: 1.5rem;
  background-color: #f7f6f9;
  border: 1px solid #fff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;

  input {
    flex-grow: 1;
    padding: 1rem 12px 1rem 20px;
    color: #1b1a1f;
    font-family: "SUIT-SemiBold";
    font-size: 14px;
    line-height: 120%;
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: #adadad;
      font-family: "SUIT-Regular";
      font-size: 14px;
      line-height: 120%;
    }
  }
  img {
    margin-right: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; /* 결과 리스트가 남은 공간을 차지하도록 설정 */
  overflow-y: auto; /* 내용이 많을 경우 스크롤 가능하게 설정 */
`;

export const ResultItem = styled.li`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;
