import { useState, useEffect } from "react";
import { WeeklyCalenderWrapper, CalenderBox, WeeklyBox, DayBox, DayInBox, DayNumberInBox, MediBox, UserMedi} from "./style";
import nocheckImg from '../../../assets/Home/nocheckbox.svg'
import checkImg from '../../../assets/Home/checkImg.svg'
import { startOfWeek, format, endOfWeek, eachDayOfInterval, getDay, getDate } from "date-fns"

const CalenderSection = () => {
  const weeks = ["월", "화", "수", "목", "금", "토", "일"];
  const check = true;
  const [medicines, setMedicines] = useState(['엘스테인캡슐','아모잘린 큐'])/*더미 데이터*/

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, currentMonth, currentDay] = format(currentDate, "yyyy-MM-dd").split("-");
  const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd"));

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
            <DayBox key={index} >
              <DayInBox>{week}</DayInBox>
              <DayNumberInBox ><span>{daysInWeek[index].day}</span></DayNumberInBox>

            </DayBox>
            ))}
        
        </WeeklyBox>
        <MediBox>
          {medicines.map((medi) => (
          <UserMedi  key={medi.index} isChecked={check}>
              <img src={check ? checkImg : nocheckImg} alt="Check" />
              <span>{medi}</span>
          </UserMedi>
          ))}
        </MediBox>
      </CalenderBox>
    </WeeklyCalenderWrapper>
  );
};
export default CalenderSection;
