import React from "react";
import { PLFrame } from "../../components/PLFrame";
import profile from "../../assets/Profile/profileImg.svg";
import setting from "../../assets/Profile/setting.svg";
import scrap from "../../assets/Profile/scrap.svg";
import note from "../../assets/Profile/note.svg";
import arrowLeft from "../../assets/arrow-left.svg";

import {
  NextPageWrapper,
  NickName,
  ProfileContents,
  ProfileImg,
  ProfileInfo,
  SettingImg,
} from "./styles";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { nicknameState } from "../../recoil/atoms/atom";

const Profile = () => {
  const nav = useNavigate();
  const nickname = useRecoilValue(nicknameState);

  return (
    <PLFrame>
      <ProfileImg>
        <img src={profile} alt="profileImg" />
      </ProfileImg>
      <ProfileInfo>
        <NickName>
          <span className="nickname">
            {nickname}
            <div className="nickname_underline" />
          </span>
          <span className="nickname_tail">&nbsp;님</span>
        </NickName>
        <SettingImg onClick={() => nav("/profile/setting")}>
          <img src={setting} alt="settiingImg" />
        </SettingImg>
      </ProfileInfo>
      <ProfileContents>
        <NextPageWrapper onClick={() => nav("/profile/scrap")}>
          <div className="leftPart">
            <div className="greenIcon">
              <img src={scrap} alt="scrap" />
            </div>
            <span>스크랩한 약</span>
          </div>
          <img className="arrowRight" src={arrowLeft} alt="arrowRight" />
        </NextPageWrapper>
        <NextPageWrapper onClick={() => nav("/profile/record")}>
          <div className="leftPart">
            <div className="greenIcon">
              <img src={note} alt="note" />
            </div>
            <span>나의 약 복용기록</span>
          </div>
          <img className="arrowRight" src={arrowLeft} alt="arrowRight" />
        </NextPageWrapper>
      </ProfileContents>
    </PLFrame>
  );
};

export default Profile;
