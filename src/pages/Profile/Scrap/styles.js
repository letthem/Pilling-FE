import styled from "styled-components";

export const ScrapBg = styled.div`
  background-color: #f7f6f9;
  width: 100%;
  height: 100vh;
`;

// TopBar

export const TopBarWrapper = styled.div`
  margin: 1.5625rem 1.5rem 0;
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
    font-family: "SUIT-SemiBold";
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
  font-family: "SUIT-Medium";
  font-size: 0.875rem;
  flex-grow: 1;
  text-align: center;
  padding: 0 0.75rem;
  color: ${({ isActive }) => (isActive ? "#1b1a1f" : "#7d7c81")};

  & + & {
    margin-left: 0.25rem;
  }

  &:nth-child(1) {
    background-color: ${({ isActive }) => (isActive ? "#c4f261" : "white")};
    color: ${({ isActive }) => (isActive ? "black" : "#adadad")};
    cursor: pointer;
  }

  &:nth-child(2) {
    background-color: ${({ isActive }) => (isActive ? "#d1d3d9" : "white")};
    color: ${({ isActive }) => (isActive ? "black" : "#adadad")};
    cursor: pointer;
  }

  &:nth-child(3) {
    background-color: ${({ isActive }) => (isActive ? "#fdcccc" : "white")};
    color: ${({ isActive }) => (isActive ? "black" : "#adadad")};
    cursor: pointer;
  }
`;

// TapWrapper

export const TapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TapContainer = styled.div`
  width: calc(100% - 3rem);
  height: auto;
  margin: 1.5rem;
`;
