import styled from "styled-components";

export const ScrapBg = styled.div`
  background-color: #f7f6f9;
  width: 100%;
  height: 100vh;
`;

// TopBar

export const TopBarWrapper = styled.div`
  margin: 0.8125rem 1.5rem 0;
  width: auto;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.div`
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;

  span {
    font-family: "SUIT-Semibold";
    font-size: 1.063rem;
    line-height: 100%;
  }
`;

