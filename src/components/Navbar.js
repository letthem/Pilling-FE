import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CalLogo from '../assets/Nav/CalLogo.svg'
import HomeLogo from '../assets/Nav/HomeLogo.svg'
import MapLogo from '../assets/Nav/MapLogo.svg'
import Profile from '../assets/Nav/Profile.svg'
 

const Navbar = () => {
  
  return (
    <NavContainer>
      <Container>
        <MeunItem>
          <StyledNavLink to="/home">
            <Icon src={HomeLogo} />
          </StyledNavLink>
        </MeunItem>  
        <MeunItem>
          <StyledNavLink to="/map">
            <Icon src={MapLogo} />
          </StyledNavLink>
        </MeunItem>  
        <MeunItem>
          <StyledNavLink to="/calender"
            ><Icon src={CalLogo} />
          </StyledNavLink>                    
        </MeunItem>
        <MeunItem>
          <StyledNavLink to="/profile">
            <Icon src={Profile} />          
           </StyledNavLink>                 
        </MeunItem>  
      </Container>
    </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 102px;
  box-sizing: border-box; /* Include padding in the total width calculation */
  `

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  max-width: 460.8px; 
  min-width: 325px;
  width: 90%;
  height: 56px;
  border-radius: 40px;
  background: #F7F6F9;
  box-shadow: 0px 0px 4px 0px rgba(115, 123, 152, 0.25);
  position: fixed;
  bottom: 14px;
  padding: 0 24px; /* Add padding to both sides */
  box-sizing: border-box; /* Ensure padding is included in width calculation */  
  `
  
const MeunItem = styled.li`
  display: flex;
  justify-content: center; 
  align-items: center; 
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 100%;
  padding: 10px;
  border-radius: 20px;

  &.active {
    background-color: #C4F260;
    
  }
`;

const Icon = styled.img`
  width: 20px; 
  height: auto; 
`;

