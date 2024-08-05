import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CalLogo from "../assets/Nav/CalLogo.svg";
import HomeLogo from "../assets/Nav/HomeLogo.svg";
import MapLogo from "../assets/Nav/MapLogo.svg";
import Profile from "../assets/Nav/Profile.svg";

const Navbar = () => {
  const removeData = () => {
    localStorage.setItem("searchValue", "");
    localStorage.removeItem("medicines");
  };

  return (
    <NavContainer>
      <Container>
        <MeunItem>
          <StyledNavLink to="/home">
            <Icon src={HomeLogo} onClick={removeData} />
          </StyledNavLink>
        </MeunItem>
        <MeunItem>
          <StyledNavLink to="/map">
            <Icon src={MapLogo} onClick={removeData} />
          </StyledNavLink>
        </MeunItem>
        <MeunItem>
          <StyledNavLink to="/calendar">
            <Icon src={CalLogo} onClick={removeData} />
          </StyledNavLink>
        </MeunItem>
        <MeunItem>
          <StyledNavLink to="/profile">
            <Icon src={Profile} onClick={removeData} />
          </StyledNavLink>
        </MeunItem>
      </Container>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 6.375rem;
  box-sizing: border-box; /* Include padding in the total width calculation */
`;

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  max-width: 28.8rem;
  min-width: 20.3125rem;
  width: 90%;
  height: 3.5rem;
  border-radius: 2.5rem;
  background: #f7f6f9;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(115, 123, 152, 0.25);
  position: fixed;
  bottom: 0.875rem;
  padding: 0 1.5rem; /* Add padding to both sides */
  box-sizing: border-box; /* Ensure padding is included in width calculation */
`;

const MeunItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  width: 3.125rem;
  height: 100%;
  padding: 0.625rem;
  border-radius: 1.25rem;

  &.active {
    background-color: #c4f260;
  }
`;

const Icon = styled.img`
  width: 1.25rem;
  height: auto;
`;
