import styled from "styled-components";

export const LogoImg = styled.img`
  font-family: "Super_Plants";
  font-size: 3.75rem;
  text-align: left;
  margin: 1.375rem 8.75rem 0 2.1875rem;
`;
export const LogoSectionWrapper = styled.div`
  font-family: "SUIT-SemiBold";
  font-size: 1.25rem;
  margin: 18px 0 38px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6.375rem;
  align-items: center;
  line-height: 1.2;
  position: relative;

  p {
    margin-bottom: 0.3125rem;
  }

  .nickname {
    font-family: "SUIT-Bold";
    position: relative;
    display: inline-block;
    background: #fff;
    z-index: 2;

    &::after {
      content: "";
      position: absolute;
      top: 0.875rem;
      left: 0rem;
      width: 100%;
      height: 0.75rem;
      background: #c4f261;
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
  right: 0.5938rem;
  top: 0;
`;
