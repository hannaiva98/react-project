import React,{ Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from './img/IMAGE.png';
import basket from './img/Frame (3).png';



class Header extends Component {
  render(){
    const { cartCount } = this.props;
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className='logo-style'/>
            <ul>
              <li><Link to="/" id="click-style">Home</Link></li>
              <li><Link to="/menu" className="nav-style">Menu</Link></li>
              <li><Link to="/" className="nav-style">Company</Link></li>
              <li><Link to="/" className="nav-style">Login</Link></li>
            </ul>
        <div className='basket-style'>
            <div className='main-basket'>
              <img src={basket} alt="Basket"/>
              </div>
        <span className="counter">{cartCount}</span>
        </div>
    </nav>
    </header>
  );
}
}

export default Header;