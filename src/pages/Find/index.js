import Navbar from "../../components/Navbar";
import { PLFrame } from "../../components/PLFrame";
import {
  ArrowDiv,
  ArrowIcon,
  FindBody,
  FindBySymptom,
  FindHeader,
  FindInputLoading,
  FindInputLoadingBox,
  FindWrapper,
  Symptom,
  SymptomList,
  Symptoms,
  SymptomTitle,
} from "./styles";
import arrowIcon from "../../assets/Home/Find/arrow.svg";
import arrowRightIcon from "../../assets/Home/Find/arrowRight.svg";
import FindInputTag from "./FindInputTag";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 수정된 부분
import { axiosInstance } from "../../api/api";
import loadingImg from "../../assets/login/greenIcon.svg";
import FindItemName from "./FindItemName";

const Find = () => {
  const symptomItems = [
    "콧물",
    "코막힘",
    "감기",
    "기침",
    "인후염",
    "편도염",
    "어지러움",
    "빈혈",
    "오한",
    "복통",
    "설사",
    "변비",
    "구토",
    "생리통",
    "속쓰림",
    "근육통",
    "관절통",
    "치통",
    "결막염",
    "가려움",
    "상처",
    "알레르기",
    "여드름",
    "고혈압",
    "우울증",
    "당뇨",
    "두통",
    "발열",
    "소화불량",
    "비염",
  ];
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    /* const storedValue = localStorage.getItem("searchValue");
	
    if (storedValue) {
		setValue(storedValue);
		}
		*/
    const storedMedicines = localStorage.getItem("medicines");
    if (storedMedicines) {
      setMedicines(JSON.parse(storedMedicines));
    }
  }, [value]);

  // 약검색 api 요청 -> input submit 되었을 때
  const clickFind = async (item) => {
    const efItemValue = `'${item}' 증상을 위한 약`;
    setValue(efItemValue);
    localStorage.setItem("searchValue", efItemValue);
    try {
      const res = await axiosInstance.get(`/search?efcyQesitm=${item}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setMedicines(res.data);
      console.log(res.data);
      localStorage.setItem("medicines", JSON.stringify(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };

  const clickForHome = () => {
    localStorage.setItem("searchValue", "");
    localStorage.removeItem("medicines");
    navigate(-1);
  };

  return (
    <PLFrame>
      <FindWrapper>
        <FindHeader>
          <ArrowDiv onClick={clickForHome}>
            <ArrowIcon src={arrowIcon} alt="arrow" />
          </ArrowDiv>
          <FindInputTag
            value={value}
            setValue={setValue}
            setMedicines={setMedicines}
          />
        </FindHeader>
        {!value ? (
          <FindBySymptom>
            <SymptomTitle>증상 별 약 검색하기</SymptomTitle>
            <SymptomList>
              <Symptoms>
                {symptomItems.map((item) => (
                  <Symptom key={item} onClick={() => clickFind(item)}>
                    {item}
                    <div></div>
                    <img src={arrowRightIcon} alt="right arrow" />
                  </Symptom>
                ))}
              </Symptoms>
            </SymptomList>
          </FindBySymptom>
        ) : medicines.length > 0 ? (
          <FindBody>
            <p className="searchResultNum">
              검색결과 <span>{medicines.length}</span>
            </p>
            <FindItemName medicines={medicines} />
          </FindBody>
        ) : (
          <FindInputLoadingBox>
            <FindInputLoading>검색 정보를 불러오고 있어요!</FindInputLoading>
            <img src={loadingImg} />
          </FindInputLoadingBox>
        )}
      </FindWrapper>
      <Navbar />
    </PLFrame>
  );
};
export default Find;
