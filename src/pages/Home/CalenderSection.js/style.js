import styled from "styled-components";

export const WeeklyCalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 211px;
  margin-bottom: 36px;
`;

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
  color: white;
  width: 14%;
  height: 68px;
  text-align: center;
  border-radius: 14px;
  border: 0.288px solid #1b1a1f;
  background: #1b1a1f;
  margin-right: 2px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
`

export const DayInBox = styled.span`
  margin-top: 10px; 
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
  li:first-child {
    margin-left: 12px;
  }
`
export const UserMedi = styled.li`
  width: 30%;
  height: 36px;
  border-radius: 12px;
  background: #F7F6F9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isChecked ? '#C4F261' : '#F7F6F9')}; // 조건부 텍스트 색깔
  margin-right: 8px;

  span{
    font-size: 12px;
    margin-top: 2.1px;
  }

  img {
    width: 14%;
    margin-right: 8px;
  }
  
`;