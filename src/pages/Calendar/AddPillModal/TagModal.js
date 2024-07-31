import React, { useState } from "react";
import {
  TagList,
  TagItem,
  SaveButton,
  Title,
  BackButton,
  InputBox,
  AddTagButton
} from "./styles";
import WarningModal from "./WarningModal";
import DeleteConfirmModal from "./DeleteConfirmModal"; // 삭제 확인 모달

const TagModal = ({
  selectedPill,
  onSave,
  onClose,
  onBack,
  customTags,
  setCustomTags,
}) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] =
    useState(false);
  const [tagToDelete, setTagToDelete] = useState(null);

  const tags = [
    "감기",
    "복통",
    "소화불량",
    "두통",
    "알러지",
    "여드름",
    "항생제",
    "내과",
    "치과",
    "정신과",
    "안과",
    "한의원",
    "피부과",
    "정형외과",
    "성형외과",
    "산부인과",
    "비뇨기과",
    "신경외과",
  ];

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSave = () => {
    onSave(selectedPill, selectedTags);
    onClose();
  };

  const handleAddCustomTag = () => {
    if (newTag.trim() && newTag.length <= 6 && !/\s/.test(newTag)) {
      if (customTags.length < 3) {
        setCustomTags((prevTags) => [...prevTags, newTag]);
        setIsAddingTag(false);
        setNewTag("");
      } else {
        setIsWarningModalOpen(true);
      }
    }
  };

  const handleDeleteCustomTag = () => {
    setCustomTags((prevTags) => prevTags.filter((t) => t !== tagToDelete));
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tagToDelete));
    setIsDeleteConfirmModalOpen(false);
    setTagToDelete(null);
  };

  const handleDeleteButtonClick = (e, tag) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setTagToDelete(tag);
    setIsDeleteConfirmModalOpen(true);
  };

  const handleNewTagChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6 && !/\s/.test(value)) {
      setNewTag(value);
    }
  };

  const handleBackFromAddTag = () => {
    setIsAddingTag(false);
    setNewTag(""); // 입력 값 초기화
  };

  return (
    <>
      {isAddingTag ? (
        <>
          <BackButton onClick={handleBackFromAddTag}>뒤로가기</BackButton>
          <Title>새로운 태그 추가</Title>
          <InputBox>
            <input
              type="text"
              value={newTag}
              onChange={handleNewTagChange}
              placeholder="태그를 입력하세요"
            />
          </InputBox>
          <AddTagButton onClick={handleAddCustomTag} disabled={!newTag.trim()}>
            추가
          </AddTagButton>
        </>
      ) : (
        <>
          <BackButton onClick={onBack}>뒤로가기</BackButton>
          <Title>선택한 약: {selectedPill}</Title>
          <TagList>
            {tags.map((tag, index) => (
              <TagItem
                key={index}
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </TagItem>
            ))}
            {customTags.map((tag, index) => (
              <TagItem
                key={index + tags.length}
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
                <button onClick={(e) => handleDeleteButtonClick(e, tag)}>x</button>
              </TagItem>
            ))}
            <TagItem
              onClick={() =>
                customTags.length >= 3
                  ? setIsWarningModalOpen(true)
                  : setIsAddingTag(true)
              }
            >
              +
            </TagItem>
          </TagList>
          <SaveButton onClick={handleSave} disabled={selectedTags.length === 0}>
            등록 완료
          </SaveButton>
        </>
      )}
      {isWarningModalOpen && (
        <WarningModal
          message="태그는 3개까지 등록 가능합니다."
          onClose={() => setIsWarningModalOpen(false)}
        />
      )}
      {isDeleteConfirmModalOpen && (
        <DeleteConfirmModal
          message="해당 태그를 삭제하시겠습니까?"
          onCancel={() => {
            setIsDeleteConfirmModalOpen(false);
            setTagToDelete(null); // 삭제 태그 초기화
          }}
          onConfirm={handleDeleteCustomTag}
        />
      )}
    </>
  );
};

export default TagModal;
