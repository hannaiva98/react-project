import { createGlobalStyle } from "styled-components";
import imageLight from "../components/Footer/img/image6.png";
import loginBgImage from "../components/Login/img/BG Shape Content.png";
import backgroundImage from "../components/MainMenu/img/BG Shape Content.png";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --text-color: #000000;
    --footer-text-color: #546285;
    --footer-heading-color: #08090a;
    --footer-border-color: #7e828f17;
    --accent-color: #35b8be;
    --footer-background: url(${imageLight});
    --color-bg-main: #ffffff;
    --color-text-main: #08090A;
    --color-input-bg: #FAFAFA;
    --color-border: #DDDDDD;
    --color-button-bg: #35b8be;
    --color-button-text: #ffffff;
    --color-button-cancel-bg: #ffffff;
    --color-button-cancel-text: #222222;
    --login-bg-image: url(${loginBgImage});
    --login-bg-color: transparent;
    --input-bg-color: #FAFAFA;
    --input-text-color: #000000;
    --input-border-color: #DDDDDD;
    --input-placeholder-color: #000000;
    --color-accent: #007bff;
    --color-accent-hover: #0056b3;
    --order-bg-image: url(${backgroundImage});
  }

  [data-theme='dark'] {
    --background: #1a1a1a;
    --text-color: #ffffff;
    --footer-text-color: #ffffff;
    --footer-heading-color: rgba(240, 240, 240, 0.88);
    --footer-border-color: rgb(255, 255, 255);
    --accent-color: #4ad9e0;
    --footer-background: none;
    --color-bg-main: #121212;
    --color-text-main: #f0f0f0;
    --color-input-bg: #1e1e1e;
    --color-border: #444;
    --color-button-bg: #35b8be;
    --color-button-text: #ffffff;
    --color-button-cancel-bg: #1e1e1e;
    --color-button-cancel-text: #ffffff;
    --login-bg-image: none;
    --login-bg-color: #1a1a1a;
    --input-bg-color: #1e1e1e;
    --input-text-color: #f0f0f0;
    --input-border-color: #444444;
    --input-placeholder-color: #888888;
    --color-accent: #3399ff;
    --color-accent-hover: #1a73e8;
    --order-bg-image: none;
  }

  body {
    background-color: var(--background);
    color: var(--text-color);
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

export default GlobalStyle;
