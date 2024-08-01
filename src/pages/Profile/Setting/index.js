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
      setNickname(inputValue);
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
          <EditBtn disabled={inputValue.trim() === ""}>
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
