import React from "react";
import arrowLeft from "./../assets/arrow-left.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const TopBar = ({ topBarName }) => {
  const nav = useNavigate();
  return (
    <TopBarWrapper>
      <Btn
        onClick={() => {
          nav(-1);
        }}
      >
        <img src={arrowLeft} alt="arrowLeft" />
      </Btn>
      <Title>
        <span>{topBarName}</span>
      </Title>
      <div style={{ width: "3rem" }} />
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  background-color: white;
  margin: 0.8125rem 1.5rem 0;
  width: auto;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Btn = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #f7f6f9;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;

  span {
    font-family: "SUIT-Semibold";
    font-size: 1.063rem;
    line-height: 100%;
  }
`;
