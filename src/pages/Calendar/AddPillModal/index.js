import { useEffect, useRef, useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  ResultItem,
  ResultList,
  SearchBox,
} from "./styles";
import search from "./../../../assets/Calendar/search.svg";

const AddPillModal = ({ onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  // 빠른 검색 위해 input 바로 접근
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 저장
  const handleSave = () => {
    onSave(inputValue);
    onClose();
  };

  // 밖에 누르면 취소
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 약 검색 버튼 혹은 엔터
  const handleSearch = () => {
    // dummy data
    const pills = ["타이레놀", "애드빌", "부루펜", "타이레놀이브"];
    setResults(pills.filter((pill) => pill.includes(inputValue)));
  };

  // enter 이벤트
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        <SearchBox>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="약 이름을 검색하세요"
          />
          <img src={search} alt="search" onClick={handleSearch} />
        </SearchBox>
        <ResultList>
          {results.map((result, index) => (
            <ResultItem key={index}>{result}</ResultItem>
          ))}
        </ResultList>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddPillModal;
