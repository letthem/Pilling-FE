import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { PLFrame } from "../components/PLFrame";
import mediImg from "../assets/Home/medicineRight.svg";

const AuthKakao = () => {
  const navigate = useNavigate();
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);
  const code = new URL(window.location.href).searchParams.get("code");
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

      const res = await axios.post(
        "http://52.78.47.226:8000/auth/kakao/login",
        //`${process.env.REACT_APP_KAKAO_REDIRECT_URI}/?code=${code}`,
        {
          access_code: code,
        },
        {
          headers,
        }
      );
      const accessToken = res.data.accessToken;
      console.log("accessToken:", accessToken);

      navigate("/Join");
    } catch (e) {
      console.log("Error:", e);
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
    font-size: 10px;
    font-family: "SUIT-Bold";
  }
`;
