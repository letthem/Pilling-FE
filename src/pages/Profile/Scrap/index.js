import { PLFrame } from "../../../components/PLFrame";
import { Btn, ScrapBg, Title, TopBarWrapper } from "./styles";
import arrowLeft from "./../../../assets/arrow-left.svg";
import { useNavigate } from "react-router";

const Scrap = () => {
  const nav = useNavigate();

  return (
    <PLFrame>
      <ScrapBg>
        <TopBarWrapper>
          <Btn
            onClick={() => {
              nav(-1);
            }}
          >
            <img src={arrowLeft} alt="arrowLeft" />
          </Btn>
          <Title>
            <span>스크랩한 약</span>
          </Title>
          <div style={{ width: "3rem" }} />
        </TopBarWrapper>
      </ScrapBg>
    </PLFrame>
  );
};

export default Scrap;
