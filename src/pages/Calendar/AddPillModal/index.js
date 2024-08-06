import React, { useState, useEffect, useRef } from "react";
import { axiosInstance } from "../../../api/api";
import {
  ModalBackground,
  ModalContainer,
  ResultItem,
  ResultList,
  SearchBox,
  SearchModal,
} from "./styles";
import search from "./../../../assets/Calendar/search.svg";
import TagModal from "./TagModal";
import CancelConfirmModal from "../../../components/CancelConfirmModal";
import WarningModal from "./WarningModal";

const AddPillModal = ({ onClose, onSave, clickedDate }) => { 
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPill, setSelectedPill] = useState(null);
  const [customTags, setCustomTags] = useState(() => {
    const savedTags = localStorage.getItem("customTags");
    return savedTags ? JSON.parse(savedTags) : [];
  });
  const [isCancelConfirmOpen, setIsCancelConfirmOpen] = useState(false);
  const [isNoneModalOpen, setIsNoneModalOpen] = useState(false);
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

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(`/register`, {
        params: { itemName: encodeURIComponent(inputValue) },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.data.length === 0) {
        setIsNoneModalOpen(true); // 검색 결과 없을 때 모달 열기
      } else {
        setResults(response.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
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

  const handlePostPillName = async (result) => {
    try {
      const response = await axiosInstance.post(
        `/medicines`,
        { name: result.itemName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (response.status === 201) {
        setSelectedPill(result);
      }
    } catch (error) {
      console.error("Error posting pill name:", error);
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      {selectedPill ? (
        <TagModal
          selectedPill={selectedPill.itemName}
          onSave={handleSave}
          onClose={onClose}
          onBack={handleBack}
          customTags={customTags}
          setCustomTags={setCustomTags}
          clickedDate={clickedDate}
        />
      ) : (
        <ModalContainer>
          <SearchModal>
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
                <ResultItem
                  key={index}
                  onClick={() => handlePostPillName(result)}
                >
                  {result.itemName}
                </ResultItem>
              ))}
            </ResultList>
          </SearchModal>
        </ModalContainer>
      )}
      {isCancelConfirmOpen && (
        <ModalContainer>
          <CancelConfirmModal
            message={"검색을 취소하시겠습니까?"}
            onConfirm={handleCancelConfirm}
            onCancel={() => setIsCancelConfirmOpen(false)}
          />
        </ModalContainer>
      )}
      {isNoneModalOpen && (
        <WarningModal
          message="검색 결과가 존재하지 않습니다"
          onClose={() => setIsNoneModalOpen(false)}
        />
      )}
    </ModalBackground>
  );
};

export default AddPillModal;