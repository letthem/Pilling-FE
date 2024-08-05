import { useLocation } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import phone from "../../assets/login/phone2.svg";
import { PLFrame } from "../../components/PLFrame";
import Hello from "./Hello";
import phoneImg from "../../assets/login/Slice 2.svg";

const StartPage = () => {
  const location = useLocation();
  const nickname = location.state?.nickname;

  return (
    <PLFrame>
      <StartWrapper>
        <Hello nickname={nickname} />
        <Intro>
          <IntroBox>
            <FirstBox>
              <span>궁금한 약의 정보</span>를 쉽고 편하게 알 수 있어요
            </FirstBox>
            <SecondBox>
              달력으로 <span>나의 복용 기록</span>을 관리할 수 있어요
            </SecondBox>
            <ThirdBox>
              <span>약국 지도, 24시간 약국</span>을 한눈에 볼 수 있어요
            </ThirdBox>
          </IntroBox>
          <PhoneImg src={phoneImg} />
          <Gobutton>
            <Link className="link" to="/home">
              바로 시작하기
            </Link>
          </Gobutton>
        </Intro>
      </StartWrapper>
    </PLFrame>
  );
};
export default StartPage;

const StartWrapper = styled.div`
  min-height: 667px;
  height: 100%;;
  display: flex;
  flex-direction: column;
`;


const PhoneImg = styled.img`
  z-index: 0;
  width: 100%;
  max-width: 37.5rem;
  /* position: absolute; */
  position: fixed;
  /* top: 4.375rem; */
  /* bottom: 0.9375rem; */
  /* left: 4.6875rem; */
  scale: 130%;
  bottom: -5px;
  left: 20%;
  /* transform: translate(-50%, -50%); */

  @media (min-width: 760px){
    left: 35%;
  }


  `;

  const Intro = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  
const IntroBox = styled.div`
  z-index: 5;
  position: fixed;
  /* top: 4.375rem; */
  /* height: 3rem;
  width: 100%; */
  bottom: 500px;
  display: flex;
  text-align: center;
  line-height: 120%;
  font-size: 1rem;


  
  @media (max-width: 24.375rem){
    font-size: 0.8125rem;
    bottom: 440px;

  }

  span {
    font-family: "SUIT-Bold";
  }
`;

const FirstBox = styled.div`
  width: calc(100%-64px);
  min-width: 14.375rem;
  margin: 0 22px 0 42px;
  padding: 0.9375rem 1.5rem;
  /* padding: 0.969rem 1.5rem; */
  border-radius: 3.75rem;
  background: radial-gradient(
    circle,
    rgba(253, 204, 204, 1) 0%,
    rgba(255, 234, 234, 1) 100%
  );
`;

const SecondBox = styled.div`
  position: absolute;
  width: calc(100%-4rem);
  margin: 0 1.375rem 0 2.625rem;
  top: 130px;
  padding: 0.969rem 1.5rem;
  border-radius: 3.75rem;
  background: radial-gradient(
    circle,
    rgba(196, 242, 97, 1) 0%,
    rgba(220, 255, 145, 1) 35%
  );
  transform: rotate(3.649deg);
`;

const ThirdBox = styled.div`
  position: absolute;
  top: 230px;
  left: 3.125rem;
  padding: 0.969rem 1.5rem;
  border-radius: 3.75rem;
  background: radial-gradient(
    circle,
    rgba(253, 204, 204, 1) 0%,
    rgba(255, 234, 234, 1) 100%
  );
  transform: rotate(-5.937deg);
`;

const Gobutton = styled.button`
  z-index: 3;
  position: fixed;
  bottom: 0.875rem;
  height: 3.75rem;
  border-radius: 1.25rem;
  background: #1b1a1f;
  backdrop-filter: blur(0.5rem);
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
  max-width: 32rem;
  color: #fff;
  text-align: center;
  font-family: "SUIT-SemiBold";
  font-size: 1.125rem;
  line-height: 100%;
  .link {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;
