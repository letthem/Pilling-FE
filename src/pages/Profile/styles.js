import styled from "styled-components";

// ProfileTop

export const ProfileImg = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  margin-top: 4.5rem;
  margin-left: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: inherit;
  }
`;

export const ProfileInfo = styled.div`
  width: calc(100% - 3.9375rem);
  height: 2.5rem;
  margin-top: 0.3125rem;
  margin-left: 2.4375rem;
  display: flex;
  justify-content: space-between;
`;

export const NickName = styled.div`
  width: auto;
  height: 1.5rem;
  margin-top: 0.6875rem;
  display: flex;

  span {
    color: #1b1a1f;
    font-family: "SUIT-SemiBold";
    font-size: 1.5rem;
    line-height: 1;
  }
  .nickname {
    position: relative;
    z-index: 0;
  }
  .nickname_underline {
    position: absolute;
    width: calc(100% + 0.25rem);
    height: 0.75rem;
    bottom: -0.3125rem;
    left: -0.125rem;
    background-color: #c4f261;
    z-index: -10;
  }
`;

export const SettingImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f6f9;
  cursor: pointer;
`;

// ProfileContents

export const ProfileContents = styled.div`
  width: 100%;
  height: calc(100vh - 14.625rem);
  margin-top: 1.1875rem;
  background-color: #f7f6f9;
  border-radius: 1.875rem 1.875rem 0 0;
`;

export const NextPageWrapper = styled.div`
  width: calc(100% - 3rem);
  height: 4.5rem;
  margin: 1.3125rem 1.5rem 0;
  background-color: white;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }

  .leftPart {
    display: flex;
    align-items: center;
  }

  .greenIcon {
    width: 3rem;
    height: 3rem;
    background-color: #c4f261;
    margin-left: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: black;
    font-family: "SUIT-SemiBold";
    font-size: 1rem;
    line-height: 1.2;
    margin-left: 1rem;
  }

  .arrowRight {
    width: 1.25rem;
    height: 1.25rem;
    transform: rotate(180deg);
    margin-right: 1rem;
  }
`;
