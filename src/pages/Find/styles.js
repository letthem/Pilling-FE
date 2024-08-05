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
  margin: 1.4375rem 1.5rem 2.0625rem;

  `
export const ArrowIcon = styled.img`
    background-color: #F7F6F9;
    border-radius: 31.25rem;
    margin-right: 0.5625rem;
    padding: 1rem;
`

export const FindBtn = styled.input`
  z-index: 1;
  display: flex;
  align-items: center;
  width: 90%;
  height: 3.25rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid #fff;
  background: #F7F6F9;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "SUIT-Regular";
  color: #ADADAD;
  padding-left: 1.25rem;
  box-shadow:
    inset 0 0.2625rem 0.3125rem -0.375rem #adadad,
    inset -0.3125rem 0 0.3125rem -0.5rem #adadad,
    inset 0.3125rem 0 0.3125rem -0.5rem #adadad;

    img {
    margin-right: 0.75rem;
  }
  


`


export const FindBySymptom = styled.div`
margin: 0 2.25rem;
`
export const SymptomTitle = styled.div`
    color: #1B1A1F;
    font-family: 'SUIT-Semibold';
    font-size: 1rem;
    margin-bottom: 2.0313rem;
`

export const Symptoms = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.5rem; /* 항목 간 간격 */
`

export const Symptom = styled.span`
  display: flex;
  justify-content: space-between;
  width: calc((100% - 2 * 3.5rem) / 3); /* 3개씩 나열하기 위한 너비 계산 */
  color: #5F5F5F;
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
  text-align: center; /* 가운데 정렬 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 너비 계산 */
`

export const FindBody = styled.div`
margin: 0 1.5rem;

p{
  color: #1B1A1F;
  font-family: 'SUIT-Regular';
  font-size: 0.875rem;
  margin-bottom: 1.3125rem;
}



span{
  margin-left: 0.5rem;
  color: #C4F261;
  font-family: "GS-Semibold";
  font-size: 1.0625rem;
}
`




