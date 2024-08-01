import React, { useEffect, useRef, useState } from "react";
import { PLFrame } from "../../../components/PLFrame";
import TopBar from "../../../components/TobBar";
import profile from "../../../assets/Profile/profileImg.svg";
import pencil from "../../../assets/Profile/pencil.svg";
import {
  EditBtn,
  EditButton,
  InputContainer,
  NickNameInput,
  NickNameWrapper,
  ProfileImg,
} from "./styles";

const Setting = () => {
  const [inputValue, setInputValue] = useState("나는사자");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
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
          <EditBtn onClick={handleEditClick}>
            {isEditing ? <span>확인</span> : <img src={pencil} alt="" />}
          </EditBtn>
        </InputContainer>
      </NickNameWrapper>
    </PLFrame>
  );
};

export default Setting;
