import React, { useEffect, useRef, useState } from "react";
import { PLFrame } from "../../../components/PLFrame";
import TopBar from "../../../components/TobBar";
import profile from "../../../assets/Profile/profileImg.svg";
import pencil from "../../../assets/Profile/pencil.svg";
import {
  EditBtn,
  InputContainer,
  NickNameInput,
  NickNameWrapper,
  ProfileImg,
} from "./styles";
import { useRecoilState } from "recoil";
import { nicknameState } from "../../../recoil/atoms/atom";

const Setting = () => {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [inputValue, setInputValue] = useState(nickname);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleConfirmClick = () => {
    setNickname(inputValue);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleConfirmClick();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <PLFrame>
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
          <EditBtn>
            {isEditing ? (
              <span onClick={handleConfirmClick}>확인</span>
            ) : (
              <img onClick={handleEditClick} src={pencil} alt="" />
            )}
          </EditBtn>
        </InputContainer>
      </NickNameWrapper>
    </PLFrame>
  );
};

export default Setting;
