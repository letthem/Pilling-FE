import { useState } from "react";
import { DetailContent, Item, ItemList, ItemTitle } from "./styles";
import mediImg from '../../../assets/Home/Find/mediImg.svg'
import { useNavigate } from "react-router";



const FindItemName = ({meidicines}) => {
    const hasMedicines = meidicines && meidicines.length > 0;
    const [showDetail, setShowDetail] = useState(null);
    const navigate = useNavigate();

    const handleClickToDetail =(index) => {
        // 클릭된 항목의 인덱스를 설정하거나 해제
        setShowDetail(showDetail === index ? null : index);
    };

    const handleClickToGo = () => {
        navigate(':itemName');
    }
    return (
        <>
            {hasMedicines ? (
                <ItemList>
                    {meidicines.map((meidicine, index) => (
                       
                        <Item onClick={() => handleClickToDetail(index)} key={index}>
                             <div>
                                <img src={mediImg} alt="medicineImg" style={{
                                        opacity: showDetail === index ? 0.5 : 1,
                                    }}/>
                             {showDetail === index && (
                                    <DetailContent>
                                        [주요 효능]
                                        <p>두통 완화</p>
                                        </DetailContent>
                             )}
                             </div>
                              <ItemTitle onClick={handleClickToGo}>{meidicine}</ItemTitle>
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