import styled from "styled-components";
import { Link  } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
`;


export const LogoSection = styled.div`
  font-family: "SUIT-SemiBold";
  font-size: 20px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr auto; 
  gap: 102px; 
  align-items: center;
  line-height: 2.125rem;

  .nickname {
    font-family: "SUIT-Bold";
  }
`;

export const Intro = styled.div`
  width: 150px;
  margin-left: 39px;
`;

export const Image = styled.img`
  margin-right: 9.55px;
`;

export const SearchBarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  
    margin-bottom: 58px;
  

  @media (min-width: 500px) {
    margin-bottom: 100px;

  }
`;

export const SearchBtn = styled(Link)`
  z-index: 1;
  display: flex;
  align-items: center;
  width: 90%;
  height: 64px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: #f7f6f9;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #1B1A1F;
  padding-left: 20px;
  box-shadow:
    inset 0 4.2px 5px -6px #adadad,
    inset -5px 0 5px -8px #adadad,
    inset 5px 0 5px -8px #adadad;

    text-decoration: none;
    
  /*클릭시 색깔 변화 
    &:active {
    background-color: #C4F261; 
  }
    */

  img {
    margin-right: 12px;
  }
`;

export const MedicineLeft = styled.img`
  position: absolute;
  left: 12px;
  top: 14px;
`;

/*
@media (max-width: 500px) {
    //소형 휴대폰 
 
  }

  @media (min-width: 500px) and (max-width: 1024px) {

}
    */
