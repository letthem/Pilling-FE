import React, { useState, useEffect } from "react";
import { PLFrame } from "../../components/PLFrame";
import CalendarTopBar from "./CalendarTopBar";
import add from "./../../assets/Calendar/add.svg";
import {
  Add,
  CalendarContainer,
  CalendarWrapper,
  Ment,
  PlusBtn,
  ItemList,
  Item,
  DeleteButton,
  CheckboxContainer,
  StyledCheckbox,
  HiddenCheckbox,
  PillName,
  TagItemBox,
  TagListBox,
} from "./styles";
import CalendarBox from "./CalendarBox";
import AddPillModal from "./AddPillModal";
import ConfirmModal from "./DeletePillModal";
import { format } from "date-fns";
import trashBin from "./../../assets/Calendar/trashBin.svg";

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedDate, setClickedDate] = useState(null);
  const [items, setItems] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // 처음 마운트될 때 오늘 날짜로 상태 초기화
  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    setClickedDate(today);
  }, []);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveItem = (item) => {
    setItems([...items, { ...item, date: clickedDate, taken: false }]);
  };

  const handleDeleteItem = (index) => {
    setDeleteIndex(index);
    setIsConfirmModalOpen(true);
  };

  const confirmDeleteItem = () => {
    setItems(items.filter((_, i) => i !== deleteIndex));
    setIsConfirmModalOpen(false);
    setDeleteIndex(null);
  };

  const cancelDeleteItem = () => {
    setIsConfirmModalOpen(false);
    setDeleteIndex(null);
  };

  const handleCheckboxChange = (itemIndex) => {
    const newItems = items.map((item, i) =>
      i === itemIndex ? { ...item, taken: !item.taken } : item
    );
    setItems(newItems);
  };

  const filteredItems = items.filter((item) => item.date === clickedDate);

  return (
    <PLFrame>
      <CalendarTopBar />
      <CalendarWrapper>
        <CalendarContainer>
          <CalendarBox
            clickedDate={clickedDate}
            setClickedDate={setClickedDate}
            items={items}
          />
          <ItemList>
            {filteredItems.map((item, index) => (
              <Item key={index}>
                <CheckboxContainer onClick={() => handleCheckboxChange(index)}>
                  <HiddenCheckbox
                    checked={item.taken}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <StyledCheckbox checked={item.taken} />
                </CheckboxContainer>
                <PillName>{item.pill}</PillName>
                <TagListBox>
                  {item.tags && item.tags.length > 0 ? (
                    item.tags.map((tag, index) => (
                      <TagItemBox key={index}>
                        <span>{tag}</span>
                      </TagItemBox>
                    ))
                  ) : (
                    <div>태그가 없습니다.</div>
                  )}
                </TagListBox>
                <DeleteButton
                  onClick={() => handleDeleteItem(items.indexOf(item))}
                >
                  <img src={trashBin} alt="trashBin" />
                </DeleteButton>
              </Item>
            ))}
          </ItemList>
        </CalendarContainer>
        <PlusBtn onClick={handleAddClick}>
          <Add src={add} />
        </PlusBtn>
        <Ment>복용 약을 기록해보세요!</Ment>
        {isModalOpen && (
          <AddPillModal onClose={handleCloseModal} onSave={handleSaveItem} />
        )}
        {isConfirmModalOpen && (
          <ConfirmModal
            message="해당 기록을 정말 삭제하시겠습니까?"
            onConfirm={confirmDeleteItem}
            onCancel={cancelDeleteItem}
          />
        )}
      </CalendarWrapper>
    </PLFrame>
  );
};

export default Calendar;
