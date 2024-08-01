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

const Profile = () => {
  const nav = useNavigate();

  return (
    <PLFrame>
      <ProfileImg>
        <img src={profile} alt="profileImg" />
      </ProfileImg>
      <ProfileInfo>
        <NickName>
          <span className="nickname">
            나는사자
            <div className="nickname_underline" />
          </span>
          <span className="nickname_tail">&nbsp;님</span>
        </NickName>
        <SettingImg>
          <img
            src={setting}
            alt="settiingImg"
            onClick={() => nav("/profile/setting")}
          />
        </SettingImg>
      </ProfileInfo>
      <ProfileContents>
        <NextPageWrapper>
          <div className="leftPart">
            <div className="greenIcon">
              <img src={scrap} alt="scrap" />
            </div>
            <span>스크랩한 약</span>
          </div>
          <img
            className="arrowRight"
            src={arrowLeft}
            alt="arrowRight"
            onClick={() => nav("/profile/scrap")}
          />
        </NextPageWrapper>
        <NextPageWrapper>
          <div className="leftPart">
            <div className="greenIcon">
              <img src={note} alt="note" />
            </div>
            <span>나의 약 복용기록</span>
          </div>
          <img
            className="arrowRight"
            src={arrowLeft}
            alt="arrowRight"
            onClick={() => nav("/profile/record")}
          />
        </NextPageWrapper>
      </ProfileContents>
    </PLFrame>
  );
};

export default Profile;
