import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"; 
import { ThemeProvider } from "./pages/ThemeContext";
import GlobalStyle from "./styles/GlobalStyles";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Корневой элемент с id "root" не найден');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
         <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
