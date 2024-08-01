import styled from "styled-components";

export const Logo = styled.div`
  font-family: "Super_Plants";
  font-size: 3.75rem;
  text-align: left;
  margin: 42px 140px 0 35px;
`;
export const LogoSectionWrapper = styled.div`
  font-family: "SUIT-Semibold";
  font-size: 20px;
  margin: 15px 0 50px;
  display: grid;
  grid-template-columns: 1fr auto; 
  gap: 102px; 
  align-items: center;
  line-height: 2rem;
  position: relative;

  .nickname {
    font-family: "SUIT-Bold";
    position: relative;
    display: inline-block;
    padding: 0 3px 0.8em 3px; 
    background: #fff; 
    z-index: 2;
    

    &::after {
      content: "";
      position: absolute;
      top: 15px;
      left: 0px;
      width: 100%;
      height: 0.8em;
      background: #C4F261;
      z-index: -1; 
    }
  }
`;

export const Intro = styled.div`
  width: auto;
  margin-left: 39px;
`;

export const Image = styled.img`
  position: absolute;
  right: 9.55px;
  top: 7.5px;
`;
