import styled from "styled-components"




export const ItemList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1.125rem;

`

export const Item = styled.div`
  flex: 1 1 calc(50% - 1.125rem); /* 두 개의 아이템이 한 줄에 배치되도록 설정합니다 */
  box-sizing: border-box; /* 패딩과 보더를 포함하여 너비 계산 */
  cursor: pointer; /* 클릭 가능성을 표시합니다 */
  display: flex;
  flex-direction: column;

  

  div{
    width: 100%; /* 아이템 너비에 맞게 설정 */
    padding-top: 100%; /* 비율을 유지하며 높이를 너비의 100%로 설정하여 정사각형으로 만듭니다 */
    position: relative;
    overflow: hidden; /* 컨테이너를 넘어가는 이미지 부분을 숨깁니다 */ 
}
  
  img {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover; /* 이미지를 컨테이너에 맞게 자르고 비율을 유지하며 조정합니다 */
  }

 
`
export const ItemTitle = styled.p`
    color: black;
    text-align: center;
    border-radius: 1rem;
    background: #C4F261;
    padding: 0.625rem 0.875rem;
    margin-top: 0.25rem;
    
`


export const DetailContent = styled.p`
    position: absolute;
    z-index: 10;
    top: 1.25rem;
    left: 1.25rem;
  p{
    margin-top: 1.25rem;
  }
 
`
