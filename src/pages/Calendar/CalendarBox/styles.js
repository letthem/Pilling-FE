import styled from "styled-components";

export const CalendarBoxLayout = styled.div`
  background-color: #1b1a1f;
  border-radius: 1.5rem;
  /* padding: 0.5rem; */
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
  grid-template-columns: repeat(7, 1fr);
  color: #7a7a7a;
  margin: 1.25rem 0.75rem 0.9375rem;
`;

export const CalendarItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.6875rem;
  font-family: "GS-Medium";
`;

export const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  grid-row-gap: 0.5rem;
  grid-column-gap: 0.25rem;
  color: #7a7a7a;
  margin: 0rem 0.75rem 1rem;
`;

export const Day = styled.div`
  color: ${(props) =>
    props.$isClicked
      ? "black"
      : props.$isToday
        ? "#C4F261"
        : props.$isCurrentMonth
          ? "#CCCCCC"
          : "#1B1A1F"};

  background-color: ${(props) =>
    props.$isClicked
      ? "#C4F261"
      : props.$isToday
        ? "#2b2a2f"
        : props.$isCurrentMonth
          ? "#2b2a2f"
          : "transparent"};

  border-radius: 0.75rem;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: 0.375rem;
    right: 0.5rem;
    text-align: center;
    font-family: ${(props) =>
      props.$isClicked
        ? "GS-Regular"
        : props.$isToday
          ? "GS-Semibold"
          : "GS-Regular"};
    font-size: 0.688rem;
    line-height: 0.963rem;
    width: 0.875rem;
  }
`;

export const Circle = styled.div`
  position: absolute;
  background-color: #1b1a1f;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  left: 0.5rem;
  bottom: 0.25rem;
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
