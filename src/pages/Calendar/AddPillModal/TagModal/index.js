import React, { useState, useEffect, useRef, useCallback } from "react";
import { axiosInstance } from "../../../../api/api";
import {
  TopBar,
  TagList,
  TagItem,
  SaveButton,
  Title,
  BackButton,
  TagXBtn,
  AddTagButton,
  TagModalWrapper,
  ReasonText,
  UserAddTagModalWrapper,
  TagModalContainer,
  UserAddTagModalContainer,
  UserAddTagTopBar,
  UserAddTagInputBox,
  UserAddTagTitle,
  UserAddContent,
} from "./styles";
import WarningModal from "../WarningModal";
import DeleteConfirmModal from "../DeleteConfirmModal";
import arrowLeft from "./../../../../assets/arrow-left.svg";
import tagXBtn from "./../../../../assets/Calendar/tagXBtn.svg";
import tagXBtnGray from "./../../../../assets/Calendar/tagXBtnGray.svg";

const TagModal = ({
  selectedPill,
  onSave,
  onClose,
  onBack,
  customTags,
  setCustomTags,
  clickedDate,
}) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false);
  const [tagToDelete, setTagToDelete] = useState(null);
  const inputRef = useRef(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (isAddingTag && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddingTag]);

  const fetchTags = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/tags", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      const basicTags = response.data.slice(0, 17); // 기본 태그 17개
      const userTags = response.data.slice(17); // 사용자 지정 태그
      setTags(basicTags);
      setCustomTags(userTags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }, [setCustomTags]);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSave = async () => {
    const tagObjects = selectedTags.map((tag) => ({ content: tag }));
    try {
      await axiosInstance.post(
        "/schedules",
        {
          medicine_name: selectedPill,
          date: clickedDate,
          tags: tagObjects,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      onSave(selectedPill, selectedTags);
      await fetchTags();
      onClose();
    } catch (error) {
      console.error("Error saving schedule:", error);
    }
  };

  const handleAddCustomTag = async () => {
    if (newTag.trim() && newTag.length <= 6 && !/\s/.test(newTag)) {
      if (customTags.length < 3) {
        try {
          const response = await axiosInstance.post(
            `/tags`,
            {
              content: newTag,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          );

          if (response.status === 200) {
            const updatedCustomTags = [...customTags, { content: newTag }];
            setCustomTags(updatedCustomTags);
            setIsAddingTag(false);
            setNewTag("");
            await fetchTags();
          }
        } catch (error) {
          console.error("Error adding custom tag:", error);
        }
      } else {
        setIsWarningModalOpen(true);
      }
    }
  };

  const handleDeleteCustomTag = async () => {
    try {
      const response = await axiosInstance.delete(`/tags`, {
        params: {
          content: tagToDelete,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (response.status === 200) {
        await fetchTags();
        setIsDeleteConfirmModalOpen(false);
        setTagToDelete(null);
      }
    } catch (error) {
      console.error("Error deleting custom tag:", error);
    }
  };

  const handleDeleteButtonClick = (e, tag) => {
    e.stopPropagation();
    setTagToDelete(tag.content);
    setIsDeleteConfirmModalOpen(true);
  };

  const handleNewTagChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6 && !/\s/.test(value)) {
      setNewTag(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCustomTag();
    }
  };

  const handleBackFromAddTag = () => {
    setIsAddingTag(false);
    setNewTag("");
  };

  const truncateName = (name) => {
    if (!name) return "";
    return name.length > 16 ? `${name.substring(0, 16)}...` : name;
  };

  return (
    <>
      {isAddingTag ? (
        <UserAddTagModalContainer>
          <UserAddTagModalWrapper>
            <UserAddTagTopBar>
              <BackButton onClick={handleBackFromAddTag}>
                <img src={arrowLeft} alt="backBtn" />
              </BackButton>
              <UserAddTagTitle>질병 태그 등록</UserAddTagTitle>
              <div style={{ width: "1.25rem" }} />
            </UserAddTagTopBar>
            <UserAddContent>
              <UserAddTagInputBox
                ref={inputRef}
                type="text"
                value={newTag}
                onChange={handleNewTagChange}
                onKeyDown={handleKeyPress}
                placeholder="직접 입력(띄어쓰기 없이 6자 이내)"
              />
              <AddTagButton
                onClick={handleAddCustomTag}
                disabled={!newTag.trim()}
              >
                저장
              </AddTagButton>
            </UserAddContent>
          </UserAddTagModalWrapper>
        </UserAddTagModalContainer>
      ) : (
        <TagModalContainer>
          <TagModalWrapper>
            <TopBar>
              <BackButton onClick={onBack}>
                <img src={arrowLeft} alt="backBtn" />
              </BackButton>
              <Title>{truncateName(selectedPill)}</Title>
              <div style={{ width: "1.25rem" }} />
            </TopBar>
            <ReasonText>복용사유를 선택하세요</ReasonText>
            <TagList>
              {tags.map((tag, index) => (
                <TagItem
                  key={index}
                  selected={selectedTags.includes(tag.content)}
                  onClick={() => handleTagClick(tag.content)}
                >
                  <span>{tag.content}</span>
                </TagItem>
              ))}
              {customTags.map((tag, index) => (
                <TagItem
                  key={index + tags.length}
                  selected={selectedTags.includes(tag.content)}
                  onClick={() => handleTagClick(tag.content)}
                >
                  <span>{tag.content}</span>
                  <TagXBtn onClick={(e) => handleDeleteButtonClick(e, tag)}>
                    <img
                      src={
                        selectedTags.includes(tag.content)
                          ? tagXBtn
                          : tagXBtnGray
                      }
                      alt="tagXBtn"
                    />
                  </TagXBtn>
                </TagItem>
              ))}
              <TagItem
                onClick={() =>
                  customTags.length >= 3
                    ? setIsWarningModalOpen(true)
                    : setIsAddingTag(true)
                }
              >
                <span>+</span>
              </TagItem>
            </TagList>
            <SaveButton
              onClick={handleSave}
              disabled={selectedTags.length === 0}
            >
              <span>등록 완료</span>
            </SaveButton>
          </TagModalWrapper>
        </TagModalContainer>
      )}
      {isWarningModalOpen && (
        <WarningModal
          message="태그는 3개까지 추가 가능합니다"
          onClose={() => setIsWarningModalOpen(false)}
        />
      )}
      {isDeleteConfirmModalOpen && (
        <DeleteConfirmModal
          message="해당 태그를 삭제하시겠습니까?"
          onCancel={async () => {
            await fetchTags();
            setIsDeleteConfirmModalOpen(false);
            setTagToDelete(null);
          }}
          onConfirm={handleDeleteCustomTag}
        />
      )}
    </>
  );
};

export default TagModal;
