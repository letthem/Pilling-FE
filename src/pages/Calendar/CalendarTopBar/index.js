import { Btn, CalendarTopBarWrapper, Title } from "./styles";
import arrowLeft from "./../../../assets/Calendar/arrow-left.svg";

const CalendarTopBar = () => {
  return (
    <CalendarTopBarWrapper>
      <Btn>
        <img src={arrowLeft} alt="arrowLeft" />
      </Btn>
      <Title>
        <span>복용일지</span>
      </Title>
      <div style={{ width: "3rem" }} />
    </CalendarTopBarWrapper>
  );
};

export default CalendarTopBar;
