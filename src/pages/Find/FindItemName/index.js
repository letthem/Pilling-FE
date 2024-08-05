import { useState } from "react";
import {
  DetailContent,
  ImgContainer,
  Item,
  ItemList,
  ItemTitle,
} from "./styles";
import nomedimg from "../../../assets/Home/Find/noimageEnd.svg";
import grayBox from "../../../assets/Home/Find/grayEnd.svg";
import { useNavigate } from "react-router";

const FindItemName = ({ medicines }) => {
  const hasMedicines = medicines && medicines.length > 0;
  const [showDetail, setShowDetail] = useState(null);
  const navigate = useNavigate();

  const handleClickToDetail = (index) => {
    // 클릭된 항목의 인덱스를 설정하거나 해제
    setShowDetail(showDetail === index ? null : index);
  };

  const handleClickToGo = (itemName) => {
    navigate(`${itemName}`);
  };
  return (
    <>
      {hasMedicines ? (
        <ItemList>
          {medicines.map((medicine, index) => (
            <Item onClick={() => handleClickToDetail(index)} key={index}>
              <ImgContainer>
                <img
                  src={medicine.image || grayBox} // 기본 이미지 사용
                  alt="medicineImg"
                  style={{
                    opacity: showDetail === index ? 0.5 : 1,
                  }}
                />
                {!medicine.image && (
                  <img
                    className="inside"
                    src={nomedimg}
                    style={{
                      opacity: showDetail === index ? 0.5 : 1,
                    }}
                  />
                )}
                {showDetail === index && (
                  <DetailContent>
                    <p>[주요 효능]</p>
                    <p>{medicine.efcy}</p>
                  </DetailContent>
                )}
              </ImgContainer>
              <ItemTitle onClick={() => handleClickToGo(medicine.itemName)}>
                {medicine.itemName.length <= 8
                  ? medicine.itemName
                  : `${medicine.itemName.slice(0, 8)}...`}
              </ItemTitle>
            </Item>
          ))}
        </ItemList>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </>
  );
};
export default FindItemName;
