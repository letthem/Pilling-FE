import React, { useState, useEffect } from "react";
import { PLFrame } from "../../components/PLFrame";
import TopBar from "../../components/TobBar";
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
import Navbar from "./../../components/Navbar";
import { axiosInstance } from "../../api/api";

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
    fetchSchedules();
  }, []);

  // /schedules 엔드포인트에서 데이터를 가져오는 함수
  const fetchSchedules = async () => {
    try {
      const response = await axiosInstance.get("/schedules", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    }
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveItem = (item) => {
    setItems([...items, { ...item, date: clickedDate, taken: false }]);
    fetchSchedules(); // 데이터를 새로고침
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

  const handleCheckboxChange = async (item) => {
    const updatedItem = { ...item, completed: !item.completed };
    try {
      await axiosInstance.patch(
        `/schedules/${item.schedule_id}/complete`,
        {
          schedule_id: item.schedule_id,
          pilling_user_id: item.pilling_user_id,
          medicine_name: item.medicine_name,
          datetime: item.datetime,
          tags: item.tags,
          completed: updatedItem.completed,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const newItems = items.map((i) =>
        i.schedule_id === item.schedule_id ? updatedItem : i
      );
      setItems(newItems);
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };

  const filteredItems = items.filter((item) => item.date === clickedDate);

  // 이름 줄이는 함수
  const truncateName = (name) => {
    return name.length > 14 ? `${name.substring(0, 14)}...` : name;
  };

  return (
    <PLFrame>
      <TopBar topBarName={"복용일지"} />
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
                <CheckboxContainer onClick={() => handleCheckboxChange(item)}>
                  <HiddenCheckbox
                    checked={item.completed}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <StyledCheckbox checked={item.completed} />
                </CheckboxContainer>
                <PillName>{truncateName(item.medicine_name)}</PillName>
                <TagListBox>
                  {item.tags && item.tags.length > 0 ? (
                    item.tags.map((tag, tagIndex) => (
                      <TagItemBox key={tagIndex}>
                        <span>{tag.content}</span>
                      </TagItemBox>
                    ))
                  ) : (
                    <div>태그가 없습니다.</div>
                  )}
                </TagListBox>
                <DeleteButton onClick={() => handleDeleteItem(index)}>
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
          <AddPillModal
            onClose={handleCloseModal}
            onSave={handleSaveItem}
            clickedDate={clickedDate}
          />
        )}
        {isConfirmModalOpen && (
          <ConfirmModal
            message="해당 기록을 정말 삭제하시겠습니까?"
            onConfirm={confirmDeleteItem}
            onCancel={cancelDeleteItem}
          />
        )}
      </CalendarWrapper>
      <Navbar />
    </PLFrame>
  );
};

export default Calendar;
