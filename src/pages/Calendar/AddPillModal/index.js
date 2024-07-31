import React, { useState, useEffect, useRef } from "react";
import { ModalBackground, ModalContainer, ResultItem, ResultList, SearchBox } from "./styles";
import search from "./../../../assets/Calendar/search.svg";
import TagModal from "./TagModal";
import CancelConfirmModal from "../CancelCofirmModal";

const AddPillModal = ({ onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPill, setSelectedPill] = useState(null);
  const [customTags, setCustomTags] = useState(() => {
    const savedTags = localStorage.getItem("customTags");
    return savedTags ? JSON.parse(savedTags) : [];
  });
  const [isCancelConfirmOpen, setIsCancelConfirmOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customTags", JSON.stringify(customTags));
  }, [customTags]);

  const handleSave = (pill, tags) => {
    onSave({ pill, tags });
    onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCancelConfirmOpen(true);
    }
  };

  const handleSearch = () => {
    const pills = [
      "어린이용타이레놀정80mg",
      "타이레놀정160mg",
      "타이레놀8시간이알서방정",
      "어린이타이레놀현탁액",
      "어린이타이레놀산160mg",
      "타이레놀정500mg",
      "타이레놀정굳굳",
      "애드빌",
      "부루펜",
      "타이레놀이브",
    ];
    setResults(pills.filter((pill) => pill.includes(inputValue)));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleBack = () => {
    setSelectedPill(null);
  };

  const handleCancelConfirm = () => {
    setIsCancelConfirmOpen(false);
    onClose();
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        {selectedPill ? (
          <TagModal
            selectedPill={selectedPill}
            onSave={handleSave}
            onClose={onClose}
            onBack={handleBack}
            customTags={customTags}
            setCustomTags={setCustomTags}
          />
        ) : (
          <>
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
                <ResultItem key={index} onClick={() => setSelectedPill(result)}>
                  {result}
                </ResultItem>
              ))}
            </ResultList>
          </>
        )}
        {isCancelConfirmOpen && (
          <CancelConfirmModal
            onConfirm={handleCancelConfirm}
            onCancel={() => setIsCancelConfirmOpen(false)}
          />
        )}
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddPillModal;
