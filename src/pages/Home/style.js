import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 41.6875rem;
  position: relative;
`;

export const Wrapper = styled.div`
  z-index: 0;
`;

export const LogoSection = styled.div`
  font-family: "SUIT-SemiBold";
  font-size: 1.25rem;
  /* margin-top: 12px; */
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6.375rem;
  align-items: center;
  line-height: 2.125rem;

  .nickname {
    font-family: "SUIT-Bold";
  }
`;

export const Intro = styled.div`
  width: 9.375rem;
  margin-left: 2.4375rem;
`;

export const Image = styled.img`
  margin-right: 0.5969rem;
`;

export const SearchBarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  margin-bottom: 3.625rem;

  @media (min-width: 31.25rem) {
    margin-bottom: 6.25rem;
  }
`;

export const SearchBtn = styled(Link)`
  z-index: 1;
  display: flex;
  align-items: center;
  width: calc(100% - 4.25rem);
  margin: 0 1.5rem;
  height: 4rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid #fff;
  background: #f7f6f9;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #1b1a1f;
  padding-left: 1.25rem;
  box-shadow:
    inset 0 0.2625rem 0.3125rem -0.375rem #adadad,
    inset -0.3125rem 0 0.3125rem -0.5rem #adadad,
    inset 0.3125rem 0 0.3125rem -0.5rem #adadad;

  text-decoration: none;

  &:active {
    background-color: #e0fda2;
  }

  img {
    margin-right: 0.75rem;
  }
`;

export const MedicineLeft = styled.img`
  position: absolute;
  left: 0.75rem;
  top: 0.875rem;
`;

export const GreenCircle = styled.div`
  z-index: 0;
  position: fixed;
  bottom: -11.875rem;
  max-width: 32rem;
  width: 100%;
  height: 24.375rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: rgba(196, 242, 97, 0.5);
`;

export const GreenBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
