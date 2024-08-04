import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import CalLogo from "../assets/Nav/CalLogo.svg";
import HomeLogo from "../assets/Nav/HomeLogo.svg";
import MapLogo from "../assets/Nav/MapLogo.svg";
import Profile from "../assets/Nav/Profile.svg";

const Navbar = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <NavContainer>
      <Container isProfilePage={isProfilePage}>
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
          <StyledNavLink to="/calendar">
            <Icon src={CalLogo} />
          </StyledNavLink>
        </MeunItem>
        <MeunItem>
          <StyledNavLink to="/profile">
            <Icon src={Profile} />
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
  box-sizing: border-box; /* Include padding in the total width calculation */
  z-index: 1;
`;

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  max-width: 442px;
  min-width: 325px;
  width: calc(100% - 70px);
  height: 48px;
  border-radius: 40px;
  background: ${({ isProfilePage }) => (isProfilePage ? "#ffffff" : "#f7f6f9")};
  box-shadow: 0px 0px 4px 0px rgba(115, 123, 152, 0.25);
  position: fixed;
  bottom: 14px;
  margin: 0 24px;
  padding: 0 11px;
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
  width: 60px;
  height: 32px;
  border-radius: 20px;

  &.active {
    background-color: #c4f260;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: auto;
`;
