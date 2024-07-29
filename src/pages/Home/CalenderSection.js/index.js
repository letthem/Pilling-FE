import { useState, useEffect } from "react";
import { WeeklyCalenderWrapper, CalenderBox, WeeklyBox, DayBox, DayInBox, DayNumberInBox, MediBox, UserMedi} from "./style";
import nocheckImg from '../../../assets/Home/nocheckbox.svg'
import checkImg from '../../../assets/Home/checkImg.svg'
const CalenderSection = () => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const check = true;
  const [medicines, setMedicines] = useState(['엘스테인캡슐','아모잘린 큐'])

  /* medicine 약 정보 가져오기
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
          {days.map((day, index) => (
            <DayBox key={index}>
              <DayInBox>{day}</DayInBox>
              <DayNumberInBox>01</DayNumberInBox>
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
