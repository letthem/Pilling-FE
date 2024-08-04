import React, { useEffect, useRef, useState } from "react";
import { PLFrame } from "../../../components/PLFrame";
import TopBar from "../../../components/TobBar";
import profile from "../../../assets/Profile/profileImg.svg";
import pencil from "../../../assets/Profile/pencil.svg";
import {
  BottomBox,
  BottomLine,
  BottomWrapper,
  EditBtn,
  InputContainer,
  NickNameInput,
  NickNameWrapper,
  ProfileImg,
  SettingWrapper,
} from "./styles";
import { useRecoilState } from "recoil";
import { nicknameState } from "../../../recoil/atoms/atom";
import { useNavigate } from "react-router";
import CancelConfirmModal from "../../../components/CancelConfirmModal";

const Setting = () => {
  const [userNickname, setUserNickname] = useRecoilState(nicknameState);
  const [inputValue, setInputValue] = useState(userNickname);
  const [isEditing, setIsEditing] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const inputRef = useRef(null);
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;

    // 특수문자, 띄어쓰기 제거
    const filteredValue = value.replace(/[^a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
    if (filteredValue.length <= 5) {
      setInputValue(filteredValue);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleConfirmClick = () => {
    if (inputValue.trim() !== "") {
      setUserNickname(inputValue);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleConfirmClick();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // 로컬 스토리지에서 액세스 토큰 제거
    nav("/"); // 로그인 페이지로 리다이렉트
  };

  const handleLogoutClick = () => {
    setIsLogoutConfirmOpen(true);
  };

  const handleLogoutConfirm = () => {
    setIsLogoutConfirmOpen(false);
    handleLogout();
  };

  const handleLogoutCancel = () => {
    setIsLogoutConfirmOpen(false);
  };

  return (
    <PLFrame>
      <SettingWrapper>
        <TopBar topBarName={"나의 프로필"} />
        <ProfileImg>
          <img src={profile} alt="profileImg" />
        </ProfileImg>
        <NickNameWrapper>
          <InputContainer>
            <NickNameInput
              ref={inputRef}
              value={inputValue}
              placeholder="닉네임을 입력하세요"
              onChange={handleInputChange}
              readOnly={!isEditing}
              onKeyDown={handleKeyPress}
            />
            <EditBtn disabled={inputValue.trim() === ""}>
              {isEditing ? (
                <span onClick={handleConfirmClick}>확인</span>
              ) : (
                <img onClick={handleEditClick} src={pencil} alt="pencil" />
              )}
            </EditBtn>
          </InputContainer>
        </NickNameWrapper>
        <BottomWrapper>
          <BottomBox>탈퇴</BottomBox>
          <BottomLine>|</BottomLine>
          <BottomBox onClick={handleLogoutClick}>로그아웃</BottomBox>
        </BottomWrapper>
        {isLogoutConfirmOpen && (
          <CancelConfirmModal
            message={"정말 로그아웃 하시겠습니까?"}
            onConfirm={handleLogoutConfirm}
            onCancel={handleLogoutCancel}
          />
        )}
      </SettingWrapper>
    </PLFrame>
  );
};

export default Setting;
