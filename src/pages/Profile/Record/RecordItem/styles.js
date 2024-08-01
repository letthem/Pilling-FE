import styled from "styled-components";

export const RecordItemWrapper = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 20px;
  background: #f7f6f9;
  box-shadow: 0px 0px 4px 0px rgba(115, 123, 152, 0.25);
  margin-bottom: 20px;
`;

export const PillName = styled.p`
  margin: 18px 0 0 20px;
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 15px;
  line-height: 1;
`;

export const TagList = styled.div`
  margin: 10px 18px 0;
  width: 324px;
  height: 25px;
  display: flex;
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  background-color: #c4f261;
  width: 53px;
  height: 25px;

  color: #1b1a1f;
  font-family: "SUIT-Regular";
  font-size: 11px;
  font-weight: 400;
  line-height: 1.2;

  & + & {
    margin-left: 8px;
  }
`;
