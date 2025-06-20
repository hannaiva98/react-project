import React from "react";
import styled from "styled-components";
import logo from "./img/IMAGE.png";
import logocopy1 from "./img/Frame (6).png";
import logocopy2 from "./img/Frame (7).png";
import logocopy3 from "./img/Frame (8).png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from 'react-router-dom';
import { useTheme } from "../../pages/ThemeContext"; 

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
  color: var(--footer-text-color);
`;

const TextFlogo2 = styled.p`
  width: 243px;
  height: 27px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.36px;
  margin: 0;
  color: var(--footer-text-color);
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
  color: var(--footer-heading-color);
`;

const FooterListItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0%;
  padding-top: 28px;
  text-transform: none;
  white-space: nowrap;
  color: var(--footer-text-color);
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
  border: 1px solid var(--footer-border-color);
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
  color: var(--footer-text-color);
`;

const CopyrightText = styled.p`
  color: #35b8be;
`;

const LogoCopyright = styled.div`
  padding-left: 717px;
`;

const LogoCopy1 = styled.img<{ $isDark: boolean }>`
  padding-left: 12px;
  filter: ${({ $isDark }) => ($isDark ? 'invert(1)' : 'none')};
`;

const LogoCopy2 = styled.img<{ $isDark: boolean }>`
  padding-left: 24px;
  filter: ${({ $isDark }) => ($isDark ? 'invert(1)' : 'none')};
`;

const LogoCopy3 = styled.img<{ $isDark: boolean }>`
  padding-left: 24px;
  filter: ${({ $isDark }) => ($isDark ? 'invert(1)' : 'none')};
`;
const FooterInf: React.FC = () => {

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { companyLinks, templateLinks, flowbaseLinks } = useSelector(
    (state: RootState) => state.footer
  );

  return (
    <FooterMain>
      <FooterMain1>
        <FooterInf1>
          <LogoStyleFooter src={logo} alt="Логотип" />
          <TextFlogo1>Takeaway & Delivery template</TextFlogo1>
          <TextFlogo2>for small - medium businesses.</TextFlogo2>
        </FooterInf1>

        <FooterMain2>
          <FooterList>
            COMPANY
            {companyLinks.map((link) => (
              <FooterListItem key={link.label}>
                <Link to={link.href} style={{ textDecoration: "none", color: "inherit" }}>
                  {link.label}
                </Link>
              </FooterListItem>
            ))}
          </FooterList>
        </FooterMain2>

        <FooterMain2>
          <FooterList>
            TEMPLATE
            {templateLinks.map(({ label, href }, index) => (
              <FooterListItem key={index}>
                <FooterLink href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </FooterLink>
              </FooterListItem>
            ))}
          </FooterList>
        </FooterMain2>

        <FooterMain2>
          <FooterList>
            FLOWBASE
            {flowbaseLinks.map((link, index) => (
              <FooterListItem key={index}>{link}</FooterListItem>
            ))}
          </FooterList>
        </FooterMain2>
      </FooterMain1>

      <Line />
      <MainCopyright>
        <FooterCopyright>
          <p>Built by&nbsp;</p>
          <CopyrightText>Flowbase</CopyrightText>
          <p>&nbsp;Powered by&nbsp;</p>
          <CopyrightText>Webflow</CopyrightText>
        </FooterCopyright>
        <LogoCopyright>
          <>
            <LogoCopy1 $isDark={isDark} src={logocopy1} />
            <LogoCopy2 $isDark={isDark} src={logocopy2} />
            <LogoCopy3 $isDark={isDark} src={logocopy3} />
          </>
        </LogoCopyright>
      </MainCopyright>
    </FooterMain>
  );
};

export default FooterInf;