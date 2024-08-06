import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { PLFrame } from "../components/PLFrame";
import mediImg from "../assets/Home/medicineRight.svg";
import { useRecoilState } from "recoil";
import { nicknameState, userInfoState } from "../recoil/atoms/atom";
import { axiosInstance } from "../api/api";
import greenOne from "../assets/login/greenIcon.svg";

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
    console.log("응답보냄!");
    if (accessTokenFetching) return; // Return early if fetching

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
        }
      );

      const accessToken = res.data.access_token;
      localStorage.setItem("access_token", accessToken);

      if ("new" in res.data && res.data.new === true) {
        const alreadyId = res.data.new;
        navigate("/join");
      } else {
        navigate("/home");
      }
    } catch (e) {
      console.error("Error:", e); // console.error로 오류 메시지 출력
    } finally {
      setAccessTokenFetching(false);
    }
  };

  useEffect(() => {
    if (code) {
      kakoLogin();
    }
  }, [code]);

  return (
    <PLFrame>
      <AnimateDiv>
        <p>필링과 함께 하러 가는 중!</p>
        <imgBox>
          <img className="one" src={greenOne} />
        </imgBox>
      </AnimateDiv>
    </PLFrame>
  );
};

export default AuthKakao;

const imgBox = styled.div`
  position: relative;
  img {
  }
`;

const AnimateDiv = styled.div`
  width: 100%;
  min-height: 40.25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #000;
  text-align: center;
  font-family: "SUIT-SemiBold";
  font-size: 1rem;
  line-height: 100%;

  p {
    text-align: center;
    margin-bottom: 1.25rem;
  }
`;
