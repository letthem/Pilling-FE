import { useEffect, useRef, useState } from "react";
import findhIcon from "../../../assets/Home/search.svg";
import { FileInputWrapper, FindInputBox, FindForm } from "./styles";
import deleteImg from "../../../assets/Home/Find/deleteImg.svg";
import { axiosInstance } from "../../../api/api";

const FindInputTag = ({ value, setValue, setMedicines }) => {
  const handleDelete = () => {
    setValue("");
    setMedicines([]);
    localStorage.setItem("searchValue", "");
    localStorage.removeItem("medicines");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemName = value.trim();
    if (!itemName) return;
    setValue(itemName);
    localStorage.setItem("searchValue", itemName);
    // api 요청
    //약 배열 get
    const yourToken = localStorage.getItem("access_token");
    if (yourToken) {
      try {
        const res = await axiosInstance.get(`/search?itemName=${itemName}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setMedicines(res.data);
        localStorage.setItem("medicines", JSON.stringify(res.data));
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    const medicines = localStorage.getItem("medicines");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  return (
    <FileInputWrapper>
      <FindForm onSubmit={handleSubmit}>
        <FindInputBox
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="궁금한 약 이름을 검색하세요"
        />
        <img className="search" src={findhIcon} alt="돋보기" />
        {value && (
          <img
            src={deleteImg}
            alt="delete"
            className="delete"
            onClick={handleDelete}
          />
        )}
      </FindForm>
    </FileInputWrapper>
  );
};
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
