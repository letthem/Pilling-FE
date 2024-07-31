import React from 'react';
import styled from 'styled-components';
import checkImg from '../../../assets/Home/checkImg.svg';
import nocheckImg from '../../../assets/Home/nocheckbox.svg';

const UserMediWrapper = styled.li`
  /* 스타일 정의 */
  padding: 0 20.3px;
  height: 36px;
  border-radius: 12px;
  background-color: ${props => (props.$isChecked ? '#C4F261' : '#F7F6F9')}; // 조건부 배경색
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  
  
  span{
    font-size: 12px;
    margin-top: 2.1px;
  }

  img {
    width: 14%;
    margin-right: 8px;
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