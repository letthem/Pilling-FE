import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import phone from "../../assets/login/phone2.svg";
import { PLFrame } from "../../components/PLFrame";
import Hello from "./Hello";

const StartPage = () => {
  const location = useLocation();
  const nickname = location.state?.nickname;

  return (
    <PLFrame>
      <Hello nickname={nickname} />
      <Intro>
        <IntroBox>
          <FirstBox>궁금한 약의 정보를 자세히 알 수 있어요</FirstBox>
          <SecondBox>나의 복용 일정을 관리할 수 있어요</SecondBox>
          <ThirdBox>내 근처의 약국을 한눈에 볼 수 있어요</ThirdBox>
        </IntroBox>
        <PhoneImg src={phone} />
        <Gobutton>
          <Link className="link" to="/home">
            바로 시작하기
          </Link>
        </Gobutton>
      </Intro>
    </PLFrame>
  );
};
export default StartPage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 1rem;
  height: 43rem;
  justify-content: center;
  align-items: center;
`;

const PhoneImg = styled.img`
  z-index: 0;
  width: 90%;
  position: absolute;
  top: 4.25rem;
  left: 0.75rem;
`;

const IntroBox = styled.div`
  z-index: 5;
  height: 3rem;
  display: flex;
  text-align: center;
  font-family: "SUIT-Regular";
  font-size: 0.875rem;
`;

const FirstBox = styled.div`
  position: absolute;
  top: 0;
  left: 2.125rem;
  padding: 0.969rem 1.5rem;
  border-radius: 3.75rem;
  background: radial-gradient(
    circle,
    rgba(253, 204, 204, 1) 0%,
    rgba(255, 234, 234, 1) 100%
  );
`;

const SecondBox = styled.div`
  position: absolute;
  top: 6.938rem;
  right: 1.375rem;
  padding: 0.969rem 1.5rem;
  border-radius: 3.75rem;
  background: radial-gradient(
    circle,
    rgba(212, 241, 32, 1) 0%,
    rgba(240, 255, 145, 1) 100%
  );
`;

const ThirdBox = styled.div`
  position: absolute;
  top: 12.188rem;
  left: 3.125rem;
  padding: 0.969rem 1.5rem;
  border-radius: 3.75rem;
  background: radial-gradient(
    circle,
    rgba(253, 204, 204, 1) 0%,
    rgba(255, 234, 234, 1) 100%
  );
`;

const Gobutton = styled.button`
  z-index: 3;
  position: absolute;
  bottom: 9.188rem;
  margin: 0 1.5rem;

  height: 2.75rem;
  border-radius: 0.938rem;
  background: #1b1a1f;
  width: 70%;
  border: none;

  .link {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 500px) {
    /* 소형 휴대폰 */
    bottom: 18rem;
  }

  @media (min-width: 500px) and (max-width: 1024px) {
    margin-top: 3rem;
    bottom: 9.188rem;
  }
`;
