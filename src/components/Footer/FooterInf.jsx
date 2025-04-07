import React from "react";
import "./Footer.css";
import logo from './img/IMAGE.png';
import logocopy1 from './img/Frame (6).png';
import logocopy2 from './img/Frame (7).png';
import logocopy3 from './img/Frame (8).png';


const Footer = () => {
  return (
    <footer>
        <div class='footer-main'>
            <div class='footer-main-1'>
                <div id='footer-inf1'>
                  <img src={logo} alt="Logo" class='logo-style-footer'/>
                  <p id="text-flogo1">Takeaway & Delivery template</p>
                  <p id="text-flogo2">for small - medium businesses.</p>
                </div>
                <div class='footer-main-2'>
                  <ul>company
                    <li>Home</li>
                    <li>Order</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div class='footer-main-2'>
                <ul>TEMPLATE
                    <li>Style Guide</li>
                    <li>Changelog</li>
                    <li>Licence</li>
                    <li>Webflow University</li>
                  </ul>
                </div>
                <div class='footer-main-2'>
                <ul>FLOWBASE
                    <li>More Cloneables</li>
                  </ul>
                </div>
            </div>
            <hr class="line"></hr>
            <div class="maincopyright">
            <div class='footer-copyright'>
              <p>Built by&nbsp;</p>
              <p class='copyrighttext'>Flowbase&nbsp;</p>
              <p>Powered by&nbsp;</p>
              <p class='copyrighttext'>Webflow</p>
            </div>
            <div class='logocopyright'>
              <img src={logocopy1} alt="Logo1" id="logocopy1"/>
              <img src={logocopy2} alt="Logo2" id="logocopy2"/>
              <img src={logocopy3} alt="Logo3" id="logocopy3"/>
            </div>
            </div>
        </div>
      </footer>

  );
};

export default Footer;