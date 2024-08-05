import Navbar from "../../../components/Navbar";
import { PLFrame } from "../../../components/PLFrame";
import {
  CantEatWith,
  CantEatWithContent,
  CantEatWithTitle,
  FindResultWrapper,
  HeaderTitle,
  ItemEat,
  ItemEatContent,
  ItemEatTitle,
  ItemEffect,
  ItemEffectContent,
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
  SideEffectContent,
  SideEffectTitle,
  WhoCant,
  WhoCantContent,
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
import { useState, useEffect } from "react";
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

  const [modal, setModal] = useState(false);
  const [isScrap, setIsScrap] = useState(false);
  const [scrapId, setScapId] = useState(null);
  const navigate = useNavigate();

  const toggleModal = async () => {
    if (!isScrap) {
      setModal((prevModal) => !prevModal);
    } else {
      await axiosInstance.delete(`/scraps/${scrapId}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("스크랮 삭제 ㅅㄱ");
      setIsScrap(false);
      setScapId(null);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const ScrapCart = async (category) => {
    try {
      //스크랩 없음
      const scrapData = {
        medicine_name: itemDetails.itemName,
        category: category,
      };
      console.log(scrapData);

      const res = await axiosInstance.post(`/scraps/new`, scrapData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setIsScrap(true);
      setScapId(res.data.id);
      setModal(false);
      console.log("스크랩 성공");
      setModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };

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
                <ScrapItem onClick={() => ScrapCart("기본")}>
                  <img src={greenIcon} alt="plain" />
                  <p>기본</p>
                </ScrapItem>
                <ScrapItem onClick={() => ScrapCart("부작용 있는")}>
                  <img src={grayIcon} alt="bad" />
                  <p>부작용 있는</p>
                </ScrapItem>
                <ScrapItem onClick={() => ScrapCart("효과 좋은")}>
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
              <ItemEatContent>{itemDetails.usemethod}</ItemEatContent>
            </ItemEat>
            <ItemEffect>
              <ItemEffectTitle>어떤 효능이 있나요?</ItemEffectTitle>
              <ItemEffectContent>{itemDetails.efcy}</ItemEffectContent>
            </ItemEffect>
            <CantEatWith>
              <CantEatWithTitle>
                이러한 성분들은 함께 복용하면 안돼요
              </CantEatWithTitle>
              <CantEatWithContent>{itemDetails.atpn}</CantEatWithContent>
            </CantEatWith>
            <SideEffect>
              <SideEffectTitle>부작용이 있을 수 있어요</SideEffectTitle>
              <SideEffectContent>{itemDetails.intrc}</SideEffectContent>
            </SideEffect>
            <WhoCant>
              <WhoCantTitle>이런 분들은 복용을 주의하세요</WhoCantTitle>
              <WhoCantContent>{itemDetails.seQ}</WhoCantContent>
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
