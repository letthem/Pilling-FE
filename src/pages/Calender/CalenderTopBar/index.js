import { Btn, CalenderTopBarWrapper, Title } from "./styles";
import arrowLeft from "./../../../assets/Calender/arrow-left.svg";
import more from "./../../../assets/Calender/more.svg";

const CalenderTopBar = () => {
  return (
    <CalenderTopBarWrapper>
      <Btn>
        <img src={arrowLeft} />
      </Btn>
      <Title>복용일지</Title>
      <Btn>
        <img src={more} />
      </Btn>
    </CalenderTopBarWrapper>
  );
};

export default CalenderTopBar;
