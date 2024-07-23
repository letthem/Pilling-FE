import { PLFrame } from "../../components/PLFrame";
import CalenderTopBar from "./CalenderTopBar";
import calender from "./../../assets/Calender/calender.svg";
import { CalenderContainer, CalenderWrapper } from "./styles";

const Calender = () => {
  return (
    <PLFrame>
      <CalenderWrapper>
        <CalenderTopBar />
        <CalenderContainer src={calender} />
      </CalenderWrapper>
    </PLFrame>
  );
};

export default Calender;
