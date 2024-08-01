import styled from "styled-components";

export const RecordItemWrapper = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 1.25rem;
  background: #f7f6f9;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(115, 123, 152, 0.25);
  margin-bottom: 1.25rem;
`;

export const PillName = styled.p`
  margin: 1.125rem 0 0 1.25rem;
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 0.9375rem;
  line-height: 1;
`;

export const TagList = styled.div`
  margin: 0.625rem 1.125rem 0;
  width: 20.25rem;
  height: 1.5625rem;
  display: flex;
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1.25rem;
  background-color: #c4f261;
  width: 3.3125rem;
  height: 1.5625rem;

  color: #1b1a1f;
  font-family: "SUIT-Regular";
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 1.2;

  & + & {
    margin-left: 0.5rem;
  }
`;
