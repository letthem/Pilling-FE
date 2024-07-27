import { PLFrame } from "../../components/PLFrame";
import CalendarTopBar from "./CalendarTopBar";
import add from "./../../assets/Calendar/add.svg";
import {
  Add,
  CalendarContainer,
  CalendarWrapper,
  Ment,
  PlusBtn,
} from "./styles";
import CalendarBox from "./CalendarBox";
import { useState } from "react";
import AddPillModal from "./AddPillModal";

const Calendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <PLFrame>
      <CalendarTopBar />
      <CalendarWrapper>
        <CalendarContainer>
          <CalendarBox />
        </CalendarContainer>
        <PlusBtn onClick={handleAddClick}>
          <Add src={add} />
        </PlusBtn>
        <Ment>복용 약을 기록해보세요!</Ment>
        {isModalOpen && (
          <AddPillModal onClose={handleCloseModal} onSave={handleSaveItem} />
        )}
      </CalendarWrapper>
    </PLFrame>
  );
};

export default Calendar;
