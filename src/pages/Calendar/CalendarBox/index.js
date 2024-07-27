import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useEffect, useState } from "react";
import {
  CalendarItem,
  CalendarBoxWrapper,
  CalendarBoxContainer,
  ChangeButton,
  Day,
  DayContainer,
  WeekContainer,
  MonthDisplay,
  YearDisplay,
  MonthBox,
  DateBox,
  CalendarBoxLayout,
  Circle,
} from "./styles.js";
import arrowLeft from "./../../../assets/Calendar/arrow-left-white.svg";

const CalendarBox = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [clickedDate, setClickedDate] = useState(null);

  // 처음 마운트될 때 오늘 날짜로 상태 초기화
  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    setClickedDate(today);
  }, []);

  const startCurrentMonth = startOfMonth(currentDate);
  const endCurrentMonth = endOfMonth(currentDate);
  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 });
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });

  const formatDays = days.map((day) => ({
    date: format(day, "yyyy-MM-dd"),
    year: format(day, "yyyy"),
    month: format(day, "M"),
    day: format(day, "dd"),
    isToday: isToday(day),
  }));

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const formatCurrentMonth = format(currentDate, "M");
  const formatCurrentYear = format(currentDate, "yyyy");

  return (
    <CalendarBoxLayout>
      <CalendarBoxWrapper>
        <MonthBox>
          <DateBox>
            <MonthDisplay>
              {formatCurrentMonth}
              <span>월</span>
            </MonthDisplay>
            <YearDisplay>{formatCurrentYear}</YearDisplay>
          </DateBox>
          <ChangeButton>
            <button onClick={handlePrevMonth}>
              <img src={arrowLeft} alt="arrowLeft" />
            </button>
            <button onClick={handleNextMonth}>
              <img
                src={arrowLeft}
                alt="arrowRight"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          </ChangeButton>
        </MonthBox>
        <CalendarBoxContainer>
          <WeekContainer>
            {weeks.map((week) => (
              <CalendarItem key={week}>{week}</CalendarItem>
            ))}
          </WeekContainer>
          <DayContainer>
            {formatDays.map((date) => (
              <Day
                $isCurrentMonth={formatCurrentMonth === date.month}
                $isToday={date.isToday}
                className={date.month}
                key={date.date}
                $isClicked={clickedDate === date.date}
                onClick={() => setClickedDate(date.date)}
              >
                <span>{date.day}</span>
                <Circle></Circle>
              </Day>
            ))}
          </DayContainer>
        </CalendarBoxContainer>
      </CalendarBoxWrapper>
    </CalendarBoxLayout>
  );
};

export default CalendarBox;
