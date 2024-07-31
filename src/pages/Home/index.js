import Navbar from "../../components/Navbar";
import { PLFrame } from "../../components/PLFrame";
import LogoSection from "./LogoSection";
import CalenderSection from "./CalenderSection.js";
import {
  HomeWrapper,
  SearchBtn,
  SearchBarSection,
  MedicineLeft,
} from "./style";
import medicineLeft from "../../assets/Home/medicineLeft.svg";
import findhIcon from "../../assets/Home/search.svg";
import { Link } from "react-router-dom";

const Home = () => {
  // const nickname get요청해서 받아오기
  return (
    <PLFrame>
      <HomeWrapper>
        <LogoSection />
        <SearchBarSection>
              <SearchBtn to="/find">
                <img src={findhIcon} alt="돋보기"/> 궁금한 약 이름을 검색하세요
              </SearchBtn>        
          <MedicineLeft src={medicineLeft} />
        </SearchBarSection>
        <CalenderSection />
        <Navbar />
      </HomeWrapper>
    </PLFrame>
  );
};

export default Home;
