import { useEffect, useRef, useState } from "react";
import findhIcon from "../../../assets/Home/search.svg";
import { FileInputWrapper, FindInputBox, FindForm } from "./styles";
import deleteImg from '../../../assets/Home/Find/deleteImg.svg'

const FindItem = ({meidicine}) => {
    return <div>
        {meidicine}
    </div>
}

const FindInputTag = ({value, setValue}) => {


    const meidicines = ['어린이용타이레놀', '타이레놀 정', '어린이타이레놀산']
    const handleSubmit = (e) => {
        e.preventdefault();
        // api 요청 
        //약 배열 get
    }


    const handleDelete = () => {
        setValue('');
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

   

    return(
        <FileInputWrapper>
            <FindForm onSubmit={handleSubmit}>
                <FindInputBox value={value} onChange={handleChange} type="text"placeholder="궁금한 약 이름을 검색하세요"/>
                <img className="search" src={findhIcon} alt="돋보기" />
                {value && <img src={deleteImg} alt="delete" className="delete" onClick={handleDelete}/>} 
            </FindForm>
        </FileInputWrapper>
        
    )
}
export default FindInputTag;

/*
{meidicines.length > 0 ? (
        <div>
            {meidicines.map((meidicine) => (
                <FindItem meidicine={meidicine}/>
            ))}
        </div>
) : (
    <p>바보</p>
)

}*/