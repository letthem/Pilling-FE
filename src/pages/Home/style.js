import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: auto;
  height: 281.333rem;
`;

export const Logo = styled.div`
  font-family: "Super_Plants";
  font-size: 3.75rem;
  text-align: left;
  margin: 42px 140px 0 35px;
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
  height: 150px;
`;

export const SearchBtn = styled.button`
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
  padding-left: 20px;
  box-shadow:
    inset 0 4.2px 5px -6px #adadad,
    inset -5px 0 5px -8px #adadad,
    inset 5px 0 5px -8px #adadad;

  img {
    margin-right: 12px;
  }
`;

export const MedicineLeft = styled.img`
  position: absolute;
  left: 12px;
  top: 22.75px;
`;

/*
@media (max-width: 500px) {
    //소형 휴대폰 
    bottom: 18rem;
  }

  @media (min-width: 500px) and (max-width: 1024px) {
    margin-top: 3rem;
    bottom: 9.188rem;

    */
