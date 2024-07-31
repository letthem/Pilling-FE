import styled from "styled-components";

export const WeeklyCalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;

  width: 100%; /* 전체 너비를 100%로 설정 */

  /* 반응형 높이 설정 */
  height: 211px;
  
`

export const CalenderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f6f9;
  width: 90%;
  height: 100%;
  border-radius: 30px;
  box-shadow: 0px 0px 4px 0px rgba(115, 123, 152, 0.25);
  position: relative;
  p {
    width: 91%;
    font-size: 15px;

    font-family: "SUIT-Medium";
    margin: 16px 16px 20px;
  }
`;

export const WeeklyBox = styled.ul`
  color: black;
  display: flex;
  justify-content: center;
  width: 95%;
  li:last-child {
    margin-right: 0;
  }
`;


export const DayBox = styled.li`
  text-decoration: none;
  font-size: 10px;
  width: 14%;
  height: 68px;
  text-align: center;
  border-radius: 14px;
  color : #FFF;
  background-color: ${props => (props.$isToday ? '#C4F261' : '#1B1A1F')}; // 조건부 배경색
  margin-right: 2px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
`

export const DayInBox = styled.span`
  margin-top: 10px; 
  color: ${props => (props.$isToday ? 'black' : 'white')};
`
export const DayNumberInBox = styled.div`
  margin-bottom: 7px;
  height: 27.36px;
  width:  27.36px;;
  background: #2B2A2F;
  border-radius: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-family: 'GS-Medium';
  `


export const MediBox = styled.ul`
  width: 95%;
  height: 60px;
  margin-top: 12px;
  border-radius: 20px;
  background: #FFF;
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;


  ::-webkit-scrollbar {
      width: 10px;  /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    
      background: #217af4; /* 스크롤바의 색상 */
      
      border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
  }

  li:first-child {
    margin-left: 12px;
  }
  
`
