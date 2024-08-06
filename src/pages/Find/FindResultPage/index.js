import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { PLFrame } from "../../../components/PLFrame";
import {
  CantEatWith,
  CantEatWithContent as StyledCantEatWithContent,
  CantEatWithTitle,
  FindResultWrapper,
  HeaderTitle,
  ItemEat,
  ItemEatContent as StyledItemEatContent,
  ItemEatTitle,
  ItemEffect,
  ItemEffectContent as StyledItemEffectContent,
  ItemEffectTitle,
  ItemImg,
  ItemName,
  ModalBox,
  ResultBody,
  ResultHeader,
  ScrapBox,
  ScrapItems,
  ScrapItem,
  SideEffect,
  SideEffectContent as StyledSideEffectContent,
  SideEffectTitle,
  WhoCant,
  WhoCantContent as StyledWhoCantContent,
  WhoCantTitle,
  NoImgContainer,
  SearchLoadingBox,
} from "./styles";
import { ArrowIcon } from "../styles";
import { ArrowDiv } from "../styles";
import arrowIcon from "../../../assets/Home/Find/arrow.svg";
import scrapImg from "../../../assets/Home/Find/scrap.svg";
import isScrapImg from "../../../assets/Home/Find/fullScrap.svg";
import plainscrap from "../../../assets/Home/Find/plainscrap.svg";
import greenIcon from "../../../assets/Home/Find/greenicon.svg";
import pinkIcon from "../../../assets/Home/Find/pinkicon.svg";
import grayIcon from "../../../assets/Home/Find/grayicon.svg";
import { useNavigate, useParams } from "react-router";
import { axiosInstance } from "../../../api/api";
import noImg from "../../../assets/Home/Find/RectangleRow.png";
import noImgEnd from "../../../assets/Home/Find/noimageEnd.svg";
import loadingImg from "../../../assets/login/greenIcon.svg";

const FindResultPage = () => {
  const { itemName } = useParams();

  const [itemDetails, setItemDetails] = useState({});
  const categorys = ["F", "B", "G"];

  const [modal, setModal] = useState(false);
  const [isScrap, setIsScrap] = useState(false);
  const [scrapId, setScrapId] = useState(null);
  const [scrapInfo, setScrapInfo] = useState("");
  const navigate = useNavigate();

  const getScrap = async () => {
    try {
      // 모든 카테고리에 대한 요청을 보내고 Promise 배열을 생성합니다.
      const requests = categorys.map((cate) =>
        axiosInstance.get(`/scraps?category=${cate}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
      );

      // 모든 요청이 완료될 때까지 기다립니다.
      const responses = await Promise.all(requests);

      // 각 요청의 결과를 처리합니다.
      for (const res of responses) {
        const scrapList = res.data;
        const itemScrap = scrapList.find(
          (scrapItem) => scrapItem.medicine_name === itemName
        );

        if (itemScrap) {
          setScrapId(itemScrap.id);
          setIsScrap(true);
          break; // 조건을 만족하는 스크랩을 찾으면 반복 종료
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const toggleModal = async () => {
    if (!isScrap) {
      setModal((prevModal) => !prevModal);
    } else {
      await axiosInstance.delete(`/scraps/${scrapId}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setIsScrap(false);
      setScrapId(null);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  //스크랩 post
  const ScrapCart = async (category) => {
    try {
      //스크랩 없음
      const scrapData = {
        medicine_name: itemDetails.itemName,
        category: category,
      };

      const res = await axiosInstance.post(`/scraps/new`, scrapData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setIsScrap(true);
      setScrapId(res.data.id);
      setModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 약 상세 정보 get
  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const res = await axiosInstance.get(
          `/search?itemName=${itemName}&type=detail`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        const itemData = res.data[0] || {};
        setItemDetails(itemData);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchItemDetail();
  }, [itemName]);

  useEffect(() => {
    getScrap();
  }, []);

  const formatText = (text) => {
    const parts = text.split(".");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.trim()}
        {index < parts.length - 1 && "."}
        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <PLFrame>
      <FindResultWrapper>
        <ResultHeader>
          <ArrowDiv onClick={goBack}>
            <ArrowIcon src={arrowIcon} alt="arrow" />
          </ArrowDiv>
          <HeaderTitle>약 검색 결과 </HeaderTitle>
          <ScrapBox
            src={isScrap ? isScrapImg : modal ? scrapImg : plainscrap}
            alt="scrapImg"
            onClick={toggleModal}
          />
          {modal && (
            <ModalBox>
              <ScrapItems>
                <ScrapItem onClick={() => ScrapCart("F")}>
                  <img src={greenIcon} alt="plain" />
                  <p>기본</p>
                </ScrapItem>
                <ScrapItem onClick={() => ScrapCart("B")}>
                  <img src={grayIcon} alt="bad" />
                  <p>부작용 있는</p>
                </ScrapItem>
                <ScrapItem onClick={() => ScrapCart("G")}>
                  <img src={pinkIcon} alt="good" />
                  <p>효과 좋은</p>
                </ScrapItem>
              </ScrapItems>
            </ModalBox>
          )}
        </ResultHeader>
        {Object.keys(itemDetails).length > 0 ? (
          <ResultBody>
            {itemDetails.image ? (
              <ItemImg src={itemDetails.image} alt="약" />
            ) : (
              <NoImgContainer>
                <img src={noImgEnd} />
                <p>이미지가 제공되지 않는 약입니다</p>
              </NoImgContainer>
            )}

            <ItemName>{itemDetails.itemName}</ItemName>
            <ItemEat>
              <ItemEatTitle>복용방법</ItemEatTitle>
              <StyledCantEatWithContent>
                {formatText(itemDetails.usemethod)}
              </StyledCantEatWithContent>
            </ItemEat>
            <ItemEffect>
              <ItemEffectTitle>어떤 효능이 있나요?</ItemEffectTitle>
              <StyledCantEatWithContent>
                {formatText(itemDetails.efcy)}
              </StyledCantEatWithContent>
            </ItemEffect>
            <CantEatWith>
              <CantEatWithTitle>
                이러한 성분들은 함께 복용하면 안돼요
              </CantEatWithTitle>
              <StyledCantEatWithContent>
                {formatText(itemDetails.intrc)}
              </StyledCantEatWithContent>
            </CantEatWith>
            <SideEffect>
              <SideEffectTitle>부작용이 있을 수 있어요</SideEffectTitle>
              <StyledSideEffectContent>
                {formatText(itemDetails.seQ)}
              </StyledSideEffectContent>
            </SideEffect>
            <WhoCant>
              <WhoCantTitle>이런 분들은 복용을 주의하세요</WhoCantTitle>
              <StyledWhoCantContent>
                {formatText(itemDetails.atpn)}
              </StyledWhoCantContent>
            </WhoCant>
          </ResultBody>
        ) : (
          <SearchLoadingBox>
            검색 정보를 불러오고 있어요!
            <img src={loadingImg} alt="loading" />
          </SearchLoadingBox>
        )}
        <Navbar />
      </FindResultWrapper>
    </PLFrame>
  );
};
export default FindResultPage;
