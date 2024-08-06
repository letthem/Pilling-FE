import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../api/api";
import { PLFrame } from "../../components/PLFrame";
import { useSetRecoilState } from "recoil";
import { nicknameState } from "../../recoil/atoms/atom";

const Join = () => {
  const [name, setName] = useState("");
  const [warn, setWarn] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const setUserNickname = useSetRecoilState(nicknameState);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > window.visualViewport.height) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const nickname = e.target.value;
    const regExp = /[ {}[\]?.,;:|)*~!^\-_+<>@#$%&'"\\(=]/gi;

    if (nickname.length > 5) {
      setWarn("5글자 이내로 설정해야 해요");
    } else if (regExp.test(nickname)) {
      setWarn("특수문자는 사용할 수 없어요");
    } else {
      setWarn("");
    }

    setName(nickname);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.patch(
        `/users`,
        { nickname: name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      );

      setUserNickname(name);
      navigate("start", {
        state: { nickname: name },
      });

    } catch (error) {
      setWarn("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const isNicknameValid = name.length > 0 && warn === "";

  return (
    <PLFrame>
      <Formtag onSubmit={handleSubmit}>
        <JoinBox>
          <p>가입을 축하드려요!</p>
          <p>어떻게 불러드리면 될까요?</p>
          <JoinInput onChange={handleChange} value={name} warn={!!warn} />
          <MessageWrapper>
            {warn ? (
              <p className="warning">{warn}</p>
            ) : (
              !name && (
                <>
                  <p className="instruction">
                    · 띄어쓰기 없이 1~5자 내로 입력해 주세요
                  </p>
                  <p className="instruction">
                    · 한글, 영문, 숫자 모두 가능해요
                  </p>
                </>
              )
            )}
          </MessageWrapper>
        </JoinBox>
        <JoinCheckBox
          type="submit"
          disabled={!isNicknameValid}
          valid={isNicknameValid}
          isKeyboardOpen={isKeyboardOpen}
        >
          확인
        </JoinCheckBox>
      </Formtag>
    </PLFrame>
  );
};

export default Join;

const Formtag = styled.form`
  position: relative;
  min-height: 41.5rem;
  margin: 0 1.5rem;
`;

const JoinBox = styled.div`
  position: absolute;
  width: 100%;
  top: 5.063rem;
  p {
    color: #1b1a1f;
    font-family: "SUIT-Bold";
    font-size: 1.5rem;
    font-style: normal;
    line-height: normal;
    margin-bottom: 0.313rem;
  }
`;

const JoinInput = styled.input`
  width: 100%;
  height: 3.75rem;
  margin-top: 2.063rem;
  border-radius: 1rem;
  padding: 0 1.25rem;
  border: none;
  box-sizing: border-box;
  outline: 0.063rem solid ${(props) => (props.warn ? "#ff3434" : "#adadad")};
  text-align: left;
  font-family: 'SUIT-Medium';
  font-size: 0.938rem;
  line-height: 100%; 
  color: ${(props) => (props.warn ? "#ff3434" : "#1B1A1F")};
  &:focus {
    outline: 0.063rem solid ${(props) => (props.warn ? "#ff3434" : "#C4F261")};
  }
`;

const JoinCheckBox = styled.button`
  position: absolute;
  bottom: ${(props) => (props.isKeyboardOpen ? "10rem" : "0.875rem")};
  width: 100%;
  height: 3.75rem;
  color: ${(props) => (props.valid ? "white" : "rgba(27, 26, 31, 0.2)")};
  background: ${(props) => (props.valid ? "#1B1A1F" : "#F7F6F9")};
  backdrop-filter: blur(0.5rem);
  border: none;
  border-radius: 1.25rem;
  cursor: ${(props) => (props.valid ? "pointer" : "not-allowed")};
  font-family: "SUIT-Medium";
  font-size: 1.125rem;
  line-height: 100%;
  transition: bottom 0.3s;
`;

const MessageWrapper = styled.div`
  height: 4.375rem;
  margin-top: 0.938rem;

  .instruction,
  .warning {
    font-family: "SUIT-Medium";
    font-size: 0.875rem;
    font-style: normal;
    line-height: 140%;
    letter-spacing: -0.009rem;
    padding: 0 1.25rem;
  }

  .warning {
    color: #ff3434;
    line-height: 120%;
  }
`;
