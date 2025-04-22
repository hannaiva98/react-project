import React, { Component } from "react";
import "./Footer.css";
import logo from './img/IMAGE.png';
import logocopy1 from './img/Frame (6).png';
import logocopy2 from './img/Frame (7).png';
import logocopy3 from './img/Frame (8).png';


class FooterInf extends Component {
  render(){
  return (
    <footer>
        <div className='footer-main'>
            <div className='footer-main-1'>
                <div id='footer-inf1'>
                  <img src={logo} alt="Logo" className='logo-style-footer'/>
                  <p id="text-flogo1">Takeaway & Delivery template</p>
                  <p id="text-flogo2">for small - medium businesses.</p>
                </div>
                <div className='footer-main-2'>
                  <ul>company
                    <li>Home</li>
                    <li>Order</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className='footer-main-2'>
                <ul>TEMPLATE
                    <li><a href="https://www.google.com/" target="_blank">Style Guide</a></li>
                    <li><a href="https://www.google.com/" target="_blank">Changelog</a></li>
                    <li><a href="https://www.google.com/" target="_blank">Licence</a></li>
                    <li><a href="https://www.google.com/" target="_blank">Webflow University</a></li>
                  </ul>
                </div>
                <div className='footer-main-2'>
                <ul>FLOWBASE
                    <li>More Cloneables</li>
                  </ul>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="maincopyright">
            <div className='footer-copyright'>
              <p>Built by&nbsp;</p>
              <p className='copyrighttext'>Flowbase&nbsp;</p>
              <p>Powered by&nbsp;</p>
              <p className='copyrighttext'>Webflow</p>
            </div>
            <div className='logocopyright'>
              <img src={logocopy1} alt="Logo1" id="logocopy1"/>
              <img src={logocopy2} alt="Logo2" id="logocopy2"/>
              <img src={logocopy3} alt="Logo3" id="logocopy3"/>
            </div>
            </div>
        </div>
      </footer>

  );
}
}

export default FooterInf;