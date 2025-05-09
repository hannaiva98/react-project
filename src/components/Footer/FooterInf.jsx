import React from "react";
import styled from "styled-components";
import logo from "./img/IMAGE.png";
import logocopy1 from "./img/Frame (6).png";
import logocopy2 from "./img/Frame (7).png";
import logocopy3 from "./img/Frame (8).png";


const FooterMain = styled.div`
  width: 1200px;
  height: auto;
  padding-top: 99.8px;
  padding-left: 120px;
`;

const FooterMain1 = styled.div`
  height: 232px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const FooterInf1 = styled.div`
  width: 584px;
  height: auto;
`;

const LogoStyleFooter = styled.img`
  width: 40px;
  height: 51px;
  padding-top: 0.2px;
`;

const TextFlogo1 = styled.p`
  width: 243px;
  height: 27px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.36px;
  padding-top: 25px;
  margin: 0;
  color: #546285;
`;

const TextFlogo2 = styled.p`
  width: 243px;
  height: 27px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.36px;
  margin: 0;
  color: #546285;
`;

const FooterMain2 = styled.div`
  width: 189.3px;
`;

const FooterList = styled.ul`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1.5px;
  margin: 0;
  list-style: none;
  text-transform: uppercase;
  color: #08090a;
`;

const FooterListItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0%;
  padding-top: 28px;
  text-transform: none;
  white-space: nowrap;
  color: #546285;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Line = styled.hr`
  height: 1px;
  margin-top: 99px;
  margin-bottom: 0px;
  padding: 0px;
  background-color: #7e828f17;
  opacity: 9%;
`;

const MainCopyright = styled.div`
  display: flex;
  padding-top: 71px;
`;

const FooterCopyright = styled.div`
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #353448;
`;

const CopyrightText = styled.p`
  color: #35b8be;
`;

const LogoCopyright = styled.div`
  padding-left: 717px;
`;

const LogoCopy1 = styled.img`
  padding-left: 12px;
`;

const LogoCopy2 = styled.img`
  padding-left: 24px;
`;

const LogoCopy3 = styled.img`
  padding-left: 24px;
`;

const FooterInf = () => {
  return (
    <FooterMain>
      <FooterMain1>
        <FooterInf1>
          <LogoStyleFooter src={logo} alt="Логотип" />
          <TextFlogo1 id="text-flogo1">Takeaway & Delivery template</TextFlogo1>
          <TextFlogo2 id="text-flogo2">for small - medium businesses.</TextFlogo2>
        </FooterInf1>
        <FooterMain2>
          <FooterList>company
            <FooterListItem>Home</FooterListItem>
            <FooterListItem>Order</FooterListItem>
            <FooterListItem>FAQ</FooterListItem>
            <FooterListItem>Contact</FooterListItem>
          </FooterList>
        </FooterMain2>
        <FooterMain2>
          <FooterList>TEMPLATE
            <FooterListItem>
              <FooterLink href="https://www.google.com/" target="_blank">
                Style Guide
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://www.google.com/" target="_blank">
                Changelog
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://www.google.com/" target="_blank">
                Licence
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="https://www.google.com/" target="_blank">
                Webflow University
              </FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterMain2>
        <FooterMain2>
          <FooterList>FLOWBASE
            <FooterListItem>More Cloneables</FooterListItem>
          </FooterList>
        </FooterMain2>
      </FooterMain1>
      <Line className="line" />
      <MainCopyright>
        <FooterCopyright>
          <p>Built by&nbsp;</p>
          <CopyrightText className="copyrighttext">Flowbase&nbsp;</CopyrightText>
          <p>Powered by&nbsp;</p>
          <CopyrightText className="copyrighttext">Webflow</CopyrightText>
        </FooterCopyright>
        <LogoCopyright className="logocopyright">
          <LogoCopy1 src={logocopy1} alt="Логотип 1" id="logocopy1" />
          <LogoCopy2 src={logocopy2} alt="Логотип 2" id="logocopy2" />
          <LogoCopy3 src={logocopy3} alt="Логотип 3" id="logocopy3" />
        </LogoCopyright>
      </MainCopyright>
    </FooterMain>
  );
};

export default FooterInf;