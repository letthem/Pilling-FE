import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { PLFrame } from "../components/PLFrame";
import mediImg from "../assets/Home/medicineRight.svg";
import { useRecoilState } from "recoil";
import { nicknameState, userInfoState } from "../recoil/atoms/atom";
import { axiosInstance } from "../api/api";

const AuthKakao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useRecoilState(nicknameState);


  const [accessTokenFetching, setAccessTokenFetching] = useState(false);
  const code = new URLSearchParams(location.search).get("code");
  console.log("code:", code);
  const headers = {
    "Content-Type": "application/json;charset=utf-8",
  };

  //인가 코드 백으로 보내는 코드
  const kakoLogin = async () => {
    if (accessTokenFetching) return; // Return early if fetching

    console.log("getAccessToken 호출");

    try {
      setAccessTokenFetching(true);

      const res = await axiosInstance.post(
        `/auth/kakao/login`,
        //`${process.env.REACT_APP_KAKAO_REDIRECT_URI}/?code=${code}`,
        {
          access_code: code,
        },
        {
          headers,
        })
      const accessToken = res.data.access_token;
      console.log("accessToken:", accessToken);

      localStorage.setItem('access_token', accessToken);

      navigate("/Join");
    } catch (e) {
      console.error("Error:", e); // console.error로 오류 메시지 출력
     console.log("code:", code);

    } finally {
      console.log("code:", code);
      setAccessTokenFetching(false);

    }
  };



  useEffect(() => {
    console.log("")
    if (code) {
      kakoLogin();
    }
  }, [code]);

  return (
    <PLFrame>
      <AnimateDiv>
        <p>PILLING</p>
        <img src={mediImg} />
        <span>로그인 중입니다. 잠시만 기다려주세요!</span>
      </AnimateDiv>
    </PLFrame>
  );
};

export default AuthKakao;

const AnimateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem;
  font-family: "Super_Plants";

  img {
    margin: 2.5rem 0;
  }

  span {
    color: black;
    font-size: 0.625rem;
    font-family: "SUIT-Bold";
  }
`;
