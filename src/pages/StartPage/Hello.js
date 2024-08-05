import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../api/api";

const Hello = () => {
  const [helloMyNmae, setHelloMyName] = useState("");

  const getMyName = async () => {
    try {
      const res = await axiosInstance.get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setHelloMyName(res.data.nickname);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMyName();
  }, [helloMyNmae]);
  return (
    <HelloDiv>
      <p>
        <span className="highlight">{helloMyNmae}</span>
        <span>님</span>
      </p>
      <p>필링에 오신걸 환영해요!</p>
    </HelloDiv>
  );
};
export default Hello;

const HelloDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4.25rem;
  color: #1b1a1f;
  text-align: center;
  font-family: "SUIT-Bold";
  font-size: 1.5rem;
  line-height: 2.125rem;
  margin: 3.6875rem 0 2.5rem;

  p {
    position: relative;
    z-index: 1;
    margin-bottom: 0.313rem;
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
      background: #c4f261;
      z-index: -1;
    }
  }
`;
