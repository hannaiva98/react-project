import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from './img/IMAGE.png';
import basket from './img/Frame (3).png';



const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" class='logo-style'/>
            <ul>
              <li><Link to="/"><a href="#" id="click-style">Home</a></Link></li>
              <li><Link to="/menu"><a href="#" className="nav-style">Menu</a></Link></li>
              <li><Link to="/"><a href="#" className="nav-style">Company</a></Link></li>
              <li><Link to="/"><a href="#" className="nav-style">Login</a></Link></li>
            </ul>
        <div class='basket-style'>
            <div className='main-basket'>
              <img src={basket} alt="Basket"/>
              </div>
              <div className='counter'>
                0
              </div>
        </div>
    </nav>
    </header>
  );
};

export default Header;