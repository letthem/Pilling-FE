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

// TapBar

export const TapBarWrapper = styled.div`
  background-color: white;
  width: calc(100% - 3rem);
  margin: 1rem 1.25rem 0rem;
  height: 2.375rem;
  border-radius: 3.75rem;
  border: 0.0625rem solid #e5e4e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem;
`;

export const TabItem = styled.div`
  height: 2.375rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SUIT-Semibold";
  font-size: 0.875rem;
  flex-grow: 1;
  text-align: center;
  padding: 0 0.75rem;

  & + & {
    margin-left: 0.25rem;
  }

  &:nth-child(1) {
    background-color: #c4f261;
  }

  &:nth-child(2) {
    background-color: #d1d3d9;
  }

  &:nth-child(3) {
    background-color: #fdcccc;
  }
`;
