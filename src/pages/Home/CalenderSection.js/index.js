import { useState, useEffect } from "react";
import { WeeklyCalenderWrapper, CalenderBox, WeeklyBox, DayBox, DayInBox, DayNumberInBox, MediBox} from "./style";

import { startOfWeek, format, endOfWeek, eachDayOfInterval, getDay, getDate } from "date-fns"
import UserMedi from "./UserMedi";

const CalenderSection = () => {
  const weeks = ["월", "화", "수", "목", "금", "토", "일"];
  const [medicines, setMedicines] = useState(['엘스테인캡슐','아모잘린 큐','집가고싶당', '약마강팀!','뭘봐바밤바','블랙맘바'])/*더미 데이터*/
  const [isChecked, setIsChecked] = useState(false);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, currentMonth, currentDay] = format(currentDate, "yyyy-MM-dd").split("-");

  const todayDate = format(new Date(), "yyyy-MM-dd");

  
  const startOfFirstWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfLastWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });

  const daysInWeek = days.map((day) => ({
    date: format(day, "yyyy-MM-dd"),
    year: format(day, "yyyy"),
    month: format(day, "MM"),
    day: format(day, "dd"),
    dayIndexOfWeek: getDay(day),
  }));

  const handleOnClick = () => {
    setIsChecked(isChecked ? false : true)
  }
  
  /* medicine 약 정보 가져오기 + medicine 정보에 복용 여부 check해서 프롭 수정
  const handleLoad = async () => {
    const { medicines } = await get();
    setMedicines(medicines);
    }
    */
  


    
    return (
    <WeeklyCalenderWrapper>
      <CalenderBox>
        <p>나의 주간 캘린더</p>
        <WeeklyBox>
          {weeks.map((week, index) => (
            <DayBox key={daysInWeek[index].day} $isToday={daysInWeek[index].date === todayDate}>
              <DayInBox $isToday={daysInWeek[index].date === todayDate}>{week}</DayInBox>
              <DayNumberInBox ><span>{daysInWeek[index].day}</span></DayNumberInBox>
            </DayBox>
            ))}
        
        </WeeklyBox>
        <MediBox>
          {medicines.map((medi) => (
            <UserMedi key={medi} isChecked={isChecked} onClick={handleOnClick} >
              {medi}
            </UserMedi>
          ))}
        </MediBox>
      </CalenderBox>
    </WeeklyCalenderWrapper>
  );
};
export default CalenderSection;
