import styled from "styled-components";

export const CalendarBoxLayout = styled.div`
  background-color: #1b1a1f;
  border-radius: 24px;
  margin: 0 auto;
  padding: 0.5rem;
  max-width: 32rem;
`;

export const CalendarBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthBox = styled.div`
  margin-top: 20px;
  margin-left: 27.5px;
  margin-right: 24.5px;
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 27.5px; */
`;

export const MonthDisplay = styled.div`
  color: #c4f261;
  font-size: 24px;
  font-family: "GS-Medium";
  span {
    font-size: 22px;
  }
`;

export const YearDisplay = styled.div`
  margin-top: 8px;
  color: #7d7c81;
  font-size: 15px;
  font-family: "GS-Regular";
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  color: #7a7a7a;
  margin: 15px 12px 1rem;
`;

export const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-row-gap: 15px;
  grid-column-gap: 4px;
  color: #7a7a7a;
  margin: 15px 12px 1rem;
`;

export const CalendarItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const Day = styled(CalendarItem)`
  color: ${(props) =>
    props.$isToday ? "black" : !props.$isCurrentMonth ? "#1b1a1f" : "#CCCCCC"};

  background-color: ${(props) =>
    props.$isToday
      ? "#C4F261"
      : props.$isCurrentMonth
        ? "#2b2a2f"
        : "transperent"};

  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    font-family: "GS-Regular";
    font-size: 11px;
    line-height: 15.4px;
    margin-left: 10px;
    width: 14px;
  }
`;

export const Circle = styled.div`
  background-color: #1b1a1f;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 9px;
  margin-right: 18px;
`;
export const ChangeButton = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin-right: 24.5px; */

  button {
    /* margin-bottom: 29px; */
    display: flex;
    width: 38px;
    height: 38px;
    padding: 11px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: #2b2a2f;
    border: none;
    outline: none;
    margin-left: 6px;
    cursor: pointer;
  }
`;
