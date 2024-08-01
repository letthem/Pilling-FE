import React, { useState } from "react";
import { PLFrame } from "../../../components/PLFrame";
import {
  Btn,
  ScrapBg,
  TabItem,
  TapBarWrapper,
  TapContainer,
  TapWrapper,
  Title,
  TopBarWrapper,
} from "./styles";
import arrowLeft from "./../../../assets/arrow-left.svg";
import { useNavigate } from "react-router";
import Basic from "./Basic";
import Negative from "./Negative";
import Positive from "./Positive";

const Scrap = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState("기본");

  const [basicPills, setBasicPills] = useState([
    { name: "위스콘 더블액션 현탁액" },
    { name: "타이레놀" },
    { name: "애드빌" },
  ]);
  const [negativePills, setNegativePills] = useState([
    { name: "네거티브약1" },
    { name: "네거티브약2" },
  ]);
  const [positivePills, setPositivePills] = useState([
    { name: "포지티브약1" },
    { name: "포지티브약2" },
  ]);

  const handleDeletePill = (tab, pillName) => {
    if (tab === "기본") {
      setBasicPills((prevPills) => prevPills.filter((pill) => pill.name !== pillName));
    } else if (tab === "부작용 있는") {
      setNegativePills((prevPills) => prevPills.filter((pill) => pill.name !== pillName));
    } else if (tab === "효과 좋은") {
      setPositivePills((prevPills) => prevPills.filter((pill) => pill.name !== pillName));
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "기본":
        return <Basic pills={basicPills} onDelete={(pillName) => handleDeletePill("기본", pillName)} />;
      case "부작용 있는":
        return <Negative pills={negativePills} onDelete={(pillName) => handleDeletePill("부작용 있는", pillName)} />;
      case "효과 좋은":
        return <Positive pills={positivePills} onDelete={(pillName) => handleDeletePill("효과 좋은", pillName)} />;
      default:
        return null;
    }
  };

  return (
    <PLFrame>
      <ScrapBg>
        <TopBarWrapper>
          <Btn onClick={() => nav(-1)}>
            <img src={arrowLeft} alt="arrowLeft" />
          </Btn>
          <Title>
            <span>스크랩한 약</span>
          </Title>
          <div style={{ width: "3rem" }} />
        </TopBarWrapper>
        <TapBarWrapper>
          <TabItem
            isActive={activeTab === "기본"}
            onClick={() => setActiveTab("기본")}
          >
            기본
          </TabItem>
          <TabItem
            isActive={activeTab === "부작용 있는"}
            onClick={() => setActiveTab("부작용 있는")}
          >
            부작용 있는
          </TabItem>
          <TabItem
            isActive={activeTab === "효과 좋은"}
            onClick={() => setActiveTab("효과 좋은")}
          >
            효과 좋은
          </TabItem>
        </TapBarWrapper>
        <TapWrapper>
          <TapContainer>{renderContent()}</TapContainer>
        </TapWrapper>
      </ScrapBg>
    </PLFrame>
  );
};

export default Scrap;
