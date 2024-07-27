import styled from "styled-components";

export const CalendarBoxLayout = styled.div`
  background-color: #1b1a1f;
  border-radius: 1.5rem;
  /* margin: 0 auto; */
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
  margin: 1.25rem 1.531rem 0rem 1.719rem;
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthDisplay = styled.div`
  color: #c4f261;
  font-size: 1.5rem;
  font-family: "GS-Medium";
  span {
    font-size: 1.719rem;
  }
`;

export const YearDisplay = styled.div`
  margin-top: 0.5rem;
  color: #7d7c81;
  font-size: 0.938rem;
  font-family: "GS-Regular";
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(3.125rem, 1fr));
  color: #7a7a7a;
  margin: 0.938rem 0.75rem 1rem;
`;

export const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(3.125rem, 1fr));
  grid-row-gap: 0.938rem;
  grid-column-gap: 0.25rem;
  color: #7a7a7a;
  margin: 15px 0.75rem 1rem;
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

  border-radius: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    font-family: "GS-Regular";
    font-size: 0.688rem;
    line-height: 0.963rem;
    margin-left: 0.625rem;
    width: 0.875rem;
  }
`;

export const Circle = styled.div`
  background-color: #1b1a1f;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  margin-top: 0.563rem;
  margin-right: 1.125rem;
`;
export const ChangeButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    width: 2.375rem;
    height: 2.375rem;
    padding: 0.688rem;
    border-radius: 0.75rem;
    justify-content: center;
    align-items: center;
    background-color: #2b2a2f;
    border: none;
    outline: none;
    margin-left: 0.375rem;
    cursor: pointer;
  }
`;
