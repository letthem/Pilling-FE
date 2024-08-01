import { PLFrame } from "../../../components/PLFrame";
import {
  Btn,
  ScrapBg,
  TabItem,
  TapBarWrapper,
  Title,
  TopBarWrapper,
} from "./styles";
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
        <TapBarWrapper>
          <TabItem>기본</TabItem>
          <TabItem>부작용 있는</TabItem>
          <TabItem>효과 좋은</TabItem>
        </TapBarWrapper>
      </ScrapBg>
    </PLFrame>
  );
};

export default Scrap;
