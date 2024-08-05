import styled from "styled-components";

export const Logo = styled.div`
  font-family: "Super_Plants";
  font-size: 3.75rem;
  text-align: left;
  margin: 2.625rem 8.75rem 0 2.1875rem;
`;
export const LogoSectionWrapper = styled.div`
  font-family: "SUIT-Semibold";
  font-size: 1.25rem;
  margin: 0.9375rem 0 3.125rem;
  display: grid;
  grid-template-columns: 1fr auto; 
  gap: 6.375rem; 
  align-items: center;
  line-height: 2rem;
  position: relative;

  .nickname {
    font-family: "SUIT-Bold";
    position: relative;
    display: inline-block;
    padding: 0 0.1875rem 0.8em 0.1875rem; 
    background: #fff; 
    z-index: 2;
    

    &::after {
      content: "";
      position: absolute;
      top: 0.9375rem;
      left: 0rem;
      width: 100%;
      height: 0.8em;
      background: #C4F261;
      z-index: -1; 
    }
  }
`;

export const Intro = styled.div`
  width: auto;
  margin-left: 2.4375rem;
`;

export const Image = styled.img`
  position: absolute;
  right: 0.5969rem;
  top: 0.4688rem;
`;
