import { Link, NavLink } from 'react-router-dom';
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
          <StyledNavLink to="/Home">
            <img src={HomeLogo} />
          </StyledNavLink>
        </MeunItem>  
        <MeunItem>
          <StyledNavLink to="/Map">
            <img src={MapLogo} />
          </StyledNavLink>
        </MeunItem>  
        <MeunItem>
          <StyledNavLink to="/calender"
            ><img src={CalLogo} />
          </StyledNavLink>                    
        </MeunItem>
        <MeunItem>
          <StyledNavLink to="/home">
            <img src={Profile} />          
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
    border-radius: 40px;
    background: #F7F6F9;
    box-shadow: 0px 0px 4px 0px rgba(115, 123, 152, 0.25);
    margin: 0 24px;

`

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 90%;
  height: 56px;
`
const MeunItem = styled.li`
  margin: 0 10px;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  display: flex;
  padding: 8px 19px; 
  border-radius: 20px;

  &.active {
    background-color: #C4F260;
    
  }
`;

