import { PLFrame } from "../../components/PLFrame";
import CalendarTopBar from "./CalendarTopBar";
import add from "./../../assets/Calendar/add.svg";
import {
  Add,
  CalendarContainer,
  CalendarWrapper,
  Ment,
  PlusBtn,
} from "./styles";
import CalendarBox from "./CalendarBox";

const Calendar = () => {
  return (
    <PLFrame>
      <CalendarTopBar />
      <CalendarWrapper>
        <CalendarContainer>
          <CalendarBox />
        </CalendarContainer>
        <PlusBtn>
          <Add src={add} />
        </PlusBtn>
        <Ment>복용 약을 기록해보세요!</Ment>
      </CalendarWrapper>
    </PLFrame>
  );
};

export default Calendar;
