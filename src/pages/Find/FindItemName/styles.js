import styled from "styled-components";

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9.375rem, 1fr));
  gap: 1.125rem;
`;

export const Item = styled.div`
  flex: 1 1 calc(50% - 1.125rem);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    padding-top: 100%; /* 비율을 유지하며 높이를 너비의 100%로 설정하여 정사각형으로 만듦 */
    position: relative;
    overflow: hidden;
  }

  img {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }

  .inside {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 38%;
    height: 38%;
  }
`;
export const ItemTitle = styled.p`
  color: black;
  text-align: center;
  border-radius: 1rem;
  background: #c4f261;
  padding: 0.625rem 0.875rem;
  margin-top: 0.5rem;
  font-family: "SUIT-Medium";
  font-size: 0.8125rem;
  line-height: 1.2;
`;

export const DetailContent = styled.p`
  position: absolute;
  z-index: 10;
  top: 1.25rem;
  left: 1.25rem;

  p {
    margin-bottom: 0.75rem;
    line-height: 1.5;
    font-family: "SUIT-Medium";
    margin-right: 1.25rem;
    font-size: 0.875rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  padding-top: 100%; /* 비율을 유지하며 높이를 너비의 100%로 설정하여 정사각형으로 만듦 */
  position: relative;
  overflow: hidden;
`;
