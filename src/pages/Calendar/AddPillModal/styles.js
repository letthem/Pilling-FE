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
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 6.5625rem;
  background: white;
  max-width: 29rem;
  min-width: 20rem;
  width: calc(100% - 3rem);
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
    margin-right: 0.875rem;
    width: 0.875rem;
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

  &::-webkit-scrollbar-thumb {
    border-radius: 0.875rem;
    background: #c4f261;
  }
`;

export const ResultItem = styled.li`
  padding: 0.875rem 0;
  border-bottom: 0.063rem solid #e5e4e6;
  font-family: "SUID-Medium";
  font-size: 0.875rem;
  line-height: 1.2;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
