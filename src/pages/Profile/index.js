import React, { useState, useEffect } from "react";
import { PLFrame } from "../../components/PLFrame";
import profile from "../../assets/Profile/profileImg.svg";
import setting from "../../assets/Profile/setting.svg";
import scrap from "../../assets/Profile/scrap.svg";
import note from "../../assets/Profile/note.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import Navbar from "../../components/Navbar";
import {
  NextPageWrapper,
  NickName,
  ProfileContents,
  ProfileImg,
  ProfileInfo,
  SettingImg,
} from "./styles";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../api/api";

const Profile = () => {
  const nav = useNavigate();
  const [userNickname, setUserNickname] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState(profile);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/users/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setUserNickname(response.data.nickname);
        setProfileImageUrl(response.data.picture || profile); // 프로필 이미지 URL 설정
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <PLFrame>
      <ProfileImg>
        <img src={profileImageUrl} alt="profileImg" />
      </ProfileImg>
      <ProfileInfo>
        <NickName>
          <span className="nickname">
            {userNickname}
            <div className="nickname_underline" />
          </span>
          <span className="nickname_tail">&nbsp;님</span>
        </NickName>
        <SettingImg onClick={() => nav("/profile/setting")}>
          <img src={setting} alt="settingImg" />
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
        <Navbar />
      </ProfileContents>
    </PLFrame>
  );
};

export default Profile;
