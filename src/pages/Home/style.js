import styled from "styled-components";
import { Link  } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
`;


export const LogoSection = styled.div`
  font-family: "SUIT-SemiBold";
  font-size: 1.25rem;
  margin-top: 0.9375rem;
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
  width: 90%;
  height: 4rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid #fff;
  background: #f7f6f9;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #1B1A1F;
  padding-left: 1.25rem;
  box-shadow:
    inset 0 0.2625rem 0.3125rem -0.375rem #adadad,
    inset -0.3125rem 0 0.3125rem -0.5rem #adadad,
    inset 0.3125rem 0 0.3125rem -0.5rem #adadad;

    text-decoration: none;
    
  /*클릭시 색깔 변화 
    &:active {
    background-color: #C4F261; 
  }
    */

  img {
    margin-right: 0.75rem;
  }
`;

export const MedicineLeft = styled.img`
  position: absolute;
  left: 0.75rem;
  top: 0.875rem;
`;

/*
@media (max-width: 31.25rem) {
    //소형 휴대폰 
 
  }

  @media (min-width: 31.25rem) and (max-width: 64rem) {

}
    */
