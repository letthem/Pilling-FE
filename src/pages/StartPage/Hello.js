import styled from "styled-components";

const Hello = ({ nickname }) => {
  return (
    <HelloDiv>
      <p>
        <span className="highlight">{nickname}</span>
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
  margin: 6.625rem 0 2.5rem;

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
