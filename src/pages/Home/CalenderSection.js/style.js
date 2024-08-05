import styled from "styled-components";

export const WeeklyCalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.25rem;
  width: 100%; 
  height: 13.188rem;

  @media (max-width: 31.25rem) {
    // 소형 휴대폰
  }

  @media (min-width: 31.25rem) {
    height: 31.25rem;
  }
`

export const CalenderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f6f9;
  width: 90%;
  height: auto;
  border-radius: 1.875rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(115, 123, 152, 0.25);
  position: relative;

  p {
    width: 91%;
    font-size: 0.9375rem;
    font-family: "SUIT-Medium";
    margin: 1rem 1rem 1.25rem;
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
  font-size: 0.625rem;
  width: 14%;
  height: 4.25rem;
  text-align: center;
  border-radius: 0.875rem;
  color: #FFF;
  background-color: ${props => (props.$isToday ? '#C4F261' : '#1B1A1F')};
  margin-right: 0.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DayInBox = styled.span`
  margin-top: 0.625rem;
  color: ${props => (props.$isToday ? 'black' : 'white')};
`;

export const DayNumberInBox = styled.div`
  margin-bottom: 0.4375rem;
  height: 1.71rem;
  width: 1.71rem;
  background: #2B2A2F;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  font-family: 'GS-Medium';
`;

export const MediBox = styled.ul`
  width: 95%;
  height: 3.75rem;
  margin-top: 0.75rem;
  border-radius: 1.25rem;
  background: #FFF;
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 0.3125rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #217af4; 
    border-radius: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);  
  }

  li:first-child {
    margin-left: 0.75rem;
  }

  @media (min-width: 31.25rem) {
    height: 100%;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.625rem 0;
  }
`;
