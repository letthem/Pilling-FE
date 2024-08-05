import styled from "styled-components";

export const WeeklyCalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.25rem;
  width: 100%;
  height: 100%;
  z-index: 10;
  height: auto;
`;

export const CalenderBox = styled.div`
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  background: #f7f6f9;
  border-radius: 1.875rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(115, 123, 152, 0.25);

  p {
    margin: 1rem 0 0 1rem;
    width: 6.1875rem;
    height: 1.1875rem;
    font-size: 0.9375rem;
    font-family: "SUIT-Medium";
  }
`;

export const WeeklyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
`;

export const WeeklyBox = styled.ul`
  color: #fff;
  display: flex;
  justify-content: center;
  width: calc(100% - 1.375rem);
  margin: 0 0.6875rem;
  li:last-child {
    margin-right: 0;
  }
`;

export const DayBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-size: 0.625rem;
  text-align: center;
  color: #fff;
  font-family: ${(props) => (props.$isToday ? "SUIT-Bold" : "SUIT-Light")};
  width: 14%;
  height: 4.25rem;
  border-radius: 0.875rem;
  background-color: ${(props) => (props.$isToday ? "#C4F261" : "#1B1A1F")};
  margin-right: 0.125rem;
`;

export const DayInBox = styled.span`
  margin-top: 0.625rem;
  color: ${(props) => (props.$isToday ? "black" : "white")};
`;

export const DayNumberInBox = styled.div`
  margin-bottom: 0.4375rem;
  height: 1.71rem;
  width: 1.71rem;
  background: #2b2a2f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.625rem;
  font-family: "GS-Medium";
`;

export const MediBox = styled.ul`
  height: 3.75rem;
  margin: 0.75rem 0.75rem 0;
  border-radius: 1.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  overflow: scroll;
  white-space: nowrap;
  width: calc(100% - 1.5rem);
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  li:first-child {
    margin-left: 0.75rem;
  }
`;
