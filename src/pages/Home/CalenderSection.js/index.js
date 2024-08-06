import { useState, useEffect } from "react";
import {
  WeeklyCalenderWrapper,
  CalenderBox,
  WeeklyBox,
  DayBox,
  DayInBox,
  DayNumberInBox,
  MediBox,
  WeeklyWrapper,
} from "./style";

import {
  startOfWeek,
  format,
  endOfWeek,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import UserMedi from "./UserMedi";
import { axiosInstance } from "../../../api/api";

const CalenderSection = () => {
  const weeks = ["월", "화", "수", "목", "금", "토", "일"];
  const [dayMedicines, setDayMedicines] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const todayDate = format(new Date(), "yyyy-MM-dd");
  const [selectDate, setSelectDate] = useState(todayDate);

  const startOfFirstWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfLastWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });

  const daysInWeek = days.map((day) => ({
    date: format(day, "yyyy-MM-dd"),
    dayIndexOfWeek: getDay(day),
    day: format(day, "dd"),
  }));

  const fetchMedicines = async (medicine) => {
    setIsChecked(true);

    const newCompletionStatus = !medicine.completed;

    try {
      await axiosInstance.patch(
        `/schedules/${medicine.schedule_id}/complete`,
        {
          completed: newCompletionStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      // 상태를 업데이트하여 화면에 반영
      setDayMedicines((prevMedicines) =>
        prevMedicines.map((medi) =>
          medi.schedule_id === medicine.schedule_id
            ? { ...medi, completed: newCompletionStatus }
            : medi
        )
      );
    } catch (e) {
      console.error(e.message);
    } finally {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const res = await axiosInstance.get(`/schedules`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        const dayMediList = res.data.filter(
          (resData) => resData.date === selectDate
        );

        setDayMedicines(dayMediList);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    handleLoad();
  }, [selectDate]);

  const clickChoiceDate = (index) => {
    setSelectDate(daysInWeek[index].date);
  };

  return (
    <WeeklyCalenderWrapper>
      <CalenderBox>
        <p>나의 주간 캘린더</p>
        <WeeklyWrapper>
          <WeeklyBox>
            {weeks.map((week, index) => (
              <DayBox
                key={daysInWeek[index].date}
                $isToday={daysInWeek[index].date === selectDate}
                onClick={() => clickChoiceDate(index)}
              >
                <DayInBox $isToday={daysInWeek[index].date === selectDate}>
                  {week}
                </DayInBox>
                <DayNumberInBox>
                  <span>{daysInWeek[index].day}</span>
                </DayNumberInBox>
              </DayBox>
            ))}
          </WeeklyBox>
          {dayMedicines.length > 0 && (
            <MediBox>
              {dayMedicines.map((medi) => (
                <UserMedi
                  key={medi.schedule_id}
                  isChecked={medi.completed}
                  onClick={() => fetchMedicines(medi)}
                >
                  {medi.medicine_name}
                </UserMedi>
              ))}
            </MediBox>
          )}
        </WeeklyWrapper>
      </CalenderBox>
    </WeeklyCalenderWrapper>
  );
};

export default CalenderSection;
