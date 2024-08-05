import React from "react";
import styled from "styled-components";
import KakaoImg from "../assets/login/KakaoLogo2.svg";

const KakaoLogin = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = 'http://localhost:3000/redirect/auth/kakao'; // Redirect URI 나중에 배포 후 바꿔야 함!!!!!!!!!!!!!!!!!
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <LoginDiv>
      <KakaoBtn onClick={handleLogin}>
        <img src={KakaoImg} alt="kakao logo" /> <span>카카오톡으로 시작하기</span>
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
  max-width: 32rem;
  min-height: 52.75rem;
  margin: auto;
  height: auto;
`;

const KakaoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 1.25rem;
  background-color: #ffe500;
  width: 100%;
  height: 3.75rem;
  margin: 34.25rem 1.25rem 0;

  span {
    margin-left: 0.3125rem;
    font-family: "SUIT-SemiBold";
  }
`;

const TermsDiv = styled.div`
  margin-top: 1.5rem;
  p {
    color: #adadad;
    font-size: 0.75rem;
    margin-bottom: 0.8125rem;
  }
`;
