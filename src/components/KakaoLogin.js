import React from "react";
import styled from "styled-components";
import KakaoImg from "../assets/login/KakaoLogo2.svg";
import withPilling from "../assets/login/withPilling.svg";
import logoImg from "../assets/login/Logo.svg";

const KakaoLogin = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = "http://localhost:3000/redirect/auth/kakao"; // Redirect URI 나중에 배포 후 바꿔야 함!!!!!!!!!!!!!!!!!
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <LoginWrapper>
      <LogoImg src={logoImg} />
      <Greenfield></Greenfield>
      <IntroSection>
        어렵게만 다가왔던 약, <br /> 이제부터 필링과 함께 친해져요!
      </IntroSection>
      <LoginDiv>
        <PillingImg src={withPilling} alt="withPilling" />
        <KakaoBtn onClick={handleLogin}>
          <img src={KakaoImg} alt="kakao logo" />{" "}
          <span>필링 이용하러 가기</span>
        </KakaoBtn>
        <TermsDiv>
          <a href="https://ritzy-lodge-c78.notion.site/ac32066211a541fe88b785544a214841">
            서비스 이용약관
          </a>
          <a href="https://www.notion.so/02d328e5a3f4451a8f3f5c014c4af474?d=c44709def56340548a6576292eedc3fd#1ecdb0b8927e461688afe88130b38e20">
            개인정보 처리방침
          </a>
        </TermsDiv>
      </LoginDiv>
    </LoginWrapper>
  );
};
export default KakaoLogin;

const LoginWrapper = styled.div`
  position: relative;
`;

const IntroSection = styled.div`
  margin-left: 2rem;
  color: #1b1a1f;
  font-family: "SUIT-Medium";
  font-size: 1.125rem;
  line-height: 1.5rem;
  z-index: 10;
  position: relative;
`;

const Greenfield = styled.div`
  width: calc(100% - 8.875rem);
  height: 19.75rem;
  border-radius: 19.75rem;
  background: #c4f261;
  filter: blur(7.1875rem);
  z-index: 0;
  position: absolute;
  top: -1.375rem;
  right: -4.25rem;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 32rem;
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0.9375rem;
`;

const LogoImg = styled.img`
  z-index: 100;
  font-family: "Super_Plants";
  font-size: 4rem;
  text-align: left;
  margin: 5.5294rem 0 1.75rem 1.7506rem;
  position: relative;
`;

const PillingImg = styled.img`
  z-index: 1;
  position: absolute;
  bottom: 1.875rem;
  width: 100%;
  max-height: 30rem;
`;

const KakaoBtn = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 1.25rem;
  background: #c4f261;
  width: 21.375rem;
  height: 3.75rem;
  margin: 0 1.25rem;
  cursor: pointer;
  position: fixed;
  bottom: 4.75rem;

  span {
    margin-left: 0.3125rem;
    font-family: "SUIT-SemiBold";
  }
`;

const TermsDiv = styled.div`
  margin-top: 0.3125rem;
  text-align: center;
  color: #d1d3d9;
  font-size: 0.75rem;
  cursor: pointer;

  a {
    display: block;
    color: #d1d3d9;
    margin-bottom: 0.5625rem;
  }

  a:last-child {
    margin-bottom: 0;
  }
`;
