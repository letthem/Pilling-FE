import styled from "styled-components";

export const Logo = styled.div`
  font-family: "Super_Plants";
  font-size: 3.75rem;
  text-align: left;
  margin: 98px 140px 0 35px;
`;
export const LogoSectionWrapper = styled.div`
  font-family: "SUIT-Regular";
  font-size: 20px;
  margin: 15px 0 35px;
  display: grid;
  grid-template-columns: 1fr auto; /* Adjust layout to have text and image in two columns */
  gap: 102px; /* Space between text and image */
  align-items: center;
  line-height: 2.125rem;
  position: relative;

  .nickname {
    font-family: "SUIT-Bold";
  }
`;

export const Intro = styled.div`
  width: 150px;
  margin-left: 39px;
`;

export const Image = styled.img`
  position: absolute;
  right: 9.55px;
  top: 7.5px;
`;
