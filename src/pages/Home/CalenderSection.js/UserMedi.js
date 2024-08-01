import React from 'react';
import styled from 'styled-components';
import checkImg from '../../../assets/Home/checkImg.svg';
import nocheckImg from '../../../assets/Home/nocheckbox.svg';

const UserMediWrapper = styled.li`
  padding: 0 1.265rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  background-color: ${props => (props.$isChecked ? '#C4F261' : '#F7F6F9')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  span {
    font-size: 0.75rem;
    margin-top: 0.131rem;
  }

  img {
    width: 14%;
    max-width: 0.75rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 31.25rem) {
    padding: 0;
    width: 24.375rem;
    margin: 0 1.25rem 0.625rem;
  }
`;

const UserMedi = ({ isChecked, children, ...rest }) => {
  return (
    <UserMediWrapper $isChecked={isChecked} {...rest}>
      <img src={isChecked ? checkImg : nocheckImg} alt={isChecked ? "Checked" : "Unchecked"} />
      <span>{children}</span>
    </UserMediWrapper>
  );
};

export default UserMedi;
