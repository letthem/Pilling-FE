import React, { useState, useEffect } from "react";
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
import { axiosInstance } from "../../../api/api";

const Scrap = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState("기본");
  const [basicPills, setBasicPills] = useState([]);
  const [negativePills, setNegativePills] = useState([]);
  const [positivePills, setPositivePills] = useState([]);

  const fetchData = async (category, setState) => {
    try {
      const response = await axiosInstance.get(`/scraps?category=${category}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(`Response data for ${category}:`, response.data); // 데이터 구조 확인용 콘솔 출력
      setState(
        response.data.map((item) => ({
          id: item.scrap_id,
          name: item.medicine_name,
          image: item.medicine_image,
        }))
      );
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
    }
  };

  useEffect(() => {
    fetchData("F", setBasicPills);
    fetchData("B", setNegativePills);
    fetchData("G", setPositivePills);
  }, []);

  const handleDeletePill = async (tab, pillId) => {
    try {
      await axiosInstance.delete(`/scraps/${pillId}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (tab === "기본") {
        setBasicPills((prevPills) =>
          prevPills.filter((pill) => pill.id !== pillId)
        );
      } else if (tab === "부작용 있는") {
        setNegativePills((prevPills) =>
          prevPills.filter((pill) => pill.id !== pillId)
        );
      } else if (tab === "효과 좋은") {
        setPositivePills((prevPills) =>
          prevPills.filter((pill) => pill.id !== pillId)
        );
      }
    } catch (error) {
      console.error(`Error deleting pill with id ${pillId}:`, error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "기본":
        return (
          <Basic
            pills={basicPills}
            onDelete={(pillId) => handleDeletePill("기본", pillId)}
          />
        );
      case "부작용 있는":
        return (
          <Negative
            pills={negativePills}
            onDelete={(pillId) => handleDeletePill("부작용 있는", pillId)}
          />
        );
      case "효과 좋은":
        return (
          <Positive
            pills={positivePills}
            onDelete={(pillId) => handleDeletePill("효과 좋은", pillId)}
          />
        );
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
