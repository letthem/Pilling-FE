import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import phone from "../assets/login/phone.svg";

const StartPage = () => {
  const location = useLocation();
  const nickname = location.state?.nickname;

  return (
    <StartWrapper>
      <Hello>
        <p>
          <span className="highlight">{nickname}</span>
          <span>님</span>
        </p>
        <p>필링에 오신걸 환영해요!</p>
      </Hello>
      <Intro>
        <div className="first">궁금한 약의 정보를 자세히 알 수 있어요</div>
        <div className="second">나의 복용 일정을 관리할 수 있어요</div>
        <div className="third">내 근처의 약국을 한눈에 볼 수 있어요</div>
        <PhoneImg src={phone} />
        <button>
          <Link className="link" to="/home">
            바로 시작하기
          </Link>
        </button>
      </Intro>
    </StartWrapper>
  );
};
export default StartPage;

const StartWrapper = styled.div`
  max-width: 512px;
  min-height: 844px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hello = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1b1a1f;
  text-align: center;
  font-family: "SUIT-Bold";
  font-size: 1.5rem;
  line-height: normal;
  margin-bottom: 2.5rem;

  p {
    position: relative;
    z-index: 1;
  }
  .highlight {
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.8em;
      background: #d4f120;
      z-index: -1;
    }
  }
`;

const Intro = styled.div`
  width: 100%;
  margin: 3.438rem 1.875rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    z-index: 5;
    width: 40%;
    height: 0.813rem;
    color: #1b1a1f;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "SUIT-Medium";
    font-size: 0.563rem;
    border-radius: 3.75rem;
  }

  .first {
    position: absolute;
    top: -2.813rem;
    padding: 0.625rem;
    background: radial-gradient(
      circle,
      rgba(253, 204, 204, 1) 0%,
      rgba(255, 234, 234, 1) 100%
    );
  }

  .second {
    position: absolute;
    top: 1.875rem;
    right: 4.375rem;
    padding: 0.625rem;
    background: radial-gradient(
      circle,
      rgba(212, 241, 32, 1) 0%,
      rgba(240, 255, 145, 1) 100%
    );
  }

  .third {
    position: absolute;
    top: 5.625rem;
    padding: 0.625rem;
    background: radial-gradient(
      circle,
      rgba(253, 204, 204, 1) 0%,
      rgba(255, 234, 234, 1) 100%
    );
  }

  button {
    z-index: 3;
    position: absolute;
    bottom: 2.5rem;
    width: 65%;
    height: 2.75rem;
    border-radius: 0.938rem;
    background: #1b1a1f;
    border: none;

    .link {
      color: white;
      text-decoration: none;
    }
  }
`;

const PhoneImg = styled.img`
  z-index: 0;
  width: 70%;
`;
