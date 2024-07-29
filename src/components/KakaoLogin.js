import React from "react";
import styled from "styled-components";
import KakaoImg from "../assets/login/KakaoLogo2.svg";

const KakaoLogin = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI; // Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <LoginDiv>
      <KakaoBtn onClick={handleLogin}>
        <img src={KakaoImg} /> <span>카카오톡으로 시작하기</span>
      </KakaoBtn>
      <TermsDiv>
        <p>개인정보 처리방침</p>
        <p>서비스 이용약관</p>
      </TermsDiv>
    </LoginDiv>
  );
};
export default KakaoLogin;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 512px;
  min-height: 844px;
  margin: auto;
  height: auto;
`;

const KakaoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #ffe500;
  width: 100%;
  height: 60px;
  margin: 548px 20px 0;

  span {
    margin-left: 5px;
    font-family: "SUIT-SemiBold";
  }
`;

const TermsDiv = styled.div`
  margin-top: 24px;
  p {
    color: #adadad;
    font-size: 12px;
    margin-bottom: 13px;
  }
`;
