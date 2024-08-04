import Navbar from "../../../components/Navbar"
import { PLFrame } from "../../../components/PLFrame"
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
         SideEffectContent, SideEffectTitle, WhoCant, WhoCantContent, WhoCantTitle } from "./styles"
import { ArrowIcon } from "../styles"
import arrowIcon from '../../../assets/Home/Find/arrow.svg'
import scrapImg from '../../../assets/Home/Find/scrap.svg'
import isScrapImg from '../../../assets/Home/Find/fullScrap.svg'
import mediImg from '../../../assets/Home/Find/mediImg.svg'
import { useState } from "react"
import greenIcon from '../../../assets/Home/Find/greenicon.svg'
import pinkIcon from '../../../assets/Home/Find/pinkicon.svg'
import grayIcon from '../../../assets/Home/Find/grayicon.svg'
import { useNavigate } from "react-router"


const FindResultPage = () => {
    const item = {
     
              name: "타이리콜8시간이알서방정",
              image: "string",
              usemethod: "12세 이상의 소아 및 성인은 매 8시간마다 2정씩 복용합니다. 24시간 동안 6정을 초과하지 마십시오.",
              good: "이 약은 해열 및 감기에 인한 동통(통증)과 두통, 치통, 근육통, 허리동통(통증), 생리통, 관절통의 완화에 사용합니다.",
              cantwith: "다른 소염(항염)진통제, 아세트아미노펜을 포함하는 다른 제품, 바르비탈계 약물, 삼환계 항우울제, 알코올과 함께 이 약을 복용하지 마십시오. 이 약을 복용하기 전에 와파린, 리튬, 티아지드계 이뇨제를 복용한 환자는 의사 또는 약사와 상의하십시오.",
              side : "쇽 증상(호흡곤란, 온몸이 붉어짐, 혈관부기, 두드러기 등), 천식발작, 혈소판감소, 과립구감소, 용혈성빈혈, 메트헤모글로빈혈증, 혈소판기능 저하(출혈시간 연장), 청색증, 구역, 구토, 식욕부진, 위장출혈, 소화성궤양, 천공(뚫림) 과민증상(얼굴부기, 땀이 남, 저혈압), 발진, 피부점막안증후군(스티븐스-존슨증후군), 독성표피괴사용해(리엘증후군), AST 상승, ALT 상승, 고정발진 등이 나타나는 경우 즉각 복용을 중지하고 의사 또는 약사와 상의하십시오.",
              whocant: "쇽 증상(호흡곤란, 온몸이 붉어짐, 혈관부기, 두드러기 등), 천식발작, 혈소판감소, 과립구감소, 용혈성빈혈, 메트헤모글로빈혈증, 혈소판기능 저하(출혈시간 연장), 청색증, 구역, 구토, 식욕부진, 위장출혈, 소화성궤양, 천공(뚫림) 과민증상(얼굴부기, 땀이 남, 저혈압), 발진, 피부점막안증후군(스티븐스-존슨증후군), 독성표피괴사용해(리엘증후군), AST 상승, ALT 상승, 고정발진 등이 나타나는 경우 즉각 복용을 중지하고 의사 또는 약사와 상의하십시오."
    }

    const [modal, setModal] = useState(false);
    const [isScrap, setIsScrap] = useState(false);
    const navigate = useNavigate();


    const toggleModal = () => {
        setModal(prevModal => !prevModal);
    };

    const goBack = () => {
        navigate(-1)
    }
  
    /* onClick => 스크랩 담기 post 
    const ScrapCart = () =>{

        
        setIsScrap(true);

    }
        */

    return (
    
    <PLFrame>
        <FindResultWrapper>
            <ResultHeader>
               <ArrowIcon src={arrowIcon} alt="arrow" onClick={goBack}/>
                <HeaderTitle>약 검색 결과 </HeaderTitle>
                <ScrapBox src={isScrap ? isScrapImg : scrapImg} alt="scrapImg" onClick={toggleModal}/>
                { modal && 
                    <ModalBox>
                        <ScrapItems>
                            <ScrapItem> 
                                <img src={greenIcon} alt="plain"/>
                                <p>기본</p>
                            </ScrapItem>
                            <ScrapItem>
                                <img src={grayIcon} alt="bad" />
                                <p>부작용 있는</p>
                            </ScrapItem>
                            <ScrapItem>
                            <img src={pinkIcon} alt="good" />
                            <p>효과 좋은</p>
                            </ScrapItem>
                        </ScrapItems>
                    </ModalBox>
                    }
            </ResultHeader>
            <ResultBody>
                <ItemImg src={mediImg} alt = "약"/>
                <ItemName>{item.name}</ItemName>
                <ItemEat>
                    <ItemEatTitle>복용방법</ItemEatTitle>
                    <ItemEatContent>{item.usemethod}</ItemEatContent>
                </ItemEat>
                <ItemEffect>
                    <ItemEffectTitle>어떤 효능이 있나요?</ItemEffectTitle>
                    <ItemEffectContent>{item.good}</ItemEffectContent>
               </ItemEffect>
               <CantEatWith>
                    <CantEatWithTitle>이러한 성분들은 함께 복용하면 안돼요</CantEatWithTitle>
                    <CantEatWithContent>{item.cantwith}</CantEatWithContent>
               </CantEatWith>
               <SideEffect>
                    <SideEffectTitle>부작용이 있을 수 있어요</SideEffectTitle>
                    <SideEffectContent>{item.side}</SideEffectContent>
               </SideEffect>
                <WhoCant>
                    <WhoCantTitle>이런 분들은 복용을 주의하세요</WhoCantTitle>
                    <WhoCantContent>{item.whocant}</WhoCantContent>
                </WhoCant>
            </ResultBody>

            <Navbar />
        </FindResultWrapper>
    </PLFrame>
    
    )
}
export default FindResultPage;