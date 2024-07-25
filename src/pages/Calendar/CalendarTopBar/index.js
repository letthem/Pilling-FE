import { Btn, CalendarTopBarWrapper, Title } from "./styles";
import arrowLeft from "./../../../assets/Calendar/arrow-left.svg";
import more from "./../../../assets/Calendar/more.svg";

const CalendarTopBar = () => {
  return (
    <CalendarTopBarWrapper>
      <Btn>
        <img src={arrowLeft} />
      </Btn>
      <Title>복용일지</Title>
      <Btn>
        <img src={more} />
      </Btn>
    </CalendarTopBarWrapper>
  );
};

export default CalendarTopBar;
