import styled from "styled-components";

export const CalenderWrapper = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalenderContainer = styled.div`
  margin-top: 1.25rem;
  padding: 0.5rem;
  border-radius: 1.875rem;
  background-color: #f7f6f9;
  width: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PlusBtn = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.125rem dashed #d4f120;
  margin-top: 2.75rem;
  cursor: pointer;
`;

export const Add = styled.img`
  width: 1.875rem;
  margin: 0;
`;

export const Ment = styled.p`
  margin-top: 1.125rem;
  color: #737b98;
  font-family: "SUIT-Regular";
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
