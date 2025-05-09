import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/IMAGE.png";
import basket from "./img/Frame (3).png";

const HeaderWrapper = styled.header`
  font-family: 'Inter', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  margin: 20px 120px;
`;

const Logo = styled.img`
  width: 40px;
  height: 51px;
  padding-top: 4px;
`;

const NavList = styled.ul`
  list-style: none;
  width: 477px;
  height: 60px;
  padding: 0;
  margin-left: 683px;
  margin-right: 77px;
`;

const NavItem = styled.li`
  display: inline;

  a {
    text-decoration: none;
    color: #28224b;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0px;
    padding: 20px 16px;

    &#click-style {
      padding: 20px 16px;
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
  width: 25px;
  height: 25px;
  position: absolute;
  margin-top: -6px;
  margin-left: 36px;
  background-color: #ffffff;
  color: #35b8be;
  border-radius: 100px;
  box-shadow: 7px 7px 25px 0 rgba(126, 130, 143, 0.27);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Header extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <HeaderWrapper>
        <Nav>
          <Logo src={logo} alt="Logo" />
          <NavList>
            <NavItem>
              <Link to="/" id="click-style">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className="nav-style">
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-style">
                Company
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-style">
                Login
              </Link>
            </NavItem>
          </NavList>
          <BasketContainer>
            <MainBasket>
              <img src={basket} alt="Basket" />
            </MainBasket>
            <Counter>{cartCount}</Counter>
          </BasketContainer>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;