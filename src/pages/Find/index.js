import Navbar from "../../components/Navbar";
import { PLFrame }  from '../../components/PLFrame'
import { ArrowIcon, FindBody, FindBySymptom, FindHeader, FindWrapper, Symptom, Symptoms, SymptomTitle } from "./styles";
import arrowIcon from '../../assets/Home/Find/arrow.svg'
import arrowRightIcon from '../../assets/Home/Find/arrowRight.svg'
import FindInputTag from './FindInputTag'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 수정된 부분
import FindItemName from "./FindItemName";


const Find = () => {
	const symptomItems = ['목감기', '중이염', '콧물', '두통', '발열', '소화불량', '비염'];
	const [value, setValue] = useState('');
	const navigate = useNavigate();
    const meidicines = ['어린이용타이레놀', '타이레놀 정', '어린이타이떵개','놀레놀레'];


	

	useEffect(() => {
        const storedValue = localStorage.getItem('searchValue');
        if (storedValue) {
            setValue(storedValue);
        }
    }, []);

		// 약검색 api 요청 -> input submit 되었을 때 
    const clickFind = (item) => {
        const efItemValue = `'${item}' 증상을 위한 약`;
        setValue(efItemValue);
        localStorage.setItem('searchValue', efItemValue);
    };

	const clickForHome = () => {
		localStorage.setItem('searchValue', '');
		navigate('/home');
	}

    return(

    <PLFrame>
				<FindWrapper>
						<FindHeader>
							<ArrowIcon src={arrowIcon} alt="arrow" onClick={clickForHome} />
							<FindInputTag value={value} setValue={setValue}/>	
						</FindHeader>
						{ !value ? 
									<FindBySymptom>
											<SymptomTitle>
												증상 별 약 검색하기
											</SymptomTitle>
											<Symptoms>
											{symptomItems.map((item) => (
																		<Symptom key={item} onClick={(()=>clickFind(item))}>{item}
																			<img src ={arrowRightIcon} alt="right arrow" />
																		</Symptom>
																))}
											</Symptoms>
									</FindBySymptom>
									: (meidicines.length > 0 && (
										<FindBody>
											<p>검색결과 <span>{meidicines.length}</span></p>
											<FindItemName meidicines={meidicines} />
										</FindBody>
									))}							
				</FindWrapper>
			<Navbar />
    </PLFrame>

    )
    
}
export default Find;