import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Header from "./components/Header/Header"; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
    this.setCartCount = this.setCartCount.bind(this);
  }

  setCartCount(newCount) {
    this.setState({ cartCount: newCount });
  }
  render(){
  return (
    <div className="body-style">
      <Header cartCount={this.state.cartCount} />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/menu" element={<Menu setCartCount={this.setCartCount} /> }/>
      </Routes>
      </div>
  );
}
}

export default App;

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);
