import React, { useState } from "react";
import styled from "styled-components";
import pill from "../../../assets/Profile/pillItem.svg";
import trash from "../../../assets/Profile/trash.svg";
import arrowRightGray from "../../../assets/Profile/arrow-right-gray.svg";
import CancelConfirmModal from "../../../components/CancelConfirmModal";
import { axiosInstance } from "../../../api/api";
import { useNavigate } from "react-router";

const PillItem = ({ pillName, bgColor, onDelete, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useNavigate();

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axiosInstance.delete(`/scraps/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      onDelete(id);
    } catch (error) {
      console.error("Error deleting pill:", error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleDetailClick = () => {
    nav(`/home/find/${pillName}`);
  };

  const truncateName = (name) => {
    if (!name) return "";
    return name.length > 15 ? `${name.substring(0, 15)}...` : name;
  };

  return (
    <>
      <PillItemWrapper>
        <PillImg $bgColor={bgColor}>
          <img src={pill} alt="pill" />
        </PillImg>
        <PillBox>
          <PillInfo>
            <PillName>{truncateName(pillName)}</PillName>
            <DetailBtn onClick={handleDetailClick}>
              <span>약 정보</span>
              <img src={arrowRightGray} alt="arrowRightGray" />
            </DetailBtn>
          </PillInfo>
          <DeleteBtn onClick={handleDeleteClick}>
            <img src={trash} alt="trashBin" />
          </DeleteBtn>
        </PillBox>
      </PillItemWrapper>
      {isModalOpen && (
        <CancelConfirmModal
          message={"해당 약을 목록에서 삭제하시겠습니까?"}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default PillItem;

const PillItemWrapper = styled.div`
  width: 100%;
  height: 4.75rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const PillImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.$bgColor || "#c4f261"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
  }
`;

const PillBox = styled.div`
  width: calc(100% - 3.3125rem);
  margin-left: 0.8125rem;
  border-radius: 1.25rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(115, 123, 152, 0.25);

  height: 4.75rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PillInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const PillName = styled.div`
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 0.9375rem;
  line-height: 1;
`;

const DetailBtn = styled.div`
  margin-top: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    color: #adadad;
    font-family: "SUIT-Regular";
    font-size: 0.75rem;
    line-height: 1;
  }
`;

const DeleteBtn = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
