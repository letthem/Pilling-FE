import React from "react";
import styled from "styled-components";
import checkImg from "../../../assets/Home/checkImg.svg";
import nocheckImg from "../../../assets/Home/nocheckbox.svg";

const UserMediWrapper = styled.li`
  padding: 0 1.265rem 0 0;
  height: 2.25rem;
  border-radius: 0.875rem;
  background-color: ${(props) => (props.$isChecked ? "#C4F261" : "#F7F6F9")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  h6 {
    font-size: 0.75rem;
  }

  img {
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    width: 1rem;
    height: 1rem;
  }
`;

const UserMedi = ({ isChecked, children, ...rest }) => {
  return (
    <UserMediWrapper $isChecked={isChecked} {...rest}>
      <img
        src={isChecked ? checkImg : nocheckImg}
        alt={isChecked ? "Checked" : "Unchecked"}
      />
      <h6 className="pillSmName">{children}</h6>
    </UserMediWrapper>
  );
};

export default UserMedi;
