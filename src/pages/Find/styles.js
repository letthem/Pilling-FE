import styled from "styled-components";

export const FindWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
`
export const FindHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 23px 24px 33px;

  `
export const ArrowIcon = styled.img`
    background-color: #F7F6F9;
    border-radius: 500px;
    margin-right: 9px;
    padding: 16px;
`

export const FindBtn = styled.input`
  z-index: 1;
  display: flex;
  align-items: center;
  width: 90%;
  height: 52px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: #F7F6F9;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #ADADAD;
  padding-left: 20px;
  box-shadow:
    inset 0 4.2px 5px -6px #adadad,
    inset -5px 0 5px -8px #adadad,
    inset 5px 0 5px -8px #adadad;

    img {
    margin-right: 12px;
  }
  


`


export const FindBySymptom = styled.div`
margin: 0 36px;
`
export const SymptomTitle = styled.div`
    color: #1B1A1F;
    font-family: 'SUIT-Semibold';
    font-size: 16px;
    margin-bottom: 32.5px;
`

export const Symptoms = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 56px; /* 항목 간 간격 */
`

export const Symptom = styled.span`
  display: flex;
  justify-content: space-between;
  width: calc((100% - 2 * 56px) / 3); /* 3개씩 나열하기 위한 너비 계산 */
  color: #5F5F5F;
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
  text-align: center; /* 가운데 정렬 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
`

export const FindBody = styled.div`
margin: 0 24px;

p{
  color: #1B1A1F;
  font-family: 'SUIT-Regular';
  font-size: 14px;
  margin-bottom: 21px;
}



span{
  margin-left: 8px;
  color: #C4F261;
  font-family: "GS-Semibold";
  font-size: 17px;
}
`




