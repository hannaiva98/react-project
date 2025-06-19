import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"; 

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Корневой элемент с id "root" не найден');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
