import React from "react";
import styled from "styled-components";
import logo from "./img/IMAGE.png";
import basket from "./img/Frame (3).png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTheme } from "../../pages/ThemeContext";

const HeaderWrapper = styled.header`
  font-family: 'Inter', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 120px;
`;

const Logo = styled.img`
  width: 40px;
  height: 51px;
  padding-top: 4px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: 460px;
  justify-content: center;
`;

const NavItem = styled.li`
  display: inline;
  a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    padding: 20px 16px;
    &.active {
      color: #35b8be;
    }
  }
`;

const BasketContainer = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  display: flex;
  background-color: #35b8be;
  border-radius: 4px;
  padding-top: 3px;
`;

const MainBasket = styled.div`
  width: 25px;
  height: 17px;
  padding-top: 19px;
  padding-left: 13px;
`;

const Counter = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25%, -25%);
  background-color: #ffffff;
  color: #35b8be;
  border-radius: 50%;
  box-shadow: 7px 7px 25px rgba(126, 130, 143, 0.27);
  font-size: 13px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeSwitchButton = styled.button`
  width: 60px;
  height: 60px;
  background: transparent;
  border: 1px solid #35b8be;
  border-radius: 4px;
  color: #35b8be;
  padding: 4px 12px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  transition: background 0.3s;

  &:hover {
    background: #35b8be;
    color: #fff;
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Header: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders);
  const cartCount = orders.reduce((sum, item) => sum + item.quantity, 0);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userEmail = useSelector((state: RootState) => state.auth.email);

  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderWrapper>
      <Nav>
        <Logo src={logo} alt="Logo" />

        <NavList>
          <NavItem>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
              Menu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/company" className={({ isActive }) => (isActive ? "active" : "")}>
              Company
            </NavLink>
          </NavItem>
          <NavItem>
            {isLoggedIn && userEmail ? (
              <span style={{ color: "#35b8be", padding: "20px 16px" }}>
                {userEmail.split("@")[0]}
              </span>
            ) : (
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            )}
          </NavItem>
        </NavList>

        <RightControls>
          <ThemeSwitchButton onClick={toggleTheme}>
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </ThemeSwitchButton>

          <BasketContainer>
            <MainBasket>
              <img src={basket} alt="Basket" />
            </MainBasket>
            <Counter>{cartCount}</Counter>
          </BasketContainer>
        </RightControls>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
