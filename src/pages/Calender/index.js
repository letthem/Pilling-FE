import { PLFrame } from "../../components/PLFrame";
import CalenderTopBar from "./CalenderTopBar";
import calender from "./../../assets/Calender/calender.svg";
import add from "./../../assets/Calender/add.svg";
import {
  Add,
  CalenderContainer,
  CalenderWrapper,
  Ment,
  PlusBtn,
} from "./styles";

const Calender = () => {
  return (
    <PLFrame>
      <CalenderTopBar />
      <CalenderWrapper>
        <CalenderContainer>
          <img src={calender} />
        </CalenderContainer>
        <PlusBtn>
          <Add src={add} />
        </PlusBtn>
        <Ment>복용 약을 기록해보세요!</Ment>
      </CalenderWrapper>
    </PLFrame>
  );
};

export default Calender;
