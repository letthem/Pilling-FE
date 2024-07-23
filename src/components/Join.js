import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../api/api";

const Join = () => {
  const [name, setName] = useState("");
  const [warn, setWarn] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const nickname = e.target.value;
    const regExp = /[ \{\}\[\]\?.,;:|\)*~!^\-_+<>@\#$%&\'\"\\\(\=]/gi;

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
      await axiosInstance.patch("/users", { nickname: name });
      navigate("/start", { state: { nickname: name } });
    } catch (error) {
      setWarn("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const isNicknameValid = name.length > 0 && warn === "";

  return (
    <JoinWrapper>
      <form onSubmit={handleSubmit}>
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
        >
          확인
        </JoinCheckBox>
      </form>
    </JoinWrapper>
  );
};

export default Join;

const JoinWrapper = styled.div`
  max-width: 512px;
  min-height: 844px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const JoinBox = styled.div`
  margin: 5.063rem 1.25rem 18.125rem;

  p {
    color: #1b1a1f;
    font-family: "SUIT-Bold";
    font-size: 1.5rem;
    font-style: normal;
    line-height: normal;
  }
`;

const JoinInput = styled.input`
  height: 3.75rem;
  margin-top: 2.063rem;
  border-radius: 1rem;
  border: none;
  outline: 0.063rem solid ${(props) => (props.warn ? "#ff3434" : "#adadad")};
  width: 75%;
  text-align: left;
  padding: 0 1.25rem;

  &:focus {
    outline: 0.063rem solid ${(props) => (props.warn ? "#ff3434" : "#d4f120")};
  }
`;

const JoinCheckBox = styled.button`
  margin: 0 1.25rem;
  width: 80%;
  height: 3.75rem;
  color: ${(props) => (props.valid ? "white" : "rgba(27, 26, 31, 0.2)")};
  background: ${(props) => (props.valid ? "#1B1A1F" : "#F7F6F9")};
  backdrop-filter: blur(0.5rem);
  border: none;
  border-radius: 1.25rem;
  cursor: ${(props) => (props.valid ? "pointer" : "not-allowed")};
`;

const MessageWrapper = styled.div`
  height: 4.375rem;
  margin-top: 15px;

  .instruction,
  .warning {
    color: #adadad;
    font-family: "SUIT-Medium";
    font-size: 0.875rem;
    font-style: normal;
    line-height: 140%;
    letter-spacing: -0.009rem;
  }

  .warning {
    color: #ff3434;
    line-height: 120%;
  }
`;
